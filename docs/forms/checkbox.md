# Checkbox

## Overview

The `Checkbox` component provides an input for boolean data selection. It's designed with customizable aesthetics and behavior, allowing it to seamlessly fit into various application designs.

## Storybook

<LivePreview src="experimental-forms-checkbox--docs" hide-nav />

## Props

| Prop           | Type                    | Default   | Description                                                                             |
| -------------- | ----------------------- | --------- | --------------------------------------------------------------------------------------- |
| `modelValue`   | Boolean, Array          | false     | The value bound to the checkbox. Can be a boolean or an array of values.                |
| `label`        | String                  | ''        | Label displayed alongside the checkbox.                                                 |
| `inputClass`   | String                  | ''        | Class to be applied to the checkbox input element.                                      |
| `color`        | String                  | 'primary' | Color of the checkbox.                                                                  |
| `size`         | String                  | ''        | Size of the checkbox.                                                                   |
| `value`        | String, Number, Boolean | false     | Value associated with the checkbox.                                                     |
| `name`         | String                  | ''        | Name attribute for the checkbox.                                                        |
| `id`           | String                  | ''        | ID attribute for the checkbox. If not provided, the `name` prop will be used as the ID. |
| `wrapperClass` | String                  | ''        | Class to be applied to the component wrapper.                                           |
| `disabled`     | Boolean                 | false     | If true, the checkbox will be disabled.                                                 |
| `errorClass`   | String                  | ''        | Class to be applied to the error message display.                                       |
| `labelClass`   | String                  | ''        | Class to be applied to the label.                                                       |
| `hideError`    | Boolean                 | false     | If true, hides the error message even if there's an error.                              |
| `hint`         | String                  | ''        | Hint or help text displayed below the checkbox.                                         |
| `error`        | Boolean                 | false     | Indicates if the checkbox has an error.                                                 |
| `errorMessage` | String                  | ''        | Error message displayed when there's a validation error related to the checkbox.        |

## Events

| Event               | Payload Type  | Description                              |
| ------------------- | ------------- | ---------------------------------------- |
| `update:modelValue` | CheckboxValue | Emits the current value of the checkbox. |

## Slots

| Slot      | Props | Description                                                                                                       |
| --------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| `default` | {}    | Default slot, useful if you want to insert content inside the checkbox's wrapper but outside the checkbox itself. |
| `hint`    | {}    | Custom hint content. If not provided, the `hint` prop will be used.                                               |
| `error`   | {}    | Custom error content. If not provided, the `errorMessage` prop will be used.                                      |

## Usage

To use the `Checkbox` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Checkbox} from '@morpheme/forms';

const acceptTerms = ref(false);
</script>

<template>
  <Checkbox
    v-model="acceptTerms"
    label="I accept the terms and conditions"
    hint="Make sure to read the terms before proceeding."
  />
</template>
```

This will render a checkbox with a label "I accept the terms and conditions" and a hint message. The checkbox state will be bound to the `acceptTerms` ref. If the checkbox is checked, `acceptTerms` will be `true`, otherwise it will be `false`.
