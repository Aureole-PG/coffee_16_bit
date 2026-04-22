/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-earth': '#311E1E',
        'muted-slate': '#546581',
        'dusty-rose': '#8B6465',
        'soft-petal': '#CE999B',
        'vivid-rose': '#FCB5B7',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        pixel: ['ui-monospace', '"Courier New"', 'Consolas', 'monospace'],
        chunky: ['"Arial Black"', '"Helvetica Neue"', 'Impact', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.125rem', { lineHeight: '1.75' }],
        lg: ['1.25rem', { lineHeight: '1.75' }],
        xl: ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '4xl': ['3rem', { lineHeight: '1' }],
        '5xl': ['3.75rem', { lineHeight: '1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'pixel-corners': '4px 0 0 0 #000, -4px 0 0 0 #000, 0 4px 0 0 #000, 0 -4px 0 0 #000',
        'pixel-depth': '8px 8px 0 0 #000',
        'retro-out': '-4px -4px 0px 0px #311E1E, 4px 4px 0px 0px #8B6465',
        'retro-in': 'inset 4px 4px 0px 0px rgba(0,0,0,0.25), inset -2px -2px 0px 0px rgba(0,0,0,0.1)',
        'retro-card': '8px 8px 0px 0px #311E1E',
      },
    },
  },
  plugins: [],
};