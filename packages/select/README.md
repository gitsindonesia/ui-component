# Vue Select

Vue Select Component.

## Installation

npm

```
npm i @morpheme/select
```

yarn

```
yarn add @morpheme/select
```

pnpm

```
pnpm add @morpheme/select
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VSelect from '@morpheme/select';
import '@morpheme/select/dist/style.css';

const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
]);
</script>

<template>
  <VSelect :items="items" />
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-select--default).

## License

MIT
