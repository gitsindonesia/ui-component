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
    <AppMenu v-for="(menu, idx) in menus" :key="idx" :menu="menu" />
  </div>
</template>
