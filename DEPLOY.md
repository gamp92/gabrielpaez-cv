# Deployment Guide

End-to-end runbook to take this project from ZIP to a live URL. Estimated total time: **45–60 minutes**, of which ~30 min is waiting for DNS.

---

## Phase 0 — Local sanity check (5 min)

Before anything else, verify the project builds on your machine.

```bash
cd gabrielpaez-cv
npm install
npm run dev
```

Open `http://localhost:4321`. You should see your CV page.

If the dev server works, run a production build:

```bash
npm run build
npm run preview
```

If both work, you're ready to deploy. If not, the most common issue is Node version — make sure you're on Node 18 or higher: `node --version`.

---

## Phase 1 — Push to GitHub (5 min)

The ZIP comes with a clean directory. You initialize git yourself.

```bash
cd gabrielpaez-cv

git init
git add .
git commit -m "Initial commit: Astro CV site"

# Create the repo on GitHub first (web UI):
# https://github.com/new
# Name: gabrielpaez-cv
# Visibility: Public (so Cloudflare Pages can read it on free tier)
# Do NOT initialize with README/license/gitignore (we already have them)

# Then connect and push:
git remote add origin https://github.com/gamp92/gabrielpaez-cv.git
git branch -M main
git push -u origin main
```

After this, your code is on GitHub and ready to be picked up by any host.

---

## Phase 2 — Deploy to Cloudflare Pages (10 min)

### 2.1 Sign up

Go to https://dash.cloudflare.com → Sign Up. Free, no credit card required.

### 2.2 Create the Pages project

1. In the Cloudflare dashboard sidebar: **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**
2. Authorize Cloudflare to read your GitHub
3. Select the `gabrielpaez-cv` repo
4. Configure the build:

| Setting | Value |
|---|---|
| Project name | `gabrielpaez-cv` |
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (leave blank) |
| Node version env var | `NODE_VERSION` = `20` |

5. Click **Save and Deploy**

The first build takes ~1–2 minutes. When it's done, Cloudflare assigns you a URL like `gabrielpaez-cv.pages.dev`. Open it — your site is live.

### 2.3 Verify the deploy

Open the `.pages.dev` URL and check:
- Site loads
- Fonts (IBM Plex Mono) appear correctly
- Click "Copy email" — should copy to clipboard
- Click "Download CV (PDF)" — will 404 because you haven't added the PDF yet (Phase 3)
- Open browser devtools → Lighthouse → run audit. Target: 95+ on all four metrics

---

## Phase 3 — Add missing assets (15 min)

Before sharing the URL with anyone, add the two missing files.

### 3.1 The CV PDF

Place your PDF at `public/Gabriel_Paez_CV.pdf`.

For UK/US/EU roles, use a version **without a photo** (anti-discrimination policies cause CV rejection at many large companies). See `public/CV_README.txt` for details.

### 3.2 The OG image (LinkedIn preview)

This is what appears when you share the URL on LinkedIn, Slack, WhatsApp. It's one of the highest-impact pieces of branding on the site.

**Specs**: 1200×630 PNG, under 200 KB.

Quickest path: open Figma or Canva, create a 1200×630 frame with:
- Bone background (`#fafaf7`)
- Large monogram "GP" in IBM Plex Mono (or just your name)
- One line under it: "Software Quality Engineer · Test Automation · AI Testing"
- Small "gabrielpaez.dev" in the corner

Export as PNG, save as `public/og-image.png`.

Then commit and push:

```bash
git add public/Gabriel_Paez_CV.pdf public/og-image.png
git commit -m "Add CV PDF and OG image"
git push
```

Cloudflare Pages will auto-deploy in ~30 seconds.

---

## Phase 4 — Buy a domain (10 min + DNS wait)

Skip this entirely if you want to launch on the free `.pages.dev` subdomain. You can always add the domain later.

### 4.1 Recommended registrar: Cloudflare Registrar

- Cloudflare sells domains at wholesale cost (no markup). A `.dev` is ~$12/year, a `.com` is ~$10/year.
- If you bought elsewhere, you can transfer in later — no rush.

To buy: https://dash.cloudflare.com → **Domain Registration** → **Register Domains** → search.

### 4.2 Domain candidates

In order of recommendation:

| Domain | Why | Approx. cost |
|---|---|---|
| `gabrielpaez.dev` | Best fit — `.dev` signals technical, requires HTTPS by default, harder for squatters to grab | ~$12/yr |
| `gpaez.dev` | Shorter, more memorable | ~$12/yr |
| `gabrielpaez.io` | Tech-adjacent, but pricier | ~$30/yr |
| `gabrielpaez.com` | Universal — check availability, may be taken | ~$10/yr |

