# GITS Autocomplete Component

Autocomplete Component.

## Installation

npm

```bash
npm i @gits-id/autocomplete
```

yarn

```bash
yarn add @gits-id/autocomplete
```

pnpm

```bash
pnpm i @gits-id/autocomplete
```

## Usage

```html
<script setup lang="ts">
  import Autocomplete from '@gits-id/autocomplete';
  import {ref} from 'vue';

  const items = [
    {value: 1, text: 'Wade Cooper'},
    {value: 2, text: 'Arlene Mccoy'},
    {value: 3, text: 'Devon Webb'},
    {value: 4, text: 'Tom Cook'},
    {value: 5, text: 'Tanya Fox'},
    {value: 6, text: 'Hellen Schmidt'},
  ];

  const selected = ref();
</script>

<template>
  <Autocomplete v-model="selected" :items="items" />
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-autocomplete--default).

## License

MIT
