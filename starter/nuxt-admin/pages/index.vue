<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  auth: false,
});

useHead({
  title: useAppConfig().admin.title,
});
</script>

<template>
  <div class="container mx-auto p-6 text-center">
    Visit the
    <VBtn
      text
      flush
      color="primary"
      to="/admin"
      suffix-icon="ri:external-link-line"
    >
      Admin
    </VBtn>
    page to see the admin interface.
  </div>
</template>
