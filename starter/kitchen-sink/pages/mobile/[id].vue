<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <MobileAppBar with-back-button>Detail Informasi</MobileAppBar>

  <img
    src="/article-image.jpg"
    alt="article-image"
    class="h-96 w-full object-cover rounded-lg"
    :style="{
      viewTransitionName: `item-image-${id}`,
    }"
  />

  <h1
    class="font-semibold text-display-xs mb-1 mt-6"
    :style="{
      viewTransitionName: `item-title-${id}`,
    }"
  >
    Title
  </h1>
  <p class="mb-4 text-xs text-gray-500 dark:text-gray-true-500">
    {{ new Date().toLocaleString() }}
  </p>

  <article
    class="text-gray-600 dark:text-gray-true-200 text-sm space-y-3"
    :style="{
      viewTransitionName: `item-description-${id}`,
    }"
  >
    <p v-for="i in 3" :key="i">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci similique
      iste architecto. Accusantium aliquam dolor ducimus dignissimos suscipit. Sequi quia
      suscipit ducimus soluta iste nulla dignissimos dolorum autem voluptatibus?
    </p>
  </article>
</template>
