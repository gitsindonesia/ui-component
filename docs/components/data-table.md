# DataTable

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {isOpen} from 'vue';
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

<LivePreview src="components-datatable--default" />

::: info
The `VDataTable` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Striped

```vue
<template>
  <VDataTable striped />
</template>
```

<LivePreview src="components-datatable--striped" />

### Hover

```vue
<template>
  <VDataTable hover />
</template>
```

<LivePreview src="components-datatable--hover" />

### Flat

```vue
<template>
  <VDataTable flat />
</template>
```

<LivePreview src="components-datatable--flat" />

### Bordered

```vue
<template>
  <VDataTable bordered />
</template>
```

<LivePreview src="components-datatable--bordered" />

### Tile

```vue
<template>
  <VDataTable tile />
</template>
```

<LivePreview src="components-datatable--tile" />

### Dense

```vue
<template>
  <VDataTable dense />
</template>
```

<LivePreview src="components-datatable--dense" />

### Loading

```vue
<template>
  <VDataTable loading />
</template>
```

<LivePreview src="components-datatable--loading" />

### Empty

```vue
<template>
  <VDataTable empty />
</template>
```

<LivePreview src="components-datatable--empty" />

### Must Sort

```vue
<template>
  <VDataTable must-sort />
</template>
```

<LivePreview src="components-datatable--must-sort" />

### Disable Sorting

```vue
<template>
  <VDataTable disable-sorting />
</template>
```

<LivePreview src="components-datatable--disable-sorting" />

### Custom Wrapper Class

```vue
<template>
  <VDataTable wrapper-class="border border-blue-500 shadow-blue-500" />
</template>
```

<LivePreview src="components-datatable--custom-wrapper-class" />

### Custom Class

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

<LivePreview src="components-datatable--custom-class" />

### Selectable

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selected = ref([]);
</script>

<template>
  <VDataTable v-model="selected" selectable />
</template>
```

<LivePreview src="components-datatable--selectable" />

### Sticky Column

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

<LivePreview src="components-datatable--sticky-column" />

### Server Side

```vue
<script setup lang="ts">
const headers = ref<VDataTableHeader[]>([
  {
    text: 'Image',
    value: 'image',
    sortable: false,
  },
  {
    text: 'Title',
    value: 'attributes.title',
  },
  {
    text: 'Published At',
    value: 'publishedAt',
  },
]);

const items = ref([]);
const page = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);
const loading = ref(false);

const API_URL = 'https://bapi.warsono.id';

const strapiUrl = (image: any) => API_URL + image?.data?.attributes?.url;

const toDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const fetchData = (
  params: {
    page?: number;
    itemsPerPage?: number;
  } = {},
) => {
  loading.value = true;

  const query = qs.stringify(
    {
      populate: 'image',
      pagination: {
        page: params.page || page.value,
        pageSize: params.itemsPerPage || itemsPerPage.value,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  fetch(`${API_URL}/api/articles?${query}`)
    .then((res) => res.json())
    .then((res) => {
      items.value = res.data;
      totalItems.value = res.meta.pagination.total;
      itemsPerPage.value = res.meta.pagination.pageSize;
      page.value = res.meta.pagination.page;
    })
    .finally(() => {
      loading.value = false;
    });
};

watch(page, (val) => {
  fetchData({
    page: val,
  });
});

watch(itemsPerPage, (val) => {
  fetchData({
    itemsPerPage: val,
  });
});

onMounted(() => {
  fetchData();
});
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
    <template #item.image="{item}">
      <img
        :src="strapiUrl(item.attributes.image)"
        width="50"
        height="50"
        class="max-w-full rounded shadow"
      />
    </template>
    <template #item.publishedAt="{item}">
      {{ toDate(item.attributes.publishedAt) }}
    </template>
  </VDataTable>
</template>
```

<LivePreview src="components-datatable--server-side" />

## Props

| Name                                          | Type                                    | Default                                       |
| --------------------------------------------- | --------------------------------------- | --------------------------------------------- |
| [`modelValue`](#modelValue)                   | `Array`                                 | `[]`                                          |
| [`value`](#value)                             | `Array`                                 | `[]`                                          |
| [`headers`](#headers)                         | `Array as PropType<VDataTableHeader[]>` | `[]`                                          |
| [`items`](#items)                             | `Array as PropType<VDataTableItem[]>`   | `[]`                                          |
| [`itemsPerPage`](#itemsPerPage)               | `Number`                                | `10`                                          |
| [`disableSorting`](#disableSorting)           | `Boolean`                               | `false`                                       |
| [`pagination`](#pagination)                   | `Object`                                | `{}`                                          |
| [`loading`](#loading)                         | `Boolean`                               | `false`                                       |
| [`search`](#search)                           | `String`                                | `''`                                          |
| [`searchBy`](#searchBy)                       | `[String, Array] as PropType<string>`   | `string[]`                                    |
| [`loadingText`](#loadingText)                 | `String`                                | `'Loading...'`                                |
| [`noDataText`](#noDataText)                   | `String`                                | `'Data tidak ditemukan'`                      |
| [`footerColor`](#footerColor)                 | `String`                                | `''`                                          |
| [`serverSide`](#serverSide)                   | `Boolean`                               | `false`                                       |
| [`sortBy`](#sortBy)                           | `String`                                | `''`                                          |
| [`sortDirection`](#sortDirection)             | `String as PropType<SortDirection>`     | `''`                                          |
| [`hover`](#hover)                             | `Boolean`                               | `false`                                       |
| [`striped`](#striped)                         | `Boolean`                               | `false`                                       |
| [`dense`](#dense)                             | `Boolean`                               | `false`                                       |
| [`hideFooter`](#hideFooter)                   | `Boolean`                               | `false`                                       |
| [`totalItems`](#totalItems)                   | `Number`                                | `0`                                           |
| [`page`](#page)                               | `Number`                                | `1`                                           |
| [`mustSort`](#mustSort)                       | `Boolean`                               | `false`                                       |
| [`noShadow`](#noShadow)                       | `Boolean`                               | `false`                                       |
| [`selectable`](#selectable)                   | `Boolean`                               | `false`                                       |
| [`headerClass`](#headerClass)                 | `String`                                | `'bg-gray-50'`                                |
| [`bodyClass`](#bodyClass)                     | `String`                                | `'bg-white'`                                  |
| [`footerClass`](#footerClass)                 | `String`                                | `''`                                          |
| [`columnActiveClass`](#columnActiveClass)     | `String`                                | `'text-primary-500 hover:text-primary-600'`   |
| [`columnInactiveClass`](#columnInactiveClass) | `String`                                | `'text-gray-600 hover:text-primary-500'`      |
| [`hoverClass`](#hoverClass)                   | `String`                                | `'transition duration-300 hover:bg-gray-100'` |
| [`stripedClass`](#stripedClass)               | `String`                                | `'even:bg-gray-100'`                          |
| [`tdClass`](#tdClass)                         | `String`                                | `''`                                          |
| [`trClass`](#trClass)                         | `String`                                | `''`                                          |
| [`wrapperClass`](#wrapperClass)               | `String`                                | `''`                                          |
| [`flat`](#flat)                               | `Boolean`                               | `false`                                       |
| [`roundedClass`](#roundedClass)               | `String`                                | `'sm:rounded-lg'`                             |
| [`bordered`](#bordered)                       | `Boolean`                               | `false`                                       |
| [`tile`](#tile)                               | `Boolean`                               | `false`                                       |

## Methods

None

## Events

- `(e: 'update:search', value: string): void;`
- `(e: 'update:sortBy', value: string): void;`
- `(e: 'update:sortDirection', value: SortDirection): void;`
- `(e: 'update:page', value: number): void;`
- `(e: 'update:itemsPerPage', value: number): void;`
- `(e: 'update:totalItems', value: number): void;`
- `(e: 'update:pagination', value: Record<string, any>): void;`
- `(e: 'page:change', value: number): void;`
- `(e: 'itemsPerPage:change', value: number): void;`
- `(e: 'pagination:change', value: Record<string, any>): void;`
- `(e: 'update:modelValue', value: any): void;`
- `(e: 'update:value', value: any): void;`
- `(e: 'sort', payload: {sortBy: string; direction: SortDirection}): void;`

## Slots

### `loading`

```vue
<template>
  <VDataTable>
    <template #loading>Loading...</template>
  </VDataTable>
</template>
```

### `header.selectable`

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

### `empty`

```vue
<template>
  <VDataTable>
    <template #empty> No Data </template>
  </VDataTable>
</template>
```

### `item.selected`

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

### `item.index`

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

### `item.{value}`

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

### `footer`

- Payload: `{pagination, perPage, serverSide, items, totalItems, footerColor, footerClass, page}`

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
```

## Manual Installation

You can also install the `DataTable` component individually via `@gits-id/table` package:

```bash
yarn install @gits-id/table
```

```vue
<script setup lang="ts">
import VDataTable from '@gits-id/table';
</script>

<template>
  <VDataTable />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-datatable--default).
