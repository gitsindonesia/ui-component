---
outline: deep
---

# Pagination

The `VPagination` component is used to create a pagination element for dividing content into multiple pages.

## Usage

### Basic Usage

To use `VPagination`, you need to pass in at least two props: `v-model`, which binds the component to a page number, and `total-items`, which specifies the total number of items being paginated. You can also specify how many items are displayed per page using the `items-per-page` prop.

<LivePreview src="components-pagination--default" height="80">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const page = ref(1);
const totalItems = ref(100);
const itemsPerPage = ref(10);
</script>

<template>
  <VPagination
    v-model="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
  />
</template>
```

</LivePreview>

### Variants

The pagination component supports three variants by default in which `default`, `text` and `text-rounded`.

<LivePreview src="components-pagination--variants" height="80">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const page = ref(1);
const totalItems = ref(100);
const itemsPerPage = ref(10);
</script>

<template>
  <VPagination
    v-model="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
  />
  <!-- variant: text -->
  <VPagination
    v-model="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    variant="text"
  />
  <!-- variant: text-rounded -->
  <VPagination
    v-model="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    variant="text-rounded"
  />
</template>
```

</LivePreview>

### Sizes

You can customize the size of the pagination element using the size prop, which can be set to `sm`, `md` (default), or `lg`.

<LivePreview src="components-pagination--sizes" height="180">

```vue
<template>
  <VPagination size="sm" />
  <VPagination />
  <VPagination size="lg" />
</template>
```

</LivePreview>

### Flat

To create a flat-style pagination element, set the `flat` prop to `true`.

<LivePreview src="components-pagination--flat" height="80">

```vue
<template>
  <VPagination flat />
</template>
```

</LivePreview>

### Custom Style

You can customize the appearance of the pagination element by passing in a style object using the `style` prop.

<LivePreview src="components-pagination--custom-style" height="80">

```vue
<template>
  <VPagination
    :style="{
      '--v-pagination-item-active-bg-color': 'purple',
      '--v-pagination-item-active-border-color': 'purple',
    }"
  />
</template>
```

</LivePreview>

### Slots

You can customize the text and icons of the pagination buttons using slots. Available slots are:

- `btnPrev`: the "previous" button
- `btnNext`: the "next" button
- `btnFirst`: the "first" button
- `btnLast`: the "last" button

<LivePreview src="components-pagination--slots" height="80">

```vue
<template>
  <VPagination>
    <template #btnPrev>Prev</template>
    <template #btnNext>Next</template>
    <template #btnFirst>First</template>
    <template #btnLast>Last</template>
  </VPagination>
</template>
```

</LivePreview>

## Props

