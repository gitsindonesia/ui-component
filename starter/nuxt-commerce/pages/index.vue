<script setup lang="ts">
definePageMeta({
  layout: 'store',
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
  <div
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
  >
    <ProductCard
      v-for="product in data.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
