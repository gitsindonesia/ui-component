<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});

useHead({
  title: 'Register',
});
</script>

<template>
  <AuthLayout>
    <AuthRegister />
  </AuthLayout>
</template>
