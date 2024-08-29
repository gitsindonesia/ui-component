<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" :href="product.href" class="group">
    <div
      class="
        aspect-w-1 aspect-h-1
        w-full
        overflow-hidden
        rounded-lg
        bg-gray-200
        xl:aspect-w-7 xl:aspect-h-8
      "
    >
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt || product.name"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ product.price }}
    </p>
  </NuxtLink>
</template>
