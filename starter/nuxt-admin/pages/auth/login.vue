<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
  layout: 'blank',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.login.head);
</script>

<template>
  <AuthLayout>
    <AuthLogin />
  </AuthLayout>
</template>
