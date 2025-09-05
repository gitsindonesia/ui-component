# Getting Started

Welcome to Morpheme UI! This guide will help you get up and running with our comprehensive Vue 3 component library in just a few minutes.

::: tip GITS UI Migration
GITS UI is now **Morpheme UI**. If you're migrating from GITS UI, check out our [migration guide](/guide/migration).
:::

## What is Morpheme UI?

Morpheme UI is a modern, production-ready Vue 3 component library built with TypeScript and styled with Tailwind CSS. It provides:

- **50+ Components**: From basic buttons to complex data tables
- **TypeScript First**: Full type safety and IntelliSense support
- **Accessibility Ready**: WCAG compliant with keyboard navigation
- **Dark Mode**: Built-in dark theme support
- **Customizable**: Easy theming with CSS variables
- **Modern Stack**: Vue 3, Composition API, and Tailwind CSS

## Quick Setup Options

Choose the setup method that works best for you:

### 🚀 Option 1: Morpheme CLI (Recommended)

The fastest way to get started is with our CLI tool that creates pre-configured projects:

::: code-group

```bash [pnpm]
pnpx create-morpheme-app@latest my-app
```

```bash [npm]
npx create-morpheme-app@latest my-app
```

```bash [yarn]
yarn create morpheme-app@latest my-app
```

```bash [bun]
bunx create-morpheme-app@latest my-app
```

:::

![Create Morpheme App](/create-morpheme-app.png)

The CLI offers several starter templates:
- **Nuxt Minimal**: Basic Nuxt 3 setup with Morpheme UI
- **Nuxt Admin**: Complete admin dashboard template
- **Vue Minimal**: Simple Vue 3 project setup
- **Custom**: Choose specific modules and features

### 🌐 Option 2: Try Online

Experiment with Morpheme UI instantly in your browser:

