<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const appConfig = useAppConfig();
const adminDrawer = useAdminDrawer();

const $breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = $breakpoints.smaller('sm'); // only smaller than lg

watchEffect(() => {
  adminDrawer.value = !isMobile.value;
});
</script>

<template>
  <VNavDrawer
    v-model="adminDrawer"
    :fixed="isMobile"
    :shadow="isMobile"
    :overlay="isMobile"
    :close-on-overlay-click="isMobile"
    :class="{'z-20': isMobile}"
  >
    <VList hover class="flex-1">
      <template v-for="menu in appConfig.menus" :key="menu.text">
        <VListItemHeader v-if="menu.header">{{ menu.header }}</VListItemHeader>
        <VListItem v-else :to="menu.to" :prepend-icon="menu.icon">
          {{ menu.text }}
        </VListItem>
      </template>
    </VList>
  </VNavDrawer>
</template>
