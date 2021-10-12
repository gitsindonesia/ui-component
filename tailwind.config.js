// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  presets: [require('./preset')],
};
