// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/**/src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@frontend/**/src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  presets: [require('@gits-id/tailwind-config/preset')],
};
