# DataTable

The `VDataTable` component is used for displaying tabular data. Features include sorting, searching, pagination, and row selection.

## Usage

## Basic Usage

To use the `VDataTable` component, you will need to provide it with an array of items to display and an array of headers, which define the columns of the table.

Here is an example of basic usage of the `VDataTable` component:

<LivePreview src="components-datatable--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';
import type {VDataTableHeader} from '@gits-id/table';

const states = ['active', 'inactive'];

const items = [...Array(30)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}));

const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'ID',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'email',
    text: 'Email',
  },
]);
</script>

<template>
  <!-- VDataTable is registered globally -->
  <VDataTable :items="items" :headers="headers" />
</template>
```

</LivePreview>

::: info
The `VDataTable` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Striped

To create a striped table, you can use the `striped` prop:

<LivePreview src="components-datatable--striped" >

```vue
<template>
  <VDataTable striped />
</template>
```

</LivePreview>

This will add alternate background colors to each row of the table, giving it a striped appearance.

## Hover

To add a hover effect to the rows of the table, you can use the `hover` prop:

<LivePreview src="components-datatable--hover" >

```vue
<template>
  <VDataTable hover />
</template>
```

</LivePreview>

This will change the background color of the row when the mouse pointer is hovering over it.

## Flat

To remove the box shadow and border of the table, you can use the `flat` prop:

<LivePreview src="components-datatable--flat">

```vue
<template>
  <VDataTable flat />
</template>
```

</LivePreview>

## Bordered

To add a border around the table, you can use the `bordered` prop:

<LivePreview src="components-datatable--bordered" >

```vue
<template>
  <VDataTable bordered />
</template>
```

</LivePreview>

## Tile

To remove border radius of the table, you can use the `tile` prop:

<LivePreview src="components-datatable--tile" >

```vue
<template>
  <VDataTable tile />
</template>
```

</LivePreview>

## Dense

To make the rows of the table denser, you can use the `dense` prop:

<LivePreview src="components-datatable--dense" >

```vue
<template>
  <VDataTable dense />
</template>
```

</LivePreview>

## Loading

To display a loading state for the table, you can use the `loading` prop.
This will display a loading spinner and disable the table until the data is loaded.

<LivePreview src="components-datatable--loading" >

```vue
<template>
  <VDataTable loading />
</template>
```

</LivePreview>

## Empty

The `VDataTable` component can display an empty state when the items prop is an empty array. This can be useful if you want to inform the user that there are no data items to display in the table.

<LivePreview src="components-datatable--empty" >

```vue
<template>
  <VDataTable :items="[]" />
</template>
```

</LivePreview>

This will display a message indicating that the table is empty.

You can also customize the appearance and behavior of the empty state using the following props:

- `empty-text`: Customize the text displayed in the empty state.
- `empty-class`: Add a custom class to the empty state element.

For example, to customize the text displayed in the empty state and add a custom class, you can use the following code:

```vue
<template>
  <VDataTable
    :items="[]"
    empty-text="No data available"
    empty-class="text-red-500"
  />
</template>
```

This will display the empty state with the text "No data available" and the class "text-red-500" applied.

## Must Sort

To require that a column be sorted before the table can be displayed, you can use the `must-sort` prop:

<LivePreview src="components-datatable--must-sort" >

```vue
<template>
  <VDataTable must-sort />
</template>
```

</LivePreview>

## Disable Sorting

To disable sorting for the table, you can use the `disable-sorting` prop:

<LivePreview src="components-datatable--disable-sorting" >

```vue
<template>
  <VDataTable disable-sorting />
</template>
```

</LivePreview>

## Custom Wrapper Class

To add a custom class to the wrapper element of the table, you can use the `wrapper-class` prop:

<LivePreview src="components-datatable--custom-wrapper-class" >

```vue
<template>
  <VDataTable wrapper-class="border border-blue-500 shadow-blue-500" />