- **[Stackblitz Playground](https://stackblitz.com/fork/github/gitsindonesia/ui-component/tree/main/starter/nuxt-minimal)** - Full development environment
- **[Storybook Demo](https://morpheme-ui.vercel.app)** - Interactive component showcase
- **[CodePen Examples](https://codepen.io/collection/morpheme-ui)** - Quick component examples

### ⚙️ Option 3: Manual Setup

Add Morpheme UI to your existing project:

**For Vue 3 Projects:**
```bash
pnpm add @morpheme/ui
```
[👉 Follow Vue 3 Installation Guide](/guide/vue)

**For Nuxt 3 Projects:**
```bash
pnpm add @morpheme/nuxt
```
[👉 Follow Nuxt 3 Installation Guide](/guide/nuxt)

## Your First Component

Let's create a simple example to verify your setup:

```vue
<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-bold">Welcome to Morpheme UI! 🎉</h1>
    
    <VInput 
      v-model="name"
      label="Your Name"
      placeholder="Enter your name..."
    />
    
    <VBtn 
      color="primary" 
      @click="greet"
      :disabled="!name"
    >
      Say Hello!
    </VBtn>
    
    <VAlert v-if="message" color="success">
      {{ message }}
    </VAlert>
  </div>
</template>

<script setup lang="ts">
const name = ref('')
const message = ref('')

const greet = () => {
  message.value = `Hello, ${name.value}! Welcome to Morpheme UI! 🚀`
}
</script>
```

## Starter Templates

Explore our ready-to-use starter projects:

### 🏗️ Application Templates

- **[Nuxt Admin](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)** - Complete admin dashboard with authentication, charts, and data tables
- **[Nuxt Commerce](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce)** - E-commerce template with product catalog and checkout
- **[Nuxt Auth](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth)** - Authentication flows and user management

### 🧪 Minimal Templates

- **[Vue Minimal](https://github.com/gitsindonesia/ui-component/tree/main/starter/vue)** - Basic Vue 3 setup with essential components
- **[Nuxt Minimal](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-minimal)** - Clean Nuxt 3 starter with Morpheme UI

### 🎨 Specialized Templates

- **[Kitchen Sink](https://github.com/gitsindonesia/ui-component/tree/main/starter/kitchen-sink)** - Showcase of all components and features
- **[Astro Integration](https://github.com/gitsindonesia/ui-component/tree/main/starter/morpheme-astro)** - Astro.js setup with Morpheme UI

## Development Tools

### VS Code Extensions

Enhance your development experience:

- **Vue - Official**: Vue 3 language support
- **TypeScript Vue Plugin**: Enhanced TypeScript integration
- **Tailwind CSS IntelliSense**: Autocomplete for utility classes
- **Auto Rename Tag**: Automatically rename paired HTML tags

### Browser Extensions

Debug and inspect your components:

- **Vue DevTools**: Debug Vue components and state
- **Tailwind CSS DevTools**: Inspect Tailwind classes
- **Accessibility Insights**: Test accessibility compliance

## Core Concepts

### Component Philosophy

Morpheme UI components are designed with these principles:

1. **Composition API First**: Built with Vue 3's modern patterns
2. **TypeScript Native**: Full type safety out of the box
3. **Accessibility Built-in**: WCAG compliant by default
4. **Customization Friendly**: Easy to theme and extend
5. **Performance Optimized**: Tree-shakable and lightweight

### Styling System

Our styling approach combines:

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Dynamic theming support
- **BEM Methodology**: Predictable class naming
- **Sass/SCSS**: Advanced styling capabilities

### Architecture

```
@morpheme/ui
├── components/          # Individual components
│   ├── button/         # VBtn component
│   ├── input/          # VInput component
│   └── ...
├── forms/              # Form-specific components
├── themes/             # Pre-built themes
├── utils/              # Utility functions
└── types/              # TypeScript definitions
```

## Best Practices

### 1. Use TypeScript

Leverage full type safety:

```ts
import type { ButtonProps } from '@morpheme/ui'

const buttonConfig: ButtonProps = {
  color: 'primary',
  size: 'lg',
  variant: 'solid'
}
```

### 2. Configure Plugin Options

Control which components are registered globally:

```ts
// main.ts - Full registration (default)
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'

const app = createApp(App)
app.use(MorphemeUI) // All components registered

// main.ts - Selective registration
app.use(MorphemeUI, {
  components: false // Disable auto-registration
})

// Then manually register only what you need
import { VBtn, VInput } from '@morpheme/ui'
app.component('VBtn', VBtn)
app.component('VInput', VInput)
```

### 3. Component Composition

Build complex UIs by combining components:

```vue
<template>
  <VCard>
    <VCardHeader>
      <VCardTitle>User Profile</VCardTitle>
    </VCardHeader>
    <VCardContent>
      <VAvatar :src="user.avatar" />
      <VText>{{ user.name }}</VText>
    </VCardContent>
    <VCardActions>
      <VBtn variant="outline">Edit</VBtn>
      <VBtn color="primary">Save</VBtn>
    </VCardActions>
  </VCard>
</template>
```

### 4. Responsive Design

Use Tailwind's responsive utilities:

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <VCard v-for="item in items" :key="item.id">
      <!-- Card content -->
    </VCard>
  </div>
</template>
```

### 5. Dark Mode Support

Implement dark mode easily:

```vue
<script setup>
const { $colorMode } = useNuxtApp()

const toggleDark = () => {
  $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <VBtn @click="toggleDark">
    {{ $colorMode.value === 'dark' ? '☀️' : '🌙' }}
    Toggle Theme
  </VBtn>
</template>
```

## Learning Path

### Beginner

1. **[Installation](/guide/installation)** - Set up your project
2. **[Basic Components](/components/button)** - Learn button, input, card
3. **[Layout System](/components/container)** - Understand grid and spacing
4. **[Forms](/guide/forms)** - Build interactive forms

### Intermediate

1. **[Theming](/guide/theming)** - Customize appearance
2. **[Component Composition](/guide/patterns)** - Build complex UIs
3. **[State Management](/guide/state)** - Handle application state
4. **[Performance](/guide/performance)** - Optimize your app

### Advanced

1. **[Custom Components](/guide/custom-components)** - Extend the library
2. **[Advanced Theming](/guide/advanced-theming)** - Create custom themes
3. **[Testing](/guide/testing)** - Test your components
4. **[Contributing](/guide/contributing)** - Contribute to the project

## Community & Support

### Getting Help

- **📖 [Documentation](/components/button)** - Comprehensive guides and API references
- **🐛 [GitHub Issues](https://github.com/gitsindonesia/ui-component/issues)** - Report bugs and request features
- **💬 [Discussions](https://github.com/gitsindonesia/ui-component/discussions)** - Community Q&A and sharing
- **📧 [Email Support](mailto:support@morpheme-ui.com)** - Direct support for enterprise users

### Stay Updated

- **⭐ [GitHub Repository](https://github.com/gitsindonesia/ui-component)** - Star the repo for updates
- **📰 [Changelog](https://github.com/gitsindonesia/ui-component/blob/main/CHANGELOG.md)** - Latest features and fixes
- **🐦 [Twitter](https://twitter.com/morpheme-ui)** - Follow for announcements
- **💼 [LinkedIn](https://linkedin.com/company/morpheme-ui)** - Professional updates

## What's Next?

Ready to dive deeper? Here are your next steps:

1. **[Explore Components](/components/button)** - Browse our comprehensive component library
2. **[Learn Theming](/guide/theming)** - Customize colors, typography, and spacing
3. **[Check Examples](https://github.com/gitsindonesia/ui-component/tree/main/starter)** - See complete example projects
4. **[Join Community](/guide/community)** - Connect with other developers

Welcome to the Morpheme UI community! Let's build something amazing together! 🚀
