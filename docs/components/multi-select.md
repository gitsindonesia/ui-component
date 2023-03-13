---
outline: deep
---

# Multi Select

The `VMultiSelect` component is a customizable multiselect dropdown for Vue. It allows users to select multiple items from a list and displays the selected items in the form of badges.

## Usage

### Basic Usage

To use the `VMultiSelect` component, just use it in the template.

<LivePreview src="forms-multiselect--default">

```vue
<script setup lang="ts">
const items = [
  {
    value: 1,
    text: 'Option 1',
  },
  {
    value: 2,
    text: 'Option 2',
  },
];
</script>

<template>
  <!-- VMultiSelect is registered globally -->
  <VMultiSelect :items="items" />
</template>
```

</LivePreview>

::: info
The `VMultiSelect` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Clearable

To enable the clearable feature, which allows users to clear their selections, add the `clearable` prop to the `VMultiSelect` component.

<LivePreview src="forms-multiselect--clearable" >

```vue
<template>
  <VMultiSelect :items="items" clearable />
</template>
```

</LivePreview>

### Max Badge

To limit the number of badges displayed, you can use the `max-badge` prop. This prop specifies the maximum number of badges that will be displayed before a "and X more" badge is shown.

<LivePreview src="forms-multiselect--max-badge" >

```vue
<template>
  <VMultiSelect :items="items" :max-badge="3" />
</template>
```

</LivePreview>

### Label

You can add a label to the `VMultiSelect` component by using the `label` prop.

<LivePreview src="forms-multiselect--label" >

```vue
<template>
  <VMultiSelect :items="items" label="My Label" />
</template>
```

</LivePreview>

### Custom Style

You can customize the style of the `VMultiSelect` component using various props.

<LivePreview src="forms-multiselect--custom-style" >

```vue
<template>
  <VMultiSelect
    :items="items"
    wrapper-class="!rounded-full !border-orange-500 focus-within:!border-orange-600"
    input-class="!italic"
    dropdown-class="bg-black/50"
    item-class="bg-black/50 text-white hover:bg-warning-500 hover:text-white"
    badge-color="warning"
    check-wrapper-class="text-orange-500"
  />
</template>
```

</LivePreview>

### Initial Errors

You can display initial errors for the `VMultiSelect` component by using the `initialErrors` prop in the `useForm` hook.

<LivePreview src="forms-multiselect--initial-errors" >

