# gabrielpaez-cv

Personal CV / portfolio site. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed on [Cloudflare Pages](https://pages.cloudflare.com).

🔗 **Live site**: https://gabrielpaez.dev *(once deployed)*

---

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

---

## Project structure

All content lives in **`src/data.js`** — single source of truth. Edit values there to update the site.

```
src/
├── data.js              # ⭐ all content (experience, skills, projects, etc.)
├── pages/index.astro    # main page
├── components/          # section components (Hero, Experience, etc.)
├── layouts/             # base layout with SEO meta + Schema.org
└── styles/global.css    # global styles + animations
```

See [`CLAUDE.md`](./CLAUDE.md) for a deeper architectural guide.

## Deploy

Auto-deploys to Cloudflare Pages on push to `main`. See `CLAUDE.md` for deployment configuration.

---

## License

The code is MIT. The CV content is © Gabriel Paez.
