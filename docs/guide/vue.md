# Vue Setup Guide

This section will help you build a basic Vue app with Morpheme UI from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.

::: tip
Checkout [Morpheme CLI](/tools/cli) to setup your application quickly.
:::

::: info
We recommend using `yarn` or `pnpm` as the package manager. The default `npm` should also works fine.
:::

## Step 1. Create new project

Create your Vue 3 project via `create-vue` CLI and install the dependencies.

```bash
npm init vue@3 my-app
cd my-app
yarn install
```

![Step 1](/getting-started-1.png)

# Vue 3 Installation

This guide walks you through installing and configuring Morpheme UI in a Vue 3 project.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0.0 or higher
- **Vue 3** 3.3.0 or higher
- **Vite** or **Vue CLI** (Vite recommended)

## Create a New Project (Optional)

If you're starting a new project, create a Vue 3 application:

::: code-group

```bash [pnpm]
pnpm create vue@latest my-morpheme-app
cd my-morpheme-app
pnpm install
```

```bash [npm]
npm create vue@latest my-morpheme-app
cd my-morpheme-app
npm install
```

```bash [yarn]
yarn create vue my-morpheme-app
cd my-morpheme-app
yarn install
```

:::

## Step 1: Install Morpheme UI

Install the core Morpheme UI package:

::: code-group

```bash [pnpm]
pnpm add @morpheme/ui
```

```bash [npm]
npm install @morpheme/ui
```

```bash [yarn]
yarn add @morpheme/ui
```

:::

## Step 2: Install Tailwind CSS

Morpheme UI requires Tailwind CSS. If you haven't installed it yet:

::: code-group

```bash [pnpm]
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

```bash [npm]
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash [yarn]
yarn add -D tailwindcss postcss autoprefixer
yarn dlx tailwindcss init -p
```

:::

## Step 3: Configure Tailwind CSS

Update your `tailwind.config.js` to use Morpheme's preset and include the necessary content paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Include Morpheme UI components in content scanning
    "./node_modules/@morpheme/**/*.{vue,js,ts,jsx,tsx}"
  ],
  // Use Morpheme's Tailwind preset
  presets: [
    require('@morpheme/tailwind-config/preset')
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
    },
  },
  plugins: [],
}
```

## Step 4: Create CSS File

Create or update your main CSS file (e.g., `src/style.css`):

```css
/* Tailwind base styles */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Morpheme UI styles */
@import '@morpheme/ui/dist/style.css';

/* Your custom styles */
```

::: tip Sass Support
If you prefer Sass, you can use `.scss` files and import Morpheme's Sass files directly:

```scss
// Import Tailwind directives
@tailwind base;
@tailwind components;
@tailwind utilities;

// Import Morpheme UI Sass styles (includes dark mode)
@import '@morpheme/ui/dist/style.scss';
```
:::

## Step 5: Register Morpheme UI

### Option A: Global Registration (Recommended)

Register all components globally in your `src/main.ts`:

```ts
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Register all Morpheme UI components globally
app.use(MorphemeUI)

app.mount('#app')
```

### Option B: Selective Component Registration

If you want to control which components are registered globally, you can configure the plugin options:

```ts
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Register plugin with custom options
app.use(MorphemeUI, {
  components: true  // Enable automatic component registration
})

app.mount('#app')
```

For manual control over component registration, disable automatic registration:

```ts
import { createApp } from 'vue'
import MorphemeUI, { VBtn, VInput, VCard } from '@morpheme/ui'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Disable automatic component registration
app.use(MorphemeUI, {
  components: false
})

// Manually register only the components you need
app.component('VBtn', VBtn)
app.component('VInput', VInput)
app.component('VCard', VCard)

app.mount('#app')
```

### Option C: Manual Imports (Tree Shaking)

For better tree shaking without global registration, import only the components you need:

```vue
<script setup lang="ts">
import { VBtn, VInput, VCard } from '@morpheme/ui'
</script>

<template>
  <VCard>
    <VInput placeholder="Enter your name" />
    <VBtn color="primary">Submit</VBtn>
  </VCard>
</template>
```

::: tip Plugin Options
The Morpheme UI plugin accepts the following options:
- `components: boolean` - Enable or disable automatic registration of all components (default: `true`)
:::

::: details Available Components
When `components: true`, the following components are automatically registered and available globally:

**Form Components**: VInput, VTextarea, VSelect, VCheckbox, VRadio, VRadioGroup, VFormSelect, VFormGroup, VFileUpload, VSwitch, VAutocomplete, VMultiSelect

**Layout Components**: VCard, VCardHeader, VCardBody, VCardFooter, VCardImage, VContainer, VAppShell, VMain, VDivider

**Navigation**: VNavbar, VNavDrawer, VMenu, VMenus, VBreadcrumbs, VBreadcrumbsItem, VBreadcrumbsDivider, VBottomNavigation, VBottomNavigationItem, VTabs, VTab, VTabGroup, VTabItem, VTabList, VTabPanels, VTabPanel, VTabsSlider

**Data Display**: VTable, VDataTable, VDataTablePagination, VList, VListItem, VListItemContent, VText, VBadge, VBadgeGroup, VBadgeContent, VAvatar, VAvatarGroup, VIcon, VTimeline, VTimelineItem, VTimelineItemDot, VTimelineItemContent, VTimelineDivider

**Feedback**: VAlert, VAlertTitle, VAlertGroup, VModal, VToast, VTooltip, VPopover, VPopoverButton, VPopoverGroup, VPopoverOverlay, VPopoverPanel, VProgressBar, VProgressCircular, VSpinner

