# Select

## Overview

The `Select` component provides a dropdown list for selecting a single value from multiple options. The component is designed with customization and flexibility in mind, allowing various configurations for rendering the dropdown list.

## Storybook

<LivePreview src="experimental-forms-select--docs" hide-nav />

## Props

| Prop           | Type    | Default | Description                                                                                                   |
| -------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| `modelValue`   | String  | ''      | Initial value of the select component.                                                                        |
| `options`      | Array   | []      | List of options to display in the dropdown. Each option should have `text` and `value` attributes by default. |
| `itemText`     | String  | 'text'  | Attribute name for the displayed text in each option.                                                         |
| `itemValue`    | String  | 'value' | Attribute name for the value in each option.                                                                  |
| `name`         | String  | ''      | Name attribute for the select input.                                                                          |
| `error`        | Boolean | false   | Determines if the component is in an error state.                                                             |
| `size`         | String  | ''      | Size of the select input. This can be `small`, `medium`, or `large`.                                          |
| `disabled`     | Boolean | false   | If `true`, the select input is disabled.                                                                      |
| `errorClass`   | String  | ''      | Class to be applied when the input is in an error state.                                                      |
| `label`        | String  | ''      | Label for the select input.                                                                                   |
| `labelClass`   | String  | ''      | Class to be applied to the label.                                                                             |
| `wrapperClass` | String  | ''      | Class to be applied to the component wrapper.                                                                 |
| `hint`         | String  | ''      | Hint or help text displayed below the input.                                                                  |
| `errorMessage` | String  | ''      | Error message displayed when the input is in an error state.                                                  |
| `id`           | String  | ''      | ID attribute for the select input. If not provided, `name` will be used.                                      |
| `readonly`     | Boolean | false   | If `true`, the select input is read-only.                                                                     |
| `shadow`       | Boolean | false   | If `true`, applies a shadow style to the input.                                                               |

## Events

| Event               | Payload Type | Description                                      |
| ------------------- | ------------ | ------------------------------------------------ |
| `update:modelValue` | String       | Emits the current value of the select component. |

## Slots

| Slot      | Props | Description                                                                  |
| --------- | ----- | ---------------------------------------------------------------------------- |
| `default` | {}    | Default slot for additional content.                                         |
| `hint`    | {}    | Custom hint content. If not provided, the `hint` prop will be used.          |
| `error`   | {}    | Custom error content. If not provided, the `errorMessage` prop will be used. |

## Methods

| Method  | Description               |
| ------- | ------------------------- |
| `focus` | Focuses the select input. |

## Usage

To use the `Select` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Select} from '@morpheme/forms';

const selectedValue = ref('');
const options = [
  {text: 'Option 1', value: 'opt1'},
  {text: 'Option 2', value: 'opt2'},
];
</script>

<template>
  <Select v-model="selectedValue" :options="options" label="Choose an option" />
</template>
```

This will render a dropdown list with two options. The value of the selected option will be bound to the `selectedValue` ref.
