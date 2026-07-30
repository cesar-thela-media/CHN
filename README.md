# Custom Home Network

Luxury custom home network marketing site - rebuilt from [customhomenetwork.com](https://customhomenetwork.com) sitemap (`/`).

## Stack (boss requirements)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui + Shadcnspace Pro blocks |
| Motion | GSAP + `@gsap/react` (fade / scroll reveals) |
| Observability | `@sentry/nextjs` (env-ready, no DSN required locally) |
| Runtime | Docker multi-stage: **Bun 1.3.4** build → **Node 20** `node server.js` |
| Deploy | Railway (`railway.toml`, healthcheck `/api/health`) |
| Forms | `POST /api/submit` → `WEBHOOK_URL_SCHEDULE` / `WEBHOOK_URL_NEWSLETTER` |

## Local development

```bash
# env
cp .env.example .env
# set EMAIL + LICENSE_KEY for Shadcnspace CLI (optional after blocks are vendored)

bun install
bun run dev # http://0.0.0.0:8080
```

## Production (Docker / Railway)

```bash
docker build -t chn .
docker run -p 8080:8080 \
 -e WEBHOOK_URL_SCHEDULE=... \
 -e WEBHOOK_URL_NEWSLETTER=... \
 -e SENTRY_DSN=... \
 -e NEXT_PUBLIC_SENTRY_DSN=... \
 chn
# → node server.js on PORT (default 8080)
# health: GET /api/health
```

## Environment

See `.env.example` for Sentry, webhooks, and Shadcnspace credentials.
