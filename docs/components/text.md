---
outline: deep
---

# Text

The `VText` component is used to display text based on the Morpheme Design System.

## Usage

### Variants

To use the `VText` component, you can use it in your template as follows:

<LivePreview src="components-text--variant" >

```vue
<template>
  <VText variant="sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- default -->
  <VText> Lorem ipsum dolor sit amet, consectetur adipiscing elit </VText>
  <VText variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
</template>
```

</LivePreview>

### Font Weight

Use `font-weight` prop to change the font weight.

<LivePreview src="components-text--font-weight" >

```vue
<template>
  <VText font-weight="thin">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="extrathin">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="semibold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="extrabold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText font-weight="black">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
</template>
```

</LivePreview>

### Colors

Use `color` prop to change the text color.

<LivePreview src="components-text--colors" >

```vue
<template>
  <VText color="primary" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="secondary" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="info" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="warning" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="error" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="success" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- design token color -->
  <VText color="rose.700" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- custom color -->
  <VText color="#FF87A0" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="lightblue" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- unspecify color -->
  <VText variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
</template>
```

</LivePreview>

## Props

| Name                        | Type                 | Default |
| --------------------------- | -------------------- | ------- |
| [`variant`](#variant)       | `TextVariants`       | `''`    |
| [`color`](#variant)         | `ColorVariants`      | `''`    |
| [`fontWeight`](#fontWeight) | `FontWeightVariants` | `''`    |

## Variants

```ts
export const textVariants = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'display-xs',
  'display-sm',
  'display-md',
  'display-lg',
  'display-xl',
  'display-2xl',
] as const;

export type TextVariants = typeof textVariants[number];

export const fontWeightVariants = [
  'thin',
  'extrathin',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

export type FontWeightVariants = typeof fontWeightVariants[number];

export const colorVariants = [
  'primary',
  'warning',
  'error',
  'success',
] as const;

export type ColorVariants = typeof colorVariants[number] | string;

export const mappedColors: Record<ColorVariants | string, string> = {
  primary: 'primary.500',
  warning: 'warning.500',
  error: 'error.500',
  success: 'success.500',
};
```

## Slots

### `default`

Default vue slot.

## CSS Variables

```scss
:root {
  --v-text-font-weight: 400;

  --v-text-xs-font-size: 0.75rem; // 12px
  --v-text-xs-line-height: 1.125rem; // 18px

  --v-text-sm-font-size: 0.875rem; // 14px
  --v-text-sm-line-height: 1.25rem; // 20px

  --v-text-md-font-size: 1rem; // 16px
  --v-text-md-line-height: 1.5rem; // 24px

  --v-text-lg-font-size: 1.125rem; // 18px
  --v-text-lg-line-height: 1.75rem; // 28px

  --v-text-xl-font-size: 1.25rem; // 20px
  --v-text-xl-line-height: 1.875rem; // 30px

  --v-text-display-xs-font-size: 1.5rem; // 24px
  --v-text-display-xs-line-height: 2rem; // 32px

  --v-text-display-sm-font-size: 1.875rem; // 30px
  --v-text-display-sm-line-height: 2.357rem; // 38px

  --v-text-display-md-font-size: 2.25rem; // 36px
  --v-text-display-md-line-height: 2.75rem; // 44px

  --v-text-display-lg-font-size: 3rem; // 48px
  --v-text-display-lg-line-height: 3.75rem; // 56px

  --v-text-display-xl-font-size: 3.75rem; // 60px
  --v-text-display-xl-line-height: 4.5rem; // 68px

  --v-text-display-2xl-font-size: 4.5rem; // 72px
  --v-text-display-2xl-line-height: 5.625rem; // 80px
}
```

## Manual Installation

You can also install the `VText` component individually via `@morpheme/text` package:

```bash
npm i @morpheme/text
```

```vue
<script setup lang="ts">
import VText from '@morpheme/text';
</script>

<template>
  <VText variant="display-sm" color="primary">Hello World</VText>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-text--variant).
