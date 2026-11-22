#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${CAPTURE_URL:-}" || -z "${CAPTURE_DIR:-}" ]]; then
  echo "Set CAPTURE_URL and CAPTURE_DIR" >&2
  exit 1
fi
mkdir -p "$CAPTURE_DIR"

start=$(/usr/bin/date +%s%3N)
node --input-type=module <<'EOF'
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');
const config = JSON.parse(readFileSync(join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json'), 'utf8'));
if (process.platform === 'linux') process.env.DISPLAY ||= ':' + readFileSync(join(runtime, 'display'), 'utf8').trim();

const url = process.env.CAPTURE_URL;
const output = process.env.CAPTURE_DIR;
let browser;
try {
  browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 }).catch(error => {
    Object.assign(error, { exitCode: 75 });
    throw error;
  });
  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.setDefaultTimeout(30000);
    const defects = [];
    page.on('pageerror', error => defects.push(`PAGE ERROR: ${error.message}`));
    let response;
    try {
      response = await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    } catch (error) {
      console.error(error.message);
      process.exitCode = 75;
      await page.close();
      continue;
    }
    if (!response?.ok()) {
      const status = response?.status();
      console.error(`HTTP ${status || 'navigation failure'} loading ${url}`);
      process.exitCode = !status || [408,429,500,502,503,504].includes(status) ? 75 : 1;
      await page.close();
      continue;
    }
    await page.locator('body').waitFor({ state: 'visible', timeout: 30000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `${output}/final-${name}.png`, timeout: 30000, fullPage: true });
    await page.close();
    if (defects.length) {
      console.error(defects.join('\n'));
      process.exitCode = 1;
    }
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = error.exitCode || 1;
} finally {
  await browser?.close().catch(error => { console.error(error.message); process.exitCode ||= 75; });
}
EOF
status=$?
end=$(/usr/bin/date +%s%3N)
printf '[timing] capture: %s ms\n' "$((end-start))"
exit "$status"
