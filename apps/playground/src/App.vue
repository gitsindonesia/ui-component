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
  <div
    class="flex h-16 p-2 sm:px-4 items-center gap-2 border-b z-20 fixed sm:relative bg-white w-full shadow-md sm:shadow-none"
  >
    <div class="flex sm:hidden">
      <v-btn icon text class="p-2" @click="isOpen = !isOpen">
        <XIcon v-if="isOpen" class="w-6 h-6" />
        <MenuIcon v-else class="w-6 h-6" />
      </v-btn>
    </div>
    <div class="flex-grow justify-center sm:justify-start flex gap-2">
      <v-logo img-class="h-6" />
      <span class="font-semibold text-primary-500">UI Component</span>
    </div>
    <div class="flex w-10 sm:hidden"></div>
  </div>
  <main class="flex flex-col sm:h-screen">
    <div class="flex flex-col sm:flex-row flex-1 overflow-hidden">
      <div class="w-full sm:w-3/12 sm:p-4 p-0">
        <div
          class="z-10 sm:z-0 fixed sm:relative sm:top-0 top-[60px] h-[calc(100vh-70px)] w-full bg-white sm:bg-transparent px-4 sm:px-0"
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
      <div class="flex flex-1 flex-col w-full sm:w-9/12">
        <div class="flex-1 overflow-y-auto paragraph p-4">
          <router-view />
        </div>
      </div>
    </div>
    <div class="flex justify-center p-2 text-sm text-gray-400">
      Copyright &copy; 2021-Present &middot; GITS Indonesia
    </div>
  </main>
</template>

<style></style>
