# GITS Checkbox Component

> Checkbox Component

## Installation

npm

```
npm i @gits-id/checkbox
```

yarn

```
yarn add @gits-id/checkbox
```

pnpm

```
pnpm i @gits-id/checkbox
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import VCheckbox from '@gits-id/checkbox';

const checkboxValue = ref(false);
</script>

<template>
  <VCheckbox v-model="checkboxValue" label="Choose" />
</template>
```

## Documentation

View `VCheckbox` documentation [here](https://gits-ui.web.app/?path=/story/components-checkbox--default).

## License

MIT
