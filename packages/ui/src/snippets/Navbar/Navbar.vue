<script setup lang="ts">
import {ref} from 'vue';

const menus = ref([
  {
    text: 'Home',
    to: '/',
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
</script>

<template>
  <header class="shadow">
    <div
      class="
        container
        mx-auto
        px-4
        lg:px-0
        flex
        items-center
        justify-between
        py-4
      "
    >
      <a class="font-semibold" href="#"> Brand </a>

      <nav aria-label="Navigation">
        <ul class="flex gap-4 items-center">
          <li v-for="menu in menus" :key="menu.text">
            <router-link
              exact-active-class="font-semibold text-primary"
              class="hover:text-primary"
              :to="menu.to"
            >
              {{ menu.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
