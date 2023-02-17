<script setup lang="ts">
export interface Product {
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
}

defineProps<{
  product: Product;
}>();
</script>

<template>
  <VCard :title="product.title" :to="`/products/${product.id}`">
    <template #image>
      <img
        :src="product.images[0]"
        class="rounded-t-lg object-cover h-[200px] border-b"
        :alt="product.title"
      />
    </template>
    <div class="font-semibold flex items-center gap-2 text-sm">
      <span class="line-through text-gray-600">
        {{ toCurrency(product.price) }}
      </span>
      <span class="text-primary-500">
        {{
          toCurrency(
            getDiscountedPrice(product.price, product.discountPercentage),
          )
        }}
      </span>
    </div>
    <div class="mt-2 text-warning-500">{{ starRating(product.rating) }}</div>
  </VCard>
</template>
