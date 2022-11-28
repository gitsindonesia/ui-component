const plugin = require('tailwindcss/plugin');

const badge = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--badge-bg-color': theme('colors.gray.100'),
      '--badge-color': theme('colors.gray.800'),
      '--badge-border-style': 'solid',
      '--badge-border-width': theme('borderWidth.DEFAULT'),
      '--badge-border-color': theme('borderColor.transparent'),
      '--badge-border-radius': theme('borderRadius.DEFAULT'),
      '--badge-padding-x': theme('padding.2'),
      '--badge-padding-y': theme('padding.1'),
      '--badge-font-size': theme('fontSize.xs'),
      '--badge-font-weight': theme('fontWeight.semibold'),
    },
    '.badge': {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      backgroundColor: 'var(--badge-bg-color)',
      color: 'var(--badge-color)',
      borderRadius: 'var(--badge-border-radius)',
      borderWidth: 'var(--badge-border-width)',
      borderStyle: 'var(--badge-border-style)',
      borderColor: 'var(--badge-border-color)',
      padding: 'var(--badge-padding-y) var(--badge-padding-x)',
      fontSize: 'var(--badge-font-size)',
      fontWeight: 'var(--badge-font-weight)',
    },

    // elements
    '.badge-dismiss-button': {
      backgroundColor: 'transparent',
      borderRadius: theme('borderRadius.sm'),
      padding: 0,
    },
    '.badge-icon': {
      width: theme('width.4'),
      height: theme('height.4'),
    },

    // modifiers
    '.badge--outlined': {
      borderStyle: 'var(--badge-border-style)',
      borderWidth: 'var(--badge-border-width)',
      borderColor: 'var(--badge-border-color)',
      backgroundColor: 'transparent',
    },

    '.badge--sm': {
      '--badge-padding-x': theme('padding.1'),
      '--badge-padding-y': theme('padding.0.5'),
      '--badge-font-size': 10,
    },

    '.badge--lg': {
      '--badge-padding-x': theme('padding.2'),
      '--badge-padding-y': theme('padding.1'),
      '--badge-font-size': theme('fontSize.sm'),
    },

    /* Rounded */
    '.badge--rounded': {
      borderRadius: theme('borderRadius.DEFAULT'),
    },
    '.badge--rounded-sm': {
      borderRadius: theme('borderRadius.sm'),
    },
    '.badge--rounded-md': {
      borderRadius: theme('borderRadius.md'),
    },
    '.badge--rounded-lg': {
      borderRadius: theme('borderRadius.lg'),
    },
    '.badge--rounded-xl': {
      borderRadius: theme('borderRadius.xl'),
    },
    '.badge--rounded-2xl': {
      borderRadius: theme('borderRadius.2xl'),
    },
    '.badge--rounded-3xl': {
      borderRadius: theme('borderRadius.inner'),
    },
    '.badge--rounded-none': {
      borderRadius: theme('borderRadius.none'),
    },
    '.badge--rounded-full': {
      borderRadius: theme('borderRadius.full'),
    },

    /* Colors */
    '.badge-primary': {
      '--badge-bg-color': theme('colors.primary.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.primary.500'),
    },
    '.badge-secondary': {
      '--badge-bg-color': theme('colors.secondary.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.secondary.500'),
    },
    '.badge-info': {
      '--badge-bg-color': theme('colors.info.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.info.500'),
    },
    '.badge-warning': {
      '--badge-bg-color': theme('colors.warning.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.warning.500'),
    },
    '.badge-success': {
      '--badge-bg-color': theme('colors.success.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.success.500'),
    },
    '.badge-error': {
      '--badge-bg-color': theme('colors.error.500'),
      '--badge-color': theme('colors.white'),
      '--badge-border-color': theme('colors.error.500'),
    },

    /* Outlined Colors */
    '.badge--outlined.badge-default': {
      '--badge-color': theme('colors.gray.800'),
      '--badge-border-color': theme('colors.gray.800'),
    },
    '.badge--outlined.badge-primary': {
      '--badge-color': theme('colors.primary.500'),
      '--badge-border-color': theme('colors.primary.500'),
    },
    '.badge--outlined.badge-secondary': {
      '--badge-color': theme('colors.secondary.500'),
      '--badge-border-color': theme('colors.secondary.500'),
    },
    '.badge--outlined.badge-info': {
      '--badge-color': theme('colors.info.500'),
      '--badge-border-color': theme('colors.info.500'),
    },
    '.badge--outlined.badge-warning': {
      '--badge-color': theme('colors.warning.500'),
      '--badge-border-color': theme('colors.warning.500'),
    },
    '.badge--outlined.badge-success': {
      '--badge-color': theme('colors.success.500'),
      '--badge-border-color': theme('colors.success.500'),
    },
    '.badge--outlined.badge-error': {
      '--badge-color': theme('colors.error.500'),
      '--badge-border-color': theme('colors.error.500'),
    },
  });
});

module.exports = badge;
