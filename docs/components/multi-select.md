# Multi Select

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const items = [
  {
    value: 1,
    text: 'Option 1',
  },
  {
    value: 2,
    text: 'Option 2',
  },
];
</script>

<template>
  <!-- VMultiSelect is registered globally -->
  <VMultiSelect :items="items" />
</template>
```

<LivePreview src="components-multiselect--default" />

::: info
The `VMultiSelect` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Clearable

```vue
<template>
  <VMultiSelect :items="items" clearable />
</template>
```

<LivePreview src="components-multiselect--clearable" />

### Max Badge

```vue
<template>
  <VMultiSelect :items="items" :max-badge="3" />
</template>
```

<LivePreview src="components-multiselect--max-badge" />

### Label

```vue
<template>
  <VMultiSelect :items="items" label="My Label" />
</template>
```

<LivePreview src="components-multiselect--label" />

### Custom Style

```vue
<template>
  <VMultiSelect
    :items="items"
    wrapper-class="!rounded-full !border-orange-500 focus-within:!border-orange-600"
    input-class="!italic"
    dropdown-class="bg-black/50"
    item-class="bg-black/50 text-white hover:bg-warning-500 hover:text-white"
    badge-color="warning"
    check-wrapper-class="text-orange-500"
  />
</template>
```

<LivePreview src="components-multiselect--custom-style" />

### Initial Errors

```vue
<script setup lang="ts">
const schema = object({
  genre: array().required().min(1).label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialErrors: {
    genre: 'Genre is required',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genres = ref([
  {
    text: 'Pop',
    value: 'pop',
  },
  {
    text: 'Rock',
    value: 'rock',
  },
  {
    text: 'Jazz',
    value: 'jazz',
  },
  {
    text: 'Alternative',
    value: 'alternative',
  },
]);
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VMultiSelect
      name="genre"
      label="Genre"
      placeholder="Choose your prefered genres"
      :items="genres"
    />
    <div class="mt-4 space-x-2">
      <v-btn type="submit" color="primary">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="components-multiselect--initial-errors" />

## Props

| Name                                      | Type                                      | Default                         |
| ----------------------------------------- | ----------------------------------------- | ------------------------------- |
| [`items`](#items)                         | `Array as PropType<VMultiSelectItem[]>`   | `[]`                            |
| [`itemText`](#itemText)                   | `string`                                  | `'text'`                        |
| [`itemValue`](#confirm)                   | `string`                                  | `value`                         |
| [`searchBy`](#searchBy)                   | `string`                                  | `''`                            |
| [`placeholder`](#placeholder)             | `string`                                  | `'Search...'`                   |
| [`name`](#name)                           | `string`                                  | `''`                            |
| [`error`](#error)                         | `boolean`                                 | `false`                         |
| [`errorMessages`](#errorMessages)         | `Array`                                   | `'[]'`                          |
| [`clearable`](#clearable)                 | `boolean`                                 | `'false'`                       |
| [`maxBadge`](#maxBadge)                   | `number`                                  | `0`                             |
| [`delay`](#delay)                         | `number`                                  | `'500'`                         |
| [`id`](#id)                               | `string`                                  | `''`                            |
| [`inputProps`](#inputProps)               | `Object as PropType<Record<string, any>>` | `'{}'`                          |
| [`selectAll`](#selectAll)                 | `boolean`                                 | `false`                         |
| [`loading`](#loading)                     | `boolean`                                 | `false`                         |
| [`wrapperClass`](#wrapperClass)           | `string`                                  | `''`                            |
| [`inputClass`](#inputClass)               | `string`                                  | `''`                            |
| [`badgeColor`](#badgeColor)               | `string`                                  | `'primary'`                     |
| [`badgeClass`](#badgeClass)               | `string`                                  | `''`                            |
| [`badgeProps`](#badgeProps)               | `object`                                  | `{}`                            |
| [`dropdownClass`](#dropdownClass)         | `string`                                  | `''`                            |
| [`itemClass`](#itemClass)                 | `string`                                  | `''`                            |
| [`checkWrapperClass`](#checkWrapperClass) | `string`                                  | `''`                            |
| [`checkIconClass`](#checkIconClass)       | `string`                                  | `''`                            |
| [`noDataClass`](#noDataClass)             | `string`                                  | `''`                            |
| [`loadingClass`](#loadingClass)           | `string`                                  | `''`                            |
| [`label`](#label)                         | `string`                                  | `''`                            |
| [`labelClass`](#labelClass)               | `string`                                  | `'mb-2 block'`                  |
| [`rules`](#rules)                         | `string`                                  | `''`                            |
| [`errorClass`](#errorClass)               | `string`                                  | `'text-error-600 mt-1 text-sm'` |
| [`transition`](#transition)               | `string`                                  | `'fade'`                        |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

```css
:root {
  --v-multi-select-border-color: var(--v-input-border-color);
  --v-multi-select-border-radius: var(--v-input-border-radius);
  --v-multi-select-bg-color: var(--v-input-bg-color);
  --v-multi-select-text-color: theme('colors.gray.800');
  --v-multi-select-height: auto;
  --v-multi-select-placeholder-color: var(--v-input-placeholder-color);
  --v-multi-select-border-radius: var(--v-input-border-radius);
  --v-multi-select-padding-x: var(--v-input-padding-x);
  --v-multi-select-padding-y: var(--v-input-padding-y);
  --v-multi-select-font-size: var(--v-input-font-size);

  /* item */
  --v-multi-select-item-font-size: theme('fontSize.base');
  --v-multi-select-item-font-weight: theme('fontWeight.normal');
  --v-multi-select-item-bg-color: theme('colors.white');
  --v-multi-select-item-text-color: theme('colors.gray.800');
  --v-multi-select-item-padding-x: theme('padding.3');
  --v-multi-select-item-padding-y: theme('padding.2');
  --v-multi-select-item-hover-bg-color: theme('colors.primary.500');
  --v-multi-select-item-hover-text-color: theme('colors.white');

  /* error */
  --v-multi-select-error-border-color: theme('colors.error.500');

  /* icon */
  --v-multi-select-icon-color: theme('colors.gray.500');
  --v-multi-select-check-icon-color: theme('colors.primary.500');

  /* dropdown */
  --v-multi-select-dropdown-bg-color: theme('colors.white');
  --v-multi-select-dropdown-border-radius: theme('borderRadius.md');
}
```

## Manual Installation

You can also install the `Multi Select` component individually via `@gits-id/multi-select` package:

```bash
npm i @gits-id/multi-select
```

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VMultiSelect from '@gits-id/multi-select';
import '@gits-id/multi-select/dist/style.css';

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
    text: 'Item 2',
    value: 2,
  },
]);

const selected = ref();
</script>

<template>
  <VMultiSelect v-model="selected" :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-multiselect--default).
