<script setup lang="ts">
import {menus} from './menus';
import {ref, onMounted, onUnmounted} from 'vue';
import {MenuIcon, XIcon} from '@heroicons/vue/outline';

const isOpen = ref(false);

const onResize = () => {
  isOpen.value = window.innerWidth > 600;
};

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <v-app-bar hide-toggle>
    <div class="container mx-auto flex gap-3 items-center">
      <v-logo img-class="h-8" />

      <span class="font-semibold text-primary-500">UI Component</span>

      <div class="flex-grow flex justify-end sm:hidden">
        <v-btn text @click="isOpen = !isOpen">
          <XIcon v-if="isOpen" class="w-6 h-6" />
          <MenuIcon v-else class="w-6 h-6" />
        </v-btn>
      </div>
    </div>
  </v-app-bar>

  <div class="container mx-auto sm:mt-5 static">
    <div class="flex flex-col sm:flex-row">
      <div class="sm:w-3/12 z-20 w-8/12">
        <div
          class="z-20 fixed sm:relative sm:top-0 top-[80px] h-[calc(100vh-70px)] w-full bg-white px-4 sm:px-0"
          :class="isOpen ? 'block' : 'hidden sm:block'"
        >
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
                class="hover:bg-primary-50 hover:text-primary-500 px-2 py-1 rounded transition duration-300 block sm:inline"
                @click="isOpen = false"
              >
                {{ child.title }}
              </router-link>
            </div>
          </template>
        </div>
      </div>
      <div class="w-full sm:w-9/12 p-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style></style>
