const plugin = require('tailwindcss/plugin');

const breadcrumbs = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--breadcrumbs-gap': theme('spacing.3'),
      '--breadcrumbs-margin-bottom': theme('spacing.3'),
      '--breadcrumbs-font-weight': theme('fontWeight.medium'),
      '--breadcrumbs-item-color': theme('colors.gray.800'),
      '--breadcrumbs-item-hover-color': theme('colors.primary.700'),
      '--breadcrumbs-item-active-color': theme('colors.primary.500'),
      '--breadcrumbs-item-disabled-color': theme('colors.gray.500'),
      '--breadcrumbs-divider-font-size': theme('fontSize.sm'),
      '--breadcrumbs-divider-font-weight': theme('fontWeight.medium'),
      '--breadcrumbs-divider-color': theme('colors.gray.400'),
    },
    '.breadcrumbs': {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--breadcrumbs-gap)',
      marginBottom: 'var(--breadcrumbs-margin-bottom)',
    },

    // elements
    '.breadcrumbs-item': {
      color: 'var(--breadcrumbs-item-color)',
      fontWeight: 'var(--breadcrumbs-font-weight)',
      '&:hover': {
        color: 'var(--breadcrumbs-item-hover-color)',
      },
    },

    '.breadcrumbs-divider': {
      fontSize: 'var(--breadcrumbs-divider-font-size)',
      fontWeight: 'var(--breadcrumbs-divider-font-weight)',
      color: 'var(--breadcrumbs-divider-color)',
    },

    // modifiers
    '.breadcrumbs-item--active': {
      color: 'var(--breadcrumbs-item-active-color)',
    },
    '.breadcrumbs-item--disabled': {
      color: 'var(--breadcrumbs-item-disabled-color)',
    },
  });
});

module.exports = breadcrumbs;
