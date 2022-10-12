const plugin = require('tailwindcss/plugin');

const btn = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--btn-bg-color': theme('colors.gray.200'),
      '--btn-text-color': theme('colors.gray.800'),
      '--btn-border-color': theme('colors.gray.300'),
      '--btn-border-radius': theme('borderRadius.DEFAULT'),
      '--btn-border-width': theme('borderWidth.DEFAULT'),
      '--btn-padding-x': theme('spacing.3'),
      '--btn-padding-y': theme('spacing.2'),
      '--btn-line-height': theme('lineHeight.tight'),
      '--btn-font-size': theme('fontSize.base'),
      '--btn-font-weight': theme('fontWeight.normal'),
      '--btn-shadow': theme('boxShadow.none'),
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

    // variants
    '.btn-primary': {
      '--btn-bg-color': theme('colors.primary.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.primary.500'),
    },
    '.btn-secondary': {
      '--btn-bg-color': theme('colors.secondary.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.secondary.500'),
    },
    '.btn-info': {
      '--btn-bg-color': theme('colors.info.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.info.500'),
    },
    '.btn-warning': {
      '--btn-bg-color': theme('colors.warning.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.warning.500'),
    },
    '.btn-success': {
      '--btn-bg-color': theme('colors.success.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.success.500'),
    },
    '.btn-error': {
      '--btn-bg-color': theme('colors.error.500'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.error.500'),
    },
    '.btn-dark': {
      '--btn-bg-color': theme('colors.gray.800'),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme('colors.gray.800'),
    },

    // sizes
    // '.btn--xs': {
    //   '--btn-padding-x': theme('spacing.2'),
    //   '--btn-padding-y': theme('spacing.1'),
    //   '--btn-font-size': theme('fontSize.xs'),
    // },
    // '.btn--sm': {
    //   '--btn-padding-x': theme('spacing.3'),
    //   '--btn-padding-y': theme('spacing.2'),
    //   '--btn-font-size': theme('fontSize.sm'),
    // },
    // '.btn--md': {
    //   '--btn-padding-x': theme('spacing.4'),
    //   '--btn-padding-y': theme('spacing.2'),
    //   '--btn-font-size': theme('fontSize.base'),
    // },
    // '.btn--lg': {
    //   '--btn-padding-x': theme('spacing.5'),
    //   '--btn-padding-y': theme('spacing.3'),
    //   '--btn-font-size': theme('fontSize.lg'),
    // },
    // '.btn--xl': {
    //   '--btn-padding-x': theme('spacing.6'),
    //   '--btn-padding-y': theme('spacing.4'),
    //   '--btn-font-size': theme('fontSize.xl'),
    // },

    // ring
    '.btn--ring': {
      '&:focus': {
        // '--btn-ring-width': theme('ring.width.DEFAULT'),
        // '--btn-ring-color': theme('ring.colors.DEFAULT'),
      },
    },

    // rounded
    '.btn--rounded': {
      '--btn-border-radius': theme('borderRadius.full'),
    },
    '.btn--tile': {
      '--btn-border-radius': theme('borderRadius.none'),
    },

    // block
    '.btn--block': {
      display: 'flex',
      width: '100%',
    },

    // loading
    '.btn--loading': {
      pointerEvents: 'progress',
    },
  });
});

module.exports = btn;
