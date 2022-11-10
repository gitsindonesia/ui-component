const colors = require('@gits-id/theme');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    // GITS UI Plugins
    require('@gits-id/tailwind-components/alert'),
    require('@gits-id/tailwind-components/app-bar'),
    require('@gits-id/tailwind-components/avatar'),
    require('@gits-id/tailwind-components/badge'),
    require('@gits-id/tailwind-components/card'),
    require('@gits-id/tailwind-components/breadcrumbs'),
    require('@gits-id/tailwind-components/button'),
    require('@gits-id/tailwind-components/dropdown'),
  ],
};
