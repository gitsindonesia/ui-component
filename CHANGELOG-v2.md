# Changelog - Morpheme UI v2

All notable changes to Morpheme UI v2 will be documented in this file.

## [2.0.0-alpha.1] - 2025-09-08

### 🚀 Major Changes

#### Vue 3.5+ and Nuxt 4+ Support
- **Updated Vue to 3.5.21** - Latest stable version with enhanced reactivity system
- **Updated Nuxt to 4.1.0** - Modern framework with improved module system and SSR
- **Enhanced TypeScript Support** - Better type inference and IDE experience

#### Plugin System Redesign
- **New Plugin Configuration** - More flexible component registration with `components: boolean` option
- **Selective Component Registration** - Choose which components to auto-register globally
- **Better Tree Shaking** - Improved bundle optimization when using manual imports

#### Documentation Overhaul
- **Modernized Installation Guides** - Updated for Vue 3.5+ and Nuxt 4+ with step-by-step instructions
- **Enhanced Getting Started** - Comprehensive onboarding with best practices
- **Improved API Documentation** - Better component examples and configuration options

### 🔧 Breaking Changes

#### Plugin API
- Plugin now accepts configuration options: `app.use(MorphemeUI, { components: boolean })`
- Default behavior remains the same (all components auto-registered)

#### Dependencies
- **Minimum Vue version**: 3.3.0+ (recommended 3.5.0+)
- **Minimum Nuxt version**: 3.8.0+ (recommended 4.0.0+)
- **Node.js**: 18.0.0+ required

### ✨ New Features

#### Enhanced Plugin System
```ts
// Full registration (default)
app.use(MorphemeUI)

// Selective registration
app.use(MorphemeUI, { components: false })

// Manual component registration
app.component('VBtn', VBtn)
```

#### Improved Type Safety
- Full TypeScript definitions for all 50+ components
- Better IntelliSense support in IDEs
- Enhanced prop validation and autocompletion

#### Modern Documentation
- Interactive examples for all components
- Real-world usage patterns
- Performance optimization guides
- Accessibility best practices

### 📦 Package Updates

#### Core Packages
- `@morpheme/ui@2.0.0-alpha.1` - Main component library
- `@morpheme/nuxt@2.0.0-alpha.1` - Nuxt 3/4 module
- `@morpheme/theme@2.0.0-alpha.1` - Color system and design tokens
- `@morpheme/tailwind-config@2.0.0-alpha.1` - Tailwind CSS preset
- `@morpheme/utils@2.0.0-alpha.1` - Utility functions
- `@morpheme/tailwind-components@2.0.0-alpha.1` - Tailwind plugin
- `@morpheme/themes@2.0.0-alpha.1` - Pre-built themes

### 🔄 Migration Guide

#### From v1.x to v2.0.0-alpha.1

**Vue 3 Projects:**
1. Update dependencies:
   ```bash
   pnpm add @morpheme/ui@alpha
   ```

2. Update Vue and dependencies:
   ```bash
   pnpm add vue@^3.5.21
   ```

**Nuxt 3 Projects:**
1. Update dependencies:
   ```bash
   pnpm add @morpheme/nuxt@alpha
   ```

2. Update Nuxt:
   ```bash
   pnpm add nuxt@^4.1.0
   ```

**Plugin Configuration (Optional):**
```ts
// Before (still works)
app.use(MorphemeUI)

// New options
app.use(MorphemeUI, {
  components: true  // or false for manual registration
})
```

### 🏗️ Infrastructure

#### Build System
- Updated Vite to 5.4+ for better performance
- Improved TypeScript compilation with vue-tsc 2.0+
- Enhanced Sass compilation for theme generation

#### Testing
- Comprehensive unit tests for all core components
- 90%+ code coverage target
- Enhanced testing utilities and patterns

#### Development Tools
- Updated Storybook to 8.1+ for component documentation
- Improved development server performance
- Better hot module replacement (HMR)

### 🐛 Bug Fixes

#### Component Issues
- Fixed TypeScript prop validation issues
- Improved component composition patterns
- Better slot handling in complex components

#### Build Issues
- Resolved circular dependency warnings
- Fixed CSS extraction in production builds
- Improved tree shaking effectiveness

### 📋 Known Issues

- Some peer dependency warnings with ESLint 9+ (cosmetic only)
- Vite 5+ requires Node.js 18+ (documented in requirements)

### 🔮 What's Next

#### Beta Release (v2.0.0-beta.1)
- Additional components and features
- Performance optimizations
- Extended theme system
- More starter templates

#### Stable Release (v2.0.0)
- Production-ready release
- Complete migration guides
- Long-term support commitment

### 💬 Feedback

This is an alpha release for testing and feedback. Please:

1. **Test in development environments only**
2. **Report issues** on [GitHub Issues](https://github.com/gitsindonesia/ui-component/issues)
3. **Share feedback** in [GitHub Discussions](https://github.com/gitsindonesia/ui-component/discussions)
4. **Join the community** for support and updates

### 📚 Resources

- **[Documentation](https://morpheme-ui.vercel.app)** - Complete API reference
- **[Storybook](https://morpheme-ui.vercel.app/storybook)** - Interactive component playground
- **[GitHub](https://github.com/gitsindonesia/ui-component)** - Source code and issues
- **[Examples](https://github.com/gitsindonesia/ui-component/tree/main/starter)** - Starter projects and templates

---

**Note**: This is an alpha release. Not recommended for production use. Please test thoroughly and provide feedback to help us improve the stable release.
