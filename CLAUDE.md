# CLAUDE.md

This file gives Claude Code (or any AI coding assistant) the context it needs to work on this project effectively. Read it first before making changes.

---

## What this project is

Personal CV / portfolio website for **Gabriel Paez** — Software Quality Engineer based in Mexico City, targeting senior QA / QA Lead / Engineering Manager roles in UK / EU / US, remote-first.

Single-page static site. The point of the site is to convert recruiter visits into outreach (email + LinkedIn). It is **not** a blog, not a SaaS, not interactive — every design decision should serve "scannable in 30 seconds, credible in 2 minutes."

---

## Stack

- **Astro 4** — static site generator. Outputs pure HTML/CSS with minimal JS.
- **Tailwind CSS** — utility-first styling, custom tokens in `tailwind.config.mjs`.
- **Hosted on Cloudflare Pages** (free tier). Auto-deploys from GitHub `main` branch.
- **Domain**: TBD (placeholder `gabrielpaez.dev` in `src/data.js` and `astro.config.mjs`).
- **Analytics**: Cloudflare Web Analytics (token in `src/data.js`, empty until deploy).

No React, no Vue, no Next.js. The site is intentionally light — everything is `.astro` files compiled to static HTML.

---

## File map

```
gabrielpaez-cv/
├── astro.config.mjs              # Astro + sitemap config. SITE_URL hardcoded here.
├── tailwind.config.mjs           # Design tokens (colors, fonts, animations)
├── package.json
├── public/
│   ├── favicon.svg               # Monogram GP favicon
│   ├── robots.txt                # Allows all crawlers, points to sitemap
│   ├── og-image.README.txt       # Reminder: add og-image.png (1200x630) before deploy
│   └── CV_README.txt             # Reminder: add Gabriel_Paez_CV.pdf before deploy
├── src/
│   ├── data.js                   # ⭐ SINGLE SOURCE OF TRUTH for all content
│   ├── styles/global.css         # Reset, font imports, reveal-on-scroll
│   ├── layouts/BaseLayout.astro  # SEO meta, OG, Schema.org JSON-LD, CF Analytics
│   ├── pages/index.astro         # Main page — just composes components
│   └── components/
│       ├── Hero.astro            # Name, status pill, tagline, CTAs
│       ├── Metrics.astro         # 4 KPI cards (92%, $16.8K, 15+, 5+)
│       ├── Experience.astro      # Timeline of roles
│       ├── Skills.astro          # Grouped skill chips
│       ├── Projects.astro        # GitHub repos as cards
│       ├── Education.astro       # Degrees + certs + languages
│       └── Contact.astro         # Email copy button + LinkedIn + footer
└── CLAUDE.md                     # this file
```

---

## How to make changes (the right way)

### Updating CV content

**Always edit `src/data.js`.** Never edit content inside `.astro` components — they read from `data.js`. This file controls:

- Personal info (name, email, location, links)
- SEO metadata
- Headline metrics
- Experience entries
- Skills (grouped by category)
- Projects (currently public GitHub repos)
- Education, certifications, languages

If a recruiter asks for an updated CV, the workflow is:
1. Edit `src/data.js`
2. Replace `public/Gabriel_Paez_CV.pdf` with new PDF
3. `git commit && git push` → Cloudflare Pages auto-deploys in ~30 seconds

### Updating the visual design

Two layers:

1. **Design tokens** in `tailwind.config.mjs` — colors, fonts, animations. Change the palette here once and it propagates.
2. **Component-level styling** in each `.astro` file via Tailwind classes.

Avoid creating new colors outside the config. The palette is intentional:
- `bone` (off-white) — backgrounds
- `ink` (charcoal) — text
- `signal` (emerald green) — single accent, used sparingly for "available" pills, CTAs, hover states

### Adding a new section

1. Create a new `.astro` file in `src/components/`
2. Import any data it needs from `src/data.js` (or add new data exports)
3. Import the component in `src/pages/index.astro` and place it in the section order
4. Use the `reveal` class on top-level elements for the scroll animation

### Adding interactivity

Astro components are static by default. For client-side JS (like the copy-to-clipboard buttons), use a `<script>` block at the bottom of the component. Keep it vanilla — no need for React/Alpine for this site.

---

## Design philosophy

The site is a hybrid of two directions:

1. **Minimal Tech** (base): IBM Plex Mono everywhere, Swiss-precision layout, generous whitespace, signal-green status pill. Says "I write clean code."
2. **Professional KPI cards** (grafted in): the Metrics section borrows from corporate-style dashboards to give recruiters scannable proof points in 5 seconds.

When in doubt about a new addition: if it doesn't survive the "would this look right in an engineering notebook?" test, cut it.

**Avoid**:
- Multiple accent colors (signal-green is the only one)
- Decorative icons or illustrations
- Stock photos or generic dev tropes (gradient meshes, abstract blobs)
- Multi-column hero or asymmetric grid breaks
- Heavy animation — current animations are already at the ceiling

---

## SEO & performance

The site targets a Lighthouse score of 100/100/100/100 and should hold there. Key constraints:

- **No external trackers** beyond Cloudflare Web Analytics (cookieless).
- **Schema.org `Person`** in `BaseLayout.astro` — critical for "Gabriel Paez" branded search results. If you change his name, job title, or employer, update both `data.js` AND the schema in `BaseLayout.astro`.
- **One `<h1>` per page** — currently in Hero. Don't add another.
- **All external links** use `target="_blank" rel="noopener noreferrer"`.
- **OG image** must exist at `public/og-image.png` (1200x630 PNG) before sharing the URL anywhere — without it, LinkedIn previews are broken.

---

## Deployment

- **Platform**: Cloudflare Pages
- **Branch**: `main`
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+ (set in Cloudflare Pages env settings)

Auto-deploys on push to `main`. Preview deploys on PR branches.

After first deploy:
1. Add custom domain in Cloudflare Pages settings
2. Add Cloudflare Web Analytics → copy token → paste in `src/data.js` under `cfAnalyticsToken`
3. Push the change → analytics start working

---

## Things deliberately NOT in scope

These have been considered and intentionally excluded. Don't add them without discussing first:

- **Photo of Gabriel** — excluded due to anti-discrimination CV norms in UK / US / Canada / Ireland / Australia
- **Dark mode toggle** — splits the design effort and adds JS for marginal value on a 1-page site
- **Blog / writing section** — would need a CMS or content collection; out of scope for v1
- **Contact form** — replaced with copy-to-clipboard email button to avoid backend dependency
- **Multi-language (ES/EN)** — site is English-only by design (target market is international)
- **Heavy animations / 3D / WebGL** — anti-pattern for a CV; recruiters bounce

---

## Known issues / future work

- `og-image.png` is missing — must be created (see `public/og-image.README.txt`)
- `Gabriel_Paez_CV.pdf` is missing — must be added (see `public/CV_README.txt`)
- Featured Work currently shows `weather-dashboard`, `Pokemon-Group`, `angular_test`. Replace with `cheme-calc` and a clean-room QA framework repo when those exist — current GitHub does not match the seniority claim of the rest of the site.
- Cloudflare Analytics token is empty — paste real token after first deploy
- Domain placeholder is `gabrielpaez.dev` — update in `src/data.js` AND `astro.config.mjs` once purchased

---

## Useful commands

```bash
npm install            # install dependencies
npm run dev            # local dev server at http://localhost:4321
npm run build          # production build to ./dist
npm run preview        # preview production build locally
```
