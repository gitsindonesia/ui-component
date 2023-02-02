<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});

useHead({
  title: 'Login',
});
</script>

<template>
  <AuthLayout>
    <AuthLogin />
  </AuthLayout>
</template>
