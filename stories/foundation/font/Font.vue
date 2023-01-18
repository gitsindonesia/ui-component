<script setup lang="ts">
import defaultTheme from 'tailwindcss/defaultTheme';

const fontFamily = {
  ...defaultTheme.fontFamily,
  sans: ['Poppins', ...defaultTheme.fontFamily.sans],
};
</script>

<template>
  <h1 class="text-3xl font-bold mb-5">Font Family</h1>
  <div class="space-y-5 divide-y">
    <div v-for="(font, name) in fontFamily" :key="name" class="pt-4">
      <div>
        <div class="font-semibold text-xl">
          {{ name }}
        </div>
        <p class="text-sm">
          <code>{{ font.join(', ') }}</code>
        </p>
      </div>
      <p
        class="border-2 bg-gray-50 rounded-xl p-4 mt-4"
        :style="{fontFamily: font.join(', ')}"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </p>
    </div>
  </div>
</template>
