<script setup lang="ts">
import {useLayout} from '~/store';

const layout = useLayout();
const {mini, fixed} = layout;
</script>

<template>
  <div class="bg-gray-100 min-h-screen w-full">
    <!-- <v-app-bar
      drawer
      hide-toggle
      class="block sm:hidden"
      :mini="mini"
      @toggleMenu="toggleMenu"
      @logout="logout"
    >
      <template #leftMenu>
        <v-logo />
      </template>
    </v-app-bar> -->

    <app-sidebar />

    <div
      class="transition-all duration-300 py-4 pl-10 pr-4"
      :class="[mini ? 'sm:ml-[85px]' : 'sm:ml-[250px]', fixed ? '' : '']"
    >
      <router-view />
    </div>

    <!-- toast -->
    <!-- <toast-message /> -->
  </div>
</template>

<style></style>
