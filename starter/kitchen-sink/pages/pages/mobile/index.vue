<script setup lang="ts">
definePageMeta({
  layout: "mobile",
});
</script>

<template>
  <MobileHeader />

  <VText variant="display-xs" font-weight="semibold" class="mb-4">
    Informasi Terkini
  </VText>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <VCard v-for="i in 12" :key="i" to="/pages/mobile/detail">
      <template #image>
        <img
          src="/article-image.jpg"
          alt="article-image"
          class="h-40 object-cover rounded-lg"
        />
      </template>
      <h3 class="font-semibold text-lg">Title</h3>
      <p class="text-gray-600 text-sm">Description</p>
    </VCard>
  </div>

  <VBottomNavigation grow>
    <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
  </VBottomNavigation>
</template>
