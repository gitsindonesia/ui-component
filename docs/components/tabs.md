# Tabs

## Usage

### Basic Usage

```ts
// helpers
function createItems(len = 20, additionalItem = {}) {
  return [...Array(len)].map((v, k) => ({
    text: `Tab Item ${k + 1}`,
    ...additionalItem,
  }));
}

const items = createItems();
```

```vue
<template>
  <VTabs :items="items" />
</template>
```

<LivePreview src="components-tabs--default" />

::: info
The `VTabs` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Custom Active Class

```vue
<template>
  <VTabs
    :items="items"
    default-class="!rounded-lg"
    inactive-class="hover:bg-success-50 hover:!text-success-600"
    active-class="bg-success-50 rounded-t text-success-600 font-semibold"
    hide-slider
  />
</template>
```

<LivePreview src="components-tabs--custom-active-class"  />

### Show Arrow

```vue
<template>
  <v-tabs :items="items" show-arrows />
</template>
```

<LivePreview src="components-tabs--show-arrows" />

### Center Active

```vue
<template>
  <v-tabs :items="items" center-active />
</template>
```

<LivePreview src="components-tabs--center-active" />

### Vertical

```vue
<template>
  <v-tabs :items="items" vertical />
</template>
```

<LivePreview src="components-tabs--vertical" />

### Tabs with Card

```vue
<template>
  <VCard body-class="!p-0" hide-header hide-footer>
    <VTabs v-model="tab" />
    <div class="px-4 py-2">Tab Content {{ tab }}</div>
  </VCard>
</template>
```

<LivePreview src="components-tabs--tabs-with-card" />

## Props

| Name                                          | Type               | Default               |
| --------------------------------------------- | ------------------ | --------------------- |
| [`modelValue`](#modelValue)                   | `Number or String` | `0`                   |
| [`items`](#items)                             | `Array<TabItem[]>` | `[]`                  |
| [`itemText`](#itemText)                       | `String`           | `'text'`              |
| [`color`](#color)                             | `String`           | `'primary'`           |
| [`showArrows`](#showArrows)                   | `Boolean`          | `false`               |
| [`centerActive`](#centerActive)               | `Boolean`          | `false`               |
| [`removeable`](#removeable)                   | `Boolean`          | `false`               |
| [`vertical`](#vertical)                       | `Boolean`          | `false`               |
| [`defaultWrapperClass`](#defaultWrapperClass) | `String`           | `'flex items-center'` |
| [`wrapperClass`](#wrapperClass)               | `String`           | `''`                  |
| [`hideSlider`](#hideSlider)                   | `Boolean`          | `false`               |
| [`activeClass`](#activeClass)                 | `String`           | `'font-semibold'`     |
| [`inactiveClass`](#inactiveClass)             | `String`           | `''`                  |
| [`defaultClass`](#defaultClass)               | `String`           | `''`                  |
| [`contentClass`](#contentClass)               | `String`           | `''`                  |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Tabs` component individually via `@gits-id/tabs` package:

```bash
yarn install @gits-id/tabs
```

```vue
<script setup lang="ts">
import VTabs from '@gits-id/tabs';
</script>

<template>
  <VTabs :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-tabs--default).
