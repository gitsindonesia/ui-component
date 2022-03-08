const plugin = require('tailwindcss/plugin')
const themeColors = require('@gits-id/theme')
const colors = require('tailwindcss/colors')

const vBtnPlugin = plugin(function({ addUtilities, addComponents }) {
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
      backgroundColor: themeColors.primary[500],
      borderColor: themeColors.primary[500],
      '&:hover': {
        borderColor: themeColors.primary[600],
        backgroundColor: themeColors.primary[600],
      },
      '&:active': {
        borderColor: themeColors.primary[400],
        backgroundColor: themeColors.primary[400],
      },
    },
    // secondary
    '.btn-secondary': {
      color: '#fff',
      backgroundColor: themeColors.secondary[500],
      borderColor: themeColors.secondary[500],
      '&:hover': {
        borderColor: themeColors.secondary[600],
        backgroundColor: themeColors.secondary[600],
      },
      '&:active': {
        borderColor: themeColors.secondary[400],
        backgroundColor: themeColors.secondary[400],
      },
    },
    // info
    '.btn-info': {
      color: '#fff',
      backgroundColor: themeColors.info[500],
      borderColor: themeColors.info[500],
      '&:hover': {
        borderColor: themeColors.info[600],
        backgroundColor: themeColors.info[600],
      },
      '&:active': {
        borderColor: themeColors.info[400],
        backgroundColor: themeColors.info[400],
      },
    },
    // warning
    '.btn-warning': {
      color: '#fff',
      backgroundColor: themeColors.warning[500],
      borderColor: themeColors.warning[500],
      '&:hover': {
        borderColor: themeColors.warning[600],
        backgroundColor: themeColors.warning[600],
      },
      '&:active': {
        borderColor: themeColors.warning[400],
        backgroundColor: themeColors.warning[400],
      },
    },
    // error
    '.btn-error': {
      color: '#fff',
      backgroundColor: themeColors.error[500],
      borderColor: themeColors.error[500],
      '&:hover': {
        borderColor: themeColors.error[600],
        backgroundColor: themeColors.error[600],
      },
      '&:active': {
        borderColor: themeColors.error[400],
        backgroundColor: themeColors.error[400],
      },
    },
    // success
    '.btn-success': {
      color: '#fff',
      backgroundColor: themeColors.success[500],
      borderColor: themeColors.success[500],
      '&:hover': {
        borderColor: themeColors.success[600],
        backgroundColor: themeColors.success[600],
      },
      '&:active': {
        borderColor: themeColors.success[400],
        backgroundColor: themeColors.success[400],
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
      color: themeColors.primary[500],
      borderColor: themeColors.primary[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.primary[500],
        backgroundColor: themeColors.primary[500],
      },
      '&:active': {
        borderColor: themeColors.primary[400],
        backgroundColor: themeColors.primary[400],
      },
    },
    // secondary
    '.btn-outlined-secondary': {
      color: themeColors.secondary[500],
      borderColor: themeColors.secondary[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.secondary[500],
        backgroundColor: themeColors.secondary[500],
      },
      '&:active': {
        borderColor: themeColors.secondary[400],
        backgroundColor: themeColors.secondary[400],
      },
    },
    // info
    '.btn-outlined-info': {
      color: themeColors.info[500],
      borderColor: themeColors.info[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.info[500],
        backgroundColor: themeColors.info[500],
      },
      '&:active': {
        borderColor: themeColors.info[400],
        backgroundColor: themeColors.info[400],
      },
    },
    // warning
    '.btn-outlined-warning': {
      color: themeColors.warning[500],
      borderColor: themeColors.warning[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.warning[500],
        backgroundColor: themeColors.warning[500],
      },
      '&:active': {
        borderColor: themeColors.warning[400],
        backgroundColor: themeColors.warning[400],
      },
    },
    // success
    '.btn-outlined-success': {
      color: themeColors.success[500],
      borderColor: themeColors.success[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.success[500],
        backgroundColor: themeColors.success[500],
      },
      '&:active': {
        borderColor: themeColors.success[400],
        backgroundColor: themeColors.success[400],
      },
    },
    // error
    '.btn-outlined-error': {
      color: themeColors.error[500],
      borderColor: themeColors.error[500],
      '&:hover': {
        color: colors.white,
        borderColor: themeColors.error[500],
        backgroundColor: themeColors.error[500],
      },
      '&:active': {
        borderColor: themeColors.error[400],
        backgroundColor: themeColors.error[400],
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
      color: themeColors.primary[500],
      '&:hover': {
        color: themeColors.primary[600],
      },
      '&:active': {
        color: themeColors.primary[400],
      },
    },
    // secondary
    '.btn-text-secondary': {
      color: themeColors.secondary[500],
      '&:hover': {
        color: themeColors.secondary[600],
      },
      '&:active': {
        color: themeColors.secondary[400],
      },
    },
    // info
    '.btn-text-info': {
      color: themeColors.info[500],
      '&:hover': {
        color: themeColors.info[600],
      },
      '&:active': {
        color: themeColors.info[400],
      },
    },
    // warning
    '.btn-text-warning': {
      color: themeColors.warning[500],
      '&:hover': {
        color: themeColors.warning[600],
      },
      '&:active': {
        color: themeColors.warning[400],
      },
    },
    // success
    '.btn-text-success': {
      color: themeColors.success[500],
      '&:hover': {
        color: themeColors.success[600],
      },
      '&:active': {
        color: themeColors.success[400],
      },
    },
    // error
    '.btn-text-error': {
      color: themeColors.error[500],
      '&:hover': {
        color: themeColors.error[600],
      },
      '&:active': {
        color: themeColors.error[400],
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