<script setup lang="ts">
import VBtn from '@gits-id/button';
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16
        lg:px-8
        lg:flex
        lg:items-center
        lg:justify-between
      "
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Ready to dive in?</span>
        <span class="block text-primary-500">Start your free trial today.</span>
      </h2>
      <div class="mt-8 flex gap-3 lg:mt-0 lg:flex-shrink-0">
        <v-btn color="primary" size="lg" shadow> Get started </v-btn>
        <v-btn color="primary" outlined size="lg" shadow> Learn more </v-btn>
      </div>
    </div>
  </div>
</template>
