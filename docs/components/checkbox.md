# Checkbox

Vue checkbox component.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VCheckbox v-model="checked" label="Label" />
</template>
```

<LivePreview src="forms-checkbox--checkbox" />

::: info
The `VCheckbox` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Disabled

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VCheckbox v-model="checked" disabled />
</template>
```

<LivePreview src="forms-checkbox--disabled" />

### Multiple

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, boolean} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  genre: array().required(),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-checkbox
      wrapper-class="mb-4"
      name="genre"
      value="Rock"
      label="Rock"
      id="genre1"
    />
    <v-checkbox
      wrapper-class="mb-4"
      name="genre"
      value="Pop"
      label="Pop"
      id="genre2"
    />
    <v-checkbox
      wrapper-class="mb-4"
      name="genre"
      value="Jazz"
      label="Jazz"
      id="genre3"
    />
    <v-checkbox
      wrapper-class="mb-4"
      name="genre"
      value="Tomato"
      label="Tomato"
      id="genre4"
    />
    <v-checkbox
      wrapper-class="mb-4"
      name="genre"
      value="Cucumber"
      label="Cucumber"
      id="genre5"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-checkbox--multiple" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, boolean} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  agreement: boolean()
    .oneOf([true], 'You must agree to terms and condition')
    .required()
    .label('Agreement'),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    agreement: false,
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-checkbox wrapper-class="mb-4" name="agreement" label="Agreement" />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-checkbox--validation" />

### Validation Mode

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, boolean} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  agreement_eager: boolean()
    .oneOf([true], 'You must agree to terms and condition')
    .required()
    .label('Agreement'),
  agreement_aggressive: boolean()
    .oneOf([true], 'You must agree to terms and condition')
    .required()
    .label('Agreement'),
});

const modes = ref(['eager', 'aggressive']);

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    agreement_eager: false,
    agreement_aggressive: false,
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

        <v-checkbox
          wrapper-class="mb-4"
          :name="'agreement_' + mode"
          label="Agreement"
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

<LivePreview src="forms-checkbox--validation" />

## Props

| Name                                  | Type                         | Default     |
| ------------------------------------- | ---------------------------- | ----------- |
| [`modelValue`](#modelValue)           | `Boolean`                    | `false`     |
| [`label`](#label)                     | `String`                     | `''`        |
| [`labelClass`](#labelClass)           | `String`                     | `''`        |
| [`inputClass`](#inputClass)           | `String`                     | `''`        |
| [`color`](#color)                     | `String as PropType<Colors>` | `'primary'` |
| [`size`](#size)                       | `String`                     | `''`        |
| [`validationMode`](#validationMode)   | `String`                     | `''`        |
| ~~value~~                 | `String`                     | `''`        |
| [`name`](#name)                       | `String`                     | `''`        |
| [`id`](#id)                           | `String`                     | `''`        |
| [`rules`](#rules)                     | `String`                     | `''`        |
| [`wrapperClass`](#wrapperClass)       | `String`                     | `''`        |
| [`checkedValue`](#checkedValue)       | `String`                     | `''`        |
| [`uncheckedValue`](#uncheckedValue)   | `String`                     | `''`        |
| [`disabled`](#disabled)               | `String`                     | `''`        |
| ~~disabledClass | `String`                     | `''`        |
| [`errorClass`](#errorClass)           | `String`                     | `''`        |

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

const checked = ref(false);

const onChange = (val: boolean) => {
  console.log(val);
};
</script>

<template>
  <VCheckbox
    v-model="checked"
    @update:modelValue="onChange"
  />
</template>
```

## Slots

None

## CSS Variables

```css
:root {
  --v-checkbox-bg-color: theme('colors.white');
  --v-checkbox-border-width: 1px;
  --v-checkbox-border-style: solid;
  --v-checkbox-border-color: theme('colors.gray.500');
  --v-checkbox-border-radius: theme('borderRadius.DEFAULT');
}
```

## Manual Installation

You can also install the `Checkbox` component individually via `@gits-id/forms` package:

```bash
npm i @gits-id/forms
```

```vue
<script setup lang="ts">
import {VCheckbox} from '@gits-id/forms';
import '@gits-id/forms/dist/style.css';

import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VCheckbox v-model="checked" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-checkbox--default).
