/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#070708',
          900: '#0C0C0E',
          850: '#121216',
          800: '#18181D',
          700: '#26262E',
        },
        gold: {
          100: '#F9F1D8',
          200: '#EFE0B1',
          300: '#DFC680',
          400: '#C8A962',
          500: '#B39046',
          600: '#8F6F2E',
          700: '#6B511E',
        },
        parchment: {
          50: '#FCFaf5',
          100: '#F7F3E8',
          200: '#EFE8D5',
          300: '#E2D6B8',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        editorial: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
