const plugin = require('tailwindcss/plugin');
const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

const btn = plugin(function ({addComponents, theme}) {
  const colorVariant = (color) => ({
    [`&.btn-${color}:not(.btn--outlined):not(.btn--text)`]: {
      '--btn-bg-color': theme(`colors.${color}.500`),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme(`colors.${color}.500`),
      '&:hover': {
        '--btn-bg-color': theme(`colors.${color}.600`),
        '--btn-border-color': theme(`colors.${color}.600`),
        '--btn-text-color': theme('colors.white'),
      },
    },
  });

  const outlinedVariant = (color) => {
    return {
      [`&.btn-${color}`]: {
        '--btn-bg-color': theme('colors.white'),
        '--btn-text-color': theme(`colors.${color}.500`),
        '--btn-border-color': theme(`colors.${color}.500`),
        '&:hover': {
          '--btn-bg-color': theme(`colors.${color}.700`),
          '--btn-border-color': theme(`colors.${color}.700`),
          '--btn-text-color': theme('colors.white'),
        },
      },
    };
  };

  const textVariant = (color) => {
    return {
      [`&.btn-${color}`]: {
        '--btn-text-color': theme(`colors.${color}.500`),
        '&:hover': {
          '--btn-text-color': theme(`colors.${color}.600`),
        },
        '&:active': {
          '--btn-text-color': theme(`colors.${color}.400`),
        },
      },
    };
  };

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
      '--btn-font-weight': theme('fontWeight.medium'),
      '--btn-shadow': theme('boxShadow.none'),
      '--btn-icon-width': theme('spacing.5'),
      '--btn-icon-height': theme('spacing.5'),
      '--btn-width': theme('width.auto'),
      '--btn-height': theme('width.auto'),
    },
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.3'),
      backgroundColor: 'var(--btn-bg-color)',
      color: 'var(--btn-text-color)',
      fontWeight: 'var(--btn-font-weight)',
      lineHeight: 'var(--btn-line-height)',
      fontSize: 'var(--btn-font-size)',
      borderRadius: 'var(--btn-border-radius)',
      borderWidth: 'var(--btn-border-width)',
      borderColor: 'var(--btn-border-color)',
      padding: 'var(--btn-padding-y) var(--btn-padding-x)',
      transition: 'all 0.2s ease-in-out',
      width: 'var(--btn-width)',
      height: 'var(--btn-height)',

      // disabled
      '&:disabled': {
        opacity: 0.5,
      },

      // colors
      '&.btn-default:not(.btn--outlined):not(.btn--text)': {
        '--btn-bg-color': theme('colors.white'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-bg-color': theme('colors.gray.100'),
          '--btn-border-color': theme('colors.gray.900'),
        },
      },
      '&.btn-dark:not(.btn--outlined):not(.btn--text)': {
        '--btn-bg-color': theme('colors.gray.800'),
        '--btn-text-color': theme('colors.white'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-bg-color': theme('colors.gray.900'),
          '--btn-border-color': theme('colors.gray.900'),
          '--btn-text-color': theme('colors.white'),
        },
      },
      ...colorVariant('primary'),
      ...colorVariant('secondary'),
      ...colorVariant('info'),
      ...colorVariant('warning'),
      ...colorVariant('success'),
      ...colorVariant('error'),
    },

    // outlined
    '.btn--outlined': {
      '&.btn-default': {
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-bg-color': theme('colors.gray.900'),
          '--btn-border-color': theme('colors.gray.900'),
          '--btn-text-color': theme('colors.white'),
        },
      },
      '&.btn-dark': {
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-bg-color': theme('colors.gray.900'),
          '--btn-border-color': theme('colors.gray.900'),
          '--btn-text-color': theme('colors.white'),
        },
      },
      ...outlinedVariant('primary'),
      ...outlinedVariant('secondary'),
      ...outlinedVariant('info'),
      ...outlinedVariant('warning'),
      ...outlinedVariant('success'),
      ...outlinedVariant('error'),
    },

    // text
    '.btn--text': {
      '--btn-bg-color': theme('colors.transparent'),
      '--btn-border-color': theme('colors.transparent'),
      '&:hover': {
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-border-color': theme('colors.transparent'),
      },
      '&.btn-default': {
        '--btn-text-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-text-color': theme('colors.gray.900'),
        },
      },
      '&.btn-dark': {
        '--btn-text-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-text-color': theme('colors.gray.900'),
        },
      },
      ...textVariant('primary'),
      ...textVariant('secondary'),
      ...textVariant('info'),
      ...textVariant('warning'),
      ...textVariant('success'),
      ...textVariant('error'),
    },

    // sizes
    '.btn--xxs': {
      '--btn-padding-x': theme('spacing.1'),
      '--btn-padding-y': theme('spacing.1'),
      '--btn-font-size': 10,
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.3'),
        '--btn-icon-height': theme('spacing.3'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.6'),
        '--btn-height': theme('width.6'),
      },
    },
    '.btn--xs': {
      '--btn-padding-x': theme('spacing.2'),
      '--btn-padding-y': theme('spacing.1'),
      '--btn-font-size': theme('fontSize.xs'),
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.4'),
        '--btn-icon-height': theme('spacing.4'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.8'),
        '--btn-height': theme('width.8'),
      },
    },
    '.btn--sm': {
      '--btn-padding-x': theme('spacing.3'),
      '--btn-padding-y': theme('spacing.2'),
      '--btn-font-size': theme('fontSize.sm'),
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.5'),
        '--btn-icon-height': theme('spacing.5'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.10'),
        '--btn-height': theme('width.10'),
      },
    },
    '.btn--md': {
      '--btn-padding-x': theme('spacing.4'),
      '--btn-padding-y': theme('spacing.2'),
      '--btn-font-size': theme('fontSize.base'),
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.6'),
        '--btn-icon-height': theme('spacing.6'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.12'),
        '--btn-height': theme('width.12'),
      },
    },
    '.btn--lg': {
      '--btn-padding-x': theme('spacing.5'),
      '--btn-padding-y': theme('spacing.3'),
      '--btn-font-size': theme('fontSize.lg'),
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.7'),
        '--btn-icon-height': theme('spacing.7'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.16'),
        '--btn-height': theme('width.16'),
      },
    },
    '.btn--xl': {
      '--btn-padding-x': theme('spacing.6'),
      '--btn-padding-y': theme('spacing.4'),
      '--btn-font-size': theme('fontSize.xl'),
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.8'),
        '--btn-icon-height': theme('spacing.8'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': theme('width.20'),
        '--btn-height': theme('width.20'),
      },
    },

    // ring
    '.btn--ring': {
      '&:focus': {
        '--btn-ring-width': theme('ring.width.DEFAULT'),
        '--btn-ring-color': theme('ring.colors.DEFAULT'),
      },
    },

    // rounded
    '.btn--rounded': {
      '--btn-border-radius': theme('borderRadius.full'),
    },

    // FAB
    '.btn--fab': {
      '--btn-border-radius': theme('borderRadius.full'),
      '--btn-width': 'var(--btn-width)',
      '--btn-height': 'var(--btn-height)',
      '--btn-padding-x': theme('spacing.1'),
      '--btn-padding-y': theme('spacing.1'),
    },

    // flat tile
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

    // icon
    '.btn-icon': {
      width: 'var(--btn-icon-width)',
      height: 'var(--btn-icon-height)',
    },
  });
});

module.exports = btn;
