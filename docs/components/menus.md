# Menus

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

## Props

| Name                      | Type                                     | Default |
| ------------------------- | ---------------------------------------- | ------- |
| [`items`](#items)         | `Array as PropType<Record<string, any>>` | `[]`    |
| [`right`](#right)         | `Boolean`                                | `false` |
| [`small`](#small)         | `Boolean`                                | `false` |
| [`rightIcon`](#rightIcon) | `Boolean`                                | `false` |
| [`btnClass`](#btnClass)   | `String`                                 | `''`    |

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
