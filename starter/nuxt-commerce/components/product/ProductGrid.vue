<script setup lang="ts">
import {Product} from '~~/types/product';

defineProps<{
  title?: string;
  limit?: number
  products?: Product[]
}>()
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 v-if="title" class="text-2xl font-bold tracking-tight text-gray-900">
        {{ title }}
      </h2>

      <div
        class="
          mt-6
          grid grid-cols-1
          gap-y-10 gap-x-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          xl:gap-x-8
        "
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
