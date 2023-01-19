<script setup lang="ts">
const appConfig = useAppConfig();
const adminDrawer = useAdminDrawer();
</script>

<template>
  <VAppBar bordered class="justify-between">
    <div class="flex items-center">
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
    </div>
    <div class="flex items-center gap-2 xl:pr-2">
      <DarkModeSwitcher v-if="appConfig.darkMode" />
      <AdminNotification />
      <VMenus
        :label="appConfig.accountMenu.label"
        :items="appConfig.accountMenu.items"
        placement="bottom-end"
      >
        <VBtn fab text prefix-icon="ic:round-person" />
      </VMenus>
    </div>
  </VAppBar>
</template>
