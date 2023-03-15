# Morpheme Bottom Sheet

Morpheme Bottom Sheet Component.

## Installation

npm

```
npm i @morpheme/bottom-sheet
```

yarn

```
yarn add @morpheme/bottom-sheet
```

pnpm

```
pnpm i @morpheme/bottom-sheet
```

## Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {BottomSheet, BottomSheetBody} from '@morpheme/bottom-sheet';

const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = !isOpen">Open Bottom Sheet</button>
  <BottomSheet v-model="isOpen">
    <BottomSheetBody>Hello World!</BottomSheetBody>
  </BottomSheet>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-bottom-sheet--default).

## License

MIT
