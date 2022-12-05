# GITS Toast

Vue Toast Component.

## Installation

npm

```
npm i @gits-id/toast
```

yarn

```
yarn add @gits-id/toast
```

pnpm

```
pnpm i @gits-id/toast
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VToast from '@gits-id/toast';
import '@gits-id/toast/dist/style.css';

const isOpen = ref(true)
</script>

<template>
  <button @click="isOpen = !isOpen">
    {{ isOpen ? 'Close' : 'Open' }} Toast
  </button>
  <VToast v-model="isOpen">
    Toast message
  </VToast>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-toast--default).

## License

MIT
