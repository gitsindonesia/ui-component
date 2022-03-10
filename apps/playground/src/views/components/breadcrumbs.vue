<script setup lang="ts">
const items = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Link',
    to: '/',
  },
  {
    title: 'Link',
    to: '/',
  },
];
</script>

<template>
  <v-breadcrumbs :items="items"> lorem </v-breadcrumbs>
  <v-breadcrumbs :items="items" divider="-"> lorem </v-breadcrumbs>
</template>
