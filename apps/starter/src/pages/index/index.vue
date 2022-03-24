<script setup>
import {ref, toRefs} from 'vue';
</script>

<template>
  <div>
    <v-btn text to="/">Counter</v-btn>
    <v-btn text to="/todo">To-Do List</v-btn>

    <router-view />
  </div>
</template>

<style scoped>
</style>