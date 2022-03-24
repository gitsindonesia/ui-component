<script setup>
import {ref} from 'vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
  <div
    class="container mx-auto py-40 flex items-center justify-center text-center"
  >
    <div class="grid sm:gap-y-6">
      <h1 class="text-2xl font-bold">Counter</h1>

      <h2 class="font-bold text-5xl py-10">{{ count }}</h2>

      <div class="flex gap-6 justify-center">
        <v-btn color="primary" @click="decrement"> - </v-btn>
        <v-btn color="primary" @click="increment"> + </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>