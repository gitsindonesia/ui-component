# NavDrawer

Navigation Drawer Component.

## Installation

Install with your own prefered package manager:

```
# with NPM
npm i @morpheme/nav-drawer

# Or with Yarn
yarn add @morpheme/nav-drawer

# Or with PNPM
pnpm i @morpheme/nav-drawer
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VNavDrawer from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';

const isOpen = ref(true);
</script>

<template>
  <VNavDrawer v-model="isOpen">
    <p>Hello World</p>
  </VNavDrawer>
</template>
```

## Documentation

View `VNavDrawer` documentation [here](https://gits-ui.web.app/?path=/story/components-nav-drawer--default).

## License

MIT
