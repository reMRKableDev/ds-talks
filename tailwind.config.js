const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        orange: {
          light: '#fc954f',
          DEFAULT: '#fc802d',
          dark: '#e25d03',
        },
        red: {
          light: '#fd4e69',
          DEFAULT: '#fd2647',
          dark: '#e30225',
        },
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        title: ['Roboto Condensed'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
