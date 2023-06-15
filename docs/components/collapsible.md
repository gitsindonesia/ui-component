---
outline: deep
---

# Collapsible

The `Collapsible` component is based on Headless UI and allows you to toggle the visibility of content within your Vue app. It can be used to hide or reveal information in a compact and organized manner.

## Usage

### Basic Usage

You can use the VCollapsible component in your template like so:

<LivePreview src="components-collapse--default">

```vue
<script setup lang="ts">
import { isOpen } from "vue";

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> Toggle </VBtn>
  <VCollapse :show="isOpen">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi.
    Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur
    adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat
    consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet
    magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore
    et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapse>
</template>
```

</LivePreview>

The `isOpen` variable in the `v-model` directive controls whether the collapsible is open or closed.

### Expanded List Example

<LivePreview src="components-collapsible--auto-open" >

```vue
<template>
  <VCollapsible :model-value="true" />
</template>
```

</LivePreview>

### Hide Icon

To hide the icon that indicates whether the collapsible is open or closed, set the `hideIcon` prop to true:

<LivePreview src="components-collapsible--auto-open">

```vue
<template>
  <VCollapsible hide-icon />
</template>
```

</LivePreview>

## Props

| Name                        | Type      | Default |
| --------------------------- | --------- | ------- |
| [`show`](#show)             | `Boolean` | `false` |
| [`duration`](#duration)     | `String`  | `''`    |
| [`transition`](#transition) | `String`  | `''`    |

## Events

None

## Slots

- Default

## CSS Variables

None

## Standalone Installation

You can also install the `Collapsible` component individually via `@morpheme/collapsible` package:

```bash
npm i @morpheme/collapsible
```

```vue
<script setup lang="ts">
import { VCollapse } from "@morpheme/collapsible";

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> Toggle </VBtn>
  <VCollapse :show="isOpen"> Hello World </VCollapse>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-collapse--default).
