<script setup lang="ts">
import {state} from '@/composables/useMainMenu';
import {toRefs} from 'vue';
import {menus} from '@/menus';

const {isOpen} = toRefs(state);
</script>

<template>
  <div
    class="z-10 sm:z-0 fixed sm:relative sm:top-0 top-[60px] h-[calc(100vh-70px)] w-full bg-white sm:bg-transparent p-4 sm:p-0"
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
</template>
