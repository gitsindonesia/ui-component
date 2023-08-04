# Morpheme Primivites

Completely unstyled Vue component library.

## Installation

Install with your prefered package manager:

With NPM:

```bash
npm i @morpheme/primivites
```

With Yarn:

```bash
yarn add @morpheme/primivites
```

With PNPM:

```bash
pnpm add @morpheme/primivites
```

## Quick Usage

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
</script>

<template>
  <transition name="fade">
    <Alert
      v-bind="args"
      v-slot="{hide}"
      class="bg-red-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
    >
      This is the title

      <button @click="hide">Close</button>
    </Alert>
  </transition>
</template>
```

## Documentation

View full documentation [here](https://gitsindonesia.github.io/ui-component/)

## License

MIT
