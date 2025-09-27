const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// Morpheme V2 Design System Colors
const morphemeColors = {
    primary: {
        DEFAULT: '#28A0F6',
        50: '#D8EEFD',
        100: '#C5E5FD',
        200: '#9DD4FB',
        300: '#76C3F9',
        400: '#4FB1F8',
        500: '#28A0F6',
        600: '#0984DD',
        700: '#0764A7',
        800: '#054471',
        900: '#02233B',
    },
    secondary: {
        DEFAULT: '#FF8B49',
        50: '#FFFFFF',
        100: '#FFF3EC',
        200: '#FFD9C3',
        300: '#FFBF9B',
        400: '#FFA572',
        500: '#FF8B49',
        600: '#FF6711',
        700: '#D84E00',
        800: '#A03A00',
        900: '#682600',
    },
    success: colors.emerald,
    warning: colors.amber,
    error: colors.rose,
    info: colors.sky,
};

module.exports = {
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './main.css',
        // Include all Morpheme component packages
        '../../packages/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: morphemeColors,
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
                'glow': '0 0 20px rgba(40, 160, 246, 0.3)',
                'glow-lg': '0 0 40px rgba(40, 160, 246, 0.4)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'fade-out': 'fadeOut 0.3s ease-in-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'slide-out': 'slideOut 0.3s ease-in',
                'bounce-in': 'bounceIn 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideOut: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-100%)', opacity: '0' },
                },
                bounceIn: {
                    '0%': { transform: 'scale(0.3)', opacity: '0' },
                    '50%': { transform: 'scale(1.05)' },
                    '70%': { transform: 'scale(0.9)' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
                'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
            },
            transitionDuration: {
                '0': '0ms',
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
                '1000': '1000ms',
            },
            transitionTimingFunction: {
                'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
            screens: {
                'xs': '475px',
                '3xl': '1600px',
                '4xl': '1920px',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            minHeight: {
                'screen-75': '75vh',
                'screen-90': '90vh',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        // Custom plugin for Morpheme-specific utilities
        function ({ addUtilities, addComponents, theme }) {
            // Add custom utilities
            addUtilities({
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '.scrollbar-thin': {
                    'scrollbar-width': 'thin',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: theme('colors.gray.100'),
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: theme('colors.gray.300'),
                        'border-radius': '3px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: theme('colors.gray.400'),
                    },
                },
                '.text-balance': {
                    'text-wrap': 'balance',
                },
                '.text-pretty': {
                    'text-wrap': 'pretty',
                },
            });

            // Add custom components
            addComponents({
                '.morpheme-container': {
                    '@apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8': {},
                },
                '.morpheme-section': {
                    '@apply py-12 sm:py-16 lg:py-20': {},
                },
                '.morpheme-heading': {
                    '@apply text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl': {},
                },
                '.morpheme-subheading': {
                    '@apply text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl': {},
                },
                '.morpheme-body': {
                    '@apply text-base leading-7 text-gray-600 dark:text-gray-300': {},
                },
                '.morpheme-card': {
                    '@apply bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800': {},
                },
                '.morpheme-input': {
                    '@apply block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white': {},
                },
                '.morpheme-button': {
                    '@apply inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none': {},
                },
                '.morpheme-button-primary': {
                    '@apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500': {},
                },
                '.morpheme-button-secondary': {
                    '@apply bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700': {},
                },
                '.morpheme-button-outline': {
                    '@apply border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800': {},
                },
            });
        },
    ],
};
