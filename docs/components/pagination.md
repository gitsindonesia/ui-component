# Pagination

Vue pagination component.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const page = ref(1);
const totalItems = ref(100);
const itemsPerPage = ref(10);
</script>

<template>
  <!-- VPagination is registered globally -->
  <VPagination
    v-model="page"
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
  />
</template>
```

<LivePreview src="components-pagination--default" />

::: info
The `VPagination` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Sizes

```vue
<template>
  <VPagination size="sm" />
  <VPagination />
  <VPagination size="lg" />
</template>
```

<LivePreview src="components-pagination--sizes" />

### Flat

```vue
<template>
  <VPagination flat />
</template>
```

<LivePreview src="components-pagination--flat" />

### Custom Style

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

<LivePreview src="components-pagination--custom-style" />

### Slots

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

<LivePreview src="components-pagination--slots" />

## Props

| Name                              | Type             | Default                                     |
| --------------------------------- | ---------------- | ------------------------------------------- |
| [`modelValue`](#modelValue)       | `number`         | `1`                                         |
| [`showFirst`](#showFirst)         | `boolean`        | `true`                                      |
| [`showPrevious`](#showPrevious)   | `boolean`        | `true`                                      |
| [`showNext`](#showNext)           | `boolean`        | `true`                                      |
| [`showLast`](#showLast)           | `boolean`        | `true`                                      |
| [`totalItems`](#totalItems)       | `number`         | `0`                                         |
| [`siblingCount`](#siblingCount)   | `number`         | `1`                                         |
| [`boundaryCount`](#boundaryCount) | `number`         | `1`                                         |
| [`itemsPerPage`](#itemsPerPage)   | `number`         | `10`                                        |
| [`activeClass`](#activeClass)     | `string`         | `''`                                        |
| [`defaultClass`](#defaultClass)   | `string`         | `''`                                        |
| [`simple`](#simple)               | `boolean`        | `false`                                     |
| [`flat`](#flat)                   | `boolean`        | `false`                                     |
| [`size`](#size)                   | `sm \| md \| lg` | `md`                                        |
| [`prevIcon`](#prevIcon)           | `String`         | `'heroicons:chevron-left-20-solid'`         |
| [`nextIcon`](#nextIcon)           | `String`         | `'heroicons:chevron-right-20-solid'`        |
| [`firstIcon`](#firstIcon)         | `String`         | `'heroicons:chevron-double-left-20-solid'`  |
| [`lastIcon`](#lastIcon)           | `String`         | `'heroicons:chevron-double-right-20-solid'` |
| [`iconSize`](#iconSize)           | `String`         | `'sm'`                                      |
| [`iconClass`](#iconClass)         | `String`         | `''`                                        |

## Methods

None

## Events

### `update:modelValue`

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

### `ellipsis`

```vue
<template>
  <VPagination>
    <template #ellipsis> ... </template>
  </VPagination>
</template>
```

### `btnPrev`

```vue
<template>
  <VPagination>
    <template #btnPrev> Previous </template>
  </VPagination>
</template>
```

### `btnNext`

```vue
<template>
  <VPagination>
    <template #btnNext> Next </template>
  </VPagination>
</template>
```

### `btnFirst`

```vue
<template>
  <VPagination>
    <template #btnFirst> First </template>
  </VPagination>
</template>
```

### `btnLast`

```vue
<template>
  <VPagination>
    <template #btnLast> Last </template>
  </VPagination>
</template>
```

## CSS Variables

```css
:root {
  --v-pagination-shadow: theme('boxShadow.sm');

  /* item */
  --v-pagination-item-padding-x: theme('padding.4');
  --v-pagination-item-padding-y: theme('padding.2');
  --v-pagination-item-bg-color: theme('colors.white');
  --v-pagination-item-text-color: theme('colors.gray.700');
  --v-pagination-item-border-color: theme('colors.gray.300');
  --v-pagination-item-border-radius: theme('borderRadius.DEFAULT');
  --v-pagination-item-border-width: theme('borderWidth.DEFAULT');
  --v-pagination-item-font-size: theme('fontSize.sm');
  --v-pagination-item-font-weight: theme('fontWeight.medium');
  --v-pagination-item-height: 38px;
  --v-pagination-item-gap: theme('padding.2');

  /* item active */
  --v-pagination-item-active-bg-color: theme('colors.primary.500');
  --v-pagination-item-active-border-color: theme('colors.primary.500');
  --v-pagination-item-active-text-color: theme('colors.white');

  /* item hover */
  --v-pagination-item-hover-bg-color: theme('colors.gray.50');

  /* item disabled */
  --v-pagination-item-disabled-bg-color: inherit;
  --v-pagination-item-disabled-text-color: theme('colors.gray.400');

  /* item action */
  --v-pagination-item-action-padding-x: theme('padding.2');
  --v-pagination-item-action-padding-y: theme('padding.2');
  /* action sm */
  --v-pagination-sm-item-action-padding-x: theme('padding.2');
  --v-pagination-sm-item-action-padding-y: theme('padding.2');
  /* action sm */
  --v-pagination-lg-item-action-padding-x: theme('padding.4');
  --v-pagination-lg-item-action-padding-y: theme('padding.4');
}
```

## Manual Installation

You can also install the `Pagination` component individually via `@gits-id/pagination` package:

```bash
npm i @gits-id/pagination
```

```vue
<script setup lang="ts">
import VPagination from '@gits-id/pagination';
import '@gits-id/pagination/dist/style.css';
</script>

<template>
  <VPagination />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-pagination--default).
