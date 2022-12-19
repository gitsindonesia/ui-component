const plugin = require('tailwindcss/plugin');
const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

const btn = plugin(function ({addComponents, theme}) {
  const colorVariant = (color) => ({
    [`&.btn-${color}:not(.btn--outlined):not(.btn--text):not(:disabled)`]: {
      '--btn-bg-color': theme(`colors.${color}.500`),
      '--btn-text-color': theme('colors.white'),
      '--btn-border-color': theme(`colors.${color}.500`),
      '&:hover:not(:disabled)': {
        '--btn-bg-color': theme(`colors.${color}.600`),
        '--btn-border-color': theme(`colors.${color}.600`),
        '--btn-text-color': theme('colors.white'),
      },
    },
  });

  const outlinedVariant = (color) => {
    return {
      [`&.btn-${color}:not(:disabled)`]: {
        '--btn-bg-color': theme('colors.white'),
        '--btn-text-color': theme(`colors.${color}.500`),
        '--btn-border-color': theme(`colors.${color}.500`),
        '&:hover:not(:disabled)': {
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

  const disabledVariant = () => {
    return {
      '&:disabled:not(.btn--outlined)': {
        cursor: 'not-allowed',
        '--btn-bg-color': theme('colors.gray.200'),
        '--btn-text-color': theme('colors.gray.500'),
        '--btn-border-color': theme('colors.gray.200'),
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
      '--btn-font-size': theme('fontSize.sm'),
      '--btn-font-weight': theme('fontWeight.semibold'),
      '--btn-shadow': theme('boxShadow.none'),
      '--btn-icon-width': theme('spacing.5'),
      '--btn-icon-height': theme('spacing.5'),
      '--btn-width': theme('width.auto'),
      '--btn-height': theme('width.auto'),
      '--btn-transition': 'all 0.2s ease-in-out',
      '--btn-sm-height': 32,
      '--btn-md-height': 44,
      '--btn-lg-height': 52,
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
      transition: 'var(--btn-transition)',

      '&:not(.btn--flush)': {
        padding: 'var(--btn-padding-y) var(--btn-padding-x)',
        width: 'var(--btn-width)',
        height: 'var(--btn-height)',
      },

      // disabled
      '&:disabled': disabledVariant(),

      // colors
      '&.btn-default:not(.btn--outlined):not(.btn--text):not(:disabled)': {
        '--btn-bg-color': theme('colors.white'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover': {
          '--btn-bg-color': theme('colors.gray.100'),
          '--btn-border-color': theme('colors.gray.900'),
        },
      },
      '&.btn-dark:not(.btn--outlined):not(.btn--text):not(:disabled)': {
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

    // flush
    '.btn--flush': {
      padding: 0,
      '--btn-height': 'auto',
    },

    // outlined
    '.btn--outlined': {
      '&:disabled': {
        cursor: 'not-allowed',
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-text-color': theme('colors.gray.500'),
        '--btn-border-color': theme('colors.gray.200'),
      },

      '&.btn-default:not(:disabled)': {
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover:not(:disabled)': {
          '--btn-bg-color': theme('colors.gray.900'),
          '--btn-border-color': theme('colors.gray.900'),
          '--btn-text-color': theme('colors.white'),
        },
      },
      '&.btn-dark:not(:disabled)': {
        '--btn-bg-color': theme('colors.transparent'),
        '--btn-text-color': theme('colors.gray.800'),
        '--btn-border-color': theme('colors.gray.800'),
        '&:hover:not(:disabled)': {
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
    '.btn--sm': {
      '--btn-padding-x': theme('spacing.3'),
      '--btn-padding-y': theme('spacing.1'),
      '--btn-height': 'var(--btn-sm-height)',
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.4'),
        '--btn-icon-height': theme('spacing.4'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': 'var(--btn-sm-height)',
        '--btn-height': 'var(--btn-sm-height)',
      },
    },
    '.btn--md': {
      '--btn-padding-x': theme('spacing.4'),
      '--btn-padding-y': theme('spacing.3'),
      '--btn-height': 'var(--btn-md-height)',
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.5'),
        '--btn-icon-height': theme('spacing.5'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': 'var(--btn-md-height)',
        '--btn-height': 'var(--btn-md-height)',
      },
    },
    '.btn--lg': {
      '--btn-padding-x': theme('spacing.6'),
      '--btn-padding-y': theme('spacing.4'),
      '--btn-height': 'var(--btn-lg-height)',
      // icon size
      '.btn-icon': {
        '--btn-icon-width': theme('spacing.6'),
        '--btn-icon-height': theme('spacing.6'),
      },
      // fab
      '&.btn--fab': {
        '--btn-width': 'var(--btn-lg-height)',
        '--btn-height': 'var(--btn-lg-height)',
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

  // button group
  addComponents({
    '.v-btn-group': {
      display: 'inline-flex',
      '& > .btn': {
        '--btn-border-radius': theme('borderRadius.none'),
        'margin-left': '-1px',
        '&:first-child': {
          '--btn-border-radius':
            theme('borderRadius.DEFAULT') +
            ' 0 0 ' +
            theme('borderRadius.DEFAULT'),
        },
        '&:last-child': {
          '--btn-border-radius':
            '0 ' +
            theme('borderRadius.DEFAULT') +
            ' ' +
            theme('borderRadius.DEFAULT') +
            ' 0',
        },
        '&:not(:first-child):not(:last-child)': {
          '--btn-border-radius': '0',
        },
      },
    },
  });

  // button toolbar
  addComponents({
    '.v-btn-toolbar': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme('spacing.2'),
      alignItems: 'flex-end',
    },
  });
});

module.exports = btn;
