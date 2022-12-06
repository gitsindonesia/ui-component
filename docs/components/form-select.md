# FormSelect

Basic form select.

## Usage

### Basic Usage

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

```vue
<script setup lang="ts">
import {ref} from 'vue';

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

<LivePreview src="forms-select--validation" />

### Validation Mode

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

<LivePreview src="forms-select--validation-mode" />

### Initial Values

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

## Methods

None

## Events

### `(e: 'update:modelValue', value: string): void`

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
