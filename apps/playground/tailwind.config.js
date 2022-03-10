module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@gits-id/button/**/*.{vue,js,ts,jsx,tsx}',
    // './node_modules/@gits-id/ui/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [require('@gits-id/tailwind-config/preset')],
};
