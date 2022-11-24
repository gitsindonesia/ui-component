# ProgressBar

Vue Progress Bar / Progress Linear component.

## Usage

### Basic Usage

```vue
<template>
  <VProgressBar :model-value="70" />
  <VProgressBar color="primary" :model-value="70" />
  <VProgressBar color="secondary" :model-value="70" />
  <VProgressBar color="info" :model-value="70" />
  <VProgressBar color="warning" :model-value="70" />
  <VProgressBar color="success" :model-value="70" />
  <VProgressBar color="error" :model-value="70" />
  <VProgressBar color="dark" :model-value="70" />
</template>
```

<LivePreview src="components-progressbar--variants" />

::: info
The `VProgressbBr` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Slots

```vue
<template>
  <VProgressBar
    v-slot="{value}"
    color="secondary"
    class="mb-4"
    :model-value="70"
  >
    {{ value }} %
  </VProgressBar>
  <VProgressBar color="primary" class="mb-4" :height="20" :model-value="70">
    <template #label="{value}"> {{ value }} % </template>
  </VProgressBar>
</template>
```

<LivePreview src="components-progressbar--slots" />

### `v-model`

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref(10);
</script>

<template>
  <VProgressBar color="secondary" v-model="value" />

  <div class="mt-4 space-x-2">
    <VBtn size="sm" @click="value -= 10">-10</VBtn>
    <VBtn size="sm" @click="value += 10">+10</VBtn>
    <VBtn size="sm" @click="value = 100">Full</VBtn>
    <VBtn size="sm" @click="value = 0">Reset</VBtn>
  </div>
</template>
```

<LivePreview src="components-progressbar--v-model" />

### Indeterminate

```vue
<template>
  <VProgressBar color="secondary" indeterminate />
</template>
```

<LivePreview src="components-progressbar--indeterminate" />

## Props

| Name                              | Type               | Default   |
| --------------------------------- | ------------------ | --------- |
| [`modelValue`](#modelValue)       | `number \| string` | `0`       |
| [`color`](#color)                 | `string`           | `default` |
| [`min`](#min)                     | `[Number, String]` | `0`       |
| [`max`](#max)                     | `[Number, String]` | `100`     |
| [`height`](#height)               | `[Number, String]` | `''`      |
| [`bgColor`](#bgColor)             | `String`           | `''`      |
| [`fillColor`](#fillColor)         | `String`           | `''`      |
| [`bgClass`](#bgClass)             | `String`           | `''`      |
| [`fillClass`](#fillClass)         | `String`           | `''`      |
| [`label`](#label)                 | `String`           | `''`      |
| [`labelClass`](#labelClass)       | `String`           | `''`      |
| [`indeterminate`](#indeterminate) | `Boolean`          | `false`   |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

```css
:root {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.gray.400');
  --v-progress-bar-height: theme('height.2');
  --v-progress-bar-border-radius: theme('borderRadius.full');
  --v-progress-bar-font-size: theme('fontSize.xs');
  --v-progress-bar-label-color: theme('colors.white');
  --v-progress-bar-transition-property: theme('transitionProperty.all');
  --v-progress-bar-transition-duration: theme('transitionDuration.300');
  --v-progress-bar-transition-timing-function: theme(
    'transitionTimingFunction.in-out'
  );
  --v-progress-bar-indeterminate-animation-name: indeterminateAnimation;
  --v-progress-bar-indeterminate-animation-duration: 2s;
  --v-progress-bar-indeterminate-animation-timing-function: linear;
  --v-progress-bar-indeterminate-animation-iteration-count: infinite;
}
```

## Manual Installation

You can also install the `Progress Bar` component individually via `@gits-id/progress-bar` package:

```bash
yarn install @gits-id/progress-bar
```

```vue
<script setup lang="ts">
import VProgressBar from '@gits-id/progress-bar';
import '@gits-id/progress-bar/dist/style.css';
</script>

<template>
  <VProgressBar />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-progressbar--variants).
