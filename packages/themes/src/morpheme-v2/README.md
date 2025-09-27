# Morpheme V2 Theme

A modern, utility-first theme built with Tailwind CSS that provides a complete design system for Vue.js applications.

## Features

- 🎨 **Full Tailwind CSS Support** - Complete utility-first approach
- 🌙 **Dark Mode Ready** - Built-in dark mode support with class strategy
- 🎯 **Component-Based** - Pre-configured component classes
- 🎭 **Customizable** - Easy to customize with CSS custom properties
- 📱 **Responsive** - Mobile-first responsive design
- ⚡ **Performance** - Optimized for production builds
- 🎪 **Animations** - Built-in animation utilities
- 🎨 **Design Tokens** - Consistent design system tokens

## Installation

```bash
npm install @morpheme/themes
# or
yarn add @morpheme/themes
# or
pnpm add @morpheme/themes
```

## Usage

### Basic Setup

```javascript
// Import the theme
import '@morpheme/themes/morpheme-v2';

// Or import specific components
import { themeConfig, designTokens } from '@morpheme/themes/morpheme-v2';
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@morpheme/themes/src/morpheme-v2/**/*.{js,ts,vue}',
  ],
  presets: [require('@morpheme/themes/src/morpheme-v2/tailwind.config.js')],
};
```

### Using Component Classes

```vue
<template>
  <!-- Button -->
  <button class="btn btn-primary btn-md">
    Primary Button
  </button>

  <!-- Alert -->
  <div class="alert alert-success">
    <p>Success message!</p>
  </div>

  <!-- Card -->
  <div class="card">
    <div class="card-header">
      <h3>Card Title</h3>
    </div>
    <div class="card-body">
      <p>Card content goes here.</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary btn-sm">Action</button>
    </div>
  </div>

  <!-- Form Input -->
  <div>
    <label class="form-label">Email</label>
    <input type="email" class="form-input" placeholder="Enter your email" />
    <p class="form-error">Please enter a valid email</p>
  </div>
</template>
```

### Dark Mode

The theme includes built-in dark mode support. Simply add the `dark` class to enable dark mode:

```vue
<template>
  <div class="dark">
    <!-- Dark mode content -->
    <div class="card">
      <p class="text-gray-300">This text will be light in dark mode</p>
    </div>
  </div>
</template>
```

### Customization

#### Using CSS Custom Properties

```css
:root {
  --morpheme-primary: #your-color;
  --morpheme-secondary: #your-color;
  --morpheme-spacing-md: 1rem;
  --morpheme-radius-lg: 0.5rem;
}
```

#### Using Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#your-primary-color',
          500: '#your-primary-color',
          // ... other shades
        },
      },
    },
  },
};
```

## Component Reference

### Buttons

```vue
<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-md">Medium</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outlined">Outlined</button>
<button class="btn btn-text">Text</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
```

### Alerts

```vue
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
<div class="alert alert-info">Info message</div>
```

### Cards

```vue
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Forms

```vue
<div>
  <label class="form-label">Label</label>
  <input class="form-input" type="text" placeholder="Enter text" />
  <p class="form-error">Error message</p>
</div>
```

### Modals

```vue
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h3>Modal Title</h3>
      <button>×</button>
    </div>
    <div class="modal-body">
      <p>Modal content</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Badges

```vue
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>
```

### Avatars

```vue
<div class="avatar avatar-sm">A</div>
<div class="avatar avatar-md">B</div>
<div class="avatar avatar-lg">C</div>
<div class="avatar avatar-xl">D</div>
```

## Design Tokens

The theme includes a comprehensive set of design tokens:

```javascript
import { designTokens } from '@morpheme/themes/morpheme-v2';

console.log(designTokens.colors.primary);
console.log(designTokens.spacing);
console.log(designTokens.typography);
```

## Animations

Built-in animations are available:

```vue
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-slide-in">Slide in animation</div>
<div class="animate-bounce-in">Bounce in animation</div>
<div class="animate-pulse-slow">Slow pulse animation</div>
<div class="shimmer">Shimmer loading effect</div>
```

## Utilities

### Scrollbar Utilities

```vue
<div class="scrollbar-hide">Hidden scrollbar</div>
<div class="scrollbar-thin">Thin scrollbar</div>
```

### Text Utilities

```vue
<p class="text-balance">Balanced text wrapping</p>
<p class="text-pretty">Pretty text wrapping</p>
```

### Transition Utilities

```vue
<div class="morpheme-transition">Smooth transition</div>
<div class="transition-fast">Fast transition</div>
<div class="transition-slow">Slow transition</div>
```

## Migration from SCSS Theme

If you're migrating from the SCSS-based theme:

1. Replace SCSS imports with CSS imports
2. Update component classes to use the new utility classes
3. Update your Tailwind configuration to use the new preset
4. Test dark mode functionality

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - see LICENSE file for details.
