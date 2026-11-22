#!/usr/bin/env bash
# Install, build and serve the project in the foreground on PORT (default 3000).
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

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

PORT="${PORT:-3000}"
WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
DIST_DIR="$PROJECT_DIR/dist"
export PORT

if [[ -f package-lock.json ]]; then
  timed "npm install" npm ci --no-audit --no-fund
else
  timed "npm install" npm install --no-audit --no-fund
fi

timed "build" npm run build

mkdir -p "$WEB_DIR"
printf '{"project":"%s","directory":"%s"}\n' "$PROJECT_DIR" "$DIST_DIR" > "$WEB_DIR/deployment-output.json"
printf '[start] serving %s on port %s\n' "$DIST_DIR" "$PORT"

preview_start=$(date +%s%3N)
set +e
npm run preview -- --port "$PORT" --strictPort
status=$?
set -e
preview_end=$(date +%s%3N)
printf '[timing] preview: %s ms\n' "$(elapsed "$preview_start" "$preview_end")"
exit "$status"