**Other**: VBtn, VAppBar, VBanner, VBannerText, VBottomSheet, VBottomSheetHeader, VBottomSheetBody, VBottomSheetFooter, VBottomSheetMenus, VBottomSheetOverlay, VBottomSheetHandle, VCollapse, VCollapsible, VCollapsibleGroup, VDropdown, VDropdownItem, VDropdownButton, VDropdownBtn, VDropdownHeader, VDropdownActivator, VPagination, VRating, VShimmer, VStats, VStepper, VStepperItem, VStepperDivider, VStepperNumber, VCommand
:::

## Step 6: TypeScript Support (Recommended)

For full TypeScript support, create or update `src/env.d.ts`:

```ts
/// <reference types="vite/client" />
/// <reference types="@morpheme/ui/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

## Step 7: Vite Configuration (Optional)

For optimal development experience, update your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: [
      '@morpheme/ui',
      '@morpheme/utils',
      '@headlessui/vue'
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@morpheme/ui/dist/variables.scss";`
      }
    }
  }
})
```

## Verification

Test your installation by creating a simple component:

```vue
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
    <div class="max-w-md mx-auto space-y-4">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        Welcome to Morpheme UI!
      </h1>
      
      <VInput 
        v-model="name"
        placeholder="Enter your name"
        label="Your Name"
      />
      
      <VBtn 
        color="primary" 
        size="lg" 
        block
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
import { ref } from 'vue'

const name = ref('')
const message = ref('')

const greet = () => {
  message.value = name.value 
    ? `Hello, ${name.value}!` 
    : 'Hello, World!'
}
</script>
```

## Dark Mode Setup

Morpheme UI includes built-in dark mode support. To enable it:

1. **Toggle Dark Mode Programmatically:**

```vue
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <VBtn @click="toggleDark()" variant="outline">
    <Icon :name="isDark ? 'sun' : 'moon'" />
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </VBtn>
</template>
```

2. **Manual Dark Mode Toggle:**

```js
// Add 'dark' class to document element
document.documentElement.classList.toggle('dark')
```

## Icon Support

Morpheme UI supports multiple icon libraries:

### Heroicons (Recommended)

```bash
pnpm add @heroicons/vue
```

```vue
<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <VBtn>
    <HeartIcon class="w-4 h-4 mr-2" />
    Like
  </VBtn>
</template>
```

### Iconify

```bash
pnpm add @iconify/vue
```

```vue
<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <VBtn>
    <Icon icon="mdi:heart" class="mr-2" />
    Like
  </VBtn>
</template>
```

## Advanced Configuration

### Custom Theme

Create a custom theme by extending the Tailwind config:

```js
// tailwind.config.js
export default {
  presets: [require('@morpheme/tailwind-config/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Component Configuration

The current plugin supports basic configuration options. For component-specific defaults, you can create wrapper components or use provide/inject patterns:

```ts
// main.ts
import { createApp } from 'vue'
import MorphemeUI from '@morpheme/ui'

const app = createApp(App)

app.use(MorphemeUI, {
  components: true // Enable/disable automatic component registration
})

app.mount('#app')
```

For component defaults, consider creating wrapper components:

```vue
<!-- components/MyButton.vue -->
<template>
  <VBtn 
    :color="color || 'primary'"
    :variant="variant || 'solid'"
    v-bind="$attrs"
  >
    <slot />
  </VBtn>
</template>

<script setup lang="ts">
interface Props {
  color?: string
  variant?: string
}

withDefaults(defineProps<Props>(), {
  color: 'primary',
  variant: 'solid'
})
</script>
```

## Troubleshooting

### Common Issues

**Styles not applying correctly:**
- Ensure Tailwind CSS is properly configured
- Verify that Morpheme styles are imported after Tailwind
- Check that content paths include Morpheme components

**TypeScript errors:**
- Make sure `@morpheme/ui/types` is referenced in `env.d.ts`
- Verify Vue and TypeScript versions are compatible

**Bundle size issues:**
- Use manual imports instead of global registration
- Configure Vite optimizations for better tree shaking

**Components not rendering:**
- Check that the component is properly imported
- Verify Vue 3 compatibility
- Ensure all required dependencies are installed

### Performance Tips

1. **Use Manual Imports** for smaller bundle sizes
2. **Configure Vite optimizations** for faster development
3. **Enable tree shaking** by importing only needed components
4. **Use CSS purging** to remove unused styles

## Next Steps

Now that you have Morpheme UI installed in your Vue 3 project:

- **[Explore Components](/components/button)** - Browse our component library
- **[Learn Theming](/guide/theming)** - Customize the appearance
- **[Check Examples](https://github.com/gitsindonesia/ui-component/tree/main/starter/vue)** - See complete example projects
- **[Join Community](/guide/community)** - Get help and share feedback

## Step 3. Use the component

Open `src/views/HomeView.vue` and replace the existing content with the code below:

```vue
<template>
  <div class="container mx-auto p-6 space-y-3">
    <h1 class="text-3xl font-bold text-gray-800">Morpheme UI</h1>

    <VAlert color="error"> Alert text </VAlert>

    <VBtn color="primary"> Click me </VBtn>

    <VInput placeholder="Type something..." />
  </div>
</template>
```

::: info
The component `VAlert`, `VBtn` and `VInput` are registered globally.
:::

## Step 4. Boot up dev server

Run `dev` scripts and open http://localhost:5173.

```
yarn dev
```

If everything goes well, you should see something like in the browser:

![Getting Started 2](/getting-started-2.png)

## What's Next ?

Congratulation! You have completed setup your application with Morpheme UI! Now you can start creating your application with ease.

If you don't want to repeat this step in the future, you can save and push the project to your GitHub or somewhere else as your personal starter kit and use it when needed. You can also you the official [Nuxt Starter](https://github.com/gitsindonesia/nuxt-starter) and Vue Starter [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/vue).
