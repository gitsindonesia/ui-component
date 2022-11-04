# Select

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" />
</template>
```

<LivePreview src="components-select--select" />

::: info
The `VSelect` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Searchable

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" searchable />
</template>
```

<LivePreview src="components-select--searchable" />

### No Check Icon

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" no-check-icon />
</template>
```

<LivePreview src="components-select--no-check-icon" />

### Label

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" label />
</template>
```

<LivePreview src="components-select--label" />

### Shadow

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" shadow />
</template>
```

<LivePreview src="components-select--shadow" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <VSelect :items="items" validation />
</template>
```

<LivePreview src="components-select--validation" />

## Props

| Name                              | Type                                | Default                         |
| --------------------------------- | ----------------------------------- | ------------------------------- |
| [`value`](#value)                 | `[Object, String, Number, Boolean]` | `''`                            |
| [`modelValue`](#modelValue)       | `[Object, String, Number, Boolean]` | `''`                            |
| [`items`](#items)                 | `Array as PropType<SelectItem[]>`   | `[]`                            |
| [`color`](#color)                 | `String`                            | `'primary'`                     |
| [`placeholder`](#placeholder)     | `String`                            | `'Select'`                      |
| [`searchable`](#searchable)       | `Boolean`                           | `false`                         |
| [`hideCheckIcon`](#hideCheckIcon) | `Boolean`                           | `false`                         |
| [`btnClass`](#btnClass)           | `String`                            | `''`                            |
| [`top`](#top)                     | `Boolean`                           | `false`                         |
| [`itemText`](#itemText)           | `String`                            | `'text'`                        |
| [`itemValue`](#itemValue)         | `String`                            | `'value'`                       |
| [`name`](#name)                   | `String`                            | `''`                            |
| [`error`](#error)                 | `Boolean`                           | `false`                         |
| [`errorMessages`](#errorMessages) | `Array`                             | `[]`                            |
| [`returnObject`](#returnObject)   | `Boolean`                           | `false`                         |
| [`clearable`](#clearable)         | `Boolean`                           | `false`                         |
| [`clearText`](#clearText)         | `String`                            | `'Clear'`                       |
| [`disabled`](#disabled)           | `Boolean`                           | `false`                         |
| [`readonly`](#readonly)           | `Boolean`                           | `false`                         |
| [`label`](#label)                 | `String`                            | `''`                            |
| [`labelClass`](#labelClass)       | `String`                            | `'mb-1 block'`                  |
| [`wrapperClass`](#wrapperClass)   | `String`                            | `''`                            |
| [`errorClass`](#errorClass)       | `String`                            | `'text-error-600 mt-1 text-sm'` |
| [`rules`](#rules)                 | `String`                            | `''`                            |
| [`shadow`](#shadow)               | `Boolean`                           | `false`                         |
| [`shadowClass`](#shadowClass)     | `String`                            | `'shadow-sm'`                   |

## Types

### `SelectItem`

```ts
type SelectItem = {
  text: string;
  value: any;

  [x: string]: any;
};
```

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Select` component individually via `@gits-id/select` package:

```bash
yarn install @gits-id/select
```

```vue
<script setup lang="ts">
import VSelect from '@gits-id/select';
</script>

<template>
  <VSelect />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-select--default).
