# GITS UI - Bottom Sheet

Bottom Sheet Component.

## Installation

npm

```
npm i @gits-id/bottom-sheet
```

yarn

```
yarn add @gits-id/bottom-sheet
```

pnpm

```
pnpm i @gits-id/bottom-sheet
```

## Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {BottomSheet, BottomSheetBody} from '@gits-id/bottom-sheet';

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
