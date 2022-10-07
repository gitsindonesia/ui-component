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
    require('@gits-id/alert/plugin'),
    require('@gits-id/app-bar/plugin'),
    require('@gits-id/avatar/plugin'),
    require('@gits-id/badge/plugin'),
    require('@gits-id/card/plugin'),
    require('@gits-id/breadcrumbs/plugin'),
    require('@gits-id/button/plugin'),
  ],
};
