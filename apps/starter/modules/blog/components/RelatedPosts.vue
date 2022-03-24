<script setup lang="ts">
import type {Post} from '../services';
import PostItem from './PostItem.vue';

interface Props {
  posts: Post[];
}

const props = withDefaults(defineProps<Props>(), {
  // posts: [],
});
</script>

<template>
  <div>
    <h3 class="text-xl sm:text-xl font-bold">Related Posts</h3>
    <h3 class="text-gray-700 mb-4">Here some posts that you might liked</h3>

    <div class="flex flex-col gap-6 -mx-2">
      <post-item
        v-for="item in posts"
        :key="item.title"
        :post="item"
        horizontal
      />
    </div>
  </div>
</template>

<style scoped></style>
