# Checkbox

## Overview

The `Checkbox` component is a customizable checkbox that can be used in your Vue 3 applications. The component supports theming through properties and slots, providing a flexible interface for your needs.

## Storybook

<LivePreview src="experimental-forms-checkbox--docs" hide-nav />

## Props

| Prop           | Type                    | Default     | Description                                                   |
| -------------- | ----------------------- | ----------- | ------------------------------------------------------------- |
| `modelValue`   | Boolean, Array          | `false`     | The value bound using v-model.                                |
| `label`        | String                  | `''`        | Label for the checkbox.                                       |
| `inputClass`   | String                  | `''`        | Additional classes for the input element.                     |
| `color`        | String                  | `'primary'` | Theme color for the checkbox.                                 |
| `size`         | String                  | `''`        | Size of the checkbox.                                         |
| `value`        | String, Number, Boolean | `false`     | Value of the checkbox input.                                  |
| `name`         | String                  | `''`        | Name attribute for the checkbox input.                        |
| `id`           | String                  | `''`        | Id attribute for the checkbox input.                          |
| `wrapperClass` | String                  | `''`        | Additional classes for the outer wrapper div.                 |
| `disabled`     | Boolean                 | `false`     | If `true`, the checkbox will be disabled.                     |
| `errorClass`   | String                  | `''`        | Additional classes for the error message container.           |
| `labelClass`   | String                  | `''`        | Additional classes for the label element.                     |
| `hideError`    | Boolean                 | `false`     | If `true`, the error message will be hidden.                  |
| `hint`         | String                  | `''`        | A hint message for the checkbox.                              |
| `error`        | Boolean                 | `false`     | If `true`, indicates that there's an error with the checkbox. |
| `errorMessage` | String                  | `''`        | Error message to display when `error` is `true`.              |

## Events

- `update:modelValue`: Emits the updated value of the checkbox.

## Slots

- `default`: This slot can be used to render custom content inside the checkbox, although its props are currently empty.
- `hint`: Use this slot to render a custom hint message. If this slot is not provided, the `hint` prop will be used.
- `error`: Use this slot to render a custom error message. If this slot is not provided, the `errorMessage` prop will be used.

## Usage

You can include the Checkbox component in your Vue components and use the provided props and slots to customize its appearance and behavior.

```vue
<script setup lang="ts">
import {Checkbox} from '@morpheme/forms';
</script>

<template>
  <Checkbox
    label="Subscribe"
    modelValue="true"
    color="secondary"
    hint="Subscribe to our newsletter"
    error
    errorMessage="You must agree before submitting."
  />
</template>
```

This will render a checkbox with the label "Subscribe", a hint message, and an error message. The checkbox will have a secondary theme color.

Note: For the best practices and user experience, always include a label when using the `Checkbox` component.
