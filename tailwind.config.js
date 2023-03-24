/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        easeal: {
          DEFAULT: '#1A2835',
          900: '#2A4156',
          800: '#3A5A78',
          700: '#4B749B',
        },
      },
    },
  },
  plugins: [],
}
