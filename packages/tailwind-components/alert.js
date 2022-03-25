const plugin = require('tailwindcss/plugin')

const alertPlugin = plugin(function({ addComponents, theme }) {
  addComponents({
    '.alert': {
      padding: '0.75rem 1rem',
      borderWidth: '1px',
      borderRadius: '0.375rem',
    },
    // default variants
    '.alert-default': {
      borderColor: theme('colors.gray.500'),
      color: theme('colors.gray.500'),
      backgroundColor: theme('colors.white')
    },
    '.alert-primary': {
      borderColor: theme('colors.primary.500'),
      color: theme('colors.primary.500'),
      backgroundColor: theme('colors.primary.100'),
    },
    '.alert-secondary': {
      borderColor: theme('colors.secondary.500'),
      color: theme('colors.secondary.500'),
      backgroundColor: theme('colors.secondary.100'),
    },
    '.alert-info': {
      borderColor: theme('colors.info.500'),
      color: theme('colors.info.500'),
      backgroundColor: theme('colors.info.100'),
    },
    '.alert-warning': {
      borderColor: theme('colors.warning.500'),
      color: theme('colors.warning.500'),
      backgroundColor: theme('colors.warning.100'),
    },
    '.alert-success': {
      borderColor: theme('colors.success.500'),
      color: theme('colors.success.500'),
      backgroundColor: theme('colors.success.100'),
    },
    '.alert-error': {
      borderColor: theme('colors.error.500'),
      color: theme('colors.error.500'),
      backgroundColor: theme('colors.error.100'),
    },
    '.alert-dark': {
      borderColor: theme('colors.gray.500'),
      color: theme('colors.gray.500'),
      backgroundColor: theme('colors.gray.100'),
    },
    // outlined variants
    '.alert-outlined': {
      borderColor: 'transparent',
    },
    '.alert-outlined-default': {
      borderColor: theme('colors.gray.500'),
    },
    '.alert-outlined-primary': {
      borderColor: theme('colors.primary.500'),
      color: theme('colors.primary.500'),
    },
    '.alert-outlined-secondary': {
      borderColor: theme('colors.secondary.500'),
      color: theme('colors.secondary.500'),
    },
    '.alert-outlined-info': {
      borderColor: theme('colors.info.500'),
      color: theme('colors.info.500'),
    },
    '.alert-outlined-warning': {
      borderColor: theme('colors.warning.500'),
      color: theme('colors.warning.500'),
    },
    '.alert-outlined-success': {
      borderColor: theme('colors.success.500'),
      color: theme('colors.success.500'),
    },
    '.alert-outlined-error': {
      borderColor: theme('colors.error.500'),
      color: theme('colors.error.500'),
    },
    '.alert-outlined-dark': {
      borderColor: theme('colors.gray.800'),
      color: theme('colors.gray.800'),
    },
    // solid variants
    '.alert-solid': {
      borderColor: 'transparent',
    },
    '.alert-solid-default': {
      borderColor: theme('colors.gray.500'),
      backgroundColor: theme('colors.white')
    },
    '.alert-solid-primary': {
      borderColor: theme('colors.primary.500'),
      backgroundColor: theme('colors.primary.500'),
      color: theme('colors.white')
    },
    '.alert-solid-secondary': {
      borderColor: theme('colors.secondary.500'),
      backgroundColor: theme('colors.secondary.500'),
      color: theme('colors.white')
    },
    '.alert-solid-info': {
      borderColor: theme('colors.info.500'),
      backgroundColor: theme('colors.info.500'),
      color: theme('colors.white')
    },
    '.alert-solid-warning': {
      borderColor: theme('colors.warning.500'),
      backgroundColor: theme('colors.secondary.500'),
      color: theme('colors.white')
    },
    '.alert-solid-success': {
      borderColor: theme('colors.success.500'),
      backgroundColor: theme('colors.success.500'),
      color: theme('colors.white')
    },
    '.alert-solid-error': {
      borderColor: theme('colors.error.500'),
      backgroundColor: theme('colors.error.500'),
      color: theme('colors.white')
    },
    '.alert-solid-dark': {
      borderColor: theme('colors.gray.500'),
      backgroundColor: theme('colors.gray.800'),
      color: theme('colors.white')
    },
  })
})

module.exports = alertPlugin