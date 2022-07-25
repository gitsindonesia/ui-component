module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [require('@gits-id/tailwind-config/preset')],
};
