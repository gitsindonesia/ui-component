module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('@gits-id/button/plugin')],
  presets: [require('@gits-id/tailwind-config/preset')],
};
