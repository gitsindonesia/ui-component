---
outline: deep
---

# Switch

The `VSwitch` component allows you to add a toggle switch to your Vue app.

## Usage

### Basic Usage

To use the component, you first need to install it with `@morpheme/ui`. Once installed, the `VSwitch` component will be registered globally, so you don't need to import it manually.

<LivePreview src="forms-switch--default" >

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
The `VSwitch` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Colors

You can specify the color of the `VSwitch` using the color prop. The available colors are `primary`, `secondary`, `success`, `warning`, `error`, and custom.

<LivePreview src="forms-switch--warning" >

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

<LivePreview src="forms-switch--no-label" >

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

<LivePreview src="forms-switch--custom-class" >

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

<LivePreview src="forms-switch--custom-style" >

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

<LivePreview src="forms-switch--validation" >

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

```scss
:root {
  --v-switch-width: 100%;
  /* button */
  --v-switch-button-bg-color: var(--color-gray-200);
  --v-switch-button-border-color: var(--color-transparent);
  --v-switch-button-checked-bg-color: var(--color-primary-500);
  --v-switch-button-checked-border-color: var(--color-primary-500);
  --v-switch-button-width: 36px;
  --v-switch-button-height: 20px;
  --v-switch-button-padding-y: 0px;
  --v-switch-button-padding-x: 0px;

  /* thumb */
  --v-switch-thumb-bg-color: var(--color-white);
  --v-switch-thumb-width: 16px;
  --v-switch-thumb-height: 16px;
  --v-switch-thumb-border-radius: var(--border-radius-full);
  --v-switch-thumb-translate-x: 2px;

  --v-switch-thumb-active-translate-x: 18px;

  /* label */
  --v-switch-label-color: var(--v-input-label-color);
  --v-switch-label-font-size: var(--v-input-label-font-size);
  --v-switch-label-font-weight: var(--v-input-label-font-weight);

  // hint
  --v-switch-hint-font-size: var(--v-input-hint-font-size, 14px);
  --v-switch-hint-color: var(--v-input-hint-color);
  --v-switch-hint-margin-top: var(--v-input-hint-margin-top);
}
```

## Standalone Installation

You can also install the `Switch` component individually via `@morpheme/switch` package:

```bash
npm i @morpheme/switch
```

Then, use it like so:

```vue
<script setup lang="ts">
import VSwitch from '@morpheme/switch';
import {ref} from 'vue';

const checked = ref(false);
</script>

<template>
  <VSwitch v-model="checked" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-switch--default).
