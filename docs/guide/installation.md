# Installation

This guide will help you install and set up Morpheme UI in your Vue 3 or Nuxt 3 project.

## Framework Compatibility

Morpheme UI is built exclusively for modern Vue ecosystem:

- **Vue 3.3+**: Full support with Composition API and TypeScript
- **Nuxt 3**: First-class support with dedicated module
- **Vite**: Optimized for Vite build tool
- **TypeScript**: Complete type definitions included

::: warning Vue 2 Support
Morpheme UI does not support Vue 2. We recommend upgrading to Vue 3 to take advantage of the latest features, better performance, and improved TypeScript support.
:::

## Prerequisites

Before installing Morpheme UI, ensure you have:

- **Node.js** 18.0.0 or higher
- **Package Manager**: pnpm (recommended), npm, or yarn
- **Vue 3** 3.3.0 or higher
- **TypeScript** 5.0.0 or higher (recommended but optional)

## Choose Your Installation Path

Select the installation guide that matches your project setup:

### 🔧 Vue 3 Projects

For standalone Vue 3 applications (Vite, Vue CLI, or custom setups):

**[👉 Vue Installation Guide](/guide/vue)**

This guide covers:
- Installing the core UI library
- Configuring Tailwind CSS
- Setting up TypeScript support
- Manual component imports
- Global plugin registration

### 🚀 Nuxt 3 Projects

For Nuxt 3 applications with automatic configuration:

**[👉 Nuxt Installation Guide](/guide/nuxt)**

This guide covers:
- Installing the Nuxt module
- Automatic component auto-imports
- SSR-ready configuration
- Theme and styling options
- Performance optimizations

## Quick Start

If you want to get started immediately:

::: code-group

```bash [Vue 3 + Vite]
# Create new Vue 3 project
pnpm create vue@latest my-app
cd my-app

# Install Morpheme UI
pnpm add @morpheme/ui
pnpm add -D tailwindcss

# Follow Vue installation guide for complete setup
```

```bash [Nuxt 3]
# Create new Nuxt 3 project  
pnpm dlx nuxi@latest init my-app
cd my-app

# Install Morpheme Nuxt module
pnpm add @morpheme/nuxt

# Follow Nuxt installation guide for complete setup
```

:::

## What's Included

When you install Morpheme UI, you get:

### 📦 Core Components
- 50+ production-ready components
- Form controls with validation support
- Navigation and layout components
- Feedback and overlay components

### 🎨 Styling System
- Tailwind CSS integration
- CSS custom properties for theming
- Built-in dark mode support
- Responsive design utilities

### 🔧 Developer Tools
- Full TypeScript definitions
- IntelliSense support
- Storybook documentation
- Accessibility features

### 🚀 Framework Integration
- Vue 3 Composition API
- Nuxt 3 module with auto-imports
- Vite optimization
- SSR compatibility

## Next Steps

After choosing your installation path:

1. **Install Morpheme UI** using the appropriate guide
2. **Explore Components** in our [component documentation](/components/button)
3. **Learn Theming** with our [theming guide](/guide/theming)
4. **Check Examples** in our [starter projects](https://github.com/gitsindonesia/ui-component/tree/main/starter)

## Getting Help

Need assistance with installation?

- 📖 **Documentation**: Comprehensive guides and API references
- 🐛 **Issues**: [Report bugs on GitHub](https://github.com/gitsindonesia/ui-component/issues)
- 💬 **Discussions**: [Community discussions](https://github.com/gitsindonesia/ui-component/discussions)
- 📚 **Examples**: [Live examples and templates](https://github.com/gitsindonesia/ui-component/tree/main/starter)
