# Morpheme Editor

Rich Text Editor Based on Vue 3 CKEditor.

## Installation

via npm

```
npm i @morpheme/editor
```

via yarn

```
yarn add @morpheme/editor
```

via pnpm

```
pnpm i @morpheme/editor
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VEditor from '@morpheme/editor';
import '@morpheme/editor/dist/style.css';

const content = ref('');
</script>

<template>
  <VEditor v-model="content" />
</template>
```

## Documentation

View `Editor` documentation [here](https://gits-ui.web.app/?path=/story/components-editor--default).

## License

MIT
