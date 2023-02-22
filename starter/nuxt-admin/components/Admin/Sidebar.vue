<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import {Menu} from '../Aside/Menus.vue';

const adminDrawer = useAdminDrawer();

const $breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = $breakpoints.smaller('sm'); // only smaller than lg

watchEffect(() => {
  adminDrawer.value = !isMobile.value;
});

const menus = shallowRef<Menu[]>([
  {
    text: 'Dashboard',
    to: '/admin',
    prependIcon: 'ic:baseline-insert-chart-outlined',
  },
  {
    text: 'Projects',
    to: '/admin/projects',
    prependIcon: 'ic:baseline-assignment',
  },
]);
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
      wrapper-class="w-full px-4 mb-4"
      placeholder="Search"
      prepend-icon="ri:search-line"
    />

    <AsideMenus :menus="menus" />

    <AdminNewFeaturesInfo />

    <Separator class="mx-4 py-2" />

    <AsideAccount />
  </VNavDrawer>
</template>
