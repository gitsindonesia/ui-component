# GITS Checkbox Component

> Reusable Checkbox Component

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
// import styles
import '@gits-id/checkbox/dist/style.css';
// import component
import VCheckbox from '@gits-id/checkbox';

const checkboxValue = ref(false);
</script>

<template>
  <VCheckbox v-model="checkboxValue" label="Choose" />
</template>
```

## Documentation

View `VCheckbox` documentation [here](https://gits-ui.web.app/?path=/story/components-checkbox--default).

## Licence

ISC
