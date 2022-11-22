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

```css
/* input control / button */
--v-select-border-color: var(--v-input-border-color);
--v-select-border-radius: var(--v-input-border-radius);
--v-select-bg-color: var(--v-input-bg-color);
--v-select-height: var(--v-input-height);
--v-select-placeholder-color: var(--v-input-placeholder-color);
--v-select-border-radius: var(--v-input-border-radius);
--v-select-padding-x: var(--v-input-padding-x);
--v-select-padding-y: var(--v-input-padding-y);
--v-select-font-size: var(--v-input-font-size);

/* label */
--v-select-label-font-size: var(--v-input-label-font-size);
--v-select-label-font-weight: var(--v-input-label-font-weight);
--v-select-label-display: var(--v-input-label-display);
--v-select-label-margin-bottom: var(--v-input-label-margin-bottom);

/* text */
--v-select-text-color: var(--v-input-text-color);
--v-select-text-font-size: var(--v-input-text-font-size);
--v-select-text-font-weight: var(--v-input-text-font-weight);

/* icon */
--v-select-icon-width: var(--v-input-icon-width);
--v-select-icon-height: var(--v-input-icon-height);
--v-select-icon-color: var(--v-input-icon-color);

/* option item */
--v-select-option-padding-x: theme('spacing.4');
--v-select-option-padding-y: theme('spacing.2');
--v-select-option-bg-color: theme('colors.white');
--v-select-option-text-color: theme('colors.gray.800');

/* option item on hover */
--v-select-option-hover-bg-color: theme('colors.primary.500');
--v-select-option-hover-text-color: theme('colors.white');
```

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
