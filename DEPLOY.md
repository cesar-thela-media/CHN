# Deploy — Custom Home Network

## Active path: Vercel

Vercel is the current deployment target for the CHN visual/content review.

1. Import the repository into Vercel.
2. Use the Next.js framework preset.
3. Use Node 20 or newer.
4. Use the default install and build behavior, or run `next build` explicitly.
5. Do not configure a custom server for Vercel.
6. Set webhook and Sentry values only when the corresponding integration is ready.

### Vercel environment variables

```bash
WEBHOOK_URL_SCHEDULE=
WEBHOOK_URL_NEWSLETTER=
WEBHOOK_URL_PARTNER=
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=
```

When a webhook is missing, local development returns an explicit development-only response. Production submissions without a configured webhook are rejected rather than reported as delivered.

## Reserved path: Railway + Docker

The repository retains a dormant Railway/Docker path so it can be activated later without rebuilding the runtime foundation.

| Item | Value |
|---|---|
| Build | Bun 1.3.4 (`oven/bun:1.3.4`) |
| Runtime | Node 20 Alpine |
| Entry | `node server.js` |
| Host | `0.0.0.0` |
| Port | `8080` |
| Health | `GET /api/health` |

Relevant files:

- `Dockerfile`
- `server.js`
- `railway.toml`
- `startup.sh` (development/sandbox helper)

This path is not required for the current Vercel deployment and does not include a database, authentication system, or migration workflow.

## Local verification

```bash
bun install
bun run typecheck
bun run build
```

For the active Vercel-compatible production check:

```bash
VERCEL=1 bun run build
bunx next start -H 0.0.0.0 -p 3000
```

For the reserved runtime path, use the Dockerfile and verify `/api/health` after the image starts.

## Forms

The webhook-ready endpoint accepts:

```text
POST /api/submit
```

with one of these types:

```text
schedule
newsletter
partner
```

The payload is validated server-side, normalized, bounded, and forwarded to the matching webhook. Outbound delivery uses a timeout. No database or CRM is used in the current scope.

## Sentry

Sentry is ready but disabled unless `SENTRY_DSN` or `NEXT_PUBLIC_SENTRY_DSN` is provided. Client initialization is centralized in `instrumentation-client.ts`; the legacy `sentry.client.config.ts` is intentionally side-effect free.

## Shadcn Space credentials

`EMAIL` and `LICENSE_KEY` are install-time CLI credentials only. They are not runtime variables and must never be exposed through `NEXT_PUBLIC_*`, committed files, Docker images, or client code.
