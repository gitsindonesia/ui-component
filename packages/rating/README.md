# Vue Rating Component

Based on [vue-star-rating](https://github.com/craigh411/vue-star-rating) to work with Vite, Vue 3 and Nuxt 3.

## Installation

```bash
npm i @gits-id/rating
```

## Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Rating} from '@gits-id/rating';

const value = ref(0);
</script>

<template>
  <Rating v-model:rating="value" />

  <!-- half stars -->
  <Rating v-model:rating="value" :increment="0.5" />
</template>
```

## License

MIT
