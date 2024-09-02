# Multi Select

Vue Multi Select Component.

## Installation

npm

```
npm i @morpheme/multi-select
```

yarn

```
yarn add @morpheme/multi-select
```

pnpm

```
pnpm i @morpheme/multi-select
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VMultiSelect from '@morpheme/multi-select';
import '@morpheme/multi-select/dist/style.css';

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

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-multi-select--default).

## License

MIT
