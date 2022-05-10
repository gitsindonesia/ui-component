# GITS Collapsible Component

> Collapsible Component

## Installation

npm

```
npm i @gits-id/collapsible
```

yarn

```
yarn add @gits-id/collapsible
```

pnpm

```
pnpm i @gits-id/collapsible
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import Collapsible from '@gits-id/collapsible';

const isOpen = ref(false);
</script>

<template>
  <Collapsible v-model="isOpen">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
    reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut
    consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi
    elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui.
    Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute
    aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est
    pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </Collapsible>
</template>
```

## Documentation

View `VCollapsible` documentation [here](https://gits-ui.web.app/?path=/story/components-collapsible--default).

## License

MIT
