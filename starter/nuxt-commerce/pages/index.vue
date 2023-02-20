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

const {data} = await useAsyncData(() => $api('/products'));
const products = computed(() => {
  return data.value.products.map<Product[]>((product) => ({
    id: product.id,
    name: product.title,
    href: product.id,
    price: product.price,
    imageSrc: product.thumbnail,
    imageAlt: product.name,
  }));
});
</script>

<template>
  <StoreHero />
  <StoreCategories />
  <ProductGrid class="py-16" title="Recommendations" :products="products!" />
</template>
