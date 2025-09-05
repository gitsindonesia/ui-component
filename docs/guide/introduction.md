# Introduction

Morpheme UI is a comprehensive, modern Vue 3 component library built with TypeScript and styled with Tailwind CSS. It provides a complete set of accessible, customizable, and production-ready components based on the Morpheme Design System.

## Why Morpheme UI?

### � **Modern Technology Stack**
- **Vue 3**: Built with the latest Vue 3 and Composition API
- **TypeScript**: Full TypeScript support with comprehensive type definitions
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Sass**: Advanced styling capabilities with CSS custom properties

### 🎯 **Developer Experience**
- **Tree Shaking**: Import only the components you need for optimal bundle size
- **IntelliSense**: Rich IDE support with autocompletion and type checking
- **Hot Module Replacement**: Fast development with instant feedback
- **Storybook**: Interactive component documentation and testing

### ♿ **Accessibility First**
- **WCAG Compliant**: Built following Web Content Accessibility Guidelines
- **Keyboard Navigation**: Full keyboard support for all interactive components
- **Screen Reader Friendly**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Logical focus order and visible focus indicators

### 🎨 **Design System**
- **Consistent Design**: Based on Morpheme Design System principles
- **Multiple Themes**: Built-in light and dark themes
- **Custom Themes**: Easy theme creation with CSS variables
- **Design Tokens**: Systematic approach to design consistency

## Key Features

### 💎 **Rich Component Library**
- **50+ Components**: From basic buttons to complex data tables
- **Form Components**: Complete form controls with validation support
- **Layout Components**: Flexible grid system and layout utilities
- **Navigation**: Breadcrumbs, menus, and navigation patterns
- **Feedback**: Alerts, toasts, modals, and loading states

### 🔧 **Flexible Architecture**
- **Headless Components**: Behavior without imposed styling
- **Composition API**: Modern Vue 3 patterns throughout
- **Plugin System**: Modular plugin architecture
- **Custom Directives**: Useful directives for common tasks

### 📱 **Responsive Design**
- **Mobile First**: Responsive components that work on all devices
- **Touch Friendly**: Optimized touch interactions for mobile devices
- **Adaptive UI**: Components that adapt to different screen sizes
- **CSS Grid & Flexbox**: Modern layout techniques

### 🧪 **Form Handling**
- **VeeValidate Integration**: Robust form validation
- **Custom Validators**: Easy custom validation rules
- **Error Handling**: Comprehensive error display and management
- **Async Validation**: Support for server-side validation

## Architecture

Morpheme UI follows a modular architecture where each component is:

- **Self-contained**: Components include their own styles and dependencies
- **Composable**: Built with Vue 3 Composition API for reusability
- **Testable**: Each component comes with comprehensive unit tests
- **Documented**: Live examples and detailed API documentation

### Component Structure

```
@morpheme/ui
├── components/          # Individual component packages
│   ├── button/         # Button component
│   ├── input/          # Input component
│   └── ...
├── forms/              # Form-specific components
├── themes/             # Theme packages
├── utils/              # Utility functions
└── tailwind-config/    # Tailwind preset
```

## Browser Support

Morpheme UI supports all modern browsers:

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

::: warning Legacy Browser Support
Morpheme UI does not support Internet Explorer or Opera Mini. For legacy browser support, consider using polyfills or alternative solutions.
:::

## Framework Compatibility

### Vue 3 Only
Morpheme UI is built exclusively for Vue 3 and leverages its latest features:
- Composition API
- Multiple root nodes
- Improved TypeScript support
- Better tree-shaking

### Nuxt 3 Integration
First-class support for Nuxt 3 with:
- Auto-import components
- SSR compatibility
- Built-in module
- Optimal performance

::: info Vue 2 Support
There are no plans to support Vue 2. We recommend upgrading to Vue 3 to take advantage of the latest features and better performance.
:::

## Getting Help

- **Documentation**: Comprehensive guides and API references
- **Storybook**: Interactive component playground
- **GitHub Issues**: Bug reports and feature requests
- **Community**: Join our community discussions

## Contributing

Morpheme UI is open source and welcomes contributions:

- **Bug Reports**: Help us improve by reporting issues
- **Feature Requests**: Suggest new components or features
- **Pull Requests**: Contribute code improvements
- **Documentation**: Help improve our documentation

See our [Contributing Guide](https://github.com/gitsindonesia/ui-component/blob/main/CONTRIBUTING.md) for more details.
