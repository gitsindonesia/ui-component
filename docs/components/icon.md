---
outline: deep
---

# Icon

`VIcon` component is based on [`@iconify/vue`](https://docs.iconify.design/icon-components/vue/). It allows you to easily display icons in your Vue.js application.

## Available Icons

You can view a list of available icons [here](https://icones.js.org/).

## Usage

### Basic Usage

To use the `VIcon` component, simply include it in your template like this:

<LivePreview src="components-icon--default" height="100">

```vue
<template>
  <VIcon name="ic:round-home" />
</template>
```

</LivePreview>

::: info
The `VIcon` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Sizes

The `VIcon` component allows you to specify the size of the icon using the `size` prop. Here are some examples of how to use it:

<LivePreview src="components-icon--sizes" height="100" >

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

</LivePreview>

### Morpheme Icons

You can use the morpheme icon collections by using these prefixes: `untitled:`, `remix:` and `iconsax`.

<LivePreview src="components-icon--morpheme-icons">

```vue
<template>
  <p class="font-medium mb-2">Default Collection</p>
  <VIcon name="ri:home-line" />
  <VIcon name="ic:round-local-activity" />
  <VIcon name="ph:activity-bold" />

  <p class="font-medium mb-2 mt-5">HypenCase</p>
  <VIcon name="remix:home-line" />
  <VIcon name="untitled:activity-heart" />
  <VIcon name="iconsax:outline/add" />
  <VIcon name="iconsax:bulk/add" />
  <VIcon name="iconsax:broken/add" />
  <VIcon name="iconsax:linear/add" />
  <VIcon name="iconsax:solid/add" />
  <VIcon name="iconsax:twotone/add" />

  <p class="font-medium mb-2 mt-5">Non exist</p>
  <VIcon v-bind='args' name="remix:non-exist-icon" />
</template>
```

</LivePreview>

## Props

| Name                    | Type                                                                | Default |
| ----------------------- | ------------------------------------------------------------------- | ------- |
| [`name`](#name)         | `string`                                                            | ` `     |
| [`size`](#size)         | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| string \| number` | `'md'`  |
| [`no-cache`](#no-cache) | `boolean`                                                           | `false` |


## Caching

By default, [Morpheme Icons](#morpheme-icons) are cached and stored on local storage. You can disable it per usage via `no-cache` prop.

```vue
<template>
  <VIcon name="iconsax:twotone/add" no-cache />
</template>
```

## Events

None

## Slots

None

## CSS Variables

None

## Standalone Installation

If you want to install the Icon component individually, you can use the `@morpheme/icon` package:

```bash
npm i @morpheme/icon
```

Then, you can use it in your Vue.js application like this:

```vue
<script setup lang="ts">
import VIcon from '@morpheme/icon';
</script>

<template>
  <VIcon name="ic:round-home" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-icon--default).
