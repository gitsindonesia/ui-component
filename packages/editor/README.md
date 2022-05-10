# GITS Editor Component

> Based on Vue 3 CKEditor

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
import VEditor from '@gits-id/editor';
// import editor styles
import '@gits-id/editor/dist/style.css';

const content = ref('');
</script>

<v-editor v-model="content"></v-editor>
```

## Documentation

View `VEditor` documentation [here](https://gits-ui.web.app/?path=/story/components-editor--default).

## License

MIT