</template>
```

</LivePreview>

## Custom Class

To add custom classes to the various components of the table, you can use the following props:

- `header-class`: Add a custom class to the header element.
- `body-class`: Add a custom class to the body element.
- `footer-class`: Add a custom class to the footer element.
- `column-inactive-class`: Add a custom class to the inactive column elements.
- `hover-class`: Add a custom class to the hover state of the rows.
- `td-class`: Add a custom class to the cells.
- `tr-class`: Add a custom class to the rows.

For example, to add custom classes to the header, body, footer, and rows, you can use the following code:

```vue
<template>
  <VDataTable
    :headers="headers"
    :items="items"
    header-class="bg-blue-600"
    body-class="bg-gray-100"
    footer-class="bg-gray-100"
    column-inactive-class="text-blue-50 hover:text-blue-200"
    hover
    hover-class="transition duration-300 hover:bg-blue-500 hover:text-white"
    td-class="group-hover:text-white"
    tr-class="!hover:bg-gray-700 __TR__CLASS__"
  />
</template>
```

This will add the classes `bg-blue-600` to the header element, `bg-gray-100` to the body element, `bg-gray-100` to the footer element, `transition duration-300 hover:bg-blue-500 hover:text-white` to the hover state of the rows, `group-hover:text-white` to the cells, and `!hover:bg-gray-700 TR__CLASS` to the rows.

<LivePreview src="components-datatable--custom-class" />

## Selecting Rows in the DataTable

The `VDataTable` component provides the `selectable` prop that allows you to enable row selection in the table. When the `selectable` prop is set to `true`, a checkbox will be displayed in the first column of each row, and the user will be able to select multiple rows by clicking on the checkboxes.

To use row selection, you will need to bind the `v-model` directive to a variable that will store the selected rows. The selected rows will be stored as an array of objects, with each object representing a selected row.

For example, to enable row selection and bind the `v-model` directive to a `selected` variable, you can use the following code:

This will enable row selection and bind the selected variable to the `v-model` directive.

<LivePreview src="components-datatable--selectable" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref([]);
</script>

<template>
  <VDataTable v-model="selected" selectable />
</template>
```

</LivePreview>

## Freezing Columns in the DataTable

The `VDataTable` component allows you to freeze columns in place, so that they remain visible while the rest of the table is scrolled horizontally. This can be useful if you want to keep important columns, such as the first and last columns, visible at all times.

To freeze a column, you can use the `freeze` prop in the header object for that column. The `positionFreeze` prop can be used to specify whether the column should be frozen to the left or right side of the table.

<LivePreview src="components-datatable--sticky-column">

```vue
<script setup lang="ts">
const headers = ref<VDataTableHeader[]>([
  {
    value: 'index',
    text: 'ID',
    freeze: true,
    positionFreeze: 'left',
    sortable: false,
    align: 'center',
  },
  {
    value: 'name',
    text: 'First Name',
  },
  {
    value: 'name',
    text: 'Last Name',
  },
  {
    value: 'email',
    text: 'Email',
  },
  {
    value: 'age',
    text: 'Age',
  },
  {
    value: 'state',
    text: 'State',
  },
  {
    value: 'action',
    text: 'Action',
    freeze: true,
    positionFreeze: 'right',
    sortable: false,
    align: 'center',
  },
]);
</script>

<template>
  <VDataTable :headers="headers">
    <template #item.action> ... </template>
  </VDataTable>
</template>
```

</LivePreview>

This will freeze the first and last columns of the table, so that they remain visible while the rest of the table is scrolled horizontally.

## Server Side

This is an example of using a `server-side` data table in Vue.js. The data table is connected to a server-side API to retrieve data and handle pagination, sorting, and filtering.

The example includes a function to convert ratings to star icons and displays them in the table. It also displays thumbnail images and formats price values with the appropriate currency symbol.

<LivePreview src="components-datatable--server-side" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

function numberToStars(num: number) {
  num = Math.round(num * 2) / 2;
  const fullStars = Math.floor(num);
  const halfStar = num % 1 === 0.5 ? '½' : '';
  const emptyStars = 5 - fullStars - halfStar.length;
  return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
}

const headers = ref<VDataTableHeader[]>([
  {
    text: 'Image',
    value: 'thumbnail',
    sortable: false,
  },
  {
    text: 'Title',
    value: 'title',
  },
  {
    text: 'Price',
    value: 'price',
  },
  {
    text: 'Rating',
    value: 'rating',
    align: 'center',
  },
  {
    text: 'Stock',
    value: 'stock',
    align: 'center',
  },
]);

