<script setup lang="ts">
const isOpen = ref(true);
</script>

<template>
  <PageHeader title="Bottom Navigation" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VBottomNavigation :fixed="false">
          <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
        </VBottomNavigation>
      </div>
    </VCard>

    <VCard title="Grow">
      <div>
        <VBottomNavigation grow :fixed="false">
          <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
        </VBottomNavigation>
      </div>
    </VCard>

    <VCard title="Default Active">
      <div>
        <VBottomNavigation :default-active="1" :fixed="false">
          <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
        </VBottomNavigation>
      </div>
    </VCard>

    <VCard title="Colors">
      <div>
        <VBottomNavigation
          v-for="color in colors"
          :key="color"
          :color="(color as any)"
          :fixed="false"
        >
          <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
        </VBottomNavigation>
      </div>
    </VCard>

    <VCard title="v-model">
      <div>
        <VBtn @click="isOpen = !isOpen">Toggle Navigation</VBtn>

        <VBottomNavigation v-model="isOpen" :fixed="false">
          <VBottomNavigationItem icon="ri:home-line"> Home </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:history-line"> Recents </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:heart-line"> Favorites </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:map-pin-2-line"> Nearby </VBottomNavigationItem>
          <VBottomNavigationItem icon="ri:user-line"> Account </VBottomNavigationItem>
        </VBottomNavigation>
      </div>
    </VCard>
  </div>
</template>
