---
outline: deep
---

# Tooltip

The `VTooltip` component displays a small pop-up box with additional information when the user hovers over or clicks an element.

## Usage

::: info
The `VTooltip` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Basic Usage

To use the tooltip component, you can use it in your template as follows:

<LivePreview src="components-tooltip--tooltip" >

```vue
<template>
  <VTooltip placement="top">
    <template #activator>
      <VBtn> Hove me </VBtn>
    </template>
    <span>Hello :)</span>
  </VTooltip>
</template>
```

</LivePreview>

The `activator` slot contains the element that will trigger the tooltip when hovered over or clicked. In this example, it is a `VBtn` component. The `VTooltip` component will display the `span` element as the tooltip.

### Directive Usage

You can also use directive to create tooltip using `v-tooltip` directive.

```vue
<template>
  <VBtn
    v-tooltip="{
      content: 'Hello :)',
      theme: 'tooltip-black', // available: tooltip-black, tooltip-white
    }"
  >
    Hove me
  </VBtn>
</template>
```

## Props

| Name                                   | Type     | Default |
| -------------------------------------- | -------- | ------- |
| [`placement`](#placement)              | `string` | `'top'` |
| [`options`](#options) ❌               | `object` | `{}`    |
| [`activatorClass`](#activatorClass) ❌ | `string` | `''`    |
| [`tooltipClass`](#tooltipClass) ❌     | `string` | `''`    |

❌ = deprecated

## Placements

```ts
const placements = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];
```

## Events

None

## Slots

None

## CSS Variables

None

## Standalone Installation

You can also install the `Tooltip` component individually via `@morpheme/tooltip` package:

```bash
npm i @morpheme/tooltip
```

```vue
<script setup lang="ts">
import VTooltip from '@morpheme/tooltip';
</script>

<template>
  <VTooltip>
    <template #activator="{on}">
      <VBtn v-on="on"> Hove Me </VBtn>
    </template>
    <span>Hello :)</span>
  </VTooltip>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-tooltip--default).