const items = ref([]);
const page = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);
const loading = ref(false);

const API_URL = 'https://dummyjson.com/products';

const fetchData = () => {
  loading.value = true;

  const skip = (page.value - 1) * itemsPerPage.value;

  const query = new URLSearchParams({
    limit: itemsPerPage.value.toString(),
    skip: skip.toString(),
  });

  fetch(`${API_URL}?${query}`)
    .then((res) => res.json())
    .then((res) => {
      items.value = res.products;
      totalItems.value = res.total;
    })
    .finally(() => {
      loading.value = false;
    });
};

watchEffect(fetchData);
</script>

<template>
  <VDataTable
    v-model:page="page"
    v-model:itemsPerPage="itemsPerPage"
    :headers="headers"
    :items="items"
    :total-items="totalItems"
    :loading="loading"
    server-side
  >
    <template #item.thumbnail="{item}">
      <img
        :src="item.thumbnail"
        width="50"
        height="50"
        class="max-w-full rounded shadow"
      />
    </template>
    <template #item.price="{item}">
      {{
        item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
      }}
    </template>
    <template #item.rating="{item}">
      {{ numberToStars(item.rating) }}
    </template>
  </VDataTable>
</template>
```

</LivePreview>

## Search

The `VDataTable` component allows for searching through its items by binding a search string to its `search` prop.

In this example, this is done by using the `VInput` component to create a search bar that updates the `search` prop of the `VDataTable` component whenever the user inputs a new search query. The `VDataTable` component then filters its items based on this search query.

<LivePreview src="components-datatable--search" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const search = ref('');
</script>

<template>
  <VInput
    v-model="search"
    placeholder="Search..."
    wrapper-class="mb-4"
    prepend-icon="ri:search-line"
  />
  <VDataTable v-model:search="search" />
</template>
```

</LivePreview>

## Props

