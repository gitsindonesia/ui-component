---
outline: deep
---

# Select

The `VSelect` component is a form control for presenting a list of options to the user. It provides various customization options such as the ability to search for items, display a label, and show or hide a check icon. It can also display in an error state and include a shadow effect.

## Usage

### Basic Usage

To use the `VSelect` component, you will need to import the `ref` function from `vue` and the `VSelectItem` type from `@morpheme/select`. Then, create a ref of an array of `VSelectItem` objects and pass it to the `items` prop of the `VSelect` component in your template.

<LivePreview src="components-select--select" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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

</LivePreview>

::: info
The `VSelect` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Searchable

To enable search functionality in the `VSelect` component, pass the `searchable` prop.

<LivePreview src="components-select--searchable" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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

</LivePreview>

### No Check Icon

To hide the check icon in the `VSelect` component, pass the `no-check-icon` prop.

<LivePreview src="components-select--no-check-icon" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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

</LivePreview>

### Label

To display a label for the `VSelect` component, pass the `label` prop.

<LivePreview src="components-select--label" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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

</LivePreview>

### Shadow

To apply a shadow effect to the `VSelect` component, pass the `shadow` prop.

<LivePreview src="components-select--shadow" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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

</LivePreview>

### Error

To display the `VSelect` component in an error state, pass the `error` prop.

<LivePreview src="components-select--error" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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
  <VSelect :items="items" error />
</template>
```

</LivePreview>

### Clearable

To enable the ability to clear the selected value in the `VSelect` component, pass the `clearable` prop.

<LivePreview src="components-select--clearable" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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
  <VSelect :items="items" clearable />
</template>
```

</LivePreview>

### Custom Transition

To customize the transition effect of the `VSelect` component, pass the desired transition name to the `transition` prop.

<LivePreview src="components-select--custom-transition">

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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
  <VSelect :items="items" transition="slide-down" />
</template>
```

</LivePreview>

### Return Object

To return the selected item as an object rather than just the value, pass the `return-object` prop.

<LivePreview src="components-select--return-object" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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
  <VSelect :items="items" return-object />
</template>
```

</LivePreview>

### Sizes

The `VSelect` component supports three sizes: `sm`, `md`, and `lg`. To specify the size of the component, use the `size` prop.

<LivePreview src="components-select--sizes" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
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
  <v-select label="Small" wrapper-class="mb-4" size="sm" />
  <v-select label="Default" wrapper-class="mb-4" />
  <v-select label="Large" wrapper-class="mb-4" size="lg" />
</template>
```

</LivePreview>

### Validation

The `VSelect` component can be used with the `vee-validate` library to provide form validation. To use the `VSelect` component in a form with validation, import the `useForm` hook and pass it an object with a `validationSchema` property. Then, bind the `VSelect` component to the form values using the `v-model` directive.

<LivePreview src="components-select--validation" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  genre: string().required().nullable().label('Genre'),
  gender: string().required().nullable().label('Gender'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genders = ref([
  {
    text: 'Male',
    value: 'male',
  },
  {
    text: 'Female',
    value: 'female',
  },
]);

const genres = ref([
  {
    text: 'Pop',
    value: 'pop',
  },
  {
    text: 'Rock',
    value: 'rock',
  },
]);
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-select
      wrapper-class="mb-4"
      name="genre"
      label="Genre"
      placeholder="Select your genre"
      :items="genres"
    />
    <v-select
      wrapper-class="mb-4"
      name="gender"
      label="Gender"
      placeholder="Select your gender"
      :items="genders"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

## Props

| Name                                      | Type                                                        | Default                         |
| ----------------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| [`value`](#value)                         | `[Object, String, Number, Boolean]`                         | `''`                            |
| [`modelValue`](#modelValue)               | `[Object, String, Number, Boolean]`                         | `''`                            |
| [`items`](#items)                         | `Array as PropType<SelectItem[]>`                           | `[]`                            |
| [`color`](#color)                         | `String`                                                    | `'primary'`                     |
| [`placeholder`](#placeholder)             | `String`                                                    | `'Select'`                      |
| [`searchable`](#searchable)               | `Boolean`                                                   | `false`                         |
| [`hideCheckIcon`](#hideCheckIcon)         | `Boolean`                                                   | `false`                         |
| [`btnClass`](#btnClass)                   | `String`                                                    | `''`                            |
| [`top`](#top)                             | `Boolean`                                                   | `false`                         |
| [`itemText`](#itemText)                   | `String`                                                    | `'text'`                        |
| [`itemValue`](#itemValue)                 | `String`                                                    | `'value'`                       |
| [`name`](#name)                           | `String`                                                    | `''`                            |
| [`error`](#error)                         | `Boolean`                                                   | `false`                         |
| [`errorMessages`](#errorMessages)         | `Array`                                                     | `[]`                            |
| [`returnObject`](#returnObject)           | `Boolean`                                                   | `false`                         |
| [`clearable`](#clearable)                 | `Boolean`                                                   | `false`                         |
| [`clearText`](#clearText)                 | `String`                                                    | `'Clear'`                       |
| [`disabled`](#disabled)                   | `Boolean`                                                   | `false`                         |
| [`readonly`](#readonly)                   | `Boolean`                                                   | `false`                         |
| [`label`](#label)                         | `String`                                                    | `''`                            |
| [`labelClass`](#labelClass)               | `String`                                                    | `'mb-1 block'`                  |
| [`wrapperClass`](#wrapperClass)           | `String`                                                    | `''`                            |
| [`errorClass`](#errorClass)               | `String`                                                    | `'text-error-600 mt-1 text-sm'` |
| [`rules`](#rules)                         | `String`                                                    | `''`                            |
| [`shadow`](#shadow)                       | `Boolean`                                                   | `false`                         |
| [`shadowClass`](#shadowClass)             | `String`                                                    | `'shadow-sm'`                   |
| [`transition`](#transition)               | `String`                                                    | `'fade'`                        |
| [`size`](#size)                           | `String as PropType<'sm' \| 'md' \| 'lg'>`                  | `'md'`                          |
| [`searchSize`](#searchSize)               | `String as PropType<'sm' \| 'md' \| 'lg'>`                  | `'md'`                          |
| [`searchPlaceholder`](#searchPlaceholder) | `String`                                                    | `'Search...'`                   |
| [`searchProps`](#searchProps)             | `Object as PropType<InstanceType<typeof VInput>['$props']>` | `{}`                            |
| [`fieldOptions`](#fieldOptions)           | `Object as PropType<Partial<FieldOptions<any>>>`            | `{}`                            |
| [`hint`](#hint)                           | `String`                                                    | `''`                            |
| [`hideError`](#hideError)                 | `Boolean`                                                   | `false`                         |

## Types

### `VSelectItem`

The `VSelectItem` interface represents an item in the list of options. It has the following properties:

- `text`: The text to be displayed for the item.
- `value`: The value of the item.

```ts
export interface VSelectItem = {
  text: string;
  value: any;

