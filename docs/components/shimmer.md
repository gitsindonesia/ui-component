# Shimmer

Shimmer / content placeholder component.

## Usage

### Basic Usage

```vue
<template>
  <!-- VShimmer is registered globally -->
  <VShimmer />
</template>
```

<LivePreview height="100" src="components-shimmer--default" />

::: info
The `VShimmer` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Rounded

```vue
<template>
  <VShimmer rounded height="20" width="200" />
</template>
```

<LivePreview height="100" src="components-shimmer--rounded" />

### Circle

```vue
<template>
  <VShimmer rounded height="200" width="200" />
</template>
```

<LivePreview height="250" src="components-shimmer--circle" />

### Multiple Lines

```vue
<template>
  <VShimmer lines="3" height="20" width="300" />
</template>
```

<LivePreview height="150" src="components-shimmer--multiple-lines" />

### Card Shimmer

```vue
<template>
  <div class="flex gap-4 shadow p-6 rounded-lg">
    <VShimmer :width="100" :height="100" rounded />
    <div class="flex-1 w-8/12">
      <VShimmer :lines="4" width="100%" :height="20" class="mb-2" rounded />
    </div>
  </div>
</template>
```

<LivePreview height="200" src="components-shimmer--card-shimmer" />

## Props

| Name                | Type               | Default |
| ------------------- | ------------------ | ------- |
| [`width`](#width)   | `number \| string` | `100`   |
| [`height`](#height) | `string \| number` | `16`    |
| [`lines`](#lines)   | `string \| number` | `1`     |

## Methods

None

## Events

None

## Slots

None

## CSS Variable

```css
:root {
  --shimmer-bg-image: linear-gradient(
    to right,
    rgb(247, 247, 247),
    rgb(220, 220, 220),
    rgb(247, 247, 247)
  );
  --shimmer-bg-size: 200%;
  --shimmer-border-radius: 0;
  --shimmer-animation-name: a-background-move;
  --shimmer-animation-duration: 1.5s;
}
```

## Manual Installation

You can also install the `Shimmer` component individually via `@gits-id/shimmer` package:

yarn:

```bash
yarn add @gits-id/shimmer
```

npm:

```bash
npm i @gits-id/shimmer
```

pnpm :

```bash
pnpm add @gits-id/shimmer
```

```vue
<script setup lang="ts">
import Shimmer from '@gits-id/shimmer';
import '@gits-id/shimmer/dist/style.css';
</script>

<template>
  <Shimmer />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-shimmer--default).
