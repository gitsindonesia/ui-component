const plugin = require('tailwindcss/plugin');

const card = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--card-bg-color': theme('colors.white'),
      '--card-color': theme('colors.gray.800'),
      '--card-border-style': 'solid',
      '--card-border-width': theme('borderWidth.DEFAULT'),
      '--card-border-color': theme('borderColor.DEFAULT'),
      '--card-border-radius': theme('borderRadius.DEFAULT'),
      '--card-padding-x': theme('padding.4'),
      '--card-padding-y': theme('padding.3'),
    },
    '.card': {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--card-bg-color)',
      color: 'var(--card-color)',
      borderRadius: 'var(--card-border-radius)',
    },

    // elements
    '.card-header': {
      fontWeight: theme('fontWeight.semibold'),
      display: 'flex',
      padding:
        'var(--card-padding-y) var(--card-padding-x) 0 var(--card-padding-x)',
    },
    '.card-body': {
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--card-padding-y) var(--card-padding-x)',
    },
    '.card-footer': {
      display: 'flex',
      gap: theme('spacing.2'),
      padding:
        '0 var(--card-padding-x) var(--card-padding-y) var(--card-padding-x)',
    },

    // modifiers
    '.card--bordered': {
      borderStyle: 'var(--card-border-style)',
      borderWidth: 'var(--card-border-width)',
      borderColor: 'var(--card-border-color)',
    },
    '.card--bordered .card-header': {
      borderBottomStyle: 'var(--card-border-style)',
      borderBottomWidth: 'var(--card-border-width)',
      borderBottomColor: 'var(--card-border-color)',
      paddingBottom: 'var(--card-padding-y)',
    },
    '.card--bordered .card-footer': {
      borderTopStyle: 'var(--card-border-style)',
      borderTopWidth: 'var(--card-border-width)',
      borderTopColor: 'var(--card-border-color)',
      paddingTop: 'var(--card-padding-y)',
    },

    /* Shadows */
    '.card--shadow': {
      boxShadow: theme('boxShadow.DEFAULT'),
    },
    '.card--shadow-sm': {
      boxShadow: theme('boxShadow.sm'),
    },
    '.card--shadow-md': {
      boxShadow: theme('boxShadow.md'),
    },
    '.card--shadow-lg': {
      boxShadow: theme('boxShadow.lg'),
    },
    '.card--shadow-xl': {
      boxShadow: theme('boxShadow.xl'),
    },
    '.card--shadow-2xl': {
      boxShadow: theme('boxShadow.2xl'),
    },
    '.card--shadow-inner': {
      boxShadow: theme('boxShadow.inner'),
    },
    '.card--shadow-none': {
      boxShadow: theme('boxShadow.none'),
    },

    /* Colors */
    '.card-primary': {
      '--card-bg-color': theme('colors.primary.500'),
      '--card-color': theme('colors.white'),
    },
    '.card-secondary': {
      '--card-bg-color': theme('colors.secondary.500'),
      '--card-color': theme('colors.white'),
    },
    '.card-info': {
      '--card-bg-color': theme('colors.info.500'),
      '--card-color': theme('colors.white'),
    },
    '.card-warning': {
      '--card-bg-color': theme('colors.warning.500'),
      '--card-color': theme('colors.white'),
    },
    '.card-success': {
      '--card-bg-color': theme('colors.success.500'),
      '--card-color': theme('colors.white'),
    },
    '.card-error': {
      '--card-bg-color': theme('colors.error.500'),
      '--card-color': theme('colors.white'),
    },
  });
});

module.exports = card;
