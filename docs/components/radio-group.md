---
outline: deep
---

# Radio Group

The `VRadioGroup` component is a form control that allows the user to select a single option from a list of choices presented as radio buttons.

## Usage

### Basic Usage

To use the `VRadioGroup` component, pass in a list of objects representing the available options through the items prop. Each object should have a `text` property for the label to be displayed and a `value` property for the underlying value of the option.

<LivePreview src="forms-radiogroup--default">

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

</LivePreview>

### Inline

To display the radio buttons inline, set the `inline` prop to `true`.

<LivePreview src="forms-radiogroup--inline">

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

</LivePreview>

### Error

To display the `VRadioGroup` component in an error state, set the `error` prop to `true`. This will add an error message and apply an error styles to the component.

<LivePreview src="forms-radiogroup--error" >

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

</LivePreview>

### Disabled

To disable the `VRadioGroup` component and prevent user interaction, set the `disabled` prop to `true`.

<LivePreview src="forms-radiogroup--disabled" >

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

</LivePreview>

### Disabled

To disable the `VRadioGroup` component and prevent user interaction, set the `disabled` prop to `true`.

<LivePreview src="forms-radiogroup--disabled" >

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

</LivePreview>

### Validation

The `VRadioGroup` component can be used in a form with form validation by using a form handling library such as `VeeValidate`.

Here is an example of using the `VRadioGroup` component with `VeeValidate`:

<LivePreview src="forms-radiogroup--no-label" >

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

</LivePreview>

### Validation Mode

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes. This can be useful when you are validating for example the minimum or maximum limits of an input.

You can change the default value for this validation mode by adding an attribute or property named `validation-mode` to this component.

<LivePreview src="forms-radiogroup--default" >

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

</LivePreview>

:::

### Styling selected item

To style selected item distinctively, pass your class to `selectedClass` prop, or `defaultClass` to set a default classes
for the items.

<LivePreview src="forms-radiogroup--customization" />

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
  <VRadioGroup
    :items="items"
    label="Pick an option"
    labelClass="!text-purple-500"
    ,
    defaultClass="p-2 my-1 hover=bg-primary-50 border-grey-300 border rounded-lg cursor-pointer"
    ,
    selectedClass="!border-primary-300 !text-primary-500"
  />
</template>
```

### Props

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
| [`errorClass`](#errorClass)         | `String`                                               | `''`                            |
| [`defaultClass`](#errorClass)       | `String`                                               | `''`                            |
| [`selectedClass`](#errorClass)      | `String`                                               | `'text-error-600 text-sm mt-1'` |
| [`rules`](#rules)                   | `String`                                               | `''`                            |
| [`id`](#id)                         | `String`                                               | `''`                            |
| [`validationMode`](#validationMode) | `'aggressive'` &#x7c; `'eager'`                        | `'aggressive'`                  |
| [`hint`](#hint)                     | `String`                                               | `''`                            |

## Events

### `update:modelValue`

This event is emitted whenever the value of the `VRadioGroup` component changes. It is emitted with the new value as the argument.

```vue
<template>
  <VRadioGroup @update:modelValue="handleModelValueChange" />
</template>

<script>
export default {
  methods: {
    handleModelValueChange(newValue) {
      // handle value change
    },
  },
};
</script>
```

### `change`

This event is emitted whenever the value of the `VRadioGroup` component changes and the input loses focus. It is emitted with the new value as the argument.

```vue
<template>
  <VRadioGroup @change="handleChange" />
</template>

<script>
export default {
  methods: {
    handleChange(newValue) {
      // handle change
    },
  },
};
</script>
```

### `blur`

This event is emitted whenever the `VRadioGroup` component loses focus. It is emitted with the current value as the argument.

```vue
<template>
  <VRadioGroup @blur="handleBlur" />
</template>

<script>
export default {
  methods: {
    handleBlur(currentValue) {
      // handle blur
    },
  },
};
</script>
```

## Slots

### `label`

Customize radio label text

```vue
<VRadioGroup>
  <template #label="{item, selected}">
    <span>{{ item.title }}</span>
  </template>
</VRadioGroup>
```

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
