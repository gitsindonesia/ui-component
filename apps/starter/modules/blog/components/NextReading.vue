<script setup lang="ts">
import {ref, toRefs} from 'vue';
import type {PropType} from 'vue';
import type {Post} from '../services';
import PostItem from './PostItem.vue';

const props = defineProps({
  posts: {
    type: Array as PropType<Post[]>,
    default: () => [],
  },
});

const {posts} = toRefs(props);
</script>

<template>
  <div class="flex flex-row justify-between items-center mb-4">
    <div>
      <h3 class="text-xl sm:text-xl font-bold">Your Next Reading</h3>
      <h3 class="text-gray-700">Continue read some exiting stories</h3>
    </div>
    <div class="">
      <v-btn size="sm" text color="primary" no-ring class="px-0">
        View All
      </v-btn>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 -mx-2">
    <post-item v-for="item in posts" :key="item.title" :post="item" />
  </div>
</template>

<style scoped></style>
