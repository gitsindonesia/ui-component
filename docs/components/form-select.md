# FormSelect

The `VFormSelect` component is a form field that allows users to select a value from a dropdown list of options.

## Usage

### Basic Usage

To use the `VFormSelect` component, you must first provide it with an array of options. Each option should be an object with `text` and `value` properties, like this:

```vue
<script setup lang="ts">
import {ref} from 'vue';

const options = ref([
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
  <VFormSelect label="Label" name="option" :options="options" />
</template>
```

<LivePreview src="forms-select--default" />

::: info
The `VFormSelect` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Disabled

To disable the `VFormSelect` component, you can use the `disabled` prop:

```vue
<script setup lang="ts">
import {ref} from 'vue';

const options = ref([
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
  <VFormSelect label="Label" name="option" :options="options" disabled />
</template>
```

<LivePreview src="forms-select--disabled" />

### Error

If you are using the `VFormSelect` component with a form validation library, you can use the `error` prop to indicate that the form field has an error:

```vue
<script setup lang="ts">
import {ref} from 'vue';

const options = ref([
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
  <VFormSelect label="Label" name="option" :options="options" error />
</template>
```

<LivePreview src="forms-select--error" />

### Label

You can use the `label` prop to specify a label for the `VFormSelect` component:

```vue
<script setup lang="ts">
import {ref} from 'vue';

const options = ref([
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
  <VFormSelect label="Label" name="option" :options="options" />
</template>
```

<LivePreview src="forms-select--label" />

### Validation

To use the `VFormSelect` component with a form validation library, you can use the name prop to bind the component to a form control. For example, with `VeeValidate`, you can use the `useForm` hook to create a form with validation schema:

<LivePreview src="forms-select--validation" />

<details>
  <summary>View Code</summary>

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {useForm} from 'vee-validate';

const schema = object({
  genre: string().required().label('Genre'),
  gender: string().required().label('Gender'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genders = ref([
  {
    text: 'Select Gender',
    value: '',
    disabled: true,
  },
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
    text: 'Select Genre',
    value: '',
    disabled: true,
  },
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
    <v-form-select
      wrapper-class="mb-4"
      name="genre"
      label="Genre"
      placeholder="Select your genre"
      :items="genres"
    />
    <v-form-select
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

</details>

### Validation Mode

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes. This can be useful when you are validating for example the minimum or maximum limits of an input.

You can change the default value for this validation mode by adding an attribute or property named `validation-mode` to this component.

<LivePreview src="forms-select--validation-mode" />

<details>
  <summary>View Code</summary>

```vue
<script setup lang="ts">
import {ref} from 'vue';

const schema = object({
  genre_eager: string()
    .required()
    .test(
      'isCorrect',
      ({label}) => `${label} is not correct`,
      (val, ctx) => {
        return !!['E', 'A', 'U', 'I', 'O'].find(
          (e) => e === val?.charAt(0)?.toUpperCase(),
        );
      },
    )
    .label('Genre'),
  genre_aggressive: string()
    .required()
    .test(
      'isCorrect',
      ({label}) => `${label} is not correct`,
      (val, ctx) => {
        return !!['E', 'A', 'U', 'I', 'O'].find(
          (e) => e === val?.charAt(0)?.toUpperCase(),
        );
      },
    )
    .label('Genre'),
});

const modes = ref(['eager', 'aggressive']);
const genres = ref([
  {
    text: 'Select Genre that starts with a vowel',
    value: '',
    disabled: true,
  },
  {
    text: 'Pop',
    value: 'pop',
  },
  {
    text: 'Rock',
    value: 'rock',
  },
  {
    text: 'Hip-Hop',
    value: 'hiphop',
  },
  {
    text: 'Electronic',
    value: 'electronic',
  },
  {
    text: 'Opera',
    value: 'opera',
  },
]);

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <div class="flex flex-wrap gap-4">
      <fieldset class="border-none flex-1" v-for="mode in modes" :key="mode">
        <legend>Mode: {{ mode }}</legend>

        <v-form-select
          wrapper-class="mb-4"
          :items="genres"
          :name="'genre_' + mode"
          label="Genre"
          placeholder="Select your genre"
          :validation-mode="mode"
        />
      </fieldset>
    </div>
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

</details>

### Initial Values

To set initial values to the form, use the `initialValues` option in the `useForm` hook.

```vue
<script setup lang="ts">
import {ref} from 'vue';

const schema = object({
  genre: string().required().label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialValues: {
    genre: 'pop',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genres = ref([
  {
    text: 'Select Genre',
    value: '',
    disabled: true,
  },
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
    <v-form-select
      wrapper-class="mb-4"
      name="genre"
      label="Genre"
      placeholder="Select your genre"
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

<LivePreview src="forms-select--intial-values" />

## Props

| Name                                | Type                                          | Default        |
| ----------------------------------- | --------------------------------------------- | -------------- |
| [`modelValue`](#modelValue)         | `String`                                      | `''`           |
| [`items`](#items)                   | `Array as PropType<VFormSelectItem[]>`        | `[]`           |
| [`itemText`](#itemText)             | `String`                                      | `'text'`       |
| [`itemValue`](#itemValue)           | `String`                                      | `'value'`      |
| [`name`](#name)                     | `String`                                      | `''`           |
| [`error`](#error)                   | `Boolean`                                     | `false`        |
| [`errorMessages`](#errorMessages)   | `Array`                                       | `[]`           |
| [`size`](#size)                     | `String`                                      | `''`           |
| [`disabled`](#disabled)             | `Boolean`                                     | `false`        |
| [`errorClass`](#errorClass)         | `String`                                      | `''`           |
| [`rules`](#rules)                   | `String`                                      | `''`           |
| [`label`](#label)                   | `String`                                      | `''`           |
| [`labelClass`](#labelClass)         | `String`                                      | `''`           |
| [`wrapperClass`](#wrapperClass)     | `String`                                      | `''`           |
| [`validationMode`](#validationMode) | `String as PropType<'aggressive' \| 'eager'>` | `'aggressive'` |

## Events

### `update:modelValue`

Type:

```ts
(e: 'update:modelValue', value: string): void`
```

Example:

```vue
<script setup lang="ts">
const onChange = () => console.log('Changed!');
</script>

<template>
  <VFormSelect @update:modelValue="onChange" />
</template>
```

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `VFormSelect` component individually via `@gits-id/forms` package:

```bash
yarn install @gits-id/forms
```

```vue
<script setup lang="ts">
import {VFormSelect} from '@gits-id/forms';
import '@gits-id/forms/dist/style.css';
</script>

<template>
  <VFormSelect />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-formselect--default).