**Avoid**: GoDaddy (price markups, aggressive upsells), Namecheap WhoisGuard upsells, anything `.tk` / `.ml` / `.ga`.

### 4.3 Connect domain to Cloudflare Pages

1. In Cloudflare: **Workers & Pages** → your project → **Custom domains** → **Set up a custom domain**
2. Enter `gabrielpaez.dev` → Continue
3. If you bought through Cloudflare Registrar, DNS is automatic — done in 30 seconds
4. If you bought elsewhere, Cloudflare gives you 2 nameservers to point at — update them at your registrar; takes 5 min to 48 hr to propagate (usually under 1 hour)

Once active, Cloudflare automatically issues an SSL cert. Your site is live at `https://gabrielpaez.dev`.

### 4.4 Update site config to use the real domain

Edit two files:

**`astro.config.mjs`**:
```js
const SITE_URL = 'https://gabrielpaez.dev'; // your real domain
```

**`src/data.js`**:
```js
domain: 'https://gabrielpaez.dev',
```

**`public/robots.txt`**:
```
Sitemap: https://gabrielpaez.dev/sitemap-index.xml
```

Commit, push, auto-deploy.

---

## Phase 5 — Enable Cloudflare Web Analytics (5 min)

Free, no cookies, no GDPR banner needed.

1. Cloudflare dashboard → **Analytics & Logs** → **Web Analytics** → **Add a site**
2. Hostname: `gabrielpaez.dev` (or your `.pages.dev` URL if no custom domain yet)
3. Cloudflare gives you a JavaScript snippet — you only need the **token** value (looks like `a1b2c3d4e5f6...`)
4. Edit `src/data.js`:

```js
cfAnalyticsToken: 'a1b2c3d4e5f6...', // paste your token here
```

5. Commit, push, auto-deploy
6. Wait 30 minutes, then check the dashboard — pageviews start showing up

**What you'll see**: visitors, pageviews, top countries, top referrers (where traffic comes from), top pages. No personal data on individuals — privacy-first by design.

---

## Phase 6 — SEO submission (10 min, optional but worth it)

### 6.1 Google Search Console

1. https://search.google.com/search-console → Add Property
2. Choose URL prefix: `https://gabrielpaez.dev`
3. Verify ownership — easiest method is "HTML tag", which gives you a `<meta>` tag
4. Add the tag to `src/layouts/BaseLayout.astro` inside `<head>`, push, wait for deploy
5. Click Verify
6. Once verified: Sitemaps → submit `sitemap-index.xml`

This makes your site appear in Google for "Gabriel Paez" within ~1–2 weeks. Without this, it could take months or never.

### 6.2 LinkedIn URL

Update your LinkedIn profile to add the website link. Settings → Edit public profile & URL → Contact info → Website → `https://gabrielpaez.dev`.

When you share the URL in a LinkedIn post, the OG image you created in Phase 3 should appear. If it doesn't, use https://www.linkedin.com/post-inspector/ to force a re-fetch.

---

## Phase 7 — Maintenance workflow

Once everything is live, the day-to-day workflow is short:

```bash
# Edit src/data.js to update content
# Or edit components in src/components/

git add .
git commit -m "Update experience section"
git push

# Cloudflare auto-deploys in ~30 seconds. That's it.
```

To preview changes locally first: `npm run dev`.

---

## Quick reference

| What | Where |
|---|---|
| Site code | https://github.com/gamp92/gabrielpaez-cv |
| Live site | https://gabrielpaez.dev (after Phase 4) |
| Deploys | https://dash.cloudflare.com → Workers & Pages → gabrielpaez-cv |
| Analytics | https://dash.cloudflare.com → Analytics & Logs → Web Analytics |
| Search Console | https://search.google.com/search-console |
| LinkedIn Inspector | https://www.linkedin.com/post-inspector/ |

---

## Troubleshooting

**Build fails on Cloudflare**: usually a Node version mismatch. Add env var `NODE_VERSION=20` in Pages settings → Environment variables.

**Fonts don't load**: Cloudflare Rocket Loader can mangle Google Fonts. Disable Rocket Loader in dashboard → Speed → Optimization.

**LinkedIn preview shows old image**: LinkedIn caches OG images aggressively. Use the Post Inspector to force a re-scrape.

**"Copy email" button doesn't work**: requires HTTPS. Won't work on `http://localhost` from some browsers, but works fine on the deployed `https://` site.

**Sitemap not indexed by Google**: takes 1–4 weeks. Check Search Console → Coverage to see status.
