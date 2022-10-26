# Logo

## Usage

### Basic Usage

```vue
<template>
  <!-- VLogo is registered globally -->
  <VLogo />
</template>
```

<LivePreview src="components-logo--default" height="100" />

::: info
The `VLogo` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### White

```vue
<template>
  <VLogo white />
</template>
```

<LivePreview src="components-logo--white" height="100" />

### Custom Class

```vue
<template>
  <v-logo img-class="h-10" />
</template>
```

<LivePreview src="components-logo--custom-class" height="100" />

### Sizes

```vue
<script setup lang="ts">
const sizes = ['xxs', 'xs', 'sm', 'md', 'lg'];
</script>

<template>
  <v-logo v-for="size in sizes" :key="size" :size="size" />
  <v-logo :width="300" />
  <v-logo width="auto" :height="175" />
</template>
```

<LivePreview src="components-logo--sizes" height="250" />

## Props

| Name                    | Type               | Default     |
| ----------------------- | ------------------ | ----------- |
| [`to`](#to)             | `string`           | `'/'`       |
| [`white`](#white)       | `boolean`          | `false`     |
| [`imgClass`](#imgClass) | `string`           | `''`        |
| [`size`](#size)         | `Sizes`            | `'md'`      |
| [`width`](#width)       | `string \| number` | `undefined` |
| [`height`](#height)     | `string \| number` | `undefined` |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Logo` component individually via `@gits-id/logo` package:

```bash
yarn install @gits-id/logo
```

```vue
<script setup lang="ts">
import VLogo from '@gits-id/logo';
</script>

<template>
  <VLogo />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-logo--default).
