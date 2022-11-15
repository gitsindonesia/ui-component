# Menus

Menus component. Usefull to create navigation menus. Triggered on hover.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" />
</template>
```

<LivePreview src="components-menus--default" />

::: info
The `VMenus` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Right

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" right />
</template>
```

<LivePreview src="components-menus--right" />

### Small

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" small />
</template>
```

<LivePreview src="components-menus--small" />

### In `AppBar`

```vue
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';

const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <div class="space-y-2">
    <VAppBar shadow>
      <span class="font-semibold mr-4">Default</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" />
        <VMenus label="About" :items="items" />
        <VMenus label="Profile" :items="items" />
      </nav>
    </VAppBar>
    <VAppBar shadow>
      <span class="font-semibold mr-4">Small</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" small />
        <VMenus label="About" :items="items" small />
        <VMenus label="Profile" :items="items" small />
      </nav>
    </VAppBar>
    <VAppBar shadow class="flex justify-between">
      <span class="font-semibold mr-4">Right</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" right />
        <VMenus label="About" :items="items" right />
        <VMenus label="Profile" :items="items" right />
      </nav>
    </VAppBar>
  </div>
</template>
```

<LivePreview src="components-menus--in-app-bar" />

## Props

| Name                      | Type                                     | Default          |
| ------------------------- | ---------------------------------------- | ---------------- |
| [`items`](#items)         | `Array as PropType<Record<string, any>>` | `[]`             |
| [`right`](#right)         | `Boolean`                                | `false`          |
| [`small`](#small)         | `Boolean`                                | `false`          |
| [`rightIcon`](#rightIcon) | `Boolean`                                | `false`          |
| [`btnClass`](#btnClass)   | `String`                                 | `''`             |
| [`placement`](#placement) | `String`                                 | `'bottom-start'` |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Menus` component individually via `@gits-id/menus` package:

```bash
yarn install @gits-id/menus
```

```vue
<script setup lang="ts">
import VMenus from '@gits-id/menus';
</script>

<template>
  <VMenus />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-menus--default).
