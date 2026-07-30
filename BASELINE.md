# Custom Home Network - Baseline (P0 inventory)

**Date:** 2026-07-30 
**Purpose:** Lock stack + visual direction before multi-page / Shadcnspace integration waves. 
**Rule:** Preserve look; expand product and use Pro blocks next.

---

## P1 update (2026-07-30)

- **19 Shadcnspace Pro blocks** installed under `components/shadcn-space/blocks/`
- Catalog: [`docs/SHADCNSPACE_CATALOG.md`](docs/SHADCNSPACE_CATALOG.md)
- CLI demo routes removed; homepage polish intact and loading
- Blocks **not yet wired** into live UI (P2+)

---

## Preview / runtime

| Check | Status |
|-------|--------|
| Dev server `0.0.0.0:8080` | OK (listening, curl 200) |
| `GET /api/health` | OK `{ status: "ok", service: "custom-home-network" }` |
| Homepage `/` | OK 200, polished editorial UI |
| `/privacy`, `/terms` | OK stub pages |
| `/buyers`, `/partners`, `/services`, `/insights` | **Missing** (404) |
| `startup.sh` | Present, idempotent health probe + `bun run dev` |
| Screenshots | `screenshots/baseline-desktop.png`, `baseline-desktop-full.png`, `baseline-mobile.png` |

---

## Stack status (boss requirements)

| Requirement | Status |
|-------------|--------|
| Next.js 15 App Router | Yes (`next@^15.3`) |
| React 19 | Yes |
| TypeScript | Yes |
| Tailwind CSS v4 | Yes (`@tailwindcss/postcss`) |
| GSAP + `@gsap/react` | Yes (`lib/animations.ts`, FadeIn, Hero) |
| `@sentry/nextjs` | Wired (instrumentation + configs); no DSN required locally |
| Docker multi-stage Bun 1.3.4 → Node 20 | Yes (`Dockerfile`) |
| `node server.js` production entry | Yes (`server.js`) |
| Railway | `railway.toml` + healthcheck path `/api/health` |
| `/api/health` | Yes |
| `/api/submit` | Yes (`schedule` \| `newsletter` \| `partner` + webhook env) |
| Shadcnspace registry in `components.json` | Yes (`@shadcn-space` + `${EMAIL}` / `${LICENSE_KEY}`) |

### Env key names present

**In `.env` (secrets):** `EMAIL`, `LICENSE_KEY`, `SHADCNSPACE_EMAIL`, `SHADCNSPACE_LICENSE_KEY`

**In `.env.example` (placeholders):** above + `WEBHOOK_URL_SCHEDULE`, `WEBHOOK_URL_NEWSLETTER`, `WEBHOOK_URL_PARTNER`, `SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT`

---

## Routes (current)

| Route | File | Notes |
|-------|------|--------|
| `/` | `app/page.tsx` → `HomePage` | Full marketing homepage |
| `/privacy` | `app/privacy/page.tsx` | Legal stub |
| `/terms` | `app/terms/page.tsx` | Legal stub |
| `/api/health` | `app/api/health/route.ts` | Healthcheck |
| `/api/submit` | `app/api/submit/route.ts` | Form webhooks |
| `/robots.txt` | `app/robots.ts` | Generated |
| `/sitemap.xml` | `app/sitemap.ts` | Home + legal only |
| `/buyers` etc. | - | **Not implemented** |

---

## Components

### Site (live UI - custom, polished)

- `components/site/header.tsx` - sticky nav, mobile menu, ArrowButton CTA 
- `components/site/footer.tsx` - multi-column footer (anchor links, not multi-page) 
- `components/site/hero.tsx` - full-bleed photo hero + stats rail + GSAP 
- `components/site/home-page.tsx` - all homepage sections 
- `components/site/arrow-button.tsx` - sliding-arrow CTA 
- `components/site/fade-in.tsx` + `lib/animations.ts` - GSAP scroll fades 
- `components/site/contact-form.tsx` / `newsletter-form.tsx` - RHF + zod → `/api/submit`

### UI primitives (shadcn-style)

`button`, `input`, `textarea`, `label`, `card`, `separator`, `sheet`, `navigation-menu`, `avatar`, `badge`, plus CLI-added: accordion, select, checkbox, carousel, tabs, tooltip, collapsible, scroll-area

### Shadcnspace Pro

See **`docs/SHADCNSPACE_CATALOG.md`** - 19 blocks installed, mapped to future pages.

---

## Visual direction to **PRESERVE**

Do not flatten into generic SaaS / sky-amber Shadcnspace demos.

- **Palette:** ink background (`#080807` range), cream primary text/CTAs, stone muted meta 
- **Type:** display serif (Cormorant via next/font) + Instrument Sans body 
- **Geometry:** refined/sharp radii, hairline borders, editorial asymmetry 
- **Motion:** GSAP fade/stagger section enters; `prefers-reduced-motion` respected 
- **CTAs:** sliding arrow pill (`ArrowButton`) 
- **Patterns that work:** numbered service rows, stats rail on hero, full-bleed economics band, split contact panel, magazine-style insights grid 
- **Anti-slop:** no emoji icons, no purple gradients, no equal bland card soup as the only layout

---

## Known gaps (next waves)

1. **Single-page product** - primary experience is `/` + anchors; Buyers / Partners / Services / Insights / Contact pages missing 
2. **Shadcnspace not in live UI yet** - installed + cataloged; wire in P2+ 
3. **Insights** are “coming soon” cards, not real posts 
4. **Sitemap** does not list future marketing routes 
5. **Brand placeholders** - phone/address TBD; webhooks empty until Railway env 

---

## Recommended next prompt

**Prompt 2 - Design system + global chrome from Shadcnspace:** adapt `navbar-08` + `footer-02` into layout with real multi-route links; restyle to brand tokens; keep homepage body intact.
