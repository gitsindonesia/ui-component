# Radio

## Overview

The `Radio` component provides an interface for selecting one option from a set of mutually exclusive options. This component is designed for customization and offers several configurations for rendering the radio button and its associated label.

## Storybook

<LivePreview src="experimental-forms-radio--docs" hide-nav />

## Props

| Prop           | Type    | Default   | Description                                                                           |
| -------------- | ------- | --------- | ------------------------------------------------------------------------------------- |
| `modelValue`   | String  | ''        | The value that is bound to the radio component.                                       |
| `value`        | String  | ''        | The value of the radio input.                                                         |
| `label`        | String  | ''        | Label text for the radio input.                                                       |
| `inputClass`   | String  | ''        | Class to be applied to the radio input.                                               |
| `color`        | String  | 'primary' | Color theme for the radio button. This can be `primary`, `secondary`, `warning`, etc. |
| `name`         | String  | ''        | Name attribute for the radio input. Used to group multiple radio buttons.             |
| `id`           | String  | ''        | ID attribute for the radio input.                                                     |
| `labelClass`   | String  | ''        | Class to be applied to the label.                                                     |
| `wrapperClass` | String  | ''        | Class to be applied to the component wrapper.                                         |
| `hideError`    | Boolean | false     | If `true`, hides the error message.                                                   |
| `disabled`     | Boolean | false     | If `true`, the radio input is disabled.                                               |
| `errorClass`   | String  | ''        | Class to be applied when the input is in an error state.                              |
| `hint`         | String  | ''        | Hint or help text displayed below the input.                                          |
| `errorMessage` | String  | ''        | Error message displayed when the input is in an error state.                          |
| `groupClass`   | String  | ''        | Class to be applied to the radio group wrapper.                                       |

## Events

| Event               | Payload Type | Description                                     |
| ------------------- | ------------ | ----------------------------------------------- |
| `update:modelValue` | RadioValue   | Emits the current value of the radio component. |

## Slots

| Slot      | Props | Description                                                                  |
| --------- | ----- | ---------------------------------------------------------------------------- |
| `default` | {}    | Default slot for additional content.                                         |
| `hint`    | {}    | Custom hint content. If not provided, the `hint` prop will be used.          |
| `error`   | {}    | Custom error content. If not provided, the `errorMessage` prop will be used. |

## Usage

To use the `Radio` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import Radio from '@morpheme/forms';

const selectedOption = ref('');
const radioValue = 'option1';
</script>

<template>
  <Radio
    v-model="selectedOption"
    :value="radioValue"
    label="Option 1"
    name="radioGroup"
  />
</template>
```

This will render a radio button with the label "Option 1". The value of the selected radio button will be bound to the `selectedOption` ref.
