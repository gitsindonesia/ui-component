<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import {Menu} from '../Aside/Menus.vue';

const props =
  defineProps<{
    menus?: Menu[];
  }>();

const appConfig = useAppConfig();
const adminDrawer = useAdminDrawer();

const $breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = $breakpoints.smaller('sm'); // only smaller than lg

watchEffect(() => {
  adminDrawer.value = !isMobile.value;
});

const menus = props.menus || appConfig.admin.menus;
</script>

<template>
  <VNavDrawer
    v-model="adminDrawer"
    :fixed="isMobile"
    :overlay="isMobile"
    :close-on-overlay-click="isMobile"
    class="!shadow"
    :class="{'z-20': isMobile}"
    sticky
  >
    <AsideHeader />

    <VInput
      v-if="appConfig.admin.search.enable"
      wrapper-class="w-full px-4 mb-4 mt-2"
      placeholder="Search"
      prepend-icon="ri:search-line"
    />

    <AsideMenus :menus="menus" />

    <AdminAnnouncement v-bind="appConfig.admin.announcement" />

    <Separator class="mx-4 py-2" />
    <AsideAccount />
  </VNavDrawer>
</template>
