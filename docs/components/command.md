---
outline: deep
---

# Command

The `VCommand` component provides a searchable command menu with options for selection. It utilizes several other components such as `VModal`, `Combobox`, and `VList` to create the desired functionality.

## Usage

### Basic Usage

To use the `VCommand` component, you can use it in your template as follows:

<LivePreview src="components-command--default">

```vue
<script setup lang="ts">
const isOpen = ref(false);
const selected = ref();
</script>

<template>
  <VCommand v-model="selected" />
  <pre>Selected: {{ selected }}</pre>
</template>
```

</LivePreview>

### With Button Trigger

To use the `VCommand` component, you can use it in your template as follows:

<LivePreview src="components-command--with-button-trigger">

```vue
<script setup lang="ts">
const isOpen = ref(false);
const selected = ref();
</script>

<template>
  <VBtn @click="isOpen = true">Open</VBtn>

  <VCommand v-model="isOpen" v-model:selected="selected" />

  <pre>Selected: {{ selected }}</pre>
</template>
```

</LivePreview>

## Props

| Name          | Type            | Description                                                                 | Default Value        |
| ------------- | --------------- | --------------------------------------------------------------------------- | -------------------- |
| `modelValue`  | `Boolean`       | A boolean value indicating whether the command menu is open or closed.      | `false`              |
| `selected`    | `CommandItem`   | The currently selected command item.                                        | `undefined`          |
| `items`       | `CommandItem[]` | An array of `CommandItem` objects representing the available command items. | `[]`                 |
| `placeholder` | `String`        | The placeholder text for the search input.                                  | `"Search..."`        |
| `icon`        | `String`        | The icon to be displayed in the search input.                               | `"ri:search-line"`   |
| `iconSize`    | `String`        | The size of the icon.                                                       | `undefined`          |
| `iconClass`   | `String`        | Additional CSS classes to be applied to the icon.                           | `undefined`          |
| `searchBy`    | `String`        | The property of `CommandItem` objects to search by.                         | `"text"`             |
| `emptyText`   | `String`        | The text to be displayed when no results are found.                         | `"No results found"` |

## Types

```ts
interface CommandItem extends Record<string, any> {
  value?: string;
  icon?: string;
  text?: string;
  label?: string;
  divider?: boolean;
  items?: CommandItem[];
}
```

## Events

| Name                | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `update:modelValue` | Emitted when the value of `modelValue` prop changes. |
| `update:selected`   | Emitted when the value of `selected` prop changes.   |

## Slots

| Name      | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| `icon`    | Use this slot to customize the icon displayed in the search input.                                 |
| `empty`   | Use this slot to customize the content displayed when no results are found.                        |
| Default   | Use this slot to customize the command items. The slot scope provides access to command item data. |
| `prepend` | Use this slot to prepend custom content before the command items.                                  |
| `append`  | Use this slot to append custom content after the command items.                                    |

## CSS Variables

None

## Standalone Installation

You can also install the `Command` component individually via `@morpheme/command` package:

```bash
npm i @morpheme/command
```

```vue
<script setup lang="ts">
import VCommand from '@morpheme/command';
</script>

<template>
  <VCommand />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-command--default).
