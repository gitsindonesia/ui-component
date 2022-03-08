module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './packages/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('./packages/tailwind-config/preset')],
  plugins: [
    require('./packages/button/plugin')
  ]
};
