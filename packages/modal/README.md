# GITS Modal Component

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

```html
<script setup lang="ts">
  import Modal from '@gits-id/modal';
</script>

<template>
  <Modal>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>

    Lorem ipsum dolor sit amet
  </Modal>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-modal--default).

## License

MIT
