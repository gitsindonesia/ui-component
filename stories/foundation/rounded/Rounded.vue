<script setup lang="ts">
import defaultTheme from 'tailwindcss/defaultTheme';
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Rounded</h1>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <div
      v-for="(rounded, name) in defaultTheme.borderRadius"
      :key="name"
      :style="{borderRadius: rounded}"
      class="p-6 border-2 text-center bg-white"
    >
      <div class="font-semibold mb-3">
        {{ name === 'DEFAULT' ? 'rounded' : `rounded-${name}` }}
      </div>
      <code>{{ rounded }}</code>
    </div>
  </div>
</template>
