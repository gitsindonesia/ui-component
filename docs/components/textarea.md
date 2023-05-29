---
outline: deep
---

# TextArea

`VTextarea` is textarea component.

## Usage

### Basic Usage

To use the `VTextarea` component, you can include it in your template like this:

<LivePreview height="200" src="forms-textarea--default" >

```vue
<template>
  <!--VTextarea is registered globally -->
  <VTextarea />
</template>
```

</LivePreview>

### Label

To add a label to your `VTextarea` component, you can use the `label` prop:

<LivePreview height="250" src="forms-textarea--label">

```vue
<template>
  <VTextarea label="My Label" />
</template>
```

</LivePreview>

### Readonly

To make a `VTextarea` component readonly, you can use the `readonly` prop:

<LivePreview height="250" src="forms-textarea--readonly">

```vue
<template>
  <VTextarea readonly value="Text" />
</template>
```

</LivePreview>

### Disabled

To disable a `VTextarea` component, you can use the `disabled` prop:

<LivePreview height="250" src="forms-textarea--disabled">

```vue
<template>
  <VTextarea disabled />
</template>
```

</LivePreview>

### Error

To display an error message for a `VTextarea` component, you can use the `error` prop and the `error-messages` prop:

<LivePreview height="250" src="forms-textarea--error">

```vue
<template>
  <VTextarea error :error-messages="['Field is required']" />
</template>
```

</LivePreview>

### Counter

To display a character count for a `VTextarea` component, you can use the `counter` prop:

<LivePreview height="250" src="forms-textarea--counter">

```vue
<template>
  <VTextarea counter />
</template>
```

</LivePreview>

### Validation

To use validation with the `VTextarea` component, you'll need to import the required packages and set up a validation schema.

First, import the `useForm` hook from `vee-validate` and the `object` and `string` functions from `yup`:

```ts
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
```

Then, create a validation schema using the `object` and `string` functions:

```ts
const schema = object({
  bio: string().required().label('Bio'),
  message: string().required().label('Message'),
});
```

Next, use the `useForm` hook to set up form validation and create a `handleSubmit` function:

```ts
const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
```

Finally, you can use the `VTextarea` component in your form template like this:

```vue
<template>
  <form @submit="onSubmit" class="border-none">
    <v-textarea
      wrapper-class="mb-4"
      name="message"
      label="Message"
      placeholder="Enter your message"
    />
    <v-textarea
      wrapper-class="mb-4"
      name="bio"
      label="Bio"
      placeholder="Enter your bio"
      input-class="italic"
    />
    <v-btn type="submit">Submit</v-btn>
    <v-btn type="button" text @click="resetForm">Reset</v-btn>
  </form>
</template>
```

<LivePreview src="forms-textarea--validation">

```vue
<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const schema = object({
  bio: string().required().label('Bio'),
  message: string().required().label('Message'),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>
<template>
  <form @submit="onSubmit" class="border-none">
    <v-textarea
      wrapper-class="mb-4"
      name="message"
      label="Message"
      placeholder="Enter your message"
    />
    <v-textarea
      wrapper-class="mb-4"
      name="bio"
      label="Bio"
      placeholder="Enter your bio"
      input-class="italic"
    />
    <v-btn type="submit">Submit</v-btn>
    <v-btn type="button" text @click="resetForm">Reset</v-btn>
  </form>
</template>
```

</LivePreview>

### Validation Mode

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes. This can be useful when you are validating for example the minimum or maximum limits of an input.

You can change the default value for this validation mode by adding an attribute or property named `validation-mode` to this component.

<LivePreview src="forms-textarea--validation-mode">

```vue
<script setup lang="ts">
const schema = object({
  bio_eager: string().required().min(5).max(150).label('Bio'),
  bio_aggressive: string().required().min(5).max(150).label('Bio'),
});

const modes = ref(['eager', 'aggressive']);

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
        <v-textarea
          wrapper-class="mb-4"
          :name="'bio_' + mode"
          label="Bio"
          placeholder="Enter your bio"
          input-class="italic"
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

</LivePreview>

## Props

| Name                                | Type               | Default        |
| ----------------------------------- | ------------------ | -------------- |
| [`modelValue`](#modelValue)         | `string`           | `''`           |
| [`rows`](#rows)                     | `string \| number` | `undefined`    |
| [`value`](#value)                   | `string`           | `''`           |
| [`name`](#name)                     | `string`           | `''`           |
| [`error`](#error)                   | `boolean`          | `false`        |
| [`errorMessages`](#errorMessages)   | `array`            | `[]`           |
| [`readonly`](#readonly)             | `boolean`          | `false`        |
| [`disabled`](#disabled)             | `boolean`          | `false`        |
| [`shadow`](#shadow)                 | `boolean`          | `false`        |
| [`size`](#shadow)(deprecated)       | `string`           | `''`           |
| [`cols`](#cols)                     | `string \| number` | `'undefined'`  |
| [`label`](#label)                   | `string`           | `''`           |
| [`rules`](#rules)                   | `string`           | `''`           |
| [`wrapperClass`](#wrapperClass)     | `string`           | `''`           |
| [`inputClass`](#inputClass)         | `string`           | `''`           |
| [`labelClass`](#labelClass)         | `string`           | `''`           |
| [`validationMode`](#validationMode) | `string`           | `'aggressive'` |
| [`hint`](#hint)                     | `String`           | `''`           |
| [`hideError`](#hideError)           | `Boolean`          | `false`        |

## Events

The `VTextarea` component emits the following events:

### `update:modelValue`

This event is emitted when the value of the `VTextarea` component changes. You can listen to this event using the `@update:modelValue` directive:

```vue
<script lang="ts" setup>
const handle = () => alert('Triggered!');
</script>

<template>
  <VTextarea @update:modelValue="handle" />
</template>
```

## Slots

The `VTextarea` component has the following slot:

### `counter`

This slot is used to customize the appearance of the character count when the `counter` prop is used. It is passed an object with the `count` property, which contains the current character count.

```vue
<template>
  <VTextarea counter>
    <template #counter="{count}">
      <div class="font-bold text-lg">{{ count }}</div>
    </template>
  </VTextarea>
</template>
```

## CSS Variables

None.

## Standalone Installation

You can also install the `VTextarea` component individually via `@morpheme/forms` package:

yarn :

```bash
yarn add @morpheme/forms
```

npm :

```bash
npm i @morpheme/forms
```

pnpm :

```bash
pnpm add @morpheme/forms
```

```vue
<script setup lang="ts">
import {VTextarea} from '@morpheme/forms';
</script>

<template>
  <VTextarea />
</template>
```
