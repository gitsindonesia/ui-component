const plugin = require('tailwindcss/plugin');

const avatar = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--avatar-width': 28,
      '--avatar-height': 28,
      '--avatar-bg-color': theme('colors.gray.200'),
      '--avatar-text-color': theme('colors.gray.800'),
      '--avatar-border-color': theme('colors.gray.200'),
      '--avatar-border-width': theme('borderWidth.DEFAULT'),
      '--avatar-border-style': 'solid',
      '--avatar-border-radius': theme('borderRadius.full'),
      '--avatar-font-weight': 600,
      '--avatar-font-size': theme('fontSize.base'),
      '--avatar-text-transform': 'uppercase',
    },
    '.avatar': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontWeight: 'var(--avatar-font-weight)',
      borderWidth: 'var(--avatar-border-width)',
      borderColor: 'var(--avatar-border-color)',
      borderStyle: 'var(--avatar-border-style)',
      width: 'var(--avatar-width)',
      height: 'var(--avatar-height)',
      borderRadius: 'var(--avatar-border-radius)',
      backgroundColor: 'var(--avatar-bg-color)',
      color: 'var(--avatar-text-color)',
      fontSize: 'var(--avatar-font-size)',
      textTransform: 'var(--avatar-text-transform)',
    },
    /* shapes */
    '.avatar-square, .avatar-square .avatar-image': {
      '--avatar-border-radius': theme('borderRadius.none'),
    },
    '.avatar-circle, .avatar-circle .avatar-image': {
      '--avatar-border-radius': theme('borderRadius.full'),
    },
    '.avatar-rounded, .avatar-rounded .avatar-image': {
      '--avatar-border-radius': theme('borderRadius.DEFAULT'),
    },
    /* colors */
    '.avatar-primary': {
      '--avatar-bg-color': theme('colors.primary.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    '.avatar-secondary': {
      '--avatar-bg-color': theme('colors.secondary.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    '.avatar-warning': {
      '--avatar-bg-color': theme('colors.warning.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    '.avatar-info': {
      '--avatar-bg-color': theme('colors.info.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    '.avatar-error': {
      '--avatar-bg-color': theme('colors.error.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    '.avatar-success': {
      '--avatar-bg-color': theme('colors.success.500'),
      '--avatar-text-color': theme('colors.white'),
    },
    /* sizes */
    '.avatar-xxs, .avatar-xxs .avatar-image': {
      '--avatar-width': 16,
      '--avatar-height': 16,
      '--avatar-font-size': 8,
    },
    '.avatar-xs, .avatar-xs .avatar-image': {
      '--avatar-width': 20,
      '--avatar-height': 20,
      '--avatar-font-size': 10,
    },
    '.avatar-sm, .avatar-sm .avatar-image': {
      '--avatar-width': 24,
      '--avatar-height': 24,
      '--avatar-font-size': 12,
    },
    '.avatar-md, .avatar-md .avatar-image': {
      '--avatar-width': 28,
      '--avatar-height': 28,
      '--avatar-font-size': 14,
    },
    '.avatar-lg, .avatar-lg .avatar-image': {
      '--avatar-width': 32,
      '--avatar-height': 32,
      '--avatar-font-size': 14,
    },
    '.avatar-xl, .avatar-xl .avatar-image': {
      '--avatar-width': 40,
      '--avatar-height': 40,
      '--avatar-font-size': 16,
    },
    /* image */
    '.avatar-image': {
      objectFit: 'cover',
    },
    // initial
    '.avatar-initial': {
      '--avatar-font-weight': 600,
    },
  });
});

module.exports = avatar;
