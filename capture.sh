#!/usr/bin/env bash
# Capture desktop and mobile screenshots of a running preview.
# Exit 75 for temporary navigation/browser infrastructure failures, 1 for
# script or rendering defects. The app server is never touched.
set -euo pipefail

usage() {
  echo "Set CAPTURE_URL and CAPTURE_DIR" >&2
  exit 1
}

[[ -n "${CAPTURE_URL:-}" && -n "${CAPTURE_DIR:-}" ]] || usage

elapsed() {
  local delta=$(( $2 - $1 ))
  ((delta < 0)) && delta=0
  printf '%s' "$delta"
}

script_start=$(date +%s%3N)

mkdir -p "$CAPTURE_DIR"
mkdir_end=$(date +%s%3N)
printf '[timing] prepare capture dir: %s ms\n' "$(elapsed "$script_start" "$mkdir_end")"

node --input-type=module <<'EOF'
import { createRequire } from 'node:module';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const scriptStart = Date.now();
const mark = (label, from = scriptStart) => {
  console.log(`[timing] ${label}: ${Math.max(0, Date.now() - from)} ms`);
};

const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');
const config = JSON.parse(
  readFileSync(join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json'), 'utf8'),
);
if (process.platform === 'linux' && !process.env.DISPLAY) {
  const displayFile = join(runtime, 'display');
  if (existsSync(displayFile)) process.env.DISPLAY = ':' + readFileSync(displayFile, 'utf8').trim();
}

const url = process.env.CAPTURE_URL;
const output = process.env.CAPTURE_DIR;
const defects = [];
let exitCode = 0;
let browser;

const fail = (code) => {
  exitCode = Math.max(exitCode, code);
};

try {
  const launchAt = Date.now();
  browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 }).catch((error) => {
    Object.assign(error, { exitCode: 75 });
    throw error;
  });
  mark('launch browser', launchAt);

  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const viewStart = Date.now();
    const page = await browser.newPage({ viewport: { width, height } });
    page.setDefaultTimeout(30000);
    page.on('pageerror', (error) => defects.push(`${name}: ${error.message}`));

    const navAt = Date.now();
    let response;
    try {
      response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    } catch (error) {
      console.error(`[capture] ${name} navigation failed: ${error.message}`);
      fail(75);
      await page.close();
      continue;
    }
    mark(`${name} navigation`, navAt);

    if (!response || !response.ok()) {
      const status = response?.status();
      console.error(`[capture] ${name} HTTP ${status || 'navigation failure'} loading ${url}`);
      fail(!status || [408, 429, 500, 502, 503, 504].includes(status) ? 75 : 1);
      await page.close();
      continue;
    }

    const readyAt = Date.now();
    try {
      // Wait until the loader is gone and the title screen is actually on screen.
      await page.waitForFunction(() => {
        const isHidden = (element) => !element
          || element.classList.contains('hidden')
          || getComputedStyle(element).display === 'none'
          || Number.parseFloat(getComputedStyle(element).opacity) < 0.05;
        const title = document.querySelector('#titleScreen');
        return Boolean(title) && !title.classList.contains('hidden')
          && isHidden(document.querySelector('#sceneLoading'));
      }, { timeout: 30000, polling: 120 });
      await page.evaluate(() => document.fonts?.ready);
      await page.evaluate(() => new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(resolve));
      }));
      await page.waitForTimeout(800);
      mark(`${name} rendered`, readyAt);
    } catch (error) {
      console.error(`[capture] ${name} did not finish rendering: ${error.message}`);
      fail(1);
      await page.close();
      continue;
    }

    const shotAt = Date.now();
    try {
      await page.screenshot({ path: join(output, `final-${name}.png`), timeout: 30000 });
      mark(`${name} screenshot`, shotAt);
    } catch (error) {
      console.error(`[capture] ${name} screenshot failed: ${error.message}`);
      fail(browser.isConnected() ? 1 : 75);
    }

    await page.close();
    mark(`${name} view total`, viewStart);
  }
} catch (error) {
  console.error(`[capture] ${error.message}`);
  fail(error.exitCode || 1);
} finally {
  await browser?.close().catch((error) => {
    console.error(`[capture] browser close failed: ${error.message}`);
    fail(75);
  });
}

if (defects.length) {
  console.error('[capture] page defects:');
  for (const defect of defects) console.error(`  ${defect}`);
  fail(1);
}

process.exit(exitCode);
EOF

status=$?
script_end=$(date +%s%3N)
printf '[timing] capture total: %s ms\n' "$(elapsed "$script_start" "$script_end")"
exit "$status"
