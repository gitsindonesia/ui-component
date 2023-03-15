module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    'app.vue',
    '../node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [require('@morpheme/tailwind-config/preset')],
};
