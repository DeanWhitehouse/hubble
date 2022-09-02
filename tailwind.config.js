/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Roobert', ...defaultTheme.fontFamily.serif],
        'sans': ['Arial', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'radial': 'radial-gradient(50% 50% at 50% 50%, #E359FF 0%, #8655FF 100%)'
      },
      colors: {
        'hubble': {
          'purple': {
            DEFAULT: '#E359FF',
          },
          'mist': {
            DEFAULT: '#EAFFFF',
          },
          'light': {
            DEFAULT: '#3AFCFC',
          },
          'brand': {
            DEFAULT: '#8655FF',
          },
          'dark': {
            DEFAULT: '#0A1628',
          },
          'red': {
            DEFAULT: '#FB3D5D',
          }
        }
      }
    },
  },
  plugins: [],
}
