# Nuxt 3 Installation

This guide walks you through installing and configuring Morpheme UI in a Nuxt 3 project using our dedicated Nuxt module.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0.0 or higher
- **Nuxt 3** 3.8.0 or higher
- **Package Manager**: pnpm, npm, or yarn

::: tip Quick Setup
Use our [Morpheme CLI](/tools/cli) to set up your application quickly with pre-configured templates.
:::

## Create a New Project (Optional)

If you're starting a new project, create a Nuxt 3 application:

::: code-group

```bash [pnpm]
pnpm dlx nuxi@latest init my-morpheme-app
cd my-morpheme-app
pnpm install
```

```bash [npm]
npx nuxi@latest init my-morpheme-app
cd my-morpheme-app
npm install
```

```bash [yarn]
yarn dlx nuxi@latest init my-morpheme-app
cd my-morpheme-app
yarn install
```

:::

## Step 1: Install Dependencies

Install the Nuxt module and required dependencies:

::: code-group

```bash [pnpm]
pnpm add @morpheme/nuxt
pnpm add -D @nuxtjs/tailwindcss sass
```

```bash [npm]
npm install @morpheme/nuxt
npm install -D @nuxtjs/tailwindcss sass
```

```bash [yarn]
yarn add @morpheme/nuxt
yarn add -D @nuxtjs/tailwindcss sass
```

:::

## Step 2: Configure Nuxt

Add the modules to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    '@morpheme/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  morpheme: {
    theme: 'morpheme',
    darkMode: true,
    sass: true,
    components: true,
    icons: {
      heroicons: true
    }
  }
})
```

## Step 3: Configure Tailwind CSS

Create your Tailwind config:

```bash
npx tailwindcss init -p
```

Update your `tailwind.config.js` to include Morpheme components and use the preset:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    // Include Morpheme UI components
    './node_modules/@morpheme/**/*.{vue,js,ts,jsx,tsx}'
  ],
  // Use Morpheme's Tailwind preset
  presets: [
    require('@morpheme/tailwind-config/preset')
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## Step 4: Start Development

Run the development server:

::: code-group

```bash [pnpm]
pnpm dev
```

```bash [npm]
npm run dev
```

```bash [yarn]
yarn dev
```

:::

## Module Configuration Options

The `@morpheme/nuxt` module provides extensive configuration options:

```ts
interface ModuleOptions {
  /**
   * Import CSS bundle
   * @default false
   */
  css?: boolean
  
  /**
   * Import Sass bundle (recommended)
   * @default false
   */
  sass?: boolean
  
  /**
   * Auto-import components
   * @default true
   */
  components?: boolean
  
  /**
   * Transpile dependencies
   * @default true
   */
  transpileDeps?: boolean
  
  /**
   * Enable dark mode styles
   * @default false
   */
  darkMode?: boolean
  
  /**
   * Theme to use
   * @default 'morpheme'
   */
  theme?: 'morpheme' | 'legacy'
  
  /**
   * Auto-import experimental components
   * @default false
   */
  experimentalComponents?: boolean
  
  /**
   * Component prefix
   * @default 'V'
   */
  prefix?: string
  
  /**
   * Icon library support
   */
  icons?: {
    heroicons?: boolean
    iconsax?: boolean
  }
  
  /**
   * Optimize dependencies
   * @default true
   */
  optimizeDeps?: boolean
  
  /**
   * Load FloatingVue styles (legacy theme only)
   * @default true
   */
  loadFloatingVueStyles?: boolean
  
  /**
   * Load default styles (legacy theme only)
   * @default true
   */
  loadDefaultStyles?: boolean
}
```

### Default Configuration

```ts
{
  css: false,
  sass: false,
  components: true,
  transpileDeps: true,
  loadFloatingVueStyles: true,
  loadDefaultStyles: true,
  darkMode: false,
  optimizeDeps: true,
  theme: 'morpheme',
  experimentalComponents: false,
  prefix: 'V'
}
```

## Basic Usage

Once configured, you can use Morpheme UI components directly without imports:

```vue
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-6">Welcome to Morpheme UI</h1>
    
    <div class="space-y-4">
      <VInput 
        v-model="name"
        placeholder="Enter your name"
        label="Your Name"
      />
      
      <VBtn 
        color="primary" 
        size="lg" 
        @click="greet"
      >
        Say Hello
      </VBtn>
      
      <VAlert v-if="message" color="success">
        {{ message }}
      </VAlert>
    </div>
  </div>
</template>

<script setup lang="ts">
// No imports needed - components are auto-imported!
const name = ref('')
const message = ref('')

const greet = () => {
  message.value = name.value 
    ? `Hello, ${name.value}!` 
    : 'Hello, World!'
}
</script>
```

## Advanced Configuration Examples

### Complete Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@morpheme/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  morpheme: {
    // Use modern morpheme theme
    theme: 'morpheme',
    
    // Enable dark mode support
    darkMode: true,
    
    // Use Sass for better styling
    sass: true,
    
    // Auto-import all components
    components: true,
    
    // Include experimental components
    experimentalComponents: true,
    
    // Icon library support
    icons: {
      heroicons: true,
      iconsax: true
    },
    
    // Optimize for production
    optimizeDeps: true
  },
  
  // Color mode configuration
  colorMode: {
    classSuffix: ''
  },
  
  // CSS configuration
  css: [
    '~/assets/css/main.scss'
  ]
})
```

