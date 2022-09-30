const plugin = require('tailwindcss/plugin');

const alert = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--alert-bg-color': theme('colors.white'),
      '--alert-text-color': theme('colors.gray.800'),
      '--alert-border-radius': theme('borderRadius.md'),
      '--alert-border-color': theme('colors.gray.500'),
      '--alert-border-width': theme('borderWidth.DEFAULT'),
      '--alert-padding-x': theme('padding.4'),
      '--alert-padding-y': theme('padding.3'),
      '--alert-gap': '1rem',
    },
    // Block
    '.alert': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      gap: 'var(--alert-gap)',
      'background-color': 'var(--alert-bg-color)',
      color: 'var(--alert-text-color)',
      'border-color': 'var(--alert-border-color)',
      'border-radius': 'var(--alert-border-radius)',
      'border-width': 'var(--alert-border-width)',
      padding: 'var(--alert-padding-y) var(--alert-padding-x)',
    },
    // Element
    '.alert-content': {
      flex: 1,
    },
    '.alert-dismissable': {
      cursor: 'pointer',
    },
    '.alert-icon': {
      width: 24,
      height: 24,
    },
    '.alert-x-icon': {
      width: 24,
      height: 24,
    },
    // Colors
    '.alert-primary': {
      '--alert-bg-color': theme('colors.primary.100'),
      '--alert-text-color': theme('colors.primary.500'),
      '--alert-border-color': theme('colors.primary.500'),
    },
    '.alert-secondary': {
      '--alert-bg-color': theme('colors.secondary.100'),
      '--alert-text-color': theme('colors.secondary.500'),
      '--alert-border-color': theme('colors.secondary.500'),
    },
    '.alert-info': {
      '--alert-bg-color': theme('colors.info.100'),
      '--alert-text-color': theme('colors.info.500'),
      '--alert-border-color': theme('colors.info.500'),
    },
    '.alert-warning': {
      '--alert-bg-color': theme('colors.warning.100'),
      '--alert-text-color': theme('colors.warning.500'),
      '--alert-border-color': theme('colors.warning.500'),
    },
    '.alert-success': {
      '--alert-bg-color': theme('colors.success.100'),
      '--alert-text-color': theme('colors.success.500'),
      '--alert-border-color': theme('colors.success.500'),
    },
    '.alert-error': {
      '--alert-bg-color': theme('colors.error.100'),
      '--alert-text-color': theme('colors.error.500'),
      '--alert-border-color': theme('colors.error.500'),
    },
    '.alert-dark': {
      '--alert-bg-color': theme('colors.gray.800'),
      '--alert-text-color': theme('colors.white'),
      '--alert-border-color': theme('colors.gray.800'),
    },
    // Modifier
    // solid
    '.alert--solid': {
      '--alert-text-color': theme('colors.white'),
      '--alert-bg-color': theme('colors.gray.500'),
      // colors
      '.alert-primary': {
        '--alert-bg-color': theme('colors.primary.500'),
        '--alert-border-color': theme('colors.primary.500'),
      },
      '.alert-secondary': {
        '--alert-bg-color': theme('colors.secondary.500'),
        '--alert-border-color': theme('colors.secondary.500'),
      },
      '.alert-info': {
        '--alert-bg-color': theme('colors.info.500'),
        '--alert-border-color': theme('colors.info.500'),
      },
      '.alert-warning': {
        '--alert-bg-color': theme('colors.warning.500'),
        '--alert-border-color': theme('colors.warning.500'),
      },
      '.alert-success': {
        '--alert-bg-color': theme('colors.success.500'),
        '--alert-border-color': theme('colors.success.500'),
      },
      '.alert-error': {
        '--alert-bg-color': theme('colors.error.500'),
        '--alert-border-color': theme('colors.error.500'),
      },
      '.alert-dark': {
        '--alert-bg-color': theme('colors.gray.800'),
        '--alert-border-color': theme('colors.gray.800'),
      },
    },
    // outlined
    '.alert--outlined': {
      '--alert-text-color': theme('colors.gray.500'),
      '--alert-bg-color': theme('colors.transparent'),
      '--alert-border-width': theme('borderWidth.2'),
      // colors
      '.alert-primary': {
        '--alert-text-color': theme('colors.primary.500'),
      },
      '.alert-secondary': {
        '--alert-text-color': theme('colors.secondary.500'),
      },
      '.alert-info': {
        '--alert-text-color': theme('colors.info.500'),
      },
      '.alert-warning': {
        '--alert-text-color': theme('colors.warning.500'),
      },
      '.alert-success': {
        '--alert-text-color': theme('colors.success.500'),
      },
      '.alert-error': {
        '--alert-text-color': theme('colors.error.500'),
      },
      '.alert-dark': {
        '--alert-text-color': theme('colors.gray.800'),
      },
    },
    // bordered
    '.alert--bordered': {
      '--alert-border-width': theme('borderWidth.2'),
      // colors
      '.alert-primary': {
        '--alert-text-color': theme('colors.primary.500'),
      },
      '.alert-secondary': {
        '--alert-text-color': theme('colors.secondary.500'),
      },
      '.alert-info': {
        '--alert-text-color': theme('colors.info.500'),
      },
      '.alert-warning': {
        '--alert-text-color': theme('colors.warning.500'),
      },
      '.alert-success': {
        '--alert-text-color': theme('colors.success.500'),
      },
      '.alert-error': {
        '--alert-text-color': theme('colors.error.500'),
      },
      '.alert-dark': {
        '--alert-text-color': theme('colors.white'),
      },
    },
  });
});

module.exports = alert;
