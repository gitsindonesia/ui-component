const plugin = require('tailwindcss/plugin')
const colors = require('../../theme/colors')

const vBtnPlugin = plugin(function({ addUtilities, addComponents, theme, ...rest }) {
  addUtilities({
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
        backgroundColor: colors.gray[300],
        borderColor: colors.gray[300],
        color: colors.gray[400],
        cursor: 'not-allowed'
      },
      '&:disabled:hover': {
        backgroundColor: colors.gray[300],
        borderColor: colors.gray[300],
        color: colors.gray[400],
      },
      '&:active': {
        backgroundColor: colors.gray[300],
        borderColor: colors.gray[300],
        color: colors.gray[400],
      }
    },
    '.btn-default': {
      backgroundColor: 'white',
      color: 'black',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.gray[500],
      '&:hover': {
        borderColor: colors.gray[600],
      },
      '&:active': {
        color: colors.gray[400],
        borderColor: colors.gray[400],
      },
    },
    // primary
    '.btn-primary': {
      color: '#fff',
      backgroundColor: colors.primary[500],
      borderColor: colors.primary[500],
      '&:hover': {
        borderColor: colors.primary[600],
        backgroundColor: colors.primary[600],
      },
      '&:active': {
        borderColor: colors.primary[400],
        backgroundColor: colors.primary[400],
      },
    },
    // secondary
    '.btn-secondary': {
      color: '#fff',
      backgroundColor: colors.secondary[500],
      borderColor: colors.secondary[500],
      '&:hover': {
        borderColor: colors.secondary[600],
        backgroundColor: colors.secondary[600],
      },
      '&:active': {
        borderColor: colors.secondary[400],
        backgroundColor: colors.secondary[400],
      },
    },
    // info
    '.btn-info': {
      color: '#fff',
      backgroundColor: colors.info[500],
      borderColor: colors.info[500],
      '&:hover': {
        borderColor: colors.info[600],
        backgroundColor: colors.info[600],
      },
      '&:active': {
        borderColor: colors.info[400],
        backgroundColor: colors.info[400],
      },
    },
    // warning
    '.btn-warning': {
      color: '#fff',
      backgroundColor: colors.warning[500],
      borderColor: colors.warning[500],
      '&:hover': {
        borderColor: colors.warning[600],
        backgroundColor: colors.warning[600],
      },
      '&:active': {
        borderColor: colors.warning[400],
        backgroundColor: colors.warning[400],
      },
    },
    // error
    '.btn-error': {
      color: '#fff',
      backgroundColor: colors.error[500],
      borderColor: colors.error[500],
      '&:hover': {
        borderColor: colors.error[600],
        backgroundColor: colors.error[600],
      },
      '&:active': {
        borderColor: colors.error[400],
        backgroundColor: colors.error[400],
      },
    },
    // success
    '.btn-success': {
      color: '#fff',
      backgroundColor: colors.success[500],
      borderColor: colors.success[500],
      '&:hover': {
        borderColor: colors.success[600],
        backgroundColor: colors.success[600],
      },
      '&:active': {
        borderColor: colors.success[400],
        backgroundColor: colors.success[400],
      },
    },
    // dark
    '.btn-dark': {
      color: '#fff',
      backgroundColor: colors.gray[800],
      borderColor: colors.gray[800],
      '&:hover': {
        borderColor: colors.gray[900],
        backgroundColor: colors.gray[900],
      },
      '&:active': {
        borderColor: colors.gray[700],
        backgroundColor: colors.gray[700],
      },
    },
    
    // OUTLINED
    // primary
    '.btn-outlined-primary': {
      color: colors.primary[500],
      borderColor: colors.primary[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.primary[500],
        backgroundColor: colors.primary[500],
      },
      '&:active': {
        borderColor: colors.primary[400],
        backgroundColor: colors.primary[400],
      },
    },
    // secondary
    '.btn-outlined-secondary': {
      color: colors.secondary[500],
      borderColor: colors.secondary[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.secondary[500],
        backgroundColor: colors.secondary[500],
      },
      '&:active': {
        borderColor: colors.secondary[400],
        backgroundColor: colors.secondary[400],
      },
    },
    // info
    '.btn-outlined-info': {
      color: colors.info[500],
      borderColor: colors.info[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.info[500],
        backgroundColor: colors.info[500],
      },
      '&:active': {
        borderColor: colors.info[400],
        backgroundColor: colors.info[400],
      },
    },
    // warning
    '.btn-outlined-warning': {
      color: colors.warning[500],
      borderColor: colors.warning[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.warning[500],
        backgroundColor: colors.warning[500],
      },
      '&:active': {
        borderColor: colors.warning[400],
        backgroundColor: colors.warning[400],
      },
    },
    // success
    '.btn-outlined-success': {
      color: colors.success[500],
      borderColor: colors.success[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.success[500],
        backgroundColor: colors.success[500],
      },
      '&:active': {
        borderColor: colors.success[400],
        backgroundColor: colors.success[400],
      },
    },
    // error
    '.btn-outlined-error': {
      color: colors.error[500],
      borderColor: colors.error[500],
      '&:hover': {
        color: colors.white,
        borderColor: colors.error[500],
        backgroundColor: colors.error[500],
      },
      '&:active': {
        borderColor: colors.error[400],
        backgroundColor: colors.error[400],
      },
    },
    // dark
    '.btn-outlined-dark': {
      color: colors.gray[800],
      borderColor: colors.gray[800],
      '&:hover': {
        color: colors.white,
        borderColor: colors.gray[900],
        backgroundColor: colors.gray[900],
      },
      '&:active': {
        borderColor: colors.gray[700],
        backgroundColor: colors.gray[700],
      },
    },

    // TEXT
    // primary
    '.btn-text-primary': {
      color: colors.primary[500],
      '&:hover': {
        color: colors.primary[600],
      },
      '&:active': {
        color: colors.primary[400],
      },
    },
    // secondary
    '.btn-text-secondary': {
      color: colors.secondary[500],
      '&:hover': {
        color: colors.secondary[600],
      },
      '&:active': {
        color: colors.secondary[400],
      },
    },
    // info
    '.btn-text-info': {
      color: colors.info[500],
      '&:hover': {
        color: colors.info[600],
      },
      '&:active': {
        color: colors.info[400],
      },
    },
    // warning
    '.btn-text-warning': {
      color: colors.warning[500],
      '&:hover': {
        color: colors.warning[600],
      },
      '&:active': {
        color: colors.warning[400],
      },
    },
    // success
    '.btn-text-success': {
      color: colors.success[500],
      '&:hover': {
        color: colors.success[600],
      },
      '&:active': {
        color: colors.success[400],
      },
    },
    // error
    '.btn-text-error': {
      color: colors.error[500],
      '&:hover': {
        color: colors.error[600],
      },
      '&:active': {
        color: colors.error[400],
      },
    },
    // dark
    '.btn-text-dark': {
      color: colors.gray[800],
      '&:hover': {
        color: colors.gray[900],
      },
      '&:active': {
        color: colors.gray[700],
      },
    },
  })
})

module.exports = vBtnPlugin