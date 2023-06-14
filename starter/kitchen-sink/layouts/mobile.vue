<script setup lang="ts">
const route = useRoute();

const isHome = computed(() => route.path === "/mobile");
</script>

<template>
  <VAppShell fluid :container-class="`px-5 pb-40 ${isHome ? 'pt-44' : 'pt-24'}`">
    <slot />

    <VBottomNavigation v-if="route.meta.bottomNavigation" grow>
      <VBottomNavigationItem to="/pages/mobile" icon="ri:home-line">
        Home
      </VBottomNavigationItem>
      <VBottomNavigationItem to="/pages/mobile/recents" icon="ri:history-line">
        Recents
      </VBottomNavigationItem>
      <VBottomNavigationItem to="/pages/mobile/favorites" icon="ri:heart-line">
        Favorites
      </VBottomNavigationItem>
      <VBottomNavigationItem to="/pages/mobile/nearby" icon="ri:map-pin-2-line">
        Nearby
      </VBottomNavigationItem>
      <VBottomNavigationItem to="/pages/mobile/account" icon="ri:user-line">
        Account
      </VBottomNavigationItem>
    </VBottomNavigation>
  </VAppShell>
</template>
