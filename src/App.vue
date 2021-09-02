<script setup>
import {provide} from 'vue';
import {menus} from './utils/menus';

provide('menus', menus);
provide('appTitle', 'GITS');
provide('appSubtitle', 'UI Components');
provide('authUser', '');
provide('logoutPath', '');
</script>

<template>
  <router-view />
</template>

<style></style>
