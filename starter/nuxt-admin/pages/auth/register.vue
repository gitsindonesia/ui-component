<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
  layout: 'blank',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.register.head);
</script>

<template>
  <AuthLayout>
    <AuthRegister />
  </AuthLayout>
</template>
