// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

const primary = {
  50: '#94d0fb',
  100: '#7ec6fa',
  200: '#69bdf9',
  300: '#53b3f8',
  400: '#3eaaf7',
  500: '#28a0f6', // primary
  600: '#2490dd',
  700: '#2080c5',
  800: '#1c70ac',
  900: '#186094',
}

const secondary = {
  50: '#ffc5a4',
  100: '#ffb992',
  200: '#ffae80',
  300: '#ffa26d',
  400: '#ff975b',
  500: '#FF8B49', // secondary
  600: '#e67d42',
  700: '#cc6f3a',
  800: '#b36133',
  900: '#99532c',
}

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#333333',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      primary: primary,
      secondary: secondary,
      info: colors.sky,
      success: colors.green,
      warning: colors.orange,
      error: colors.red,
    },
    fontFamily: {
      // display: ['Poppins', 'Arial', 'sans-serif'],
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
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
