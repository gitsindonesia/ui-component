# NavDrawer

Navigation Drawer Component.

## Installation

Install with your own prefered package manager:

```
# with NPM
npm i @gits-id/nav-drawer

# Or with Yarn
yarn add @gits-id/nav-drawer

# Or with PNPM
pnpm i @gits-id/nav-drawer
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VNavDrawer from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';

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
