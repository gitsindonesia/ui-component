const plugin = require('tailwindcss/plugin');

const appBar = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--app-bar-height': 54,
      '--app-bar-padding-x': theme('padding.4'),
      '--app-bar-padding-y': theme('padding.3'),
      '--app-bar-bg-color': theme('colors.white'),
      '--app-bar-color': theme('colors.gray.800'),
      '--app-bar-transition': 'all 0.3s ease',
      '--app-bar-border-style': 'solid',
      '--app-bar-border-width': theme('borderWidth.DEFAULT'),
      '--app-bar-border-color': theme('borderColor.DEFAULT'),
    },
    '.app-bar': {
      display: 'flex',
      alignItems: 'center',
      height: 'var(--app-bar-height)',
      padding: 'var(--app-bar-padding-y) var(--app-bar-padding-x)',
      backgroundColor: 'var(--app-bar-bg-color)',
      color: 'var(--app-bar-color)',
      transition: 'var(--app-bar-transition)',
    },
    '.app-bar--fixed': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },

    '.app-bar--sticky': {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },

    '.app-bar--bordered': {
      borderBottomStyle: 'var(--app-bar-border-style)',
      borderBottomWidth: 'var(--app-bar-border-width)',
      borderBottomColor: 'var(--app-bar-border-color)',
    },

    /* Shadows */
    '.app-bar--shadow': {
      boxShadow: theme('boxShadow.DEFAULT'),
    },
    '.app-bar--shadow-sm': {
      boxShadow: theme('boxShadow.sm'),
    },
    '.app-bar--shadow-md': {
      boxShadow: theme('boxShadow.md'),
    },
    '.app-bar--shadow-lg': {
      boxShadow: theme('boxShadow.lg'),
    },
    '.app-bar--shadow-xl': {
      boxShadow: theme('boxShadow.xl'),
    },
    '.app-bar--shadow-2xl': {
      boxShadow: theme('boxShadow.2xl'),
    },
    '.app-bar--shadow-inner': {
      boxShadow: theme('boxShadow.inner'),
    },
    '.app-bar--shadow-none': {
      boxShadow: theme('boxShadow.none'),
    },

    /* Colors */
    '.app-bar-primary': {
      '--app-bar-bg-color': theme('colors.primary.500'),
      '--app-bar-color': theme('colors.white'),
    },
    '.app-bar-secondary': {
      '--app-bar-bg-color': theme('colors.secondary.500'),
      '--app-bar-color': theme('colors.white'),
    },
    '.app-bar-info': {
      '--app-bar-bg-color': theme('colors.info.500'),
      '--app-bar-color': theme('colors.white'),
    },
    '.app-bar-warning': {
      '--app-bar-bg-color': theme('colors.warning.500'),
      '--app-bar-color': theme('colors.white'),
    },
    '.app-bar-success': {
      '--app-bar-bg-color': theme('colors.success.500'),
      '--app-bar-color': theme('colors.white'),
    },
    '.app-bar-error': {
      '--app-bar-bg-color': theme('colors.error.500'),
      '--app-bar-color': theme('colors.white'),
    },

    /* sizes */
    '.app-bar--sm': {
      '--app-bar-height': '48px',
    },
    '.app-bar--md': {
      '--app-bar-height': '54px',
    },
    '.app-bar--lg': {
      flexDirection: 'column',
      alignItems: 'center',
      '--app-bar-height': '94px',
    },
  });
});

module.exports = appBar;