### Selective Component Import

For better performance, import only the components you need:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt'],
  morpheme: {
    components: false, // Disable auto-import
    theme: 'morpheme',
    sass: true
  }
})
```

Then manually import components:

```vue
<script setup>
import { VBtn, VInput } from '@morpheme/ui'
</script>
```

## Dark Mode Integration

Enable dark mode with the color mode module:

```bash
pnpm add @nuxtjs/color-mode
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@morpheme/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  morpheme: {
    darkMode: true
  }
})
```

Use in components:

```vue
<template>
  <VBtn @click="toggleDark">
    <Icon :name="$colorMode.value === 'dark' ? 'sun' : 'moon'" />
    {{ $colorMode.value === 'dark' ? 'Light' : 'Dark' }} Mode
  </VBtn>
</template>

<script setup>
const { $colorMode } = useNuxtApp()

const toggleDark = () => {
  $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
```

## Icon Support

### Heroicons Integration

When `icons.heroicons` is enabled:

```vue
<template>
  <VBtn>
    <HeartIcon class="w-4 h-4 mr-2" />
    Like
  </VBtn>
</template>

<script setup>
// Auto-imported from @heroicons/vue/24/outline
</script>
```

### Iconsax Integration

When `icons.iconsax` is enabled:

```vue
<template>
  <VBtn>
    <Heart class="w-4 h-4 mr-2" />
    Like
  </VBtn>
</template>
```

## Experimental Components

Morpheme UI includes experimental components that provide enhanced features. Enable them with:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  morpheme: {
    experimentalComponents: true
  }
})
```

### Available Experimental Components

When enabled, these components are auto-imported:

- **Form Components**: `Input`, `InputField`, `Textarea`, `TextareaField`
- **Select Components**: `Select`, `FormSelect`, `FormSelectInputField`
- **Checkbox Components**: `Checkbox`, `CheckboxField`
- **Radio Components**: `Radio`
- **File Components**: `FileInput`, `FileInputField`, `FileInputItem`
- **Autocomplete**: `Autocomplete`

::: warning Component Conflicts
Some experimental components may conflict with existing component names. The experimental versions typically provide enhanced features and better APIs.
:::

## TypeScript Support

The module automatically configures TypeScript support. For enhanced type safety:

```ts
// types/morpheme.d.ts
declare module '#app' {
  interface NuxtApp {
    $morpheme: any
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $morpheme: any
  }
}

export {}
```

## Server-Side Rendering

Morpheme UI is fully SSR-compatible. The module automatically:

- Configures CSS extraction
- Handles hydration correctly
- Optimizes bundle splitting
- Ensures consistent rendering

### SSR Considerations

```vue
<template>
  <div>
    <!-- Safe for SSR -->
    <VBtn color="primary">Server-rendered Button</VBtn>
    
    <!-- Client-only when needed -->
    <ClientOnly>
      <VDatePicker v-model="date" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </ClientOnly>
  </div>
</template>
```

## Performance Optimization

### Bundle Analysis

Analyze your bundle:

```bash
pnpm build --analyze
```

### Tree Shaking

For optimal tree shaking:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  morpheme: {
    components: false, // Disable auto-import
  },
  build: {
    transpile: ['@morpheme/ui']
  }
})
```

## Troubleshooting

### Common Issues

**Components not auto-importing:**
- Ensure `components: true` in module options
- Check component name casing (`VBtn`, not `vBtn`)
- Restart development server

**Styles not loading:**
- Verify `sass: true` or `css: true` in module options
- Check Tailwind configuration includes Morpheme paths
- Ensure no CSS conflicts

**Dark mode not working:**
- Enable `darkMode: true` in module options
- Configure `@nuxtjs/color-mode` properly
- Check HTML element has `dark` class

**TypeScript errors:**
- Run `nuxi prepare` to regenerate types
- Check Nuxt version compatibility
- Verify module is properly installed

## Migration Guide

### From Vue to Nuxt

1. Remove Vue-specific setup:
   ```ts
   // Remove from main.ts
   // app.use(MorphemeUI)
   ```

2. Install Nuxt module:
   ```bash
   pnpm add @morpheme/nuxt
   ```

3. Configure Nuxt:
   ```ts
   // nuxt.config.ts
   export default defineNuxtConfig({
     modules: ['@morpheme/nuxt']
   })
   ```

## Example Projects

Explore our starter templates:

- **[Nuxt Minimal](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-minimal)** - Basic setup
- **[Nuxt Admin](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)** - Admin dashboard
- **[Nuxt Commerce](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce)** - E-commerce site

## Next Steps

Now that you have Morpheme UI set up:

- **[Explore Components](/components/button)** - Browse the component library
- **[Learn Theming](/guide/theming)** - Customize appearance
- **[Deploy to Production](/guide/deployment)** - Production deployment
- **[Join Community](/guide/community)** - Get help and share feedback
