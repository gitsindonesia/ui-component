<script setup lang="ts">
const appConfig = useAppConfig();
const adminDrawer = useAdminDrawer();
</script>

<template>
  <VAppBar bordered class="justify-between">
    <VBtn
      class="inline-flex xl:!hidden -ml-2"
      fab
      text
      prefix-icon="ic:round-menu"
      @click="adminDrawer = !adminDrawer"
    />
    <NuxtLink to="/admin" class="font-semibold">
      {{ appConfig.adminTitle }}
    </NuxtLink>
    <div class="flex items-center gap-2 xl:pr-2">
      <AdminNotification />
      <VDropdown
        :label="appConfig.accountMenuLabel"
        :items="appConfig.accountMenus"
        right
      />
    </div>
  </VAppBar>
</template>
