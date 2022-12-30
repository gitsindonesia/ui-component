# Icon

`VIcon` component is based on [`@iconify/vue`](https://docs.iconify.design/icon-components/vue/). It allows you to easily display icons in your Vue.js application.

## Available Icons

You can view a list of available icons [here](https://icones.js.org/).

## Usage

### Basic Usage

To use the `VIcon` component, simply include it in your template like this:

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

The `VIcon` component allows you to specify the size of the icon using the `size` prop. Here are some examples of how to use it:

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

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

If you want to install the Icon component individually, you can use the `@gits-id/icon` package:

```bash
npm i @gits-id/icon
```

Then, you can use it in your Vue.js application like this:

```vue
<script setup lang="ts">
import VIcon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';
</script>

<template>
  <VIcon name="ic:round-home" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-icon--default).