| Name                              | Type             | Default                                     | Description                                                                                |
| --------------------------------- | ---------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`modelValue`](#modelValue)       | `number`         | `1`                                         | The page number that the pagination element is bound to.                                   |
| [`showFirst`](#showFirst)         | `boolean`        | `true`                                      | Determines whether the "first" button is displayed.                                        |
| [`showPrevious`](#showPrevious)   | `boolean`        | `true`                                      | Determines whether the "previous" button is displayed.                                     |
|                                   |
| [`showNext`](#showNext)           | `boolean`        | `true`                                      | Determines whether the "next" button is displayed.                                         |
| [`showLast`](#showLast)           | `boolean`        | `true`                                      | Determines whether the "last" button is displayed.                                         |
| [`totalItems`](#totalItems)       | `number`         | `0`                                         | The total number of items being paginated.                                                 |
| [`siblingCount`](#siblingCount)   | `number`         | `1`                                         | The number of page numbers displayed to the left and right of the active page number.      |
| [`boundaryCount`](#boundaryCount) | `number`         | `1`                                         | The number of page numbers displayed at the beginning and end of the list of page numbers. |
| [`itemsPerPage`](#itemsPerPage)   | `number`         | `10`                                        | The number of items displayed on each page.                                                |
| [`activeClass`](#activeClass)     | `string`         | `''`                                        | A class name applied to the active page number.                                            |
| [`defaultClass`](#defaultClass)   | `string`         | `''`                                        | A class name applied to the default page numbers.                                          |
| [`simple`](#simple)               | `boolean`        | `false`                                     | Determines whether the pagination element is displayed as a simple list of page numbers.   |
| [`flat`](#flat)                   | `boolean`        | `false`                                     | Determines whether the pagination element has a flat style.                                |
| [`size`](#size)                   | `sm \| md \| lg` | `md`                                        | The size of the pagination element.                                                        |
| [`prevIcon`](#prevIcon)           | `String`         | `'heroicons:chevron-left-20-solid'`         | The icon displayed in the "previous" button.                                               |
| [`nextIcon`](#nextIcon)           | `String`         | `'heroicons:chevron-right-20-solid'`        | The icon displayed in the "next" button.                                                   |
| [`firstIcon`](#firstIcon)         | `String`         | `'heroicons:chevron-double-left-20-solid'`  | The icon displayed in the "first" button.                                                  |
| [`lastIcon`](#lastIcon)           | `String`         | `'heroicons:chevron-double-right-20-solid'` | The icon displayed in the "last" button.                                                   |
| [`iconSize`](#iconSize)           | `String`         | `'sm'`                                      | The size of icon.                                                                          |
| [`iconClass`](#iconClass)         | `String`         | `''`                                        | A class name applied to the icon number.                                                   |

## Events

### `update:modelValue`

Emitted when the `modelValue` prop is changed. You can use this event to respond to changes in the active page number.

```vue
<script setup lang="ts">
import {ref} from 'vue';

const page = ref(1);

const onChange = (val: number) => console.log('Changed!', val);
</script>

<template>
  <VPagination v-model="page" @update:modelValue="onChange" />
</template>
```

## Slots

The `VPagination` component has several slots that allow you to customize the text and icons of the pagination buttons.

### `ellipsis`

Use this slot to customize the text or icon displayed as an ellipsis.

```vue
<template>
  <VPagination>
    <template #ellipsis> ... </template>
  </VPagination>
</template>
```

### `btnPrev`

Use this slot to customize the text or icon displayed in the "previous" button.

```vue
<template>
  <VPagination>
    <template #btnPrev> Previous </template>
  </VPagination>
</template>
```

### `btnNext`

Use this slot to customize the text or icon displayed in the "next" button.

```vue
<template>
  <VPagination>
    <template #btnNext> Next </template>
  </VPagination>
</template>
```

### `btnFirst`

Use this slot to customize the text or icon displayed in the "first" button.

```vue
<template>
  <VPagination>
    <template #btnFirst> First </template>
  </VPagination>
</template>
```

### `btnLast`

Use this slot to customize the text or icon displayed in the "last" button.

```vue
<template>
  <VPagination>
    <template #btnLast> Last </template>
  </VPagination>
</template>
```

## CSS Variables

```scss
:root {
  --v-pagination-shadow: var(--effect-shadow-xs);
  --v-pagination-border-radius: var(--border-radius-lg);
  --v-pagination-gap: var(--size-spacing-0);

  /* item */
  --v-pagination-item-padding-x: var(--size-spacing-4);
  --v-pagination-item-padding-y: var(--size-spacing-2);
  --v-pagination-item-bg-color: var(--color-white);
  --v-pagination-item-text-color: var(--color-gray-700);
  --v-pagination-item-border-color: var(--color-gray-300);
  --v-pagination-item-border-radius: var(--border-radius-lg);
  --v-pagination-item-border-width: 1px;
  --v-pagination-item-font-size: var(--size-font-sm);
  --v-pagination-item-font-weight: var(--font-weight-semibold);
  --v-pagination-item-height: 40px;
  --v-pagination-item-gap: var(--size-spacing-2);

  /* item active */
  --v-pagination-item-active-bg-color: var(--color-primary-500);
  --v-pagination-item-active-border-color: var(--color-primary-500);
  --v-pagination-item-active-text-color: var(--color-white);

  /* item hover */
  --v-pagination-item-hover-bg-color: var(--color-gray-50);

  /* item disabled */
  --v-pagination-item-disabled-bg-color: var(--v-pagination-item-bg-color);
  --v-pagination-item-disabled-border-color: var(--v-pagination-item-border-color);
  --v-pagination-item-disabled-text-color: var(--color-gray-400);

  /* item action */
  --v-pagination-item-action-padding-x: var(--size-spacing-2);
  --v-pagination-item-action-padding-y: var(--size-spacing-2);
  /* action sm */
  --v-pagination-sm-item-action-padding-x: var(--size-spacing-2);
  --v-pagination-sm-item-action-padding-y: var(--size-spacing-2);
  /* action sm */
  --v-pagination-lg-item-action-padding-x: var(--size-spacing-4);
  --v-pagination-lg-item-action-padding-y: var(--size-spacing-4);
}
```

## Standalone Installation

You can also install the `Pagination` component individually via `@morpheme/pagination` package:

```bash
npm i @morpheme/pagination
```

```vue
<script setup lang="ts">
import VPagination from '@morpheme/pagination';
</script>

<template>
  <VPagination />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-pagination--default).
