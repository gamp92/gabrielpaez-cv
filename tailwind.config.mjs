/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bone palette — warm off-white, easy on the eyes for long reading
        bone: {
          50: '#fafaf7',
          100: '#f5f5f0',
          200: '#e8e8e0',
        },
        // Charcoal — primary text
        ink: {
          DEFAULT: '#111111',
          soft: '#333333',
          muted: '#666666',
          faint: '#999999',
        },
        // Signal — single accent color for CTAs and emphasis
        signal: {
          DEFAULT: '#10b981', // emerald, says "available"
          dark: '#059669',
        },
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Custom scale for editorial feel
        'display': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '500' }],
        'headline': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
