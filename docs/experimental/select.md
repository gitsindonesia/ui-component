# Select

::: warning
Experimental
:::

## Introduction

The `Select` component A.K.A. `SelectMenu` provides a customizable and feature-rich dropdown selection interface, designed using the Vue composition API. It integrates the Headless UI components and provides additional customization, including multiple item selection, searching, custom icons, validation, and more.

## Storybook

<LivePreview src="experimental-select--docs" hide-nav />

## Props

| Prop                                                                | Type                                      | Default                              | Description                                      |
| ------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| `modelValue`                                                        | `T[] \| undefined`                        | -                                    | The current selected value(s) of the select box. |
| `items`                                                             | `T[]`                                     | `[]`                                 | An array of items that can be selected.          |
| `multiple`                                                          | `boolean`                                 | -                                    | Allow multiple selections.                       |
| `itemText`                                                          | `string`                                  | `'text'`                             | Property name of each item to display as text.   |
| `itemValue`                                                         | `string`                                  | `'value'`                            | Property name of each item to use as the value.  |
| `placeholder`                                                       | `string`                                  | `'Choose'`                           | Placeholder text for the select box.             |
| `label`                                                             | `string`                                  | -                                    | Label for the select box.                        |
| `transition`                                                        | `string`                                  | `'dropdown'`                         | Transition style for the dropdown.               |
| `clearable`                                                         | `boolean`                                 | -                                    | Allows clearing the selection.                   |
| `clearText`                                                         | `string`                                  | `'Clear'`                            | Text for the clear button.                       |
| `error`                                                             | `boolean`                                 | -                                    | Indicates an error in the selection.             |
| `hint`                                                              | `string`                                  | -                                    | Hint text.                                       |
| `errorMessage`                                                      | `string`                                  | -                                    | Error message display.                           |
| `hideError`                                                         | `boolean`                                 | `false`                              | Hide error message.                              |
| `shadow`                                                            | `boolean \| Shadow \| (string & {})`      | -                                    | Shadow styling for the dropdown.                 |
| `searchable`                                                        | `boolean`                                 | -                                    | Enable search function in the dropdown.          |
| `disabled`                                                          | `boolean`                                 | -                                    | Disable the select component.                    |
| `emptyText`                                                         | `string`                                  | `'No results.'`                      | No items/search results text.                    |
| `searchBy`                                                          | `string`                                  | -                                    | Property name to search by.                      |
| `selectionItemProps`                                                | `InstanceType<typeof VBadge>['$props']`   | -                                    | Selected item badge properties.                  |
| `displayValue`                                                      | `function`                                | -                                    | Function that returns display value of an item.  |
| `placement`                                                         | `Placement`                               | `'bottom'`                           | Dropdown placement related to the input.         |
| `offset`                                                            | `number`                                  | `8`                                  | Offset for the dropdown.                         |
| `shift`                                                             | `boolean \| number` \| `true`             | Dropdown shift value.                |
| `flip`                                                              | `boolean \| number`                       | `true`                               | Flip dropdown if it doesn't fit.                 |
| `searchPlacement`                                                   | `string`                                  | `'inside'`                           | Search input placement.                          |
| `searchPlaceholder`                                                 | `string`                                  | `'Search...'`                        | Search input placeholder.                        |
| `chips`                                                             | `boolean`                                 | -                                    | Display selected items as chips.                 |
| `icon`, `iconSize`, `iconClass`                                     | -                                         | `'sm'`                               | Select box icon properties.                      |
| `dropdownIcon`, `dropdownIconSize`, `dropdownIconClass`             | -                                         | `'heroicons:chevron-down'`, `'sm'`   | Dropdown icon properties.                        |
| `checkIcon`, `checkIconSize`, `checkIconClass`                      | -                                         | `'heroicons:check'`, `'sm'`          | Check icon properties.                           |
| `clearIcon`, `clearIconSize`, `clearIconClass`                      | -                                         | `'heroicons:x-mark'`, `'sm'`         | Clear icon properties.                           |
| `searchPrefixIcon`, `searchPrefixIconSize`, `searchPrefixIconClass` | -                                         | `'sm'`                               | Search prefix icon properties.                   |
| `searchSuffixIcon`, `searchSuffixIconSize`, `searchSuffixIconClass` | -                                         | `'sm'`                               | Search suffix icon properties.                   |
| `wrapperClass`                                                      | `string`                                  | -                                    | Extra classes for the select box wrapper.        |
| `selectedIconPlacement`                                             | `string`                                  | `'left'`                             | Icon position in selected item.                  |
| `by`                                                                | `string`                                  | -                                    | Sorting method for items.                        |
| `name`                                                              | `string`                                  | -                                    | Input name attribute.                            |
| `loading`                                                           | `boolean`                                 | -                                    | Show loading indicator.                          |
| `loadingIcon`, `loadingText`                                        | -                                         | `'ri:loader-5-fill'`, `'Loading...'` | Loading display properties.                      |
| `tooltip`                                                           | `InstanceType<typeof VTooltip>['$props']` | -                                    | Tooltip properties.                              |
| `selectedText`                                                      | `string`                                  | `'selected'`                         | Text for selected state.                         |
| `allowCustomValues`                                                 | `boolean`                                 | -                                    | Allow custom values.                             |

