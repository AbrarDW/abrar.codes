/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0E13',
          900: '#0F141B',
          line: '#21262D',
          border: '#30363D',
          muted: '#8B949E',
          soft: '#C9D1D9',
          text: '#E6EDF3',
        },
        accent: '#C3F53C',
        syntax: {
          key: '#79C0FF',
          string: '#A5D6FF',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
