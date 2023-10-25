# `FileInput`

## Overview

The `FileInput` component provides a flexible interface for file input functionalities in a Vue application. It allows for default and button-based activators, supports file drag-and-drop, displays lists of selected files, and exposes slots for customizing hint and error displays.

## Storybook

<LivePreview src="experimental-forms-fileinput--docs" hide-nav />

## Props

| Name         | Type                  | Default | Description                                          |
| ------------ | --------------------- | ------- | ---------------------------------------------------- |
| modelValue   | any[]                 | []      | The value bound to the component (list of files).    |
| multiple     | boolean               | -       | If true, allows multiple file selection.             |
| accept       | string                | -       | Specifies accepted file types (MIME types).          |
| capture      | string                | -       | Specifies which camera to use for image capture.     |
| reset        | boolean               | -       | If true, resets the file input after each selection. |
| variant      | 'default' or 'button' | -       | Determines the type of activator.                    |
| variantProps | Record<string, any>   | -       | Props passed to the variant component.               |
| hideItems    | boolean               | -       | If true, hides the list of selected files.           |
| label        | string                | -       | Label for the file input.                            |
| hint         | string                | -       | Hint text displayed below the input.                 |
| wrapperClass | string                | -       | Additional CSS class for the wrapper div.            |
| error        | boolean               | -       | If true, indicates an error state for the input.     |
| errorMessage | string                | -       | Error message displayed when in an error state.      |

## Events

| Name                | Payload Type | Description                             |
| ------------------- | ------------ | --------------------------------------- |
| 'update:modelValue' | any[]        | Emitted when the selected files change. |

## Slots

- **default**: Default slot for customizing the file input activator.

  - Properties:
    - `files`: The normalized list of selected files.
    - `open`: Method to open the file dialog.
    - `reset`: Method to reset the file input.

- **items**: Slot for customizing the list of selected files.

  - Properties:
    - `files`: The normalized list of selected files.

- **hint**: Slot for customizing the hint text.

  - Properties: None (Uses the `hint` prop directly).

- **error**: Slot for customizing the error display.
  - Properties: None (Uses the `errorMessage` prop directly).

## Methods

- **open**: Opens the file dialog for file selection.
- **reset**: Resets the file input.
- **removeItem(idx: number)**: Removes a file from the selected list based on its index.

## Usage

You can use the `FileInput` component in your Vue templates:

```vue
<script setup lang="ts">
import {FileInput} from '@morpheme/forms';
import {ref} from 'vue';

const selectedFiles = ref();
</script>

<template>
  <FileInput
    label="Upload files"
    multiple
    variant="button"
    v-model="selectedFiles"
  />
</template>
```

## Notes

- Ensure that the associated components (`FileInputDefaultActivator`, `FileInputButtonActivator`, and `FileInputItems`) are properly imported and available.
- The `useFileDialog` utility from `@vueuse/core` provides the core file dialog functionalities.
- Selected files are normalized into an array, allowing for easier management and display.