```vue
<script setup lang="ts">
const schema = object({
  genre: array().required().min(1).label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialErrors: {
    genre: 'Genre is required',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genres = ref([
  {
    text: 'Pop',
    value: 'pop',
  },
  {
    text: 'Rock',
    value: 'rock',
  },
  {
    text: 'Jazz',
    value: 'jazz',
  },
  {
    text: 'Alternative',
    value: 'alternative',
  },
]);
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VMultiSelect
      name="genre"
      label="Genre"
      placeholder="Choose your prefered genres"
      :items="genres"
    />
    <div class="mt-4 space-x-2">
      <v-btn type="submit" color="primary">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

### Custom Compare Function

You can use a custom compare function for the search feature of the `VMultiSelect` component by using the `search-by` prop.

<LivePreview src="forms-multiselect--initial-errors" >

```vue
<script setup lang="ts">
const schema = object({
  genre: array().required().min(1).label('Genre'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const genres = ref([
  {
    name: 'Pop',
    id: 1,
  },
  {
    name: 'Rock',
    id: 2,
  },
  {
    name: 'Jazz',
    id: 3,
  },
  {
    name: 'Alternative',
    id: 4,
  },
]);

const compareGenres = (item: VMultiSelectItem, query: string) => {
  return (
    +item.id === +query || item.name.toLowerCase().includes(query.toLowerCase())
  );
};
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-multi-select
      name="genre"
      label="Genre"
      placeholder="Search by id. Ex: 1, 2, 3, 4"
      :items="genres"
      item-text="name"
      item-value="key"
      :search-by="compareGenres"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

## Props

| Name                                      | Type                                      | Default                         |
| ----------------------------------------- | ----------------------------------------- | ------------------------------- |
| [`items`](#items)                         | `Array as PropType<VMultiSelectItem[]>`   | `[]`                            |
| [`itemText`](#itemText)                   | `string`                                  | `'text'`                        |
| [`itemValue`](#confirm)                   | `string`                                  | `value`                         |
| [`searchBy`](#searchBy)                   | `string`                                  | `''`                            |
| [`placeholder`](#placeholder)             | `string`                                  | `'Search...'`                   |
| [`name`](#name)                           | `string`                                  | `''`                            |
| [`error`](#error)                         | `boolean`                                 | `false`                         |
| [`errorMessages`](#errorMessages)         | `Array`                                   | `'[]'`                          |
| [`clearable`](#clearable)                 | `boolean`                                 | `'false'`                       |
| [`disabled`](#clearable)                  | `boolean`                                 | `'false'`                       |
| [`readonly`](#clearable)                  | `boolean`                                 | `'false'`                       |
| [`maxBadge`](#maxBadge)                   | `number`                                  | `0`                             |
| [`delay`](#delay)                         | `number`                                  | `'500'`                         |
| [`id`](#id)                               | `string`                                  | `''`                            |
| [`inputProps`](#inputProps)               | `Object as PropType<Record<string, any>>` | `'{}'`                          |
| [`selectAll`](#selectAll)                 | `boolean`                                 | `false`                         |
| [`loading`](#loading)                     | `boolean`                                 | `false`                         |
| [`wrapperClass`](#wrapperClass)           | `string`                                  | `''`                            |
| [`inputClass`](#inputClass)               | `string`                                  | `''`                            |
| [`badgeColor`](#badgeColor)               | `string`                                  | `'primary'`                     |
| [`badgeClass`](#badgeClass)               | `string`                                  | `''`                            |
| [`badgeProps`](#badgeProps)               | `object`                                  | `{}`                            |
| [`dropdownClass`](#dropdownClass)         | `string`                                  | `''`                            |
| [`itemClass`](#itemClass)                 | `string`                                  | `''`                            |
| [`checkWrapperClass`](#checkWrapperClass) | `string`                                  | `''`                            |
| [`checkIconClass`](#checkIconClass)       | `string`                                  | `''`                            |
| [`noDataClass`](#noDataClass)             | `string`                                  | `''`                            |
| [`loadingClass`](#loadingClass)           | `string`                                  | `''`                            |
| [`label`](#label)                         | `string`                                  | `''`                            |
| [`labelClass`](#labelClass)               | `string`                                  | `'mb-2 block'`                  |
| [`rules`](#rules)                         | `string`                                  | `''`                            |
| [`errorClass`](#errorClass)               | `string`                                  | `'text-error-600 mt-1 text-sm'` |
| [`transition`](#transition)               | `string`                                  | `'fade'`                        |
| [`hint`](#hint)                           | `String`                                  | `''`                            |
| [`hideError`](#hideError)                 | `Boolean`                                 | `false`                         |

## Events

### `click:outside`

This event is emitted when the user clicks outside of the `VMultiSelect` component. It can be useful for closing the dropdown menu when the user clicks outside of it.

```vue
<template>
  <VMultiSelect @click:outside="closeDropdown" />
</template>

<script>
export default {
  methods: {
    closeDropdown() {
      // Close the dropdown menu
    },
  },
};
</script>
```

### `update:modelValue`

This event is emitted when the selected values of the `VMultiSelect` component are updated. It is emitted with an array of the selected values.

```vue
<template>
  <VMultiSelect @update:modelValue="updateSelectedValues" />
</template>

<script>
export default {
  methods: {
    updateSelectedValues(values) {
      // values is an array of the selected values
    },
  },
};
</script>
```

### `search`

This event is emitted when the user performs a search in the `VMultiSelect` component. It is emitted with the search query string.

```vue
<template>
  <VMultiSelect @search="searchItems" />
</template>

<script>
export default {
  methods: {
    searchItems(query) {
      // query is the search query string
    },
  },
};
</script>
```

### `selected`

This event is emitted when the user selects an item from the `VMultiSelect` component. It is emitted with the selected item.

```vue
<template>
  <VMultiSelect @selected="itemSelected" />
</template>

<script>
export default {
  methods: {
    itemSelected(item) {
      // item is the selected item
    },
  },
};
</script>
```

### Slots

### selection

Allow customized selection rendering. Will only be run when there is selected value.
If [`maxBadge`](#maxBadge) is set to valid value, it will only be run for items within the set limit.

Slot Props

| Prop       | Value      | Description                          |
| ---------- | ---------- | ------------------------------------ |
| `index`    | `number`   | Index of the current selection       |
| `item`     | `any`      | Current selected item at given index |
| `value`    | `string`   | Label of selected item.              |
| `onRemove` | `function` | Callback to remove selected item     |

<LivePreview src="forms-multiselect--custom-selection">

```vue
<template>
  <v-multi-select>
    <template v-slot:selection="{index, value, onRemove}">
      <span class="font-bold" @click="onRemove">
        {{ index > 0 ? ',' : '' }}{{ value }}
      </span>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

### max-selection

Allows customized rendering for max-selection rendering. This will only be run if [`maxBadge`](#maxBadge) props is set to valid value.

Slot Props

| Prop     | Value    | Description                           |
| -------- | -------- | ------------------------------------- |
| `length` | `number` | Number of selected items being hidden |

<LivePreview src="forms-multiselect--custom-max-selection" >

```vue
<template>
  <v-multi-select :max-badge="2">
    <template v-slot:max-selection="{length}">
      <span>{{ length }} more (hover me)</span>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

### select-all

Allows custom render for select all option. This will only be run if [`selectAll`](#selectAll) props is set to valid value.

Slot Props

| Prop        | Value      | Description                                             |
| ----------- | ---------- | ------------------------------------------------------- |
| `iSelected` | `boolean`  | A flag to indicate if all options is currently selected |
| `onClick`   | `function` | Callback to toggle select all state                     |

<LivePreview src="forms-multiselect--custom-select-all" >

```vue
<template>
  <v-multi-select select-all>
    <template v-slot:select-all="{onClick, isSelected}">
      <div
        class="p-4 bg-white sticky left-0 top-0 hover:bg-[gainsboro] border-b-[1px] border-b-grey-500"
        style="z-index: 1;"
        @click="onClick"
      >
        {{ isSelected ? ' v ' : '' }}
        Select All
      </div>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

### prepend.item

Add custom element before option list

<LivePreview src="forms-multiselect--prepend-item" >

```vue
<template>
  <v-multi-select>
    <template #prepend.item>
      <div class="text-center italic py-4 px-2">
        What genre you often listen to? 🎵 🎧
      </div>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

### append.item

Add custom element after option list

<LivePreview src="forms-multiselect--append-item" >

```vue
<template>
  <v-multi-select>
    <template #append.item>
      <div class="text-center italic">🔥 This is appended to item list! 🔥</div>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

### item.label

Allows custom render for option item.

Slot Props

| Prop        | Value     | Description                                    |
| ----------- | --------- | ---------------------------------------------- |
| `index`     | `number`  | Index of the current selection                 |
| `item`      | `any`     | Current selected item at given index           |
| `value`     | `string`  | Label of selected item.                        |
| `iSelected` | `boolean` | A flag to indicate if it is currently selected |

<LivePreview src="forms-multiselect--custom-item-label" >

```vue
<template>
  <v-multi-select>
    <template v-slot:item.label="{item, index}">
      <div class="flex gap-4">
        <div>
          <img :src="item.picture" class="rounded-full w-[60px]" />
        </div>

        <div class="flex-1 overflow-hidden">
          <div class="font-bold text-gray-600">
            {{ item.name?.first }} {{ item.name?.last }}
          </div>
          <div class="text-sm text-gray-500">
            {{ item.email }}<br />
            {{ item.nat }}
          </div>
        </div>
      </div>
    </template>
  </v-multi-select>
</template>
```

</LivePreview>

## CSS Variables

```css
:root {
  --v-multi-select-border-color: var(--v-input-border-color);
  --v-multi-select-border-radius: var(--v-input-border-radius);
  --v-multi-select-bg-color: var(--v-input-bg-color);
  --v-multi-select-text-color: theme('colors.gray.800');
  --v-multi-select-height: auto;
  --v-multi-select-placeholder-color: var(--v-input-placeholder-color);
  --v-multi-select-border-radius: var(--v-input-border-radius);
  --v-multi-select-padding-x: var(--v-input-padding-x);
  --v-multi-select-padding-y: var(--v-input-padding-y);
  --v-multi-select-font-size: var(--v-input-font-size);

  /* item */
  --v-multi-select-item-font-size: theme('fontSize.base');
  --v-multi-select-item-font-weight: theme('fontWeight.normal');
  --v-multi-select-item-bg-color: theme('colors.white');
  --v-multi-select-item-text-color: theme('colors.gray.800');
  --v-multi-select-item-padding-x: theme('padding.3');
  --v-multi-select-item-padding-y: theme('padding.2');
  --v-multi-select-item-hover-bg-color: theme('colors.primary.500');
  --v-multi-select-item-hover-text-color: theme('colors.white');

  /* error */
  --v-multi-select-error-border-color: theme('colors.error.500');

  /* icon */
  --v-multi-select-icon-color: theme('colors.gray.500');
  --v-multi-select-check-icon-color: theme('colors.primary.500');

  /* dropdown */
  --v-multi-select-dropdown-bg-color: theme('colors.white');
  --v-multi-select-dropdown-border-radius: theme('borderRadius.md');
}
```

## Manual Installation

You can also install the `Multi Select` component individually via `@gits-id/multi-select` package:

```bash
npm i @gits-id/multi-select
```

Then, use it in your component:

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VMultiSelect from '@gits-id/multi-select';
import '@gits-id/multi-select/dist/style.css';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 2',
    value: 2,
  },
]);

const selected = ref();
</script>

<template>
  <VMultiSelect v-model="selected" :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-multiselect--default).
