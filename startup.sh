#!/bin/sh
set -eu
cd /workspace
export PATH="$HOME/.bun/bin:/usr/local/bin:$PATH"
export HOSTNAME="${HOSTNAME:-0.0.0.0}"
export PORT="${PORT:-8080}"
export NEXT_TELEMETRY_DISABLED=1

# Healthy already?
if curl -sf -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/api/health"; then
  exit 0
fi

# Clear a stale listener if health failed but port is held
if command -v fuser >/dev/null 2>&1; then
  fuser -k "${PORT}/tcp" 2>/dev/null || true
fi

# Prefer production server if .next exists and NODE_ENV=production; else dev for preview
if [ "${NODE_ENV:-}" = "production" ] && [ -d .next ]; then
  node server.js >>/tmp/app-startup.log 2>&1 &
else
  if command -v bun >/dev/null 2>&1; then
    bun run dev >>/tmp/app-startup.log 2>&1 &
  else
    npm run dev >>/tmp/app-startup.log 2>&1 &
  fi
fi

i=0
while [ "$i" -lt 60 ]; do
  if curl -sf -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/api/health" 2>/dev/null; then
    exit 0
  fi
  if curl -sf -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/" 2>/dev/null; then
    exit 0
  fi
  i=$((i + 1))
  sleep 0.5
done
echo "startup: server did not become ready" >>/tmp/app-startup.log
exit 0
