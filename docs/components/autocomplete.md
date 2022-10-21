# Autocomplete

Autocomplete Input. Based on Headless UI Autocomplete component.

## Usage

### Basic Usage

```vue
<template>
  <!-- VAutocomplete is registered globally -->
  <VAutocomplete />
</template>
```

<LivePreview src="components-autocomplete--default" />

::: info
The `VAutocomplete` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Clearable

```vue
<template>
  <VAutocomplete clearable />
</template>
```

<LivePreview src="components-autocomplete--clearable" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {useForm} from 'vee-validate';
import {object} from 'yup';

const schema = object({
  genre: object().required().label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
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

<LivePreview src="components-autocomplete--validation" />

## Props

| Name                          | Type      | Default                |
| ----------------------------- | --------- | ---------------------- |
| [items](#items)               | `Item[]`  | `[]`                   |
| [modelValue](#modelValue)     | `Item`    | `undefined`            |
| [searchBy](#searchBy)         | `string`  | `text`                 |
| [displayText](#displayText)   | `string`  | `text`                 |
| [placeholder](#placeholder)   | `string`  | `'Search...'`          |
| [label](#label)               | `string`  | `''`                   |
| [name](#name)                 | `string`  | `''`                   |
| [rules](#rules)               | `string`  | `''`                   |
| [notFoundText](#notFoundText) | `string`  | ` 'No data.'`          |
| [noDataText](#noDataText)     | `string`  | `'Nothing found.'`     |
| [clearable](#clearable)       | `boolean` | `false`                |
| [errorClass](#errorClass)     | `string`  | `'autocomplete-error'` |
| [wrapperClass](#wrapperClass) | `string`  | `''`                   |

## Methods

None

## Events

- `update:modelValue`
- `update:query`

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Autocomplete` component individually via `@gits-id/autocomplete` package:

```bash
yarn install @gits-id/autocomplete
```

```vue
<script setup lang="ts">
import VAutocomplete from '@gits-id/autocomplete';
</script>

<template>
  <VAutocomplete />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-autocomplete--default).
