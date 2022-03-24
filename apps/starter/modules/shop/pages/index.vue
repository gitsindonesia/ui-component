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
  <div class="text-4xl font-semibold mb-2 text-gray-800">
    Welcome to our shop!
  </div>
  <v-btn color="primary" text :to="{name: 'shop-products'}">
    View Products
  </v-btn>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: shop
</route>
