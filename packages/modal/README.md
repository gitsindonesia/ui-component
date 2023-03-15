# GITS Modal

Vue modal component. Based on `@headlessui/vue` dialog.

## Installation

npm

```
npm i @morpheme/modal
```

yarn

```
yarn add @morpheme/modal
```

pnpm

```
pnpm i @morpheme/modal
```

## Basic Usage

```vue
<script setup lang="ts">
import VModal from '@morpheme/modal';
import '@morpheme/modal/dist/style.css';
</script>

<template>
  <VModal>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>

    Lorem ipsum dolor sit amet
  </VModal>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-modal--default).

## License

MIT
