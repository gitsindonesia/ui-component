# Pagination

## Usage

### Basic Usage

```vue
<template>
  <VProgressBar color="default" :width="70" />
</template>
```

<LivePreview src="components-progressbar--variants" height="100" />

::: info
The `VProgressbBr` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::


## Props

| Name                   | Type      | Default     |
| -----------------------| ----------| ----------- |
| [`width`](#width)      | `number`  | `50`        |
| [`color`](#color)      | `string`  | `default`   |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Progress Bar` component individually via `@gits-id/progress-bar` package:

```bash
yarn install @gits-id/progress-bar
```

```vue
<script setup lang="ts">
import VProgressBar from '@gits-id/progress-bar';
</script>

<template>
  <VProgressBar />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-progressbar--variants).
