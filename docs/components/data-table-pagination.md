# DataTablePagination

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {isOpen} from 'vue';

const page = ref(1);
</script>

<template>
  <VDataTablePagination v-model="page" :total-items="30" :items-per-page="10" />
</template>
```

<LivePreview src="components-datatablepagination--default" />

::: info
The `VDataTablePagination` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Rows per page slot

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

<LivePreview src="components-datatablepagination--rows-per-page-slot" />

### Meta slot

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

<LivePreview src="components-datatablepagination--meta-slot" />

## Props

| Name                                          | Type                                  | Default         |
| --------------------------------------------- | ------------------------------------- | --------------- |
| [`modelValue`](#modelValue)                   | `Number`                              | `1`             |
| [`totalItems`](#totalItems)                   | `Number`                              | `0`             |
| [`itemsPerPage`](#itemsPerPage)               | `Number`                              | `10`            |
| [`itemsPerPageOptions`](#itemsPerPageOptions) | `Array as PropType<number[]>`         | `[25, 50, 100]` |
| [`showingText`](#showingText)                 | `String`                              | `'Showing'`     |
| [`backgroundColor`](#backgroundColor)         | `String`                              | `''`            |
| [`dataText`](#dataText)                       | `String`                              | `'data'`        |
| [`fromText`](#fromText)                       | `String`                              | `'from'`        |
| [`pagination`](#pagination)                   | `Object as PropType<PaginationProps>` | `{}`            |

## Methods

None

## Events

### `update:modelValue`

```vue
<template>
  <VDataTablePagination @update:modelValue="handle" />
</template>
```

### `update:itemsPerPage`

```vue
<template>
  <VDataTablePagination @update:itemsPerPage="handle" />
</template>
```

### `update:perPage`

```vue
<template>
  <VDataTablePagination @update:perPage="handle" />
</template>
```

### `update:itemsPerPageOptions`

```vue
<template>
  <VDataTablePagination @update:itemsPerPageOptions="handle" />
</template>
```

## Slots

### `rowsPerPage`

```vue
<template>
  <VDataTablePagination>
    <template #rowsPerPage="{value, items}"> ... </template>
  </VDataTablePagination>
</template>
```

### `meta`

```vue
<template>
  <VDataTablePagination>
    <template #meta="{showingText, start, end, fromText, totalItems, dataText}">
      ...
    </template>
  </VDataTablePagination>
</template>
```

### `default`

```vue
<template>
  <VDataTablePagination> ... </VDataTablePagination>
</template>
```

## CSS Variables

None

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-datatablepagination--default).