| Name                                          | Type                                    | Default                  |
|-----------------------------------------------| --------------------------------------- | ------------------------ |
| [`modelValue`](#modelValue)                   | `Array`                                 | `[]`                     |
| [`value`](#value)                             | `Array`                                 | `[]`                     |
| [`headers`](#headers)                         | `Array as PropType<VDataTableHeader[]>` | `[]`                     |
| [`items`](#items)                             | `Array as PropType<VDataTableItem[]>`   | `[]`                     |
| [`itemsPerPage`](#itemsPerPage)               | `Number`                                | `10`                     |
| [`disableSorting`](#disableSorting)           | `Boolean`                               | `false`                  |
| [`pagination`](#pagination)                   | `Object`                                | `{}`                     |
| [`loading`](#loading)                         | `Boolean`                               | `false`                  |
| [`search`](#search)                           | `String`                                | `''`                     |
| [`searchBy`](#searchBy)                       | `[String, Array] as PropType<string>`   | `string[]`               |
| [`loadingText`](#loadingText)                 | `String`                                | `'Loading...'`           |
| [`noDataText`](#noDataText)                   | `String`                                | `'Data tidak ditemukan'` |
| [`footerColor`](#footerColor)                 | `String`                                | `''`                     |
| [`serverSide`](#serverSide)                   | `Boolean`                               | `false`                  |
| [`sortBy`](#sortBy)                           | `String`                                | `''`                     |
| [`sortDirection`](#sortDirection)             | `String as PropType<SortDirection>`     | `''`                     |
| [`hover`](#hover)                             | `Boolean`                               | `false`                  |
| [`striped`](#striped)                         | `Boolean`                               | `false`                  |
| [`dense`](#dense)                             | `Boolean`                               | `false`                  |
| [`hideFooter`](#hideFooter)                   | `Boolean`                               | `false`                  |
| [`totalItems`](#totalItems)                   | `Number`                                | `0`                      |
| [`page`](#page)                               | `Number`                                | `1`                      |
| [`mustSort`](#mustSort)                       | `Boolean`                               | `false`                  |
| [`multiSort`](#multiSort)                     | `Boolean`                               | `false`                  |
| [`noShadow`](#noShadow)                       | `Boolean`                               | `false`                  |
| [`selectable`](#selectable)                   | `Boolean`                               | `false`                  |
| [`headerClass`](#headerClass)                 | `String`                                | `''`                     |
| [`bodyClass`](#bodyClass)                     | `String`                                | `''`                     |
| [`footerClass`](#footerClass)                 | `String`                                | `''`                     |
| [`columnActiveClass`](#columnActiveClass)     | `String`                                | `''`                     |
| [`columnInactiveClass`](#columnInactiveClass) | `String`                                | `''`                     |
| [`hoverClass`](#hoverClass)                   | `String`                                | `''`                     |
| [`stripedClass`](#stripedClass)               | `String`                                | `''`                     |
| [`tdClass`](#tdClass)                         | `String`                                | `''`                     |
| [`trClass`](#trClass)                         | `String`                                | `''`                     |
| [`wrapperClass`](#wrapperClass)               | `String`                                | `''`                     |
| [`flat`](#flat)                               | `Boolean`                               | `false`                  |
| [`roundedClass`](#roundedClass)               | `String`                                | `''`                     |
| [`bordered`](#bordered)                       | `Boolean`                               | `false`                  |
| [`tile`](#tile)                               | `Boolean`                               | `false`                  |

## Events

## `update:search`

This event is emitted when the search string changes. The value parameter contains the new search string.

Type:

```ts
(e: 'update:search', value: string): void;
```

## `update:sortBy`

This event is emitted when the sortBy value changes. The value parameter contains the new sortBy value.

Type:

```ts
(e: 'update:sortBy', value: string): void;
```

## `update:sortDirection`

This event is emitted when the sortDirection value changes. The value parameter contains the new sortDirection value.

Type:

```ts
(e: 'update:sortDirection', value: SortDirection): void;
```

## `update:page`

This event is emitted when the page value changes. The value parameter contains the new page value.

Type:

```ts
(e: 'update:page', value: number): void;
```

## `update:itemsPerPage`

This event is emitted when the itemsPerPage value changes. The value parameter contains the new itemsPerPage value.

Type:

```ts
(e: 'update:itemsPerPage', value: number): void;
```

## `update:totalItems`

This event is emitted when the totalItems value changes. The value parameter contains the new totalItems value.

Type:

```ts
(e: 'update:totalItems', value: number): void;
```

## `update:pagination`

This event is emitted when any of the pagination values (page, items per page, or total items) change. The `value` parameter contains an object with the updated pagination values.

Type:

```ts
(e: 'update:pagination', value: Record<string, any>): void;
```

## `page:change`

This event is emitted when the page number changes. The `value` parameter contains the new page number.

Type:

```ts
(e: 'page:change', value: number): void;
```

## `itemsPerPage:change`

This event is emitted when the number of items per page changes. The `value` parameter contains the new number of items per page.

Type:

```ts
(e: 'itemsPerPage:change', value: number): void;
```

## `pagination:change`

This event is emitted when any of the pagination values (page, items per page, or total items) change. The `value` parameter contains an object with the updated pagination values.

Type:

```ts
(e: 'pagination:change', value: Record<string, any>): void;
```

## `update:modelValue`

This event is emitted when the value of the `v-model` directive changes. The `value` parameter contains the new value.

Type:

```ts
(e: 'update:modelValue', value: any): void;
```

## `sort`

The `sort` event is emitted when the user sorts a table by a particular column. The payload for this event includes the name of the column that the table is being sorted by (`sortBy`) and the direction of the sort (`direction`).

Type:

```ts
(e: 'sort', payload: {sortBy: string; direction: SortDirection}): void;
```

## `row:click`

The `row:click` event is emitted when the user clicks on a row in the table. The payload for this event includes the data for the clicked row (`item`) and the index of the row in the table (`index`).

Type:

```ts
(e: 'row:click', payload: {item: VDataTableItem; index: number}): void;
```

## Slots

## `loading`

The `loading` slot allows you to customize the content shown when the table is loading data.

```vue
<template>
  <VDataTable>
    <template #loading>Loading...</template>
  </VDataTable>
</template>
```

## `header.selectable`

The `header.selectable` slot allows you to customize the content of the selectable column in the table header. It receives a `selectAll` payload that indicates whether all rows are currently selected.

- Payload: `{selectAll}`

```vue
<template>
  <VDataTable>
    <template #header.selectable="{selectAll}">
      <v-checkbox v-model="selectAll" />
    </template>
  </VDataTable>
</template>
```

## `empty`

The `empty` slot allows you to customize the content shown when the table has no data.

```vue
<template>
  <VDataTable>
    <template #empty> No Data </template>
  </VDataTable>
</template>
```

## `item.selected`

The `item.selected` slot allows you to customize the content of the selected column for each row in the table. It receives a `selected` payload that indicates whether the current row is selected.

- Payload: `{selected}`

```vue
<template>
  <VDataTable>
    <template #item.selected="selected">
      <v-swicth v-model="selected" />
    </template>
  </VDataTable>
</template>
```

## `item.index`

The `item.index` slot allows you to customize the content of the index column for each row in the table. It receives an `index` payload that indicates the index of the current row.

- Payload: `{item, index}`

```vue
<template>
  <VDataTable>
    <template #item.index="{index}">
      {{ index }}
    </template>
  </VDataTable>
</template>
```

## `item.{value}`

The `item.{value}` slot allows you to customize the content of a particular column for each row in the table. The value in the slot name corresponds to the name of the column. It receives an `item` payload that contains the data for the current row and an `index` payload that indicates the index of the current row.

- Payload: `{item, index}`

```vue
<template>
  <VDataTable>
    <template #item.id="{item}">
      {{ item.id }}
    </template>
    <template #item.fullName="{item}">
      {{ item.firstName }} {{ item.lastName }}
    </template>
    <template #item.website="{item}">
      <Link :to="item.website"> {{ item.website }} </Link>
    </template>
  </VDataTable>
</template>
```

## `footer`

The `footer` slot allows you to customize the content of the table footer. It receives a `pagination` payload that indicates whether pagination is enabled, a `perPage` payload that indicates the number of items per page, a `serverSide` payload that indicates whether the table is using server-side data, an `items` payload that contains the data for the current page, a `totalItems` payload that indicates the total number of items in the table, a `footerColor` payload that indicates the color of the footer, a `footerClass` payload that indicates the class of the footer, and a `page` payload that indicates the current page.

- Payload:

```ts
{
  pagination,
    perPage,
    serverSide,
    items,
    totalItems,
    footerColor,
    footerClass,
    page;
}
```

Example:

```vue
<template>
  <VDataTable>
    <template #footer="{page}">
      <VPagination v-model="page" />
    </template>
  </VDataTable>
</template>
```

## CSS Variables

```css
:root {
  /* spacing */
  --v-table-padding-x: theme('spacing.6');
  --v-table-padding-y: theme('spacing.3');

  /* thead */
  --v-table-thead-bg-color: theme('colors.gray.50');

  /* th */
  --v-table-th-color: theme('colors.gray.800');
  --v-table-th-font-size: theme('fontSize.sm');
  --v-table-th-font-weight: theme('fontWeight.semibold');
  --v-table-th-white-space: nowrap;
  --v-table-th-text-align: left;

  /* th active */
  --v-table-th-active-color: theme('colors.primary.500');

  /* th active hover */
  --v-table-th-active-hover-color: theme('colors.primary.600');

  /* td */
  --v-table-td-color: theme('colors.gray.800');
  --v-table-td-bg-color: theme('colors.white');
  --v-table-td-font-size: theme('fontSize.sm');
  --v-table-td-font-weight: theme('fontWeight.normal');
  --v-table-td-white-space: nowrap;
  --v-table-td-text-align: left;

  /* dense */
  --v-table-dense-padding-x: theme('spacing.4');
  --v-table-dense-padding-y: theme('spacing.2');

  /* striped */
  --v-table-striped-bg-color: theme('colors.gray.100');

  /* hover */
  --v-table-hover-bg-color: theme('colors.gray.100');
}
```

## Manual Installation

You can also install the `DataTable` component individually via `@gits-id/table` package:

```bash
npm i @gits-id/table
```

```vue
<script setup lang="ts">
import VDataTable from '@gits-id/table';
import '@gits-id/table/dist/style.css';
// or load SCSS styles
// import '@gits-id/table/src/VDataTable.scss';
</script>

<template>
  <VDataTable />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-datatable--default).
