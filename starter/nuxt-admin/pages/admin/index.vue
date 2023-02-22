<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

useHead({
  title: useAppConfig().admin.title,
});
</script>

<template>
  <AdminWelcome />
</template>