# Radio

Form input radio component.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" label="Label" />
</template>
```

<LivePreview src="forms-radio--radio" />

::: info
The `VRadio` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Disabled

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" disabled />
</template>
```

<LivePreview src="forms-radio--disabled" />

### Validation

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

<LivePreview src="forms-radio--validation" />

## Props

| Name                              | Type    | Default                                              |
| --------------------------------- | ------- | ---------------------------------------------------- |
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

## Events

### `update:modelValue`

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

None

## Manual Installation

You can also install the `Radio` component individually via `@gits-id/forms` package:

```bash
npm i @gits-id/forms
```

```vue
<script setup lang="ts">
import {VRadio} from '@gits-id/forms';
import '@gits-id/forms/dist/style.css';

import {ref} from 'vue';

const selected = ref(false);
</script>

<template>
  <VRadio v-model="selected" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-radio--default).
