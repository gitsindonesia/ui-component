<script setup lang="ts">
import {ref} from 'vue';
import {RiArrowDownSLine, RiArrowUpSLine} from 'vue-remix-icons';

defineProps<{
  menu: Record<string, any>;
}>();

const isOpen = ref(true);
</script>

<template>
  <div
    class="text-gray-500 text-sm flex gap-2 py-1 cursor-pointer"
    @click="isOpen = !isOpen"
  >
    <span>
      <RiArrowDownSLine v-if="isOpen" class="fill-current w-5 h-5" />
      <RiArrowUpSLine v-else class="fill-current w-5 h-5" />
    </span>
    {{ menu.title }}
  </div>

  <transition
    enter-class="duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-class="duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <ul
      v-if="isOpen"
      class="block py-0.5 border-l px-3 ml-2 list-disc-gray-300 mb-2"
    >
      <li v-for="(child, idx) in menu.children" :key="idx">
        <router-link
          :to="child.to"
          exact
          exact-active-class="bg-primary-50 text-primary-500"
          class="hover:bg-primary-50 hover:text-primary-500 text-sm px-2 py-1 rounded transition duration-300 block sm:inline"
        >
          {{ child.title }}
        </router-link>
      </li>
    </ul>
  </transition>
</template>
