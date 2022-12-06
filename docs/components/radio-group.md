# RadioGroup

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
  <VRadioGroup label="Select" :items="items" />
</template>
```

<LivePreview src="forms-radiogroup--default" />

### Inline

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
  <VRadioGroup label="Select" :items="items" inline />
</template>
```

<LivePreview src="forms-radiogroup--inline" />

### Error

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
  <VRadioGroup label="Select" :items="items" error />
</template>
```

<LivePreview src="forms-radiogroup--error" />

### Disabled

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
  <VRadioGroup label="Select" :items="items" disabled />
</template>
```

<LivePreview src="forms-radiogroup--disabled" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';
const schema = object({
  choose: number().oneOf([1, 2]).required().label('Agreement'),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    choose: 0,
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

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
  <form @submit="onSubmit" class="border-none">
    <div class="flex gap-4">
      <v-radio-group name="choose" label="Choose" :items="items" />
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

<LivePreview src="forms-radiogroup--no-label" />

### Validation Mode

```vue
<script setup lang="ts">
const items = ['liquid', 'gas', 'solid'];

const schema = object({
  choose_eager: string()
    .oneOf(items)
    .test(
      'is_correct',
      ({label}) => `${label} is incorrect.`, // a message can also be a function
      (value) => {
        return value === 'liquid';
      },
    )
    .required()
    .label('Answer'),
  choose_aggressive: string()
    .oneOf(items)
    .test(
      'is_correct',
      ({label}) => `${label} is incorrect.`, // a message can also be a function
      (value) => {
        return value === 'liquid';
      },
    )
    .required()
    .label('Answer'),
});

const modes = ref(['eager', 'aggressive']);

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    choose_eager: '',
    choose_aggressive: '',
  },
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

        <p>Question: Rain is water in ... form</p>
        <v-radio-group
          :name="'choose_' + mode"
          label="Choose"
          :items="items"
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

<LivePreview src="forms-radiogroup--default" />

::: info
The `VRadioGroup` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Props

| Name                                | Type                                                   | Default                         |
| ----------------------------------- | ------------------------------------------------------ | ------------------------------- |
| [`modelValue`](#modelValue)         | `[String, Number, Object, Boolean] as PropType<Value>` | `null`                          |
| [`value`](#value)                   | `[String, Number, Object, Boolean] as PropType<Value>` | `null`                          |
| [`label`](#label)                   | `String`                                               | `''`                            |
| [`name`](#name)                     | `String`                                               | `''`                            |
| [`error`](#error)                   | `Boolean`                                              | `false`                         |
| [`errorMessages`](#errorMessages)   | `Array`                                                | `[]`                            |
| [`readonly`](#readonly)             | `Boolean`                                              | `false`                         |
| [`disabled`](#disabled)             | `Boolean`                                              | `false`                         |
| [`items`](#items)                   | `Array as PropType<RadioItem[]>`                       | `[]`                            |
| [`itemText`](#itemText)             | `String`                                               | `'text'`                        |
| [`itemValue`](#itemValue)           | `String`                                               | `'value'`                       |
| [`size`](#size)                     | `String`                                               | `''`                            |
| [`inline`](#inline)                 | `Boolean`                                              | `false`                         |
| [`hideError`](#hideError)           | `Boolean`                                              | `false`                         |
| [`labelClass`](#labelClass)         | `String`                                               | `''`                            |
| [`errorClass`](#errorClass)         | `String`                                               | `'text-error-600 text-sm mt-1'` |
| [`rules`](#rules)                   | `String`                                               | `''`                            |
| [`id`](#id)                         | `String`                                               | `''`                            |
| [`validationMode`](#validationMode) | `String as PropType<'aggressive' \| 'eager'>`          | `'aggressive'`                  |

## Events

### `update:modelValue`

### `update:value`

### `input`

### `change`

### `blur`

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `VRadioGroup` component individually via `@gits-id/forms` package:

```bash
npm i @gits-id/forms
```

```vue
<script setup lang="ts">
import {VRadioGroup} from '@gits-id/forms';
import '@gits-id/forms/dist/style.css';
</script>

<template>
  <VRadioGroup :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-radiogroup--default).
