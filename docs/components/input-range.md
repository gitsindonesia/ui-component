# Input Range

## Usage

### Basic Usage

```vue
<template>
  <!-- VPagination is registered globally -->
  <VInputRange />
</template>
```

<LivePreview src="forms-inputrange--default" height="100" />

::: info
The `VInputRange` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### With Input

```vue
<template>
  <VInputRange show-input />
</template>
```

<LivePreview src="forms-inputrange--validation" height="100" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';
import { object } from 'yup'
import { useForm } from 'vee-validate'

const { handleSubmit, resetForm } = useForm({
  validationSchema: object({
    score: object().required().test(
              'isBetween',
              ({ label }) => `${label} must be between 25-75`, // a message can also be a function
              (value, testContext) => {
                return (value.min >= 25 && value.max <= 75);
              }).label('Range'),
  }),
  initialValues: {
    score: {
      min: 0,
      max: 0
    },
  },
})

const onSubmit = handleSubmit((values, ctx) => {
  alert(JSON.stringify(values));
})

</script>
<template>
  <form @submit="onSubmit" class="border-none">
    <VInputRange
      wrapper-class="mb-4"
      name="score"
      label="Select Your Score"
    />
    <div class="mt-4">
      <VBtn type="submit">Submit</VBtn>
      <VBtn type="button" text @click="resetForm">Reset</VBtn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

<LivePreview src="components-pagination--large" height="100" />

## Props

| Name                             | Type      | Default     |
| ---------------------------------| ----------| ----------- |
| [`modelValue`](#modelValue)      | `number`  | `1`         |
| [`showInput`](#showInput)        | `boolean` | `false`      |
| [`showPrevious`](#showPrevious)  | `boolean` | `true`      |
| [`min`](#min)          | `number` | `1`      |
| [`max`](#max)          | `number` | `100`    |
| [`step`](#step)        | `number` | `1`      |
| [`name`](#name)    | `string`  | `''` |
| [`rules`](#rules)  | `string`  | `''` |
| [`errorClass`](#errorClass)              | `'text-error-600 text-sm mt-1'` | `false`      |
| [`label`](#label)  | `string`  | `''` |
| [`labelClass`](#labelClass)  | `string`  | `'block mb-1'` |


## Methods

None

## Events

- `update:modelValue`

## Slots

None

## CSS Variables

None

## Manual Installation

None

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-inputrange--default).
