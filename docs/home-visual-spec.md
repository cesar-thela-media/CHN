# Homepage visual spec, variant A (Fraunces + Inter)

Target: the approved mock `variant-a/desktop-full.png` (1440 wide, 8142 px tall), built from the live
customhomenetwork.com page with live copy and media. All numbers are desktop at 1440. Styles live in
`components/site/home-a/home-a.module.css`; markup in `home-page-a.tsx`.

## Tokens
- Colours: ink `#0e0e0d`, charcoal `#1a1a1a`, footer/who `#0b0b0a`, ivory `#f3eee7`, muted ivory 62%, taupe `#8f8682`, hairline ivory 14%.
- Display: Fraunces 360 (opsz 48, SOFT 0, WONK 0), tracking -0.022em; italic accents 340 in taupe (`#cfc6bf` on photos).
- Body: Inter 300, 15/1.85, muted ivory, max 440 px. Labels: Inter 400 11 px, tracking 0.32em, caps, taupe, 40 px rule before.
- Buttons: 1 px ivory-55% outline, Inter 400 11 px, tracking 0.3em, padding 20/34, 28 px trailing rule. Filled variant in taupe.

## Sections (height · layout · type)
1. Nav + hero · 900 (100svh, min 760, max 1000) · nav absolute, 3 columns (links / logo 84 px / Contact Us), 18/64 padding, hairline below. Video CHN.mp4 (poster = 7.4 s still), brightness .85, left-to-right veil. H1 112/0.98 three lines, "Journey" italic. Copy block at left 64, bottom 150.
2. Pinnacle · 880 · 50/50, photo left (video still 10.5 s) fading right; inset 270×340 at right 56, 14 px ink outline (custombuilding, desaturated). H2 58/1.08. Text padding 150/90/150/100.
3. Value · 880 · 1.05fr/0.95fr on charcoal, photo right (unlockvalue). H2 48/1.1. Numeral 176 px Fraunces 300, % at .36em; "bonus incentive" 30 px italic taupe; small lines 13 px.
4. Services · 1382 · 0.72fr/1.28fr, tall photo left (projectmanagement). H2 52/1.1, subtitle 22 px italic taupe. List: 6 rows, 56 px / 1fr / 300 px, 32 px vertical padding, hairlines; titles 23/1.25 Fraunces 380, descriptions 14/1.75.
5. Who We Are · 1320 · centred; label, mission line 50/1.24 Fraunces 340 (max 1040), founding paragraph (max 640), then a 560 px full-width photo (land at sunset) with fades.
6. Insights · 860 · full-width photo break (video still 13.5 s), radial vignette, H2 78/1.06 centred, outline button.
7. Contact · ~1050 · 50/50 on charcoal, photo right (luxurypool, 28% x). Label, title 68/1.04 with "Together." italic, 2×2 underline fields + 90 px message, filled "Get in Touch".
8. Newsletter · 183 · one row: title 32 px / body 14 px / 520 px underline field + Subscribe.
9. Footer · ~680 · 1.4fr/1fr/1fr/1.2fr columns (logo 110 px + tagline, Quick Links, Connect, reserved contact slot); wordmark spans the content width (font-size = content width / 13.2); © line 12 px.

## Responsive
- ≤1280: text padding 120/72; services rows become 2 columns (number / title + description).
- ≤1024: page padding 48; H1 84; footer drops the reserved column.
- ≤768: every split stacks with the photo first; nav collapses to logo + Contact Us + menu; H1 60.
- ≤480: H1 50, H2 34; the wordmark wraps to two lines.

## PENDING (not invented, left for Cesar)
- Final hero footage (live CHN.mp4 used meanwhile).
- Insights destination: the live site has no blog; the button links to the repo's /insights.
- Footer contact block (email, phone, service area; site meta says "TBD").
- Real social URLs (site.social is empty, links fall back to "#").
- Legal links (privacy / terms) are not on the live homepage.
