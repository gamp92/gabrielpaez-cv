import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: change this to your real domain when you have one,
// e.g. 'https://gabrielpaez.dev'. Sitemap and canonical URLs depend on it.
const SITE_URL = 'https://gabrielpaez.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false, // we use our own base styles in src/styles/global.css
    }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
