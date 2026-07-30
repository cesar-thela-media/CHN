# Deploy, Custom Home Network

Supports **Vercel** (recommended for Next.js) and **Railway Docker** (boss stack).

---

## Vercel (primary web deploy)

1. Import the Git repo in [Vercel](https://vercel.com).
2. Framework preset: **Next.js** (see `vercel.json`).
3. Node **20+** (`package.json` engines).
4. Build command: `next build` (default).
5. Install: `npm install` (or leave default).
6. Output: Next default (standalone is **off** on Vercel via `VERCEL=1` in `next.config.ts`).

### Environment variables (Vercel project settings)

```bash
# Forms (optional; empty = accept + server log)
WEBHOOK_URL_SCHEDULE=
WEBHOOK_URL_NEWSLETTER=
WEBHOOK_URL_PARTNER=

# Sentry (optional; empty = SDK disabled)
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```

No custom server required. Vercel runs the Next.js serverless/Node runtime.  
Health: `GET /api/health` on your deployment URL.

### Verify locally as Vercel would

```bash
npm install
npm run build
# Vercel sets VERCEL=1; optional local check:
VERCEL=1 npm run build
npx next start -p 3000
```

---

## Railway + Docker (boss stack)

| Item | Value |
|------|--------|
| Build | **Bun 1.3.4** (`oven/bun:1.3.4`) |
| Run | **Node 20** · `node server.js` |
| Port | **8080** |
| Health | **`GET /api/health`** |

See `Dockerfile` and `railway.toml`. When `VERCEL` is unset, `output: "standalone"` is enabled for Docker.

### Railway env

```bash
PORT=8080
HOSTNAME=0.0.0.0
NODE_ENV=production
WEBHOOK_URL_SCHEDULE=
WEBHOOK_URL_NEWSLETTER=
WEBHOOK_URL_PARTNER=
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```

---

## Forms

`POST /api/submit` with `{ "type": "schedule" | "newsletter" | "partner", "payload": { ... } }`.

## Notes

- Sentry: `enabled` only when a DSN is set.
- `server.js` is for Docker/Railway only; Vercel ignores it.
- Shadcnspace `EMAIL` / `LICENSE_KEY` are CLI-only (install blocks), not required at runtime.
