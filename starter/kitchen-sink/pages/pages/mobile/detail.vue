<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});
</script>

<template>
  <VAppBar fixed size="auto" shadow class="py-3 px-4">
    <div class="flex items-center gap-4">
      <VBtn to="/pages/mobile" prefix-icon="ri:arrow-left-line" fab icon />
      <VText variant="display-xs" font-weight="semibold"> Detail Informasi </VText>
    </div>
  </VAppBar>

  <img
    src="/article-image.jpg"
    alt="article-image"
    class="h-40 w-full object-cover rounded-lg"
  />

  <h1 class="font-semibold text-display-xs mb-1 mt-6">Title</h1>
  <p class="mb-4 text-xs text-gray-500">{{ new Date().toLocaleString() }}</p>

  <article class="text-gray-600 text-sm space-y-3">
    <p v-for="i in 3" :key="i">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci similique
      iste architecto. Accusantium aliquam dolor ducimus dignissimos suscipit. Sequi quia
      suscipit ducimus soluta iste nulla dignissimos dolorum autem voluptatibus?
    </p>
  </article>
</template>
