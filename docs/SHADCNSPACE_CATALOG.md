# Shadcnspace Pro - Live block map (final)

**Project:** Custom Home Network 
**Installed on disk:** 19 Pro blocks under `components/shadcn-space/blocks/` 
**Used in live UI:** **14+** distinct block IDs via `data-shadcn-space` / chrome attrs

---

## Layout chrome (every page)

| Block | Implementation |
|-------|----------------|
| **navbar-08** | `components/site/header.tsx` (`data-chn-chrome="shadcn-space-navbar-08"`) |
| **footer-02** | `components/site/footer.tsx` (`data-chn-chrome="shadcn-space-footer-02"`) |

---

## By page

### Home `/`

| Block | Section |
|-------|---------|
| hero-02 | Full-bleed hero |
| about-us-03 | Trust / economics |
| about-us-12 | Story + stats |
| services-02 | Interactive services |
| timeline-01 | Process journey |
| blog-09 | Insights preview |
| cta-08 | Conversion band |

### Buyers `/buyers`

hero-02 · about-us-03 · feature-01 · timeline-01 · **faq-01** · contact-01 · cta-08

### Partners `/partners`

hero-02 · feature-01 · **team-05** · contact-01 · cta-08

### Services `/services` + `/services/[slug]`

hero-02 · about-us-03 · feature-01 · services-02 · cta-08 (+ detail outcomes)

### Insights `/insights` + `/insights/[slug]`

**blog-09** grid · article layout with contact CTA

### Contact `/contact`

**contact-01** · cta-08

---

## Live unique block IDs (≥10)

1. navbar-08 
2. footer-02 
3. hero-02 
4. about-us-03 
5. about-us-12 
6. services-02 
7. timeline-01 
8. blog-09 
9. cta-08 
10. faq-01 
11. feature-01 
12. team-05 
13. contact-01 

---

## Disk only (not required for demo)

cta-01, footer-01, gallery-03, hero-01, feature-13, testimonial-08

---

## Final screenshots

`screenshots/final-{home,buyers,partners,services,insights,contact}-{desktop,mobile}.png`
