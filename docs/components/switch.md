---
outline: deep
---

# Switch

The `VSwitch` component allows you to add a toggle switch to your Vue app.

## Usage

### Basic Usage

To use the component, you first need to install it with `@gits-id/ui`. Once installed, the `VSwitch` component will be registered globally, so you don't need to import it manually.

<LivePreview src="components-switch--default" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch v-model="checked" label="Label" />
</template>
```

</LivePreview>

::: info
The `VSwitch` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Colors

You can specify the color of the `VSwitch` using the color prop. The available colors are `primary`, `secondary`, `success`, `warning`, `error`, and custom.

<LivePreview src="components-switch--warning" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch v-model="checked" color="warning" />
</template>
```

</LivePreview>

### No Label

If you don't want to display a label, you can leave out the `label` prop.

<LivePreview src="components-switch--no-label" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch v-model="checked" />
</template>
```

</LivePreview>

### Custom Class

You can apply custom classes to the `VSwitch` and its individual parts using the `switch-class`, `active-class`, `inactive-class`, and `button-class` props.

<LivePreview src="components-switch--custom-class" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch
    v-model="checked"
    label="Custom Switch"
    switch-class="!border-cyan-200"
    active-class="!bg-white"
    inactive-class="!bg-white"
    button-class="!bg-cyan-500"
  />
</template>
```

</LivePreview>

### Custom Style

You can also style the component using CSS variables.

<LivePreview src="components-switch--custom-style" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch
    v-model="checked"
    color="custom"
    :style="{
      '--v-switch-button-bg-color': 'transparent',
      '--v-switch-button-border-color': 'purple',
      '--v-switch-button-checked-bg-color': 'transparent',
      '--v-switch-button-checked-border-color': 'purple',
      '--v-switch-button-padding-x': '0.125rem',
      '--v-switch-thumb-bg-color': 'purple',
      '--v-switch-thumb-width': '1rem',
      '--v-switch-thumb-height': '1rem',
    }"
  />
</template>
```

</LivePreview>

### Validation

You can use the `VSwitch` component with form validation libraries like `vee-validate`.

<LivePreview src="components-switch--validation" >

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
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VSwitch wrapper-class="mb-4" name="agreement" label="Agreement" />
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

| Name                                    | Type                         | Default     |
| --------------------------------------- | ---------------------------- | ----------- |
| [`modelValue`](#modelValue)             | `Boolean`                    | `false`     |
| [`label`](#label)                       | `String`                     | `''`        |
| [`color`](#color)                       | `String as PropType<Colors>` | `'primary'` |
| [`inactiveClass`](#inactiveClass)       | `String`                     | `''`        |
| [`activeClass`](#activeClass)           | `String`                     | `''`        |
| [`buttonClass`](#buttonClass)           | `String`                     | `''`        |
| [`wrapperClass`](#wrapperClass)         | `String`                     | `''`        |
| [`switchClass`](#switchClass)           | `String`                     | `''`        |
| [`switchGroupClass`](#switchGroupClass) | `String`                     | `''`        |
| [`labelClass`](#labelClass)             | `String`                     | `''`        |
| [`name`](#name)                         | `String`                     | `''`        |
| [`rules`](#rules)                       | `String`                     | `''`        |
| [`errorClass`](#errorClass)             | `String`                     | `''`        |
| [`hint`](#hint)                         | `String`                     | `''`        |
| [`hideError`](#hideError)               | `Boolean`                    | `false`     |

## Events

### `update:modelValue`

The `update:modelValue` event is emitted when the value of the `VSwitch` changes.

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
  <VSwitch
    v-model="checked"
    label="Custom Style"
    @update:modelValue="onChange"
  />
</template>
```

## Slots

None

## CSS Variables

```css
:root {
  --v-switch-width: theme('width.full');
  /* button */
  --v-switch-button-bg-color: theme('colors.primary.500');
  --v-switch-button-border-color: theme('colors.primary.500');
  --v-switch-button-width: theme('width.11');
  --v-switch-button-height: theme('height.6');
  --v-switch-button-padding-y: theme('padding.0');
  --v-switch-button-padding-x: theme('padding.0');
  /* thumb */
  --v-switch-thumb-bg-color: theme('colors.white');
  --v-switch-thumb-width: theme('width.5');
  --v-switch-thumb-height: theme('height.5');
  --v-switch-thumb-border-radius: theme('borderRadius.full');
  /* label */
  --v-switch-label-font-size: theme('fontSize.base');
  --v-switch-label-font-weight: theme('fontWeight.normal');
}
```

## Manual Installation

You can also install the `Switch` component individually via `@gits-id/switch` package:

```bash
npm i @gits-id/switch
```

```vue
<script setup lang="ts">
import VSwitch from '@gits-id/switch';
import '@gits-id/switch/dist/style.css';

import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch v-model="checked" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-switch--default).
