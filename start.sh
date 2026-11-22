#!/usr/bin/env bash
set -euo pipefail

timed() {
  local label="$1"; shift
  local start=$(/usr/bin/date +%s%3N)
  "$@"
  local end=$(/usr/bin/date +%s%3N)
  printf '[timing] %s: %s ms\n' "$label" "$((end-start))"
}

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"
PORT="${PORT:-3000}"
export PORT

if [[ -f package-lock.json ]]; then
  timed npm "npm" ci --no-audit --no-fund
else
  timed npm "npm" install --no-audit --no-fund
fi
timed build npm run build

mkdir -p /home/runner/work/_temp/omgithub-web
printf '{"project":"%s","directory":"%s/dist"}\n' "$PROJECT_DIR" "$PROJECT_DIR" > /home/runner/work/_temp/omgithub-web/deployment-output.json

start=$(/usr/bin/date +%s%3N)
set +e
npm run preview -- --host 0.0.0.0 --port "$PORT"
status=$?
set -e
end=$(/usr/bin/date +%s%3N)
printf '[timing] vite preview: %s ms\n' "$((end-start))"
exit "$status"
