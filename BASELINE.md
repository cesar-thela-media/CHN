# Custom Home Network — Current Baseline

**Updated:** 2026-08-03
**Purpose:** Current implementation and visual/content QA baseline for the CHN redesign.

## Product direction

The project is a better-version recreation of `https://customhomenetwork.com/`.

- Preserve approved CHN business meaning, services, offers, and claims.
- Preserve the current premium editorial visual direction.
- Improve hierarchy, responsive behavior, conversion flow, and content organization.
- Do not introduce unsupported AI-generated claims.
- Keep the six service records as a structural content model; avoid presenting “six disciplines” as a marketing claim unless explicitly approved.

## Current stack

| Requirement | Status |
|---|---|
| Next.js 15 App Router | Yes |
| React 19 | Yes |
| TypeScript | Yes |
| Tailwind CSS v4 | Yes |
| GSAP + `@gsap/react` | Yes |
| Sentry | Ready; client initialization is centralized in `instrumentation-client.ts` |
| Vercel | Active deployment target |
| Webhook forms | `/api/submit` with schedule/newsletter/partner types |
| Docker/Railway reserve | `Dockerfile`, `server.js`, `railway.toml`, and `/api/health` present |
| Database/authentication | Not part of current scope |

## Routes

| Route | Purpose |
|---|---|
| `/` | Primary marketing homepage |
| `/buyers` | Buyer journey and FAQ |
| `/partners` | Partner network information and application |
| `/services` | Services index |
| `/services/[slug]` | Static service detail pages |
| `/insights` | Editorial index and newsletter |
| `/insights/[slug]` | Static editorial detail pages |
| `/contact` | Primary consultation form |
| `/privacy` | Legal placeholder pending approved copy |
| `/terms` | Legal placeholder pending approved copy |
| `/api/submit` | Webhook-ready form endpoint |
| `/api/health` | Reserved runtime health endpoint |
| `/robots.txt` | Generated robots metadata |
| `/sitemap.xml` | Generated public route sitemap |

## Current visual system

- Ink/dark background with cream foreground and stone metadata.
- Cormorant Garamond display typography and Instrument Sans body typography.
- Editorial asymmetric grids and restrained borders.
- Full-bleed video hero with poster fallback.
- GSAP/Motion fade and reveal effects with reduced-motion handling.
- Sliding-arrow CTA buttons.
- Responsive mobile menu and stacked mobile layouts.

## Content QA requirements

Before production approval:

1. Compare every public route and section against the approved CHN source content.
2. Preserve the meaning of financial, service, geographic, and partner claims.
3. Confirm exact wording for the no-cost service and 0.5% builder incentive.
4. Confirm whether the six-service taxonomy should be described as “services” rather than “disciplines.”
5. Approve or replace the editorial article content.
6. Replace privacy and terms placeholders with counsel-approved copy.
7. Confirm phone, address, hours, service area, social links, and asset rights.
8. Keep internal implementation notes out of customer-facing copy.

## Verification baseline

Run after dependency installation:

```bash
bun install
bun run typecheck
bun run build
```

Browser-check desktop and mobile for the homepage, navigation, service routes, insights, contact form, and all public routes. Confirm no console errors, duplicate Sentry initialization warning, broken assets, or mobile horizontal overflow.

## Deferred work

Database, authentication, CRM integration, advanced analytics, comprehensive anti-spam controls, and broader backend architecture are deferred until the visual/content direction is approved for production operations.