  [x: string]: any;
};
```

## Events

### [`update:modelValue`](#update:modelValue)

Emitted when the selected item changes.

### [`update:value`](#update:value)

Emitted when the selected item changes.

### [`change`](#search)

Emitted when the selected item changes.

### [`search`](#search)

Emitted when the search input is changed.

## Slots

The `VSelect` component provides the following slots for customization:

### [`selected`](#selected)

Customize the selected item display.

```vue
<template>
  <VSelect>
    <template #selected="item">
      {{ item.text.toUpperCase() }}
    </template>
  </VSelect>
</template>
```

### [`empty`](#empty)

Customize the display for when there are no items.

```vue
<template>
  <VSelect>
    <template #empty> No item found. </template>
  </VSelect>
</template>
```

### [`icon`](#icon)

Customize the icon displayed for the selected item.

```vue
<template>
  <VSelect>
    <template #icon="item">
      <VIcon name="ri:check-line" />
    </template>
  </VSelect>
</template>
```

### [`item`](#item)

Customize the display for each item in the list.

```vue
<template>
  <VSelect>
    <template #item="item">
      {{ item?.text.toUpperCase() }}
    </template>
  </VSelect>
</template>
```

## CSS Variables

```scss
:root {
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
  --v-select-label-color: var(--v-input-label-color);
  --v-select-label-font-size: var(--v-input-label-font-size);
  --v-select-label-font-weight: var(--v-input-label-font-weight);
  --v-select-label-display: var(--v-input-label-display);
  --v-select-label-margin-bottom: var(--v-input-label-margin-bottom);

  /* text */
  --v-select-text-color: var(--v-input-text-color);
  --v-select-text-font-size: var(--v-input-text-font-size);
  --v-select-text-font-weight: var(--v-input-text-font-weight);

  /* icon */
  --v-select-icon-width: var(--size-spacing-4);
  --v-select-icon-height: var(--size-spacing-4);
  --v-select-icon-color: var(--v-input-icon-color);

  // options
  --v-select-options-bg-color: var(--color-white);

  /* option item */
  --v-select-option-padding-x: var(--size-spacing-4);
  --v-select-option-padding-y: var(--size-spacing-2);
  --v-select-option-bg-color: var(--color-white);
  --v-select-option-text-color: var(--color-gray-700);

  /* option item on hover */
  --v-select-option-hover-bg-color: var(--color-gray-100);
  --v-select-option-hover-text-color: var(--color-gray-700);

  // selected
  --v-select-selected-color: var(--v-input-label-color);

  // error
  --v-select-error-border-color: var(--color-error-300);

  // hint
  --v-select-hint-font-size: var(--v-input-hint-font-size, 14px);
  --v-select-hint-color: var(--v-input-hint-color);
  --v-select-hint-margin-top: var(--v-input-hint-margin-top);

  --v-select-option-check-selected-color: var(--color-primary-700);
}
```

## Standalone Installation

You can also install the `Select` component individually via `@morpheme/select` package:

```bash
npm i @morpheme/select
```

```vue
<script setup lang="ts">
import VSelect from '@morpheme/select';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
]);
</script>

<template>
  <VSelect :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-select--default).
