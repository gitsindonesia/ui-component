---
outline: deep
---

# Radio

The `VRadio` component is a form input element used to allow the user to select one option from a list of choices.

## Usage

### Basic Usage

To use the `VRadio` component, you must first import it in your template:

<LivePreview src="forms-radio--radio" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" label="Label" />
</template>
```

</LivePreview>

::: info
The `VRadio` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Disabled

To disable the `VRadio` component, you can pass the `disabled` prop:

<LivePreview src="forms-radio--disabled" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" disabled />
</template>
```

</LivePreview>

### Validation

To validate the `VRadio` component, you can use a form validation library such as `vee-validate`.

<LivePreview src="forms-radio--validation" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, boolean} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  choose: string().oneOf(['Yes', 'No']).required().label('Agreement'),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    choose: '',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <div class="flex gap-4">
      <v-radio name="choose" value="Yes" label="Yes" id="yes" hide-error />
      <v-radio name="choose" value="No" label="No" id="no" hide-error />
    </div>
    <p class="text-error-600 text-sm mt-1">{{ errors.choose }}</p>
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

| Name                              | Type      | Default                                                |
| --------------------------------- | --------- | ------------------------------------------------------ |
| [`modelValue`](#modelValue)       | `String`  | `''`                                                   |
| [`value`](#value)                 | `String`  | `''`                                                   |
| [`label`](#label)                 | `String`  | `''`                                                   |
| [`inputClass`](#inputClass)       | `String`  | `''`                                                   |
| [`color`](#color)                 | `String`  | `'primary'`                                            |
| [`name`](#name)                   | `String`  | `''`                                                   |
| [`id`](#id)                       | `String`  | `''`                                                   |
| [`rules`](#rules)                 | `String`  | `''`                                                   |
| [`labelClass`](#labelClass)       | `String`  | `''`                                                   |
| [`wrapperClass`](#wrapperClass)   | `String`  | `''`                                                   |
| [`groupClass`](#groupClass)       | `String`  | `''`                                                   |
| [`hideError`](#hideError)         | `Boolean` | `false`                                                |
| [`disabled`](#disabled)           | `Boolean` | `false`                                                |
| [`disabledClass`](#disabledClass) | `String`  | `'disabled:text-gray-200 disabled:cursor-not-allowed'` |
| [`hint`](#hint)                   | `String`  | `''`                                                   |
| [`hideError`](#hideError)         | `Boolean` | `false`                                                |

## Events

### `update:modelValue`

Emitted when the value of the v-model directive changes. Can be used to perform an action when the value changes, such as updating other data or displaying a message to the user.

**Type**:

```ts
(event: 'update:modelValue', value: boolean): void
```

**Example**:

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref(false);

const onChange = (val: boolean) => {
  console.log(val);
};
</script>

<template>
  <VRadio v-model="selected" @update:modelValue="onChange" />
</template>
```

## Slots

None

## CSS Variables

```scss
:root {
  --v-radio-bg-color: var(--color-white);
  --v-radio-border-color: var(--color-gray-300);
  --v-radio-border-style: solid;
  --v-radio-border-width: 1px;
  --v-radio-bg-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%230984DD' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");

  // checked
  --v-radio-checked-bg-color: var(--color-primary-50);
  --v-radio-checked-border-color: var(--color-primary-600);

  // disabled
  --v-radio-disabled-border-color: var(--color-gray-400);
  --v-radio-disabled-bg-color: var(--color-gray-300);
  --v-radio-disabled-bg-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%2398A2B3' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");

  // label
  --v-radio-label-color: var(--color-gray-700);

  // hint
  --v-radio-hint-font-size: var(--v-input-hint-font-size, 14px);
  --v-radio-hint-color: var(--v-input-hint-color);
  --v-radio-hint-margin-top: var(--v-input-hint-margin-top);
}
```

## Standalone Installation

You can also install the `Radio` component individually via `@morpheme/forms` package:

```bash
npm i @morpheme/forms
```

```vue
<script setup lang="ts">
import {VRadio} from '@morpheme/forms';

import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-radio--default).
