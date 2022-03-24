<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    title: 'Dashboard',
    to: '/cms',
  },
]);

const stats = ref([
  {
    title: 'Users',
    value: 10,
    icon: 'users',
    color: 'primary',
  },
  {
    title: 'Posts',
    value: 30,
    icon: 'book-open',
    color: 'success',
  },
  {
    title: 'Comments',
    value: 100,
    icon: 'file-text',
    color: 'warning',
  },
  {
    title: 'Views',
    value: 1000,
    icon: 'bar-chart',
    color: 'error',
    progress: '5%',
    up: true,
  },
]);
</script>

<template>
  <page-header title="Dashboard" :breadcrumbs="breadcrumbs" />

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
    <v-stats v-for="item in stats" :key="item.title" v-bind="item" />
  </div>

  <v-card title="Welcome" class="mb-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
    consequuntur assumenda et recusandae suscipit cum at blanditiis, dolorum,
    porro ipsam temporibus fugit, est asperiores voluptates vitae. Voluptatum,
    at veniam. Sapiente.
  </v-card>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
  auth: true
</route>
