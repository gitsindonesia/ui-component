<script setup lang="ts">
import {menus} from './menus';
</script>

<template>
  <v-app-bar class="" hide-toggle>
    <div class="container mx-auto flex gap-3 items-center">
      <v-logo img-class="h-8" />

      <span class="font-semibold text-primary-500">UI Component</span>
    </div>
  </v-app-bar>

  <div class="container mx-auto mt-5 static">
    <div class="flex">
      <div class="w-full sm:w-3/12 sticky top-0">
        <template v-for="(menu, idx) in menus" :key="idx">
          <div class="text-gray-500 text-sm p-2">{{ menu.title }}</div>
          <div
            v-for="(child, idx) in menu.children"
            :key="idx"
            class="block py-0.5"
          >
            <router-link
              :to="child.to"
              exact
              exact-active-class="bg-primary-50 text-primary-500"
              class="hover:bg-primary-50 hover:text-primary-500 px-2 py-1 rounded transition duration-300"
            >
              {{ child.title }}
            </router-link>
          </div>
        </template>
      </div>
      <div class="w-full sm:w-9/12 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style></style>
