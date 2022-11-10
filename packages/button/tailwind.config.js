module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('./src/plugin')],
  presets: [require('@gits-id/tailwind-config/preset')],
};
