# GITS Tabs

Vue Tabs Component.

## Installation

npm

```
npm i @gits-id/tabs
```

yarn

```
yarn add @gits-id/tabs
```

pnpm

```
pnpm add @gits-id/tabs
```

## Usage

```vue
<script setup lang="ts">
// import component
import Tabs from '@gits-id/tabs';
// import styles
import '@gits-id/tabs/dist/style.css';

const items = ref([
  {
    text: 'Tab 1'
  }
  {,
    text: 'Tab 2'
  },
  {
    text: 'Tab 3'
  }
])

const selectedTab = ref(0)
</script>

<template>
  <Tabs v-model="selectedTab" :items="items" />
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-tabs--default).

## License

MIT
