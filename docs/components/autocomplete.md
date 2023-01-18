# Autocomplete

The `VAutocomplete` component is a customizable autocomplete input based on the Headless UI Autocomplete component.

## Usage

## Basic Usage

To use the `VAutocomplete` component, simply add it to your template:

<LivePreview src="components-autocomplete--default">

```vue
<template>
  <!-- VAutocomplete is registered globally -->
  <VAutocomplete />
</template>
```

</LivePreview>

::: info
The `VAutocomplete` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Clearable

To make the `VAutocomplete` component clearable, set the `clearable` prop:

<LivePreview src="components-autocomplete--clearable">

```vue
<template>
  <VAutocomplete clearable />
</template>
```

</LivePreview>

## Validation

You can use the `VAutocomplete` component with form validation libraries like `vee-validate`. In this example, we'll use the `useForm` hook from `vee-validate` to handle form submission and validation:

<LivePreview src="components-autocomplete--validation" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {useForm} from 'vee-validate';
import {object} from 'yup';
import type {Item} from '@gits-id/autocomplete';

const schema = object({
  genre: object().required().label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genres = ref<Item[]>([
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
    <VAutocomplete
      name="genre"
      label="Genre"
      placeholder="Choose your prefered genres"
      :items="genres"
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

| Name                            | Type      | Default                |
| ------------------------------- | --------- | ---------------------- |
| [`items`](#items)               | `Item[]`  | `[]`                   |
| [`modelValue`](#modelValue)     | `Item`    | `undefined`            |
| [`searchBy`](#searchBy)         | `string`  | `text`                 |
| [`displayText`](#displayText)   | `string`  | `text`                 |
| [`placeholder`](#placeholder)   | `string`  | `'Search...'`          |
| [`label`](#label)               | `string`  | `''`                   |
| [`name`](#name)                 | `string`  | `''`                   |
| [`rules`](#rules)               | `string`  | `''`                   |
| [`notFoundText`](#notFoundText) | `string`  | ` 'No data.'`          |
| [`noDataText`](#noDataText)     | `string`  | `'Nothing found.'`     |
| [`clearable`](#clearable)       | `boolean` | `false`                |
| [`errorClass`](#errorClass)     | `string`  | `'autocomplete-error'` |
| [`wrapperClass`](#wrapperClass) | `string`  | `''`                   |

## Events

## `update:modelValue`

The `update:modelValue` event is triggered whenever the selected value of the `VAutocomplete` component changes.

Here is an example of using the `update:modelValue` event:

```vue
<script setup lang="ts">
import type {Item} from '@gits-id/autocomplete';

function onModelValueChange(value: Item) {
  console.log('Selected item:', value);
}
</script>

<template>
  <VAutocomplete @update:modelValue="onModelValueChange" />
</template>
```

## `update:query`

The `update:query` event is triggered whenever the search query in the `VAutocomplete` component changes.

Here is an example of using the `update:query` event:

```vue
<script setup lang="ts">
function onQueryChange(query: string) {
  console.log('Searching:', query);
}
</script>

<template>
  <VAutocomplete @update:query="onQueryChange" />
</template>
```

## Slots

None

## CSS Variables

None

## Manual Installation

To install the `VAutocomplete` component individually, you can use the `@gits-id/autocomplete` package:

```bash
npm i @gits-id/autocomplete
```

You can then use the `VAutocomplete` component in your Vue templates like this:

```vue
<script setup lang="ts">
import VAutocomplete from '@gits-id/autocomplete';
import '@gits-id/autocomplete/dist/style.css';
</script>

<template>
  <VAutocomplete />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-autocomplete--default).
