module.exports = {
  content: [
    './docs/**/*.{vue,js,ts,jsx,tsx,md}',
    './packages/*/src/**/*.{vue,js,ts,jsx,tsx}',
    './stories/*/**/*.{vue,js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('./packages/tailwind-config/preset')],
};
