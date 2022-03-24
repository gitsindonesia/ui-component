<script setup lang="ts">
import {Post} from '../services';

interface Props {
  post: Post;
  horizontal?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  horizontal: false,
});
</script>

<template>
  <v-card
    default-wrapper-class="p-2 rounded-md transition duration-300 border border-transparent hover:border-primary hover:bg-blue-50"
    default-body-class="flex gap-4 w-full"
    :body-class="horizontal ? 'flex-col xl:flex-row' : 'flex-col'"
    hide-header
    hide-footer
    :to="`/blog/posts/${post.slug}`"
  >
    <div :class="horizontal ? 'w-full xl:w-6/12' : 'w-full'">
      <!-- post media -->
      <img
        alt="post media"
        class="max-w-full w-full sm:h-full object-cover rounded"
        :src="post.image"
      />
      <!-- /post media -->
    </div>
    <div :class="horizontal ? 'w-full xl:w-6/12' : 'w-full'">
      <div class="font-bold mb-3 line-clamp-2" v-text="post.title"></div>
      <!-- post meta -->
      <div class="mb-3 flex items-center text-xs text-gray-700 gap-2">
        <div class="font-bold">{{ post.meta?.author }}</div>
        <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div>
          On
          <span class="font-medium">{{ post.createdAt }}</span>
        </div>
      </div>
      <!-- /post meta -->
      <div
        class="line-clamp-3 text-gray-800 text-sm"
        v-html="post.content"
      ></div>
    </div>
  </v-card>
</template>

<style scoped></style>
