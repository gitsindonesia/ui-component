<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
  layout: 'auth',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.login.head);
</script>

<template>
  <AuthLogin />
</template>
