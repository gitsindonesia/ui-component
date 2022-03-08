const colors = require('tailwindcss/colors');

const primary = {
  50: '#eaf6fe',
  100: '#d4ecfd',
  200: '#a9d9fb',
  300: '#7ec6fa',
  400: '#53b3f8',
  500: '#28a0f6',
  600: '#2080c5',
  700: '#186094',
  800: '#104062',
  900: '#082031',
};

const secondary = {
  50: '#fff3ed',
  100: '#ffe8db',
  200: '#ffd1b6',
  300: '#ffb992',
  400: '#ffa26d',
  500: '#ff8b49',
  600: '#cc6f3a',
  700: '#99532c',
  800: '#66381d',
  900: '#331c0f',
};

module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#333333',
        primary: primary,
        secondary: secondary,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
      },
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('./packages/button/plugin')
  ],
};
