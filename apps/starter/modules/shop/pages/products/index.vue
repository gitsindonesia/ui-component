<script setup>
import {ref, toRefs} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const {modelValue} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const value = ref('');
</script>

<template>
  <div class="text-4xl font-semibold mb-5 text-gray-800">Product Lists</div>
  <router-link
    v-for="i in 10"
    :key="i"
    :to="{name: 'shop-products-slug', params: {slug: i + 1}}"
    class="block px-4 py-3 border-t hover:bg-gray-100"
  >
    Product {{ i + 1 }}
  </router-link>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: shop
</route>
