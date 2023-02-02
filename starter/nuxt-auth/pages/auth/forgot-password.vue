<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});

useHead({
  title: 'Forgot Password',
});
</script>

<template>
  <AuthLayout>
    <AuthForgotPassword />
  </AuthLayout>
</template>
