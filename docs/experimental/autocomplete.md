# Autocomplete

::: warning
Experimental
:::

## Introduction

The Autocomplete component is a flexible and customizable dropdown select component built using Vue 3 and the Headless UI library. It supports both single and multiple selections, provides slot customization, and offers various props for enhanced functionality.

## Storybook

<LivePreview src="experimental-autocomplete--docs" hide-nav />

## Props

| Prop               | Type                                                                     | Default         | Description                                                                                           |
| ------------------ | ------------------------------------------------------------------------ | --------------- | ----------------------------------------------------------------------------------------------------- |
| modelValue         | `T                                      \| T[]             \| undefined` | -               | The value bound to the component.                                                                     |
| items              | `T[]`                                                                    | -               | An array of items to be displayed in the dropdown.                                                    |
| multiple           | `boolean`                                                                | `false`         | Allows multiple selections if set to true.                                                            |
| itemText           | `string`                                                                 | `'text'`        | The key for the text to be displayed from the item.                                                   |
| itemValue          | `string`                                                                 | `'value'`       | The key for the value of the item.                                                                    |
| placeholder        | `string`                                                                 | `'Search...'`   | Placeholder text for the input.                                                                       |
| label              | `string`                                                                 | -               | Label for the autocomplete.                                                                           |
| transition         | `string`                                                                 | `'dropdown'`    | Transition animation name.                                                                            |
| error              | `boolean`                                                                | `false`         | If set to true, indicates there's an error.                                                           |
| disabled           | `boolean`                                                                | `false`         | If set to true, the component will be disabled.                                                       |
| clearable          | `boolean`                                                                | `false`         | If set to true, adds the option to clear the selected value.                                          |
| emptyText          | `string`                                                                 | `'No results.'` | Text displayed when there are no results to show.                                                     |
| searchBy           | `string`                                                                 | -               | Key by which the list will be filtered. If not provided, will fall back to `itemText` or `itemValue`. |
| displayValue       | `(item: any) => string`                                                  | -               | A function to custom format the displayed value.                                                      |
| selectionItemProps | `InstanceType<typeof VBadge>['$props']`                                  | -               | Props for the selected item badge.                                                                    |
| readonly           | `boolean`                                                                | `false`         | If set to true, the component will be in readonly mode.                                               |
| shadow             | `boolean`                                                                | `false`         | If set to true, a shadow will be applied to the component.                                            |
| hint               | `string`                                                                 | -               | A hint message to be displayed below the component.                                                   |
| errorMessage       | `string`                                                                 | -               | Error message to be displayed when `error` is true.                                                   |
| hideError          | `boolean`                                                                | `false`         | If set to true, error message will be hidden even if `error` is true.                                 |

## Slots

| Slot Name      | Props Provided                                                    | Description                                      |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------ |
| default        | `{}`                                                              | Default slot for additional content.             |
| hint           | `{}`                                                              | Slot for custom hint message rendering.          |
| selection      | `{ selected, multiple, itemValue, itemText, selectionItemProps }` | Slot for custom selected items rendering.        |
| selection-item | `{ item, idx, itemValue, itemText, remove }`                      | Slot for custom rendering of each selected item. |
| item           | `{ item, active, selected, itemValue, itemText }`                 | Slot for custom rendering of each dropdown item. |

## Events

| Event Name          | Payload      | Description                                  |
| ------------------- | ------------ | -------------------------------------------- |
| `update:modelValue` | `ModelValue` | Emits the current selected value(s).         |
| `clear`             | -            | Emits when the selected value(s) is cleared. |

## Usage Example

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Autocomplete} from '@morpheme/autocomplete';

const selectedValue = ref();
const items = [
  {text: 'Option 1', value: 1},
  {text: 'Option 2', value: 2},
];
</script>

<template>
  <Autocomplete
    :items="items"
    v-model="selectedValue"
    label="Choose an option"
  />
</template>
```
