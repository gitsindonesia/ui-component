<script setup lang="ts">
import {Menu} from '../Aside/Menus.vue';

const props =
  defineProps<{
    menus?: Menu[];
  }>();

const appConfig = useAppConfig();
const adminDrawer = useAdminDrawer();

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
    :class="{'z-20 !w-10/12 sidebar': isMobile}"
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

<style>
.sidebar {
  height: 100vh;
  height: 100svh;
}
</style>
