const plugin = require('tailwindcss/plugin');

const dropdown = plugin(function ({addComponents, theme}) {
  addComponents({
    ':root': {
      '--dropdown-bg-color': theme('colors.white'),
    },
    '.dropdown': {
      position: 'relative',
      display: 'inline-block',
      textAlign: 'left',
    },
    '.dropdown-panel': {
      position: 'absolute',
      zIndex: theme('zIndex.10'),
      padding: theme('spacing.1'),
      width: theme('width.56'),
      marginTop: theme('spacing.2'),
      backgroundColor: theme('colors.white'),
      borderRadius: theme('borderRadius.md'),
      boxShadow: theme('boxShadow.lg'),
      '&:focus': {
        outline: 'none',
      },
    },
    '.dropdown-divider': {
      height: theme('borderWidth.1'),
      borderWidth: theme('borderWidth.1'),
      borderColor: theme('colors.gray.200'),
      borderStyle: 'solid',
      marginTop: theme('spacing.1'),
      marginBottom: theme('spacing.1'),
      marginLeft: theme('spacing.-1'),
      marginRight: theme('spacing.-1'),
    },
    '.dropdown-item': {
      display: 'flex',
      gap: theme('spacing.2'),
      borderRadius: theme('borderRadius.md'),
      alignItems: 'center',
      width: '100%',
      padding: theme('spacing.2'),
    },
    '.dropdown-item--active': {
      backgroundColor: theme('colors.gray.200'),
    },
    '.dropdown-item-icon': {
      width: theme('width.5'),
      height: theme('height.5'),
    },
  });
});

module.exports = dropdown;
