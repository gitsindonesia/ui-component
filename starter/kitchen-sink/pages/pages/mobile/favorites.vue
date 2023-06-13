<script setup lang="ts">
definePageMeta({
  layout: "mobile",
  bottomNavigation: true,
});
</script>

<template>
  <MobileAppBar> Favorites </MobileAppBar>

  <h1 class="font-semibold text-display-xs mb-1">Favorites</h1>
  <p class="mb-4 text-xs text-gray-500">{{ new Date().toLocaleString() }}</p>

  <article class="text-gray-600 text-sm space-y-3">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci similique
      iste architecto. Accusantium aliquam dolor ducimus dignissimos suscipit. Sequi quia
      suscipit ducimus soluta iste nulla dignissimos dolorum autem voluptatibus?
    </p>
  </article>
</template>
