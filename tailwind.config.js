module.exports = {
  content: [
    './packages/*/src/**/*.{vue,js,ts,jsx,tsx}',
    './stories/*/**/*.{vue,js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('./packages/tailwind-config/preset')],
};
