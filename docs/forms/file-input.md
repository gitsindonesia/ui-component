# FileInput

## Overview

The `FileInput` component is a flexible and customizable file input handler. It supports both single and multiple file selections and comes with two visual variants: default and button. Files can also be dragged and dropped onto the component to be added.

## Storybook

<LivePreview src="experimental-forms-fileinput--docs" hide-nav />

## Props

| Prop           | Type                  | Default   | Description                                                                                           |
| -------------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `modelValue`   | any[]                 | []        | The current files bound to the input.                                                                 |
| `multiple`     | boolean               | -         | Determines if multiple files can be selected.                                                         |
| `accept`       | string                | -         | Specifies file types that the input should accept. E.g., '.jpg,.png'.                                 |
| `capture`      | string                | -         | Specifies which camera to use for capture of image or video data, e.g., 'user' or 'environment'.      |
| `reset`        | boolean               | -         | If true, will reset the input after files are selected.                                               |
| `variant`      | 'default' \| 'button' | 'default' | Visual variant of the file input. Can be either 'default' or 'button'.                                |
| `variantProps` | Record<string, any>   | -         | Props for the specific variant component (`FileInputDefaultActivator` or `FileInputButtonActivator`). |
| `hideItems`    | boolean               | -         | If true, hides the list of currently selected files.                                                  |
| `label`        | string                | -         | Label for the file input component.                                                                   |
| `hint`         | string                | -         | Hint or helper text displayed below the file input.                                                   |
| `wrapperClass` | string                | -         | Class to be applied to the component wrapper.                                                         |
| `error`        | boolean               | -         | Indicates if the file input has an error.                                                             |
| `errorMessage` | string                | -         | Error message displayed when there's a validation error related to the file input.                    |

## Events

| Event               | Payload Type | Description                                |
| ------------------- | ------------ | ------------------------------------------ |
| `update:modelValue` | any          | Emits the current files of the file input. |

## Methods

| Method       | Parameters  | Description                                               |
| ------------ | ----------- | --------------------------------------------------------- |
| `open`       | -           | Opens the file dialog.                                    |
| `reset`      | -           | Resets the file input, clearing all selected files.       |
| `removeItem` | idx: number | Removes a file from the selected list based on its index. |

## Slots

| Slot      | Props                                              | Description                                                                                                          |
| --------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `default` | `{files: File[], open: Function, reset: Function}` | Default slot, allows you to customize the main input area. Defaults to a component based on the `variant` prop.      |
| `hint`    | {}                                                 | Custom hint content. If not provided, the `hint` prop will be used.                                                  |
| `items`   | `{files: File[]}`                                  | Custom display for the list of selected files. If not provided, the default display (`FileInputItems`) will be used. |
| `error`   | {}                                                 | Custom error content. If not provided, the `errorMessage` prop will be used.                                         |

## Usage

To use the `FileInput` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {FileInput} from '@morpheme/forms';

const files = ref([]);
</script>

<template>
  <FileInput
    v-model="files"
    label="Upload Documents"
    hint="Accepted formats: .pdf, .docx"
    accept=".pdf,.docx"
  />
</template>
```

This will render a file input component with a label "Upload Documents" and a hint message. Users can then select `.pdf` or `.docx` files, and the selected files will be bound to the `files` ref.
