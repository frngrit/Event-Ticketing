/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '300px',
      'xs-max': {'max': '300px'},
      '2xl-max': {'max': '1535px'},
      'xl-max': {'max': '1279px'},
      'lg-max': {'max': '1023px'},
      'md-max': {'max': '767px'},
      'sm-max': {'max': '639px'},
      ...defaultTheme.screens,
    },
  },

  plugins: [],
}
