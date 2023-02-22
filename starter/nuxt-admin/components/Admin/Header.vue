<script setup lang="ts">
const adminDrawer = useAdminDrawer();
</script>

<template>
  <VAppBar bordered class="justify-between md:!hidden">
    <NuxtLink to="/admin" class="font-semibold">
      <Logo />
    </NuxtLink>
    <VBtn
      class="inline-flex xl:!hidden -ml-2"
      fab
      text
      prefix-icon="ri:menu-2-line"
      @click="adminDrawer = !adminDrawer"
    />
  </VAppBar>
</template>
