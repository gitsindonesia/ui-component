<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});
</script>

<template>
  <MobileAppBar>Detail Informasi</MobileAppBar>

  <img
    src="/article-image.jpg"
    alt="article-image"
    class="h-40 w-full object-cover rounded-lg"
  />

  <h1 class="font-semibold text-display-xs mb-1 mt-6">Title</h1>
  <p class="mb-4 text-xs text-gray-500 dark:text-gray-true-500">
    {{ new Date().toLocaleString() }}
  </p>

  <article class="text-gray-600 dark:text-gray-true-200 text-sm space-y-3">
    <p v-for="i in 3" :key="i">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci similique
      iste architecto. Accusantium aliquam dolor ducimus dignissimos suscipit. Sequi quia
      suscipit ducimus soluta iste nulla dignissimos dolorum autem voluptatibus?
    </p>
  </article>
</template>
