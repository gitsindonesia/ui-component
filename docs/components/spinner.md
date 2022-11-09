<script setup lang="ts">
import {VSpinner} from '@gits-id/ui';
</script>

# Spinner

## Usage

### Basic Usage

```vue
<template>
  <!-- VSpinner is registered globally -->
  <VSpinner />
</template>
```

<LivePreview src="components-spinner--default" height="auto" />

::: info
The `VSpinner` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Color

- **prop**: `color`
- **type**: `string`
- **default**: ``
- **required**: `false`

Use `color` to different color style to the spinner.

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

<LivePreview src="components-spinner--colors" height="auto"/>

### Size

Use `xSmall`, `small`, `large` or `xLager` prop to easily switch the size of the spinner.

```vue
<template>
  <v-spinner />
  <v-spinner xSmall />
  <v-spinner small />
  <v-spinner large />
  <v-spinner xLarge />
</template>
```

<LivePreview src="components-spinner--sizes" height="auto" />

## Props

| Name            | Type                                               | Default   |
|-----------------|----------------------------------------------------|-----------|
| [color](#color) | `string` , [available colors](/guide/theme#colors) | `default` |
| [xSmall](#size) | `boolean`                                          | `false`   |
| [small](#size)  | `boolean`                                          | `false`   |
| [large](#size)  | `boolean`                                          | `false`   |
| [xLarge](#size) | `boolean`                                          | `false`   |

## Manual Installation

You can also install the `Spinner` component individually via `@gits-id/spnner` package:

```bash
yarn install @gits-id/spinner
```

```vue
<script setup lang="ts">
import VSpinner from '@gits-id/spinner';
</script>

<template>
  <VSpinner />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-spinner--default).
