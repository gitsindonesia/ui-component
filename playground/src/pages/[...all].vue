<script setup lang="ts">
import {RiErrorWarningFill} from 'vue-remix-icons';
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="p-4 w-auto">
      <RiErrorWarningFill
        class="fill-current text-info-500 w-10 h-10 mr-4 mb-2"
      />
      <div class="font-semibold mb-1 text-2xl text-gray-800">
        Page Not Found
      </div>
      <div class="mb-4 text-gray-500">
        The page you are looking is not found
      </div>
      <v-btn to="/">Back to home</v-btn>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
