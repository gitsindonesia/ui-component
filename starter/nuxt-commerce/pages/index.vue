<script setup lang="ts">
import {Product} from '~~/types/product';

definePageMeta({
  layout: 'store',
  auth: false,
});

useHead({
  title: 'Home',
  meta: [
    {
      key: 'description',
      name: 'description',
      content: 'Home page',
    },
  ],
});

const [{data: flashSale}, {data: recommendations}] = await Promise.all([
  useFetch<Product[]>('/api/products', {
    params: {
      limit: 4,
      type: 'flash-sale'
    },
  }),
  useFetch<Product[]>('/api/products'),
]);
</script>

<template>
  <StoreHero />
  <StoreCategories />
  <ProductGrid class="py-16" title="Flash Sale" :products="flashSale!" />
  <ProductGrid
    class="py-16"
    title="Recommendations"
    :products="recommendations!"
  />
</template>
