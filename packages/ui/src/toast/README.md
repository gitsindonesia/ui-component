# Morpheme Toast

Vue Toast Component.

## Installation

npm

```
npm i @morpheme/toast
```

yarn

```
yarn add @morpheme/toast
```

pnpm

```
pnpm i @morpheme/toast
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VToast from '@morpheme/toast';
import '@morpheme/toast/dist/style.css';

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
