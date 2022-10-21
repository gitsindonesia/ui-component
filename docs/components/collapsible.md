# Collapsible

Collapsible component based on Headless UI.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {isOpen} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <!-- VCollapsible is registered globally -->
  <VCollapsible v-model="false">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
    reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut
    consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi
    elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui.
    Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute
    aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est
    pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapsible>
</template>
```

<LivePreview src="components-collapsible--default" />

::: info
The `VCollapsible` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Auto Open

```vue
<template>
  <VCollapsible :model-value="true" />
</template>
```

<LivePreview src="components-collapsible--auto-open" />

### Hide Icon

```vue
<template>
  <VCollapsible hide-icon />
</template>
```

<LivePreview src="components-collapsible--auto-open" />

### Custom Class

```vue
<template>
  <VCollapsible
    :items="items"
    header-class=""
    active-class="font-semibold text-red-500 bg-red-200 rounded-t-lg"
    inactive-class="text-red-500 bg-red-50"
    wrapper-class="rounded-lg"
    activator-class="hover:bg-red-200 hover:text-red-500"
    panel-class="border p-4 rounded-b-lg"
  />
</template>
```

<LivePreview src="components-collapsible--custom-classes" />

## Props

| Name                                | Type      | Default       |
| ----------------------------------- | --------- | ------------- |
| [`modelValue`](#modelValue)         | `Boolean` | `false`       |
| [`defaultOpen`](#defaultOpen)       | `Boolean` | `false`       |
| [`title`](#title)                   | `String`  | `''`          |
| [`activeClass`](#activeClass)       | `String`  | `''`          |
| [`wrapperClass`](#wrapperClass)     | `String`  | `'mb-5'`      |
| [`inactiveClass`](#inactiveClass)   | `String`  | `''`          |
| [`activatorClass`](#activatorClass) | `String`  | `''`          |
| [`panelClass`](#panelClass)         | `String`  | `'px-4 pb-4'` |
| [`hideIcon`](#hideIcon)             | `Boolean` | `false`       |

## Methods

None

## Events

- `update:modelValue`
- `change`

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Collapsible` component individually via `@gits-id/collapsible` package:

```bash
yarn install @gits-id/collapsible
```

```vue
<script setup lang="ts">
import VCollapsible from '@gits-id/collapsible';
</script>

<template>
  <VCollapsible> Hello </VCollapsible>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-collapsible--default).
