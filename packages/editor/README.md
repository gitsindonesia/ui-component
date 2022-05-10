# GITS Editor Component

Rich Text Editor Based on Vue 3 CKEditor

## Installation

via npm

```
npm i @gits-id/editor
```

via yarn

```
yarn add @gits-id/editor
```

via pnpm

```
pnpm i @gits-id/editor
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import Editor from '@gits-id/editor';

const content = ref('');
</script>

<template>
  <Editor v-model="content" />
</template>
```

## Documentation

View `Editor` documentation [here](https://gits-ui.web.app/?path=/story/components-editor--default).

## License

MIT
