<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.login.head);
</script>

<template>
  <AuthLayout>
    <AuthLogin />
  </AuthLayout>
</template>
