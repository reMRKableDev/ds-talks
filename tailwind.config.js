const defaultTheme = require('tailwindcss/defaultTheme');
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        brandOrange: {
          light: '#fc954f',
          DEFAULT: '#fc802d',
          dark: '#e25d03',
        },
        brandRed: {
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
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    iOSHeight,
    ({ addComponents }) => {
      addComponents({
        '.button': {
          '@apply  uppercase justify-center text-[12px] text-white bg-[#041C2C] text-white inline-flex p-[12px] px-[18px] disabled:bg-gray-300 disabled:cursor-default':
            {},
        },
        '.input': {
          '@apply border border-solid block bg-transparent border-[rgba(4,28,44,0.1)] px-[18px] py-[16px]':
            {},
        },
      });
    },
  ],
};
