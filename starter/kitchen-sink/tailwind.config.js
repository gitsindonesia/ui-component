const theme = require('@morpheme/design-tokens/js/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  theme: {
    extend: theme,
  },
  presets: [require('@morpheme/tailwind-config/preset')],
};
