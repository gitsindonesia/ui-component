<script setup lang="ts">
import {ref} from 'vue';
import {RouterLink, RouterView} from 'vue-router';

const comps = ['v-alert', 'v-app-bar', 'v-badge', 'v-breadcrumbs', 'v-btn'];

const menus = ref(
  comps.map((comp) => ({
    text: comp,
    to: `/components/${comp}`,
  })),
);
</script>

<template>
  <v-app-bar class="" hide-toggle>
    <v-logo img-class="h-8 inline mr-4" />

    <div class="inline">
      <router-link to="/">Home</router-link>
    </div>
  </v-app-bar>

  <div class="container mx-auto mt-5">
    <div class="flex">
      <div class="w-full sm:w-2/12">
        <div class="text-gray-500 text-sm p-2">Components</div>
        <router-link
          v-for="(menu, idx) in menus"
          :key="idx"
          :to="menu.to"
          exact
          exact-active-class="bg-primary-50 text-primary-500"
          class="hover:bg-primary-50 hover:text-primary-500 px-2 py-1 rounded block transition duration-300"
        >
          {{ menu.text }}
        </router-link>
      </div>
      <div class="w-full sm:w-10/12 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style></style>
