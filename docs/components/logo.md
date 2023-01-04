# Logo

The `VLogo` component a simple way to display GITS Logo.

## Usage

### Basic Usage

To use the logo component, just use it in the template like so:

<LivePreview src="components-logo--default" height="100" >

```vue
<template>
  <!-- VLogo is registered globally -->
  <VLogo />
</template>
```

</LivePreview>

::: info
The `VLogo` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### White

Use `white` prop to display white version of Logo.

<LivePreview src="components-logo--white" height="100" >

```vue
<template>
  <VLogo white />
</template>
```

</LivePreview>

### Custom Class

You can add custom class to the image via `img-class` prop.

<LivePreview src="components-logo--custom-class" height="100" >

```vue
<template>
  <v-logo img-class="h-10" />
</template>
```

</LivePreview>

### Link

You set link to the logo using `to` prop.

```vue
<template>
  <v-logo to="/" />
</template>
```

### Sizes

To change the size of logo, use `size` prop or just use `width` and/or `height` props.

<LivePreview src="components-logo--sizes" height="250" >

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

</LivePreview>

## Props

| Name                    | Type               | Default     |
| ----------------------- | ------------------ | ----------- |
| [`to`](#to)             | `string`           | `'/'`       |
| [`white`](#white)       | `boolean`          | `false`     |
| [`imgClass`](#imgClass) | `string`           | `''`        |
| [`size`](#size)         | `Sizes`            | `'md'`      |
| [`width`](#width)       | `string \| number` | `undefined` |
| [`height`](#height)     | `string \| number` | `undefined` |

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Logo` component individually via `@gits-id/logo` package:

```bash
npm i @gits-id/logo
```

```vue
<script setup lang="ts">
import VLogo from '@gits-id/logo';
import '@gits-id/logo/dist/style.css';
</script>

<template>
  <VLogo />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-logo--default).
