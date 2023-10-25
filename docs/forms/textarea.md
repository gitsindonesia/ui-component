# Textarea

## Overview

The `Textarea` component provides a multi-line text input field for users. It's equipped with various configurations such as an integrated counter, error display, and more, to suit a wide range of use cases.

## Storybook

<LivePreview src="experimental-forms-textarea--docs" hide-nav />

## Props

| Prop           | Type           | Default   | Description                                                                             |
| -------------- | -------------- | --------- | --------------------------------------------------------------------------------------- |
| `modelValue`   | String         | ''        | The current value of the textarea.                                                      |
| `name`         | String         | ''        | Name attribute for the textarea.                                                        |
| `error`        | Boolean        | false     | Indicates if the textarea has an error.                                                 |
| `readonly`     | Boolean        | false     | If true, the textarea will be read-only.                                                |
| `disabled`     | Boolean        | false     | If true, the textarea will be disabled.                                                 |
| `counter`      | Boolean        | false     | If true, a character counter will be displayed.                                         |
| `shadow`       | Boolean        | false     | If true, a shadow will be added to the textarea.                                        |
| `cols`         | String, Number | undefined | Number of columns for the textarea.                                                     |
| `rows`         | String, Number | undefined | Number of rows for the textarea.                                                        |
| `label`        | String         | ''        | Label for the textarea.                                                                 |
| `wrapperClass` | String         | ''        | Class to be applied to the component wrapper.                                           |
| `inputClass`   | String         | ''        | Class to be applied to the textarea element.                                            |
| `labelClass`   | String         | ''        | Class to be applied to the label.                                                       |
| `hideError`    | Boolean        | false     | If true, hides the error message even if there's an error.                              |
| `hint`         | String         | ''        | Hint or help text displayed below the textarea.                                         |
| `errorMessage` | String         | ''        | Error message displayed when there's a validation error related to the textarea.        |
| `id`           | String         | ''        | ID attribute for the textarea. If not provided, the `name` prop will be used as the ID. |

## Events

| Event               | Payload Type | Description                              |
| ------------------- | ------------ | ---------------------------------------- |
| `update:modelValue` | String       | Emits the current value of the textarea. |

## Methods

| Method  | Description                                                                           |
| ------- | ------------------------------------------------------------------------------------- |
| `focus` | Focuses the textarea element. Can be used programmatically from the parent component. |

## Slots

| Slot      | Props               | Description                                                                                                             |
| --------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `default` | {}                  | Default slot, useful if you want to insert content inside the textarea's wrapper but outside the textarea itself.       |
| `hint`    | {}                  | Custom hint content. If not provided, the `hint` prop will be used.                                                     |
| `error`   | {}                  | Custom error content. If not provided, the `errorMessage` prop will be used.                                            |
| `counter` | `{ count: number }` | Custom counter content. `count` provides the current number of characters in the textarea. Defaults to character count. |

## Usage

To use the `Textarea` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Textarea} from '@morpheme/forms';

const userInput = ref('');
</script>

<template>
  <Textarea
    v-model="userInput"
    label="Feedback"
    counter
    hint="Let us know how we can improve."
    :rows="5"
  />
</template>
```

This will render a textarea with a label "Feedback", a character counter, a hint message, and 5 rows for user input. The text entered by the user will be bound to the `userInput` ref.
