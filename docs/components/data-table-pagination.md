# Data Table Pagination

The `VDataTablePagination` component is a pagination component for use with data table. It allows you to easily paginate through large data sets and customize the number of items displayed per page.

## Usage

## Basic Usage

To use the `VDataTablePagination` component in its most basic form, you can include it in your template and bind it to a page number variable using the `v-model` directive. You also need to specify the `total-items` prop, which is the total number of items in your data set, and the `items-per-page` prop, which is the number of items to display per page.

<LivePreview src="components-datatablepagination--default" >

```vue
<script setup lang="ts">
import {isOpen} from 'vue';

const page = ref(1);
</script>

<template>
  <VDataTablePagination v-model="page" :total-items="30" :items-per-page="10" />
</template>
```

</LivePreview>

::: info
The `VDataTablePagination` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Rows per page slot

You can customize the rows per page dropdown by using the rowsPerPage slot. The slot provides the `value` and `items` data properties, which correspond to the currently selected rows per page value and the available rows per page options, respectively.

<LivePreview src="components-datatablepagination--rows-per-page-slot" >

```vue
<template>
  <v-data-table-pagination>
    <template #rowsPerPage="{value, items}">
      <select :value="value">
        <option v-for="item in items" :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </template>
  </v-data-table-pagination>
</template>
```

</LivePreview>

## Meta slot

The meta slot allows you to customize the text displayed above the pagination controls. It provides several data properties including `showingText`, `start`, `end`, `fromText`, `totalItems`, and `dataText`.

<LivePreview src="components-datatablepagination--meta-slot" >

```vue
<template>
  <v-data-table-pagination>
    <template #meta="{showingText, start, end, fromText, totalItems, dataText}">
      {{ showingText }} {{ start }} to {{ end }} of {{ totalItems }}
      {{ dataText }}
    </template>
  </v-data-table-pagination>
</template>
```

</LivePreview>

## Props

| Name                                          | Type                              | Default         |
| --------------------------------------------- | --------------------------------- | --------------- |
| [`modelValue`](#modelValue)                   | `Number`                          | `1`             |
| [`totalItems`](#totalItems)                   | `Number`                          | `0`             |
| [`itemsPerPage`](#itemsPerPage)               | `Number`                          | `10`            |
| [`itemsPerPageOptions`](#itemsPerPageOptions) | `Array as PropType<number[]>`     | `[25, 50, 100]` |
| [`showingText`](#showingText)                 | `String`                          | `'Showing'`     |
| [`backgroundColor`](#backgroundColor)         | `String`                          | `''`            |
| [`dataText`](#dataText)                       | `String`                          | `'data'`        |
| [`fromText`](#fromText)                       | `String`                          | `'from'`        |
| [`pagination`](#pagination)                   | `Object as PropType<VPagination>` | `{}`            |
| [`itemsPerPageProps`](#itemsPerPageProps)     | `Object`                          | `{}`            |

## Events

## `update:modelValue`

The `update:modelValue` event is emitted by the `VDataTablePagination` component when the current page number is updated. This can occur when the user clicks on a page number in the pagination control or when the modelValue prop is changed programmatically.

```vue
<template>
  <VDataTablePagination @update:modelValue="handle" />
</template>
```

## `update:itemsPerPage`

The `update:itemsPerPage` event is emitted by the `VDataTablePagination` component when the number of items per page is updated. This can occur when the user selects a different value from the items per page dropdown or when the itemsPerPage prop is changed programmatically.

```vue
<template>
  <VDataTablePagination @update:itemsPerPage="handle" />
</template>
```

## `update:itemsPerPageOptions`

The `update:itemsPerPageOptions` event is emitted by the `VDataTablePagination` component when the `itemsPerPageOptions` prop is changed. This prop determines the options that are displayed in the items per page dropdown.

```vue
<template>
  <VDataTablePagination @update:itemsPerPageOptions="handle" />
</template>
```

## Slots

## `rowsPerPage`

The `rowsPerPage` slot is a scoped slot provided by the `VDataTablePagination` component that allows you to customize the rows per page dropdown. The `value` prop contains the current value of the rows per page and the `items` prop contains the available options for the rows per page dropdown. You can use this slot to customize the display or behavior of the rows per page dropdown.

```vue
<template>
  <VDataTablePagination>
    <template #rowsPerPage="{value, items}"> ... </template>
  </VDataTablePagination>
</template>
```

## `meta`

The `meta` slot is also a scoped slot provided by the `VDataTablePagination` component that allows you to customize the display of the pagination meta information. The `showingText` prop contains the text to display before the range of items being shown (e.g. "Showing"). The `start` prop contains the index of the first item being shown. The `end` prop contains the index of the last item being shown. The `fromText` prop contains the text to display between the range of items being shown and the total number of items (e.g. "of"). The `totalItems` prop contains the total number of items. The `dataText` prop contains the text to display after the total number of items (e.g. "items"). You can use this slot to customize the display of the pagination meta information.

```vue
<template>
  <VDataTablePagination>
    <template #meta="{showingText, start, end, fromText, totalItems, dataText}">
      ...
    </template>
  </VDataTablePagination>
</template>
```

## `default`

The `default` slot allows you to customize the default content of the `VDataTablePagination` component. This can be used to add additional pagination controls or to override the default pagination controls provided by the component.

```vue
<template>
  <VDataTablePagination> ... </VDataTablePagination>
</template>
```

## CSS Variables

None

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-datatablepagination--default).
