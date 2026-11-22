#!/usr/bin/env bash
# Once-per-worker prerequisite: make sure a Chromium build exists for captures.
set -euo pipefail

elapsed() {
  local delta=$(( $2 - $1 ))
  ((delta < 0)) && delta=0
  printf '%s' "$delta"
}

timed() {
  local label="$1"; shift
  local start end
  start=$(date +%s%3N)
  "$@"
  end=$(date +%s%3N)
  printf '[timing] %s: %s ms\n' "$label" "$(elapsed "$start" "$end")"
}

PLAYWRIGHT_CLI="${HOME}/.local/share/omgithub-playwright/playwright-cli"
if [[ -x "$PLAYWRIGHT_CLI" ]]; then
  timed "playwright chromium" "$PLAYWRIGHT_CLI" install-browser chromium
else
  echo '[startup] playwright runtime not found; capture will resolve its browser on demand' >&2
fi
