<script setup lang="ts">
const appConfig = useAppConfig();

const adminDrawer = useAdminDrawer();
</script>

<template>
  <VAppBar bordered class="justify-between">
    <VBtn
      class="inline-flex xl:!hidden -ml-2"
      fab
      prefix-icon="ic:round-menu"
      text
      @click="adminDrawer = !adminDrawer"
    />
    <NuxtLink to="/admin" class="font-semibold">
      {{ appConfig.adminTitle }}
    </NuxtLink>
    <VDropdown
      :label="appConfig.accountMenuLabel"
      right
      :items="appConfig.accountMenus"
    />
  </VAppBar>
</template>
