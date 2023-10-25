# Input

## Overview

This component provides a customizable input field with additional features like prepend/append icons, clearable input, custom label, error message display, and more. It can also be transformed into a select box with options if required.

## Storybook

<LivePreview src="experimental-forms-input--docs" hide-nav />

## Props

Here are the properties that you can pass to the Input component:

| Property        | Type             | Default           | Description                                                   |
| --------------- | ---------------- | ----------------- | ------------------------------------------------------------- |
| `modelValue`    | String, Number   | `''`              | The value of the input field.                                 |
| `type`          | String           | `'text'`          | Specifies the type of input (`text`, `password`, etc.).       |
| `name`          | String           | `''`              | Name attribute for the input.                                 |
| `error`         | Boolean          | `false`           | If `true`, the input will be highlighted with an error state. |
| `readonly`      | Boolean          | `false`           | Read-only mode for the input.                                 |
| `disabled`      | Boolean          | `false`           | If `true`, the input will be disabled.                        |
| `size`          | 'sm', 'md', 'lg' | `'md'`            | Size of the input.                                            |
| `placeholder`   | String           | `''`              | Placeholder text for the input.                               |
| `prependIcon`   | String           | `''`              | Icon to prepend to the input.                                 |
| `appendIcon`    | String           | `''`              | Icon to append to the input.                                  |
| `color`         | String           | `'default'`       | Color scheme of the input.                                    |
| `shadow`        | Boolean          | `false`           | If `true`, the input will have a shadow.                      |
| `label`         | String           | `''`              | Label text for the input.                                     |
| `id`            | String           | `''`              | ID attribute for the input.                                   |
| `...Class`      | String           | Various defaults  | Classes for various parts of the component.                   |
| `...IconSize`   | IconSize         | `'md'`            | Size of various icons used in the component.                  |
| `clearable`     | Boolean          | `false`           | If `true`, a clear icon will appear when there's input.       |
| `clearableIcon` | String           | `'ri:close-line'` | Icon used for the clear button.                               |
| `rounded`       | Boolean          | `false`           | Rounded corners for the input.                                |
| `hideError`     | Boolean          | `false`           | If `true`, error messages will be hidden.                     |
| `hint`          | String           | `''`              | Hint or help text for the input.                              |
| `borderless`    | Boolean          | `false`           | If `true`, the input will have no border.                     |
| `noRing`        | Boolean          | `false`           | If `true`, the input won't have a focus ring.                 |
| `errorMessage`  | String           | `''`              | Custom error message to display.                              |
| `as`            | String           | `'input'`         | Determines if the component acts as an 'input' or 'select'.   |
| `options`       | Array of Option  | `[]`              | Options for the select box (if `as` is set to 'select').      |

## Events

| Event               | Payload              | Description                                                   |
| ------------------- | -------------------- | ------------------------------------------------------------- |
| `update:modelValue` | value: string/number | Emitted when the input value changes.                         |
| `clickPrepend`      |                      | Emitted when the prepend area is clicked.                     |
| `clickPrependIcon`  |                      | Emitted when the prepend icon is clicked.                     |
| `clickAppend`       |                      | Emitted when the append area is clicked.                      |
| `clickAppendIcon`   |                      | Emitted when the append icon is clicked.                      |
| `clear`             |                      | Emitted when the input is cleared using the clearable button. |

## Slots

| Slot            | Description                                 |
| --------------- | ------------------------------------------- |
| `default`       | Default slot for additional content.        |
| `label`         | Custom label content.                       |
| `prepend`       | Custom content for the prepend section.     |
| `prepend.outer` | Custom content outside the prepend section. |
| `append`        | Custom content for the append section.      |
| `append.outer`  | Custom content outside the append section.  |
| `clearable`     | Custom content for the clearable section.   |
| `hint`          | Custom hint or help text.                   |
| `error`         | Custom error message.                       |

## Methods

| Method  | Description                  |
| ------- | ---------------------------- |
| `focus` | Focuses the input component. |

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Input} from '@morpheme/forms';

const value = ref();
</script>

<template>
  <Input v-model="someValue" label="My Input" placeholder="Enter some value" />
</template>
```

This is a brief documentation for the Input component. For more advanced scenarios, you can check the component code to understand the full capabilities and functionalities it offers.
