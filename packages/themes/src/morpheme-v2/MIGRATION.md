# Migration Guide: SCSS to Tailwind CSS

This guide helps you migrate from the SCSS-based Morpheme theme to the new Tailwind CSS-based V2 theme.

## Overview

The V2 theme replaces SCSS with Tailwind CSS utility classes, providing:
- Better performance with utility-first approach
- Easier customization through Tailwind configuration
- Consistent design system with design tokens
- Better dark mode support
- Smaller bundle sizes

## Installation Changes

### Before (SCSS Theme)
```bash
npm install @morpheme/themes
```

```css
/* Import SCSS theme */
@import '@morpheme/themes/morpheme';
```

### After (V2 Tailwind Theme)
```bash
npm install @morpheme/themes tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

```css
/* Import V2 theme */
@import '@morpheme/themes/morpheme-v2';
```

## Tailwind Configuration

### Before
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('@morpheme/tailwind-config/preset')],
}
```

### After
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@morpheme/themes/src/morpheme-v2/**/*.{js,ts,vue}',
  ],
  presets: [require('@morpheme/themes/morpheme-v2/config')],
}
```

## Component Class Changes

### Buttons

#### Before (SCSS Classes)
```vue
<button class="btn btn--primary btn--md">Primary Button</button>
<button class="btn btn--secondary btn--sm">Secondary Button</button>
<button class="btn btn--outlined btn--lg">Outlined Button</button>
<button class="btn btn--text btn--xl">Text Button</button>
```

#### After (Tailwind Classes)
```vue
<button class="btn btn-primary btn-md">Primary Button</button>
<button class="btn btn-secondary btn-sm">Secondary Button</button>
<button class="btn btn-outlined btn-lg">Outlined Button</button>
<button class="btn btn-text btn-xl">Text Button</button>
```

### Alerts

#### Before
```vue
<div class="alert alert--success">Success message</div>
<div class="alert alert--warning">Warning message</div>
<div class="alert alert--error">Error message</div>
<div class="alert alert--info">Info message</div>
```

#### After
```vue
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
<div class="alert alert-info">Info message</div>
```

### Cards

#### Before
```vue
<div class="card">
  <div class="card__header">Header</div>
  <div class="card__body">Body</div>
  <div class="card__footer">Footer</div>
</div>
```

#### After
```vue
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Body</div>
  <div class="card-footer">Footer</div>
</div>
```

### Forms

#### Before
```vue
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text" />
  <p class="form-error">Error message</p>
</div>
```

#### After
```vue
<div>
  <label class="form-label">Label</label>
  <input class="form-input" type="text" />
  <p class="form-error">Error message</p>
</div>
```

### Modals

#### Before
```vue
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">Header</div>
    <div class="modal-body">Body</div>
    <div class="modal-footer">Footer</div>
  </div>
</div>
```

#### After
```vue
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">Header</div>
    <div class="modal-body">Body</div>
    <div class="modal-footer">Footer</div>
  </div>
</div>
```

### Badges

#### Before
```vue
<span class="badge badge--primary">Primary</span>
<span class="badge badge--secondary">Secondary</span>
<span class="badge badge--success">Success</span>
```

#### After
```vue
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
```

### Avatars

#### Before
```vue
<div class="avatar avatar--sm">A</div>
<div class="avatar avatar--md">B</div>
<div class="avatar avatar--lg">C</div>
```

#### After
```vue
<div class="avatar avatar-sm">A</div>
<div class="avatar avatar-md">B</div>
<div class="avatar avatar-lg">C</div>
```

## Dark Mode Changes

### Before
```scss
.dark {
  .btn {
    &--primary {
      background-color: var(--color-primary-600);
    }
  }
}
```

### After
```vue
<template>
  <div class="dark">
    <button class="btn btn-primary">Button</button>
  </div>
</template>
```

The V2 theme automatically handles dark mode with Tailwind's dark mode classes.

## Customization Changes

### Before (SCSS Variables)
```scss
:root {
  --btn-border-radius: 8px;
  --btn-padding-x: 16px;
  --btn-padding-y: 8px;
}
```

### After (CSS Custom Properties)
```css
:root {
  --morpheme-primary: #your-color;
  --morpheme-spacing-md: 1rem;
  --morpheme-radius-lg: 0.5rem;
}
```

### After (Tailwind Configuration)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#your-primary-color',
          500: '#your-primary-color',
        },
      },
    },
  },
}
```

## New Features in V2

### 1. Utility Classes
```vue
<!-- Scrollbar utilities -->
<div class="scrollbar-hide">Hidden scrollbar</div>
<div class="scrollbar-thin">Thin scrollbar</div>

<!-- Text utilities -->
<p class="text-balance">Balanced text wrapping</p>
<p class="text-pretty">Pretty text wrapping</p>

<!-- Transition utilities -->
<div class="morpheme-transition">Smooth transition</div>
<div class="transition-fast">Fast transition</div>
```

### 2. Animation Classes
```vue
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-slide-in">Slide in animation</div>
<div class="animate-bounce-in">Bounce in animation</div>
<div class="shimmer">Shimmer loading effect</div>
```

### 3. Component Utilities
```vue
<!-- Container utilities -->
<div class="morpheme-container">Responsive container</div>

<!-- Section utilities -->
<section class="morpheme-section">Spaced section</section>

<!-- Typography utilities -->
<h1 class="morpheme-heading">Main heading</h1>
<h2 class="morpheme-subheading">Sub heading</h2>
<p class="morpheme-body">Body text</p>
```

## Migration Steps

1. **Install Dependencies**
   ```bash
   npm install tailwindcss @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
   ```

2. **Update Imports**
   ```css
   /* Replace */
   @import '@morpheme/themes/morpheme';
   
   /* With */
   @import '@morpheme/themes/morpheme-v2';
   ```

3. **Update Tailwind Config**
   ```javascript
   module.exports = {
     presets: [require('@morpheme/themes/morpheme-v2/config')],
   }
   ```

4. **Update Component Classes**
   - Replace `btn--primary` with `btn-primary`
   - Replace `alert--success` with `alert-success`
   - Replace `card__header` with `card-header`
   - And so on...

5. **Test Dark Mode**
   - Ensure dark mode works with the new classes
   - Test all components in both light and dark modes

6. **Customize Theme**
   - Update colors in Tailwind config
   - Add custom CSS properties if needed
   - Test customizations

## Breaking Changes

1. **Class Naming**: All component classes use kebab-case instead of BEM notation
2. **SCSS Variables**: Replaced with CSS custom properties and Tailwind config
3. **Dark Mode**: Now uses Tailwind's class strategy instead of SCSS nesting
4. **Build Process**: Requires Tailwind CSS build process instead of Sass

## Benefits of Migration

1. **Performance**: Smaller bundle sizes with utility-first approach
2. **Maintainability**: Easier to maintain with consistent utility classes
3. **Customization**: More flexible customization through Tailwind config
4. **Dark Mode**: Better dark mode support with Tailwind's built-in system
5. **Developer Experience**: Better IntelliSense and autocomplete
6. **Consistency**: More consistent design system with design tokens

## Support

If you encounter issues during migration:
1. Check the [V2 Theme Documentation](./README.md)
2. Review the [Example Component](./example.vue)
3. Open an issue in the repository
4. Check the Tailwind CSS documentation for utility classes

## Rollback Plan

If you need to rollback:
1. Revert to SCSS theme import
2. Restore original component classes
3. Update Tailwind config to use original preset
4. Test all components

The V2 theme is designed to be a drop-in replacement, but some class changes are required for the new utility-first approach.
