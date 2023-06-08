const defaultTheme = require('tailwindcss/defaultTheme');
const theme = require('@morpheme/design-tokens/js/tailwind');
const merge = require('lodash.merge');

module.exports = {
  theme: {
    extend: merge(theme, {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
