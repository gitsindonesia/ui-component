<script setup lang="ts">
import PostItem from './PostItem.vue';
import {Post} from '../services';

interface Props {
  post: Post;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <h1 class="text-2xl sm:text-4xl font-bold mb-6">
    {{ post.title }}
  </h1>

  <div class="mb-6 flex flex-wrap items-center text-sm text-gray-700 gap-2">
    <div class="font-bold">{{ post.meta?.author }}</div>
    <div class="w-1 h-1 bg-gray-500 rounded-full"></div>
    <div>
      <span class="font-medium">{{ post.meta?.views }}</span> Views
    </div>
    <div class="w-1 h-1 bg-gray-600 rounded-full"></div>
    <div>
      <span class="font-medium">{{ post.meta?.comments }}</span>
      Comments
    </div>
    <div class="w-1 h-1 bg-gray-600 rounded-full"></div>
    <span class="text-gray-600 font-normal">5 mins read</span>
  </div>

  <img alt="post media" class="max-w-full mb-3 rounded" :src="post.image" />

  <article class="prose max-w-full mb-10" v-html="post.content"></article>
</template>

<style scoped></style>
