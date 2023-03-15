# GITS Breadcrumbs Component

> Breadcrumbs Component

## Installation

npm

```
npm i @morpheme/breadcrumbs
```

yarn

```
yarn add @morpheme/breadcrumbs
```

pnpm

```
pnpm i @morpheme/breadcrumbs
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import Breadcrumbs from '@morpheme/breadcrumbs';

const items = ref([
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Users',
    to: '/users',
  },
]);
</script>

<template>
  <Breadcrumbs :items="items" />
</template>
```

## Documentation

View `Breadcrumbs` documentation [here](https://gits-ui.web.app/?path=/story/components-breadcrumbs--default).

## License

MIT
