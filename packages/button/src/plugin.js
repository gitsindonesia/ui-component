const plugin = require('tailwindcss/plugin');

const btn = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--btn-font-weight': theme('fontWeight.semibold'),
      '--btn-bg-color': theme('colors.gray.200'),
      '--btn-text-color': theme('colors.gray.800'),
      '--btn-border-color': theme('colors.gray.300'),
      '--btn-border-radius': theme('borderRadius.DEFAULT'),
      '--btn-border-width': theme('borderWidth.DEFAULT'),
      '--btn-padding-x': theme('spacing.4'),
      '--btn-padding-y': theme('spacing.2'),
      '--btn-line-height': theme('lineHeight.tight'),
      '--btn-font-size': theme('fontSize.sm'),
    },
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--btn-bg-color)',
      color: 'var(--btn-text-color)',
      fontWeight: 'var(--btn-font-weight)',
      lineHeight: 'var(--btn-line-height)',
      fontSize: 'var(--btn-font-size)',
      borderRadius: 'var(--btn-border-radius)',
      borderWidth: 'var(--btn-border-width)',
      borderColor: 'var(--btn-border-color)',
      padding: 'var(--btn-padding-y) var(--btn-padding-x)',
    },
  });
});

module.exports = btn;
