<script setup lang="ts">
const title = 'Nuxt + Morpheme UI Minimal Starter';

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
