# GITS Modal

Vue modal component. Based on `@headlessui/vue` dialog.

## Installation

npm

```
npm i @gits-id/modal
```

yarn

```
yarn add @gits-id/modal
```

pnpm

```
pnpm i @gits-id/modal
```

## Basic Usage

```vue
<script setup lang="ts">
import VModal from '@gits-id/modal';
import '@gits-id/modal/dist/style.css';
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
