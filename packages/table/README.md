# DataTable

DataTable component.

## Installation

npm

```
npm i @gits-id/table
```

yarn

```
yarn add @gits-id/table
```

pnpm

```
pnpm add @gits-id/table
```

## Usage

```vue
<script setup lang="ts">
import VDataTable from '@gits-id/table';
import '@gits-id/table/dist/style.css';

const states = ['active', 'inactive'];

const items = [...Array(30)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}));

const headers = [
  {
    value: 'index',
    text: 'No.',
  },
  {
    value: 'name',
    text: 'Name',
  },
  {
    value: 'email',
    text: 'Email',
  },
];
</script>

<template>
  <VDataTable :items="items" :headers="headers" />
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-table--default).

## License

MIT
