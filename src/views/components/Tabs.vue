<script setup>
import {ref} from 'vue';
import SshPre from 'simple-syntax-highlighter';

const breadcrumbs = ref([
  {
    to: '/cms',
    title: 'Dashboard',
  },
  {
    to: '/cms/components',
    title: 'Components',
  },
  {
    to: '/cms/components/tabs',
    title: 'v-tab',
  },
]);
</script>

<template>
  <h1 class="font-bold mb-1 text-xl text-blue-900">Tabs</h1>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="bg-white shadow-md rounded-md mb-4">
    <div class="border-b py-3 px-4 font-medium text-gray-600">Default</div>
    <div class="bg-white shadow-inner rounded-b-md">
      <!-- <div class="flex flex-col md:flex-row"> -->
      <v-tab> </v-tab>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped></style>
