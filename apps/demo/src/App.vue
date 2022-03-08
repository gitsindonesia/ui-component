<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app-bar class="" hide-toggle>
    <v-logo img-class="h-8 inline mr-4" />

    <div class="inline">
      <router-link to="/">Home</router-link>
    </div>
  </v-app-bar>

  <div class="container mx-auto mt-10">
    <RouterView />
  </div>
</template>

<style></style>
