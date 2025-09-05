<script setup lang="ts">
import NavDrawer from '../NavDrawer.vue';
</script>

<template>
  <NavDrawer color="indigo"> Custom </NavDrawer>
</template>

<style>
.nav-drawer-indigo {
  --nav-drawer-bg-color: theme('colors.indigo.600');
  --nav-drawer-text-color: theme('colors.white');
}
</style>
