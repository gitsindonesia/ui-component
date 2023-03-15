---
outline: deep
---

# Input Range

The `VInputRange` component is a Vue.js component that allows users to select a range within a specific minimum and maximum value.

## Usage

### Basic Usage

To use the `VInputRange` component, simply add the component to your template. This will display a default `VInputRange` component on the page.

<LivePreview src="forms-inputrange--default" height="100">

```vue
<template>
  <!-- VInputRange is registered globally -->
  <VInputRange />
</template>
```

</LivePreview>

::: info
The `VInputRange` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### With Input

You can also display an input field alongside the `VInputRange` component by adding the `show-input` prop:

<LivePreview src="forms-inputrange--with-input" height="150" >

```vue
<template>
  <VInputRange show-input />
</template>
```

</LivePreview>

### Validation

This example demonstrates how to use the `VInputRange` component with form validation using the `vee-validate` library.

The `validationSchema` object specifies the validation rules for the form. In this case, the `score` field is required and must have a minimum value of 25 and a maximum value of 75. The `initialValues` object specifies the initial values for the form inputs.

The `handleSubmit` function handles form submission and the `resetForm` function resets the form to its initial values. The `onSubmit` function is called when the form is submitted and displays an alert with the values of the form inputs as a string.

The errors and values objects contain the validation errors and form input values, respectively, as determined by the `vee-validate` library. These objects are displayed in the pre element for debugging purposes.

<LivePreview src="forms-inputrange--validation" height="510" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object} from 'yup';
import {useForm} from 'vee-validate';

const {handleSubmit, resetForm} = useForm({
  validationSchema: object({
    score: object()
      .required()
      .test(
        'isBetween',
        ({label}) => `${label} must be between 25-75`, // a message can also be a function
        (value, testContext) => {
          return value.min >= 25 && value.max <= 75;
        },
      )
      .label('Range'),
  }),
  initialValues: {
    score: {
      min: 0,
      max: 0,
    },
  },
});

const onSubmit = handleSubmit((values, ctx) => {
  alert(JSON.stringify(values));
});
</script>
<template>
  <form @submit="onSubmit" class="border-none">
    <VInputRange wrapper-class="mb-4" name="score" label="Select Your Score" />
    <div class="mt-4">
      <VBtn type="submit">Submit</VBtn>
      <VBtn type="button" text @click="resetForm">Reset</VBtn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

</LivePreview>

## Props

| Name                            | Type                            | Default        |
| ------------------------------- | ------------------------------- | -------------- |
| [`modelValue`](#modelValue)     | `number`                        | `1`            |
| [`showInput`](#showInput)       | `boolean`                       | `false`        |
| [`showPrevious`](#showPrevious) | `boolean`                       | `true`         |
| [`min`](#min)                   | `number`                        | `1`            |
| [`max`](#max)                   | `number`                        | `100`          |
| [`step`](#step)                 | `number`                        | `1`            |
| [`name`](#name)                 | `string`                        | `''`           |
| [`rules`](#rules)               | `string`                        | `''`           |
| [`errorClass`](#errorClass)     | `'text-error-600 text-sm mt-1'` | `false`        |
| [`label`](#label)               | `string`                        | `''`           |
| [`labelClass`](#labelClass)     | `string`                        | `'block mb-1'` |
| [`hint`](#hint)                 | `String`                        | `''`           |
| [`hideError`](#hideError)       | `Boolean`                       | `false`        |

## Events

### `update:modelValue`

The `update:modelValue` event is emitted by the VInputRange component whenever the model value (i.e., the selected range) changes. This event is emitted with the new model value as the argument.

Here is an example of how to use the `update:modelValue` event:

```vue
<template>
  <VInputRange @update:modelValue="onModelValueUpdate" />
</template>

<script>
export default {
  methods: {
    onModelValueUpdate(newValue) {
      console.log(`Model value updated: ${newValue}`);
    },
  },
};
</script>
```

In this example, the `onModelValueUpdate` method is called whenever the model value of the `VInputRange` component changes, and it logs the new model value to the console.

## Slots

None

## CSS Variables

None

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-inputrange--default).
