const plugin = require('tailwindcss/plugin')

const buttonPlugin = plugin(function({ addComponents, theme }) {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.5rem',
      fontWeight: '600',
      transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:disabled': {
        backgroundColor: theme('colors.gray.300'),
        borderColor: theme('colors.gray.300'),
        color: theme('colors.gray.400'),
        cursor: 'not-allowed'
      },
      '&:disabled:hover': {
        backgroundColor: theme('colors.gray.300'),
        borderColor: theme('colors.gray.300'),
        color: theme('colors.gray.400'),
      },
      '&:active': {
        backgroundColor: theme('colors.gray.300'),
        borderColor: theme('colors.gray.300'),
        color: theme('colors.gray.400'),
      }
    },
    '.btn-default': {
      backgroundColor: 'white',
      color: 'black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme('colors.gray.500'),
      '&:hover': {
        borderColor: theme('colors.gray.600'),
      },
      '&:active': {
        color: theme('colors.gray.400'),
        borderColor: theme('colors.gray.400'),
      },
    },
    // primary
    '.btn-primary': {
      color: '#fff',
      backgroundColor: theme('colors.primary.500'),
      borderColor: theme('colors.primary.500'),
      '&:hover': {
        borderColor: theme('colors.primary.600'),
        backgroundColor: theme('colors.primary.600'),
      },
      '&:active': {
        borderColor: theme('colors.primary.400'),
        backgroundColor: theme('colors.primary.400'),
      },
    },
    // secondary
    '.btn-secondary': {
      color: '#fff',
      backgroundColor: theme('colors.secondary.500'),
      borderColor: theme('colors.secondary.500'),
      '&:hover': {
        borderColor: theme('colors.secondary.600'),
        backgroundColor: theme('colors.secondary.600'),
      },
      '&:active': {
        borderColor: theme('colors.secondary.400'),
        backgroundColor: theme('colors.secondary.400'),
      },
    },
    // info
    '.btn-info': {
      color: '#fff',
      backgroundColor: theme('colors.info.500'),
      borderColor: theme('colors.info.500'),
      '&:hover': {
        borderColor: theme('colors.info.600'),
        backgroundColor: theme('colors.info.600'),
      },
      '&:active': {
        borderColor: theme('colors.info.400'),
        backgroundColor: theme('colors.info.400'),
      },
    },
    // warning
    '.btn-warning': {
      color: '#fff',
      backgroundColor: theme('colors.warning.500'),
      borderColor: theme('colors.warning.500'),
      '&:hover': {
        borderColor: theme('colors.warning.600'),
        backgroundColor: theme('colors.warning.600'),
      },
      '&:active': {
        borderColor: theme('colors.warning.400'),
        backgroundColor: theme('colors.warning.400'),
      },
    },
    // error
    '.btn-error': {
      color: '#fff',
      backgroundColor: theme('colors.error.500'),
      borderColor: theme('colors.error.500'),
      '&:hover': {
        borderColor: theme('colors.error.600'),
        backgroundColor: theme('colors.error.600'),
      },
      '&:active': {
        borderColor: theme('colors.error.400'),
        backgroundColor: theme('colors.error.400'),
      },
    },
    // success
    '.btn-success': {
      color: '#fff',
      backgroundColor: theme('colors.success.500'),
      borderColor: theme('colors.success.500'),
      '&:hover': {
        borderColor: theme('colors.success.600'),
        backgroundColor: theme('colors.success.600'),
      },
      '&:active': {
        borderColor: theme('colors.success.400'),
        backgroundColor: theme('colors.success.400'),
      },
    },
    // dark
    '.btn-dark': {
      color: '#fff',
      backgroundColor: theme('colors.gray.800'),
      borderColor: theme('colors.gray.800'),
      '&:hover': {
        borderColor: theme('colors.gray.900'),
        backgroundColor: theme('colors.gray.900'),
      },
      '&:active': {
        borderColor: theme('colors.gray.700'),
        backgroundColor: theme('colors.gray.700'),
      },
    },
    
    // OUTLINED
    // primary
    '.btn-outlined-primary': {
      color: theme('colors.primary.500'),
      borderColor: theme('colors.primary.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.primary.500'),
        backgroundColor: theme('colors.primary.500'),
      },
      '&:active': {
        borderColor: theme('colors.primary.400'),
        backgroundColor: theme('colors.primary.400'),
      },
    },
    // secondary
    '.btn-outlined-secondary': {
      color: theme('colors.secondary.500'),
      borderColor: theme('colors.secondary.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.secondary.500'),
        backgroundColor: theme('colors.secondary.500'),
      },
      '&:active': {
        borderColor: theme('colors.secondary.400'),
        backgroundColor: theme('colors.secondary.400'),
      },
    },
    // info
    '.btn-outlined-info': {
      color: theme('colors.info.500'),
      borderColor: theme('colors.info.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.info.500'),
        backgroundColor: theme('colors.info.500'),
      },
      '&:active': {
        borderColor: theme('colors.info.400'),
        backgroundColor: theme('colors.info.400'),
      },
    },
    // warning
    '.btn-outlined-warning': {
      color: theme('colors.warning.500'),
      borderColor: theme('colors.warning.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.warning.500'),
        backgroundColor: theme('colors.warning.500'),
      },
      '&:active': {
        borderColor: theme('colors.warning.400'),
        backgroundColor: theme('colors.warning.400'),
      },
    },
    // success
    '.btn-outlined-success': {
      color: theme('colors.success.500'),
      borderColor: theme('colors.success.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.success.500'),
        backgroundColor: theme('colors.success.500'),
      },
      '&:active': {
        borderColor: theme('colors.success.400'),
        backgroundColor: theme('colors.success.400'),
      },
    },
    // error
    '.btn-outlined-error': {
      color: theme('colors.error.500'),
      borderColor: theme('colors.error.500'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.error.500'),
        backgroundColor: theme('colors.error.500'),
      },
      '&:active': {
        borderColor: theme('colors.error.400'),
        backgroundColor: theme('colors.error.400'),
      },
    },
    // dark
    '.btn-outlined-dark': {
      color: theme('colors.gray.800'),
      borderColor: theme('colors.gray.800'),
      '&:hover': {
        color: theme('colors.white'),
        borderColor: theme('colors.gray.900'),
        backgroundColor: theme('colors.gray.900'),
      },
      '&:active': {
        borderColor: theme('colors.gray.700'),
        backgroundColor: theme('colors.gray.700'),
      },
    },

    // TEXT
    // primary
    '.btn-text-primary': {
      color: theme('colors.primary.500'),
      '&:hover': {
        color: theme('colors.primary.600'),
      },
      '&:active': {
        color: theme('colors.primary.400'),
      },
    },
    // secondary
    '.btn-text-secondary': {
      color: theme('colors.secondary.500'),
      '&:hover': {
        color: theme('colors.secondary.600'),
      },
      '&:active': {
        color: theme('colors.secondary.400'),
      },
    },
    // info
    '.btn-text-info': {
      color: theme('colors.info.500'),
      '&:hover': {
        color: theme('colors.info.600'),
      },
      '&:active': {
        color: theme('colors.info.400'),
      },
    },
    // warning
    '.btn-text-warning': {
      color: theme('colors.warning.500'),
      '&:hover': {
        color: theme('colors.warning.600'),
      },
      '&:active': {
        color: theme('colors.warning.400'),
      },
    },
    // success
    '.btn-text-success': {
      color: theme('colors.success.500'),
      '&:hover': {
        color: theme('colors.success.600'),
      },
      '&:active': {
        color: theme('colors.success.400'),
      },
    },
    // error
    '.btn-text-error': {
      color: theme('colors.error.500'),
      '&:hover': {
        color: theme('colors.error.600'),
      },
      '&:active': {
        color: theme('colors.error.400'),
      },
    },
    // dark
    '.btn-text-dark': {
      color: theme('colors.gray.800'),
      '&:hover': {
        color: theme('colors.gray.900'),
      },
      '&:active': {
        color: theme('colors.gray.700'),
      },
    },

    // variants
    '.btn-rounded': {
      borderRadius: '9999px',
    },
    '.btn-tile': {
      borderRadius: '0px',
    },
    '.btn-outlined': {
      borderStyle: 'solid',
      borderWidth: '1px',
      backgroundColor: 'transparent',
    },
    '.btn-icon': {
      // padding: '.5rem !important',
      // borderRadius: '9999px'
    },
    '.btn-text': {
      border: 'none',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
    '.btn-xs': {
      padding: '.25rem .5rem',
      fontSize: '0.75rem'
    },
    '.btn-sm': {
      padding: '.35rem .7rem',
      fontSize: '0.875rem'
    },
    '.btn-md': {
      padding: '.5rem 1rem',
      fontSize: '1rem'
    },
    '.btn-lg': {
      padding: '.6rem 1.2rem',
      fontSize: '1.25rem'
    },
    '.btn-xl': {
      padding: '.7rem 1.4rem',
      fontSize: '2rem'
    },
  })
})

module.exports = buttonPlugin