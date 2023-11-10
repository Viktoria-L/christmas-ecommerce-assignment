const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
      noto: ['Noto Sans'],
      dancing: ['Dancing script'],
      mountain: ['Mountains of Christmas']
    }
  },
  plugins: [],
}

