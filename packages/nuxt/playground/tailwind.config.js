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
  safelist: [
    'flex',
    'flex-col',
    'flex-1',
    'h-screen',
    'container',
    'mx-auto',
    'px-4',
    'py-4',
    'lg:px-6',
    'animate-spin',
  ],
};
