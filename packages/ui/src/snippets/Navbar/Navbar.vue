<script setup lang="ts">
import {ref} from 'vue';
import Logo from '@gits-id/logo';
import VBtn from '@gits-id/button';
import Icon from '@gits-id/icon';
import '@gits-id/avatar/dist/style.css';
import '@gits-id/logo/dist/style.css';

const menus = ref([
  {
    text: 'Home',
    to: '/',
    active: true,
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
]);

const isOpen = ref(false);
</script>

<template>
  <header class="shadow bg-white">
    <div
      class="
        container
        mx-auto
        px-4
        lg:px-0
        flex flex-col
        sm:flex-row
        items-center
        justify-between
        py-3
      "
    >
      <div class="flex justify-between items-center w-full sm:w-auto gap-4">
        <Logo size="md" />
        <v-btn class="sm:hidden" rounded icon @click="isOpen = !isOpen">
          <Icon name="ri:menu-line" />
        </v-btn>
      </div>

      <!-- desktop navigation -->
      <nav class="hidden sm:block" aria-label="Desktop Navigation">
        <ul class="flex gap-6 items-center">
          <li v-for="menu in menus" :key="menu.text">
            <router-link
              exact-active-class="font-semibold text-primary"
              class="hover:text-primary"
              :class="menu.active ? 'font-semibold text-primary' : ''"
              :to="menu.to"
            >
              {{ menu.text }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- mobile navigation -->
      <transition name="fade">
        <nav
          v-if="isOpen"
          class="fixed sm:hidden top-[66px] bg-white shadow left-0 w-full"
          aria-label="Mobile Navigation"
        >
          <ul class="flex flex-col py-1">
            <li v-for="menu in menus" :key="menu.text">
              <router-link
                class="hover:bg-gray-100 hover:text-primary block px-4 py-3"
                :class="
                  menu.active ? 'bg-gray-100 text-primary font-semibold' : ''
                "
                :to="menu.to"
              >
                {{ menu.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style>
@import '../../assets/transition.css';
</style>
