<script setup lang="ts">
definePageMeta({
  layout: 'store',
});

const route = useRoute();
const id = route.params.id;
const {data: product} = useAsyncData(() => $api(`/products/${id}`));
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 mb-5 bg-white rounded-lg px-4 py-10"
  >
    <div>
      <img
        :src="product.images[0]"
        class="max-w-full rounded-lg object-contain w-auto"
      />
    </div>
    <div>
      <h1 class="text-4xl font-semibold">{{ product.title }}</h1>

      <div class="mt-4">
        <span class="underline mr-2">{{ product.rating }} </span>
        <span class="text-warning-500">{{ starRating(product.rating) }} </span>
      </div>

      <div class="font-semibold flex items-center gap-2 text-sm mt-4 text-3xl">
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

      <hr class="mt-5" />

      <div class="flex items-center my-5 gap-4">
        <div>Kuantitas</div>
        <VInput placeholder="Kuantitas" type="number" />
      </div>
      <div class="flex items-center gap-4">
        <VBtn
          size="lg"
          color="primary"
          outlined
          prefix-icon="ri:shopping-cart-2-line"
          >Masukan Keranjang</VBtn
        >
        <VBtn size="lg" color="primary">Beli Sekarang</VBtn>
      </div>
    </div>
  </div>

  <div class="space-y-5">
    <VCard title="Spesifikasi Produk">
      <div class="divide-y text-sm">
        <div class="flex gap-4 items-center py-2">
          <div class="text-gray-600 md:w-3/12">Negara Asal</div>
          <div>Indonesia</div>
        </div>
        <div class="flex gap-4 items-center py-2">
          <div class="text-gray-600 md:w-3/12">Masa Penyimpanan</div>
          <div>12 Bulan</div>
        </div>
        <div class="flex gap-4 items-center py-2">
          <div class="text-gray-600 md:w-3/12">Berat Produk</div>
          <div>100g</div>
        </div>
        <div class="flex gap-4 items-center py-2">
          <div class="text-gray-600 md:w-3/12">Stok</div>
          <div>789</div>
        </div>
        <div class="flex gap-4 items-center py-2">
          <div class="text-gray-600 md:w-3/12">Dikirim Dari</div>
          <div>Sumedang</div>
        </div>
      </div>
    </VCard>

    <VCard title="Description">
      <p class="text-sm text-gray-600">{{ product.description }}</p>
    </VCard>
  </div>
</template>
