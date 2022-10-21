# Icon

Icon component based on [`@iconify/vue`](https://docs.iconify.design/icon-components/vue/).

## Available Icons

View available icons [here](https://icones.js.org/).

## Usage

### Basic Usage

```vue
<template>
  <VIcon name="ic:round-home" />
</template>
```

<LivePreview src="components-icon--default" height="80" />

::: info
The `VIcon` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Sizes

```vue
<template>
  <VIcon name="ri:search-line" size="xxs" />
  <VIcon name="ri:search-line" size="xs" />
  <VIcon name="ri:search-line" size="sm" />
  <VIcon name="ri:search-line" size="md" />
  <VIcon name="ri:search-line" size="lg" />
  <VIcon name="ri:search-line" size="xl" />
  <VIcon name="ri:search-line" size="50" />
  <VIcon name="ri:search-line" :size="70" />
</template>
```

<LivePreview src="components-icon--sizes" height="100" />

## Props

| Name            | Type                                  | Default |
| --------------- | ------------------------------------- | ------- |
| [`name`](#name) | `string`                              | ` `     |
| [`size`](#size) | `'xxs', 'xs', 'sm', 'md', 'lg', 'xl'` | `'md'`  |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Icon` component individually via `@gits-id/icon` package:

```bash
yarn install @gits-id/icon
```

```vue
<script setup lang="ts">
import VIcon from '@gits-id/icon';
</script>

<template>
  <VIcon name="ic:round-home" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-icon--default).
