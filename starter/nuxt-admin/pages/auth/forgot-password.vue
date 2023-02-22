<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
  layout: 'blank',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.forgotPassword.head);
</script>

<template>
  <AuthLayout>
    <AuthForgotPassword />
  </AuthLayout>
</template>
