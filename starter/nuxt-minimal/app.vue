<script setup lang="ts">
const title = 'Nuxt + GITS UI Minimal Starter';

useHead({
  title,
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      key: 'description',
      content: title,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
