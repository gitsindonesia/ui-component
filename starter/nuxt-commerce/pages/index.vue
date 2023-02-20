<script setup lang="ts">
definePageMeta({
  layout: 'store',
  auth: false
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
</script>

<template>
  <StoreHero />
  <StoreCategories />
  <ProductGrid class="py-16" title="Flash Sale" :limit="4" />
  <ProductGrid class="py-16" title="Recommendations" />
</template>