## Events

| Event Name          | Payload      | Description                                                                |
| ------------------- | ------------ | -------------------------------------------------------------------------- |
| `update:modelValue` | `ModelValue` | Emitted when the model value is updated. Useful for `v-model` integration. |
| `change`            | `ModelValue` | Emitted when a change to the value occurs.                                 |

## Slots

| Slot Name        | Props                                                                   | Description                                                         |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `default`        | `{modelValue, multiple, itemValue, itemText, selectionItemProps}`       | Default slot to customize the main content.                         |
| `button`         | `{open}`                                                                | Slot to customize the dropdown toggle button.                       |
| `selection-item` | `{item, idx, itemText, itemValue, remove, open}`                        | Customize the display of selected items.                            |
| `selected`       | `{modelValue, multiple, placeholder, itemText, itemValue, open}`        | Slot to customize the selected item display.                        |
| `item`           | `{item, active, selected, itemText, itemValue, open}`                   | Customize the items in the dropdown list.                           |
| `hint`           | `{hint}`                                                                | Slot for hint text customization.                                   |
| `error`          | `{error, errorMessage, hideError}`                                      | Slot for error display customization.                               |
| `selection`      | `{modelValue, multiple, itemValue, itemText, selectionItemProps, open}` | Customize the selected items list.                                  |
| `empty`          | `{items, emptyText, open}`                                              | Display when no items or results are available.                     |
| `item-text`      | `{item, itemText, itemValue, active, selected, open}`                   | Customize the text of items.                                        |
| `check-icon`     | `{selected, icon}`                                                      | Customize the check icon for selected items.                        |
| `new-item-text`  | `{item}`                                                                | Display for new custom items (when `allowCustomValues` is enabled). |

## Methods

| Method Name | Parameters | Description                                      |
| ----------- | ---------- | ------------------------------------------------ |
| `clear`     | None       | Clear the current value of the select component. |

## Types

```ts
type T = Record<string, any>;
type ModelValue = T | T[] | undefined;
type Shadow =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'inner'
  | 'none';

defineSlots<{
  default?: (props: {
    modelValue: ModelValue;
    multiple: boolean;
    itemValue: string;
    itemText: string;
    selectionItemProps: InstanceType<typeof VBadge>['$props'];
  }) => any;
  button?: (props: {open: boolean}) => any;
  'selection-item'?: (props: {
    item: T;
    idx: any;
    itemText: string;
    itemValue: string;
    remove: () => void;
    open: boolean;
  }) => any;
  selected?: (props: {
    modelValue: ModelValue;
    multiple?: boolean;
    placeholder?: string;
    itemText?: string;
    itemValue?: string;
    open: boolean;
  }) => any;
  item?: (props: {
    item: T;
    active: boolean;
    selected: boolean;
    itemText?: string;
    itemValue?: string;
    open: boolean;
  }) => any;
  hint?: (props: {hint?: string}) => any;
  error?: (props: {
    error?: boolean;
    errorMessage?: string;
    hideError?: boolean;
  }) => any;
  selection?: (props: {
    modelValue: ModelValue;
    multiple?: boolean;
    itemValue?: string;
    itemText?: string;
    selectionItemProps?: InstanceType<typeof VBadge>['$props'];
    open: boolean;
  }) => any;
  empty?: (props: {items: T[]; emptyText?: string; open: boolean}) => any;
  'item-text'?: (props: {
    item: T;
    itemText?: string;
    itemValue?: string;
    active: boolean;
    selected: boolean;
    open: boolean;
  }) => any;
  'check-icon'?: (props: {selected: boolean; icon: string}) => any;
  'new-item-text'?: (props: {item: T}) => any;
}>();
```

## Usage

Here's an example how to use the component:

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Select as SelectMenu} from '@morpheme/select';

const items = ref([
  {text: 'Item 1', value: 1},
  {text: 'Item 2', value: 2},
  {text: 'Item 3', value: 3},
]);

const selectedValue = ref();

const handleChange = (value) => {
  console.log('Changed value to:', value);
};
</script>

<template>
  <SelectMenu
    :items="items"
    v-model="selectedValue"
    placeholder="Select an item"
    label="Sample Label"
    @change="handleChange"
  >
    <template #item="{item, active, selected, open}">
      <!-- Custom item template -->
      <div :class="{'active-item': active, 'selected-item': selected}">
        {{ item.text }}
      </div>
    </template>

    <template #selected="{modelValue, open}">
      <!-- Custom selected display -->
      <div v-if="modelValue">You selected: {{ modelValue.text }}</div>
    </template>
  </SelectMenu>
</template>

<style scoped>
.active-item {
  background-color: lightblue;
}

.selected-item {
  font-weight: bold;
}
</style>
```
