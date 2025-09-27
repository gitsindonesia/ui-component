/**
 * Morpheme V2 Theme - Full Tailwind CSS
 * 
 * This theme provides a complete Tailwind CSS-based design system
 * that replaces the previous SCSS-based approach with utility-first styling.
 */

import './main.css';

// Theme configuration
export const themeConfig = {
    name: 'morpheme-v2',
    version: '2.0.0',
    description: 'Morpheme V2 Theme with Full Tailwind CSS Support',
    type: 'tailwind',

    // Design tokens
    tokens: {
        colors: {
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
            success: {
                50: '#ecfdf5',
                100: '#d1fae5',
                200: '#a7f3d0',
                300: '#6ee7b7',
                400: '#34d399',
                500: '#10b981',
                600: '#059669',
                700: '#047857',
                800: '#065f46',
                900: '#064e3b',
            },
            warning: {
                50: '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
                700: '#b45309',
                800: '#92400e',
                900: '#78350f',
            },
            error: {
                50: '#fef2f2',
                100: '#fee2e2',
                200: '#fecaca',
                300: '#fca5a5',
                400: '#f87171',
                500: '#ef4444',
                600: '#dc2626',
                700: '#b91c1c',
                800: '#991b1b',
                900: '#7f1d1d',
            },
            info: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e',
            },
        },
        spacing: {
            xs: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '2rem',
            '2xl': '3rem',
            '3xl': '4rem',
        },
        borderRadius: {
            sm: '0.125rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
        },
        shadows: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        typography: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            lineHeight: {
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
            },
        },
        breakpoints: {
            xs: '475px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            '3xl': '1600px',
            '4xl': '1920px',
        },
    },

    // Component configurations
    components: {
        button: {
            sizes: {
                sm: 'px-3 py-1.5 text-sm h-8',
                md: 'px-4 py-2 text-sm h-11',
                lg: 'px-6 py-3 text-base h-13',
                xl: 'px-8 py-4 text-lg h-15',
                '2xl': 'px-10 py-5 text-xl h-17',
            },
            variants: {
                primary: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600',
                secondary: 'bg-secondary-500 text-white border-secondary-500 hover:bg-secondary-600',
                outlined: 'bg-transparent border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
                text: 'bg-transparent border-transparent text-primary-500 hover:bg-primary-50',
                default: 'bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200',
                success: 'bg-success-500 text-white border-success-500 hover:bg-success-600',
                warning: 'bg-warning-500 text-white border-warning-500 hover:bg-warning-600',
                error: 'bg-error-500 text-white border-error-500 hover:bg-error-600',
            },
        },
        alert: {
            variants: {
                success: 'bg-success-50 text-success-800 border-success-200',
                warning: 'bg-warning-50 text-warning-800 border-warning-200',
                error: 'bg-error-50 text-error-800 border-error-200',
                info: 'bg-info-50 text-info-800 border-info-200',
            },
        },
        card: {
            base: 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden',
            header: 'px-6 py-4 border-b border-gray-200',
            body: 'px-6 py-4',
            footer: 'px-6 py-4 border-t border-gray-200 bg-gray-50',
        },
        input: {
            base: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            label: 'block text-sm font-medium text-gray-700 mb-1',
            error: 'text-sm text-error-600 mt-1',
        },
        modal: {
            overlay: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50',
            content: 'bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto',
            header: 'flex items-center justify-between p-6 border-b border-gray-200',
            body: 'p-6',
            footer: 'flex items-center justify-end space-x-3 p-6 border-t border-gray-200',
        },
        badge: {
            base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
            variants: {
                primary: 'bg-primary-100 text-primary-800',
                secondary: 'bg-secondary-100 text-secondary-800',
                success: 'bg-success-100 text-success-800',
                warning: 'bg-warning-100 text-warning-800',
                error: 'bg-error-100 text-error-800',
                info: 'bg-info-100 text-info-800',
            },
        },
        avatar: {
            base: 'inline-flex items-center justify-center rounded-full bg-gray-500 text-white font-medium',
            sizes: {
                sm: 'w-8 h-8 text-xs',
                md: 'w-10 h-10 text-sm',
                lg: 'w-12 h-12 text-base',
                xl: 'w-16 h-16 text-lg',
            },
        },
    },

    // Dark mode configuration
    darkMode: {
        enabled: true,
        strategy: 'class',
        variants: {
            button: {
                default: 'dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-900',
                outlined: 'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                text: 'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
            },
            card: {
                base: 'dark:bg-gray-900 dark:border-gray-800',
                header: 'dark:border-gray-700',
                footer: 'dark:border-gray-700 dark:bg-gray-800',
            },
            input: {
                base: 'dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400',
                label: 'dark:text-gray-300',
                error: 'dark:text-error-400',
            },
            modal: {
                content: 'dark:bg-gray-900 dark:border-gray-800',
                header: 'dark:border-gray-700',
                footer: 'dark:border-gray-700',
            },
            alert: {
                success: 'dark:bg-success-900/20 dark:text-success-300 dark:border-success-800',
                warning: 'dark:bg-warning-900/20 dark:text-warning-300 dark:border-warning-800',
                error: 'dark:bg-error-900/20 dark:text-error-300 dark:border-error-800',
                info: 'dark:bg-info-900/20 dark:text-info-300 dark:border-info-800',
            },
            badge: {
                primary: 'dark:bg-primary-900/20 dark:text-primary-300',
                secondary: 'dark:bg-secondary-900/20 dark:text-secondary-300',
                success: 'dark:bg-success-900/20 dark:text-success-300',
                warning: 'dark:bg-warning-900/20 dark:text-warning-300',
                error: 'dark:bg-error-900/20 dark:text-error-300',
                info: 'dark:bg-info-900/20 dark:text-info-300',
            },
        },
    },

    // Animation configuration
    animations: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
        bounceIn: 'bounceIn 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
    },

    // Utility classes
    utilities: {
        scrollbar: {
            hide: 'scrollbar-hide',
            thin: 'scrollbar-thin',
        },
        text: {
            balance: 'text-balance',
            pretty: 'text-pretty',
        },
        transition: {
            smooth: 'transition-all duration-300 ease-in-out',
            fast: 'transition-all duration-150 ease-in-out',
            slow: 'transition-all duration-500 ease-in-out',
        },
    },
};

// Export theme configuration
export default themeConfig;

// Export individual components for tree-shaking
export const buttonConfig = themeConfig.components.button;
export const alertConfig = themeConfig.components.alert;
export const cardConfig = themeConfig.components.card;
export const inputConfig = themeConfig.components.input;
export const modalConfig = themeConfig.components.modal;
export const badgeConfig = themeConfig.components.badge;
export const avatarConfig = themeConfig.components.avatar;

// Export design tokens
export const designTokens = themeConfig.tokens;

// Export dark mode configuration
export const darkModeConfig = themeConfig.darkMode;

// Export animations
export const animations = themeConfig.animations;

// Export utilities
export const utilities = themeConfig.utilities;
