module.exports = {
  darkMode: 'class',
  content: [
    '../../app-shell/src/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    'app.vue',
    '../node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [require('@morpheme/tailwind-config/preset')],
};
