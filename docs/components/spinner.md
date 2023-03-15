---
outline: deep
---

# Spinner

The `VSpinner` component is a spinning loader used to indicate that content is loading.

## Usage

### Basic Usage

To use the `VSpinner` component, simply include it in your template:

<LivePreview src="components-spinner--default" height="auto" >

```vue
<template>
  <VSpinner />
</template>
```

</LivePreview>

::: info
The `VSpinner` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Colors

You can customize the color of the spinner using the `color` prop. This prop accepts a string value corresponding to one of the available colors. The default value is `default`.

- **prop**: `color`
- **type**: `string`
- **default**: ``
- **required**: `false`

Use `color` to different color style to the spinner.

<LivePreview src="components-spinner--colors" height="auto">

```vue
<template>
  <VSpinner />
  <VSpinner color="primary" />
  <VSpinner color="secondary" />
  <VSpinner color="info" />
  <VSpinner color="warning" />
  <VSpinner color="success" />
  <VSpinner color="error" />
  <VSpinner color="dark" />
</template>
```

</LivePreview>

### Size

You can customize the size of the spinner using the `xSmall`, `small`, `large`, or `xLarge` prop. These props are boolean values and should be set to `true` to activate the corresponding size. The default size is `medium`.

<LivePreview src="components-spinner--sizes" height="auto" >

```vue
<template>
  <v-spinner />
  <v-spinner xSmall />
  <v-spinner small />
  <v-spinner large />
  <v-spinner xLarge />
</template>
```

</LivePreview>

## Props

| Name            | Type                                               | Default   |
| --------------- | -------------------------------------------------- | --------- |
| [color](#color) | `string` , [available colors](/guide/theme#colors) | `default` |
| [xSmall](#size) | `boolean`                                          | `false`   |
| [small](#size)  | `boolean`                                          | `false`   |
| [large](#size)  | `boolean`                                          | `false`   |
| [xLarge](#size) | `boolean`                                          | `false`   |

## Manual Installation

You can also install the `Spinner` component individually via `@morpheme/spnner` package:

```bash
npm i @morpheme/spinner
```

```vue
<script setup lang="ts">
import VSpinner from '@morpheme/spinner';
</script>

<template>
  <VSpinner />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-spinner--default).
