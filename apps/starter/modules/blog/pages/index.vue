<script setup lang="ts">
import {onMounted, ref} from 'vue';
import PostItem from '../components/PostItem.vue';
import type {Post} from '../services';
import {useBlog} from '..';

const breadcrumbs = ref([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
]);

const page = ref(1);

const sorts = ref([
  {text: 'Most Popular', value: 'Most Popular'},
  {text: 'Latest', value: 'Latest'},
  {text: 'Oldest', value: 'Oldest'},
]);

const sort = ref(sorts.value[0]);

// composable approach
const {posts, getAllPosts} = useBlog();

onMounted(() => {
  getAllPosts();
});
</script>

<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" />

    <div class="pb-6 gap-4 flex flex-col sm:flex-row justify-between">
      <div class="w-full sm:w-auto">
        <h1 class="text-3xl font-bold mb-1">Blog</h1>
        <h3 class="text-lg text-gray-600">Blog post in grid layout</h3>
      </div>
      <div class="w-full sm:w-2/12">
        <v-select v-model="sort" placeholder="Sort" :items="sorts" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 -mx-2">
      <post-item v-for="post in posts" :key="post.title" :post="post" />
    </div>
    <div class="text-center my-10 flex gap-2 justify-center">
      <v-btn color="" size="" outlined> Prev </v-btn>
      <v-btn color="" size="" outlined> {{ page }} </v-btn>
      <v-btn color="" size="" outlined> Next </v-btn>
      <!-- <v-pagination v-model="page" :total-items="32" :items-per-page="12" /> -->
    </div>
  </div>
</template>

<style scoped></style>
