/**
 * Morpheme V2 Theme - Entry Point
 * 
 * This is the main entry point for the Morpheme V2 theme package.
 * It exports the theme configuration and utilities for use in applications.
 */

// Import the main theme configuration
import themeConfig, {
    buttonConfig,
    alertConfig,
    cardConfig,
    inputConfig,
    modalConfig,
    badgeConfig,
    avatarConfig,
    designTokens,
    darkModeConfig,
    animations,
    utilities,
} from './theme.js';

// Import the CSS file
import './main.css';

// Export everything
export {
    themeConfig as default,
    buttonConfig,
    alertConfig,
    cardConfig,
    inputConfig,
    modalConfig,
    badgeConfig,
    avatarConfig,
    designTokens,
    darkModeConfig,
    animations,
    utilities,
};

// Export for CommonJS compatibility
module.exports = {
    default: themeConfig,
    buttonConfig,
    alertConfig,
    cardConfig,
    inputConfig,
    modalConfig,
    badgeConfig,
    avatarConfig,
    designTokens,
    darkModeConfig,
    animations,
    utilities,
};
