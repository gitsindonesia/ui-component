<script setup lang="ts">
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

const {data} = await useAsyncData(() => $api('/products'));
const products = computed(() => {
  return mapProducts((data.value as any).products)
});
</script>

<template>
  <StoreHero />
  <StoreCategories />
  <ProductGrid class="py-16" title="Recommendations" :products="products!" />
</template>
