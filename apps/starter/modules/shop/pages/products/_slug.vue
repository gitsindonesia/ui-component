<script setup>
import {ref, toRefs} from 'vue';

const props = defineProps({
  slug: {
    type: String,
    default: '',
  },
});

const {slug} = toRefs(props);

const emit = defineEmits(['update:slug']);

const value = ref('');
</script>

<template>
  <div class="text-4xl font-semibold mb-5 text-gray-800">
    You are viewing product with slug/ID: {{ slug }}
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: shop
</route>
