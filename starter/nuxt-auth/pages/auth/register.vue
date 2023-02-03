<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});

const appConfig = useAppConfig();

useHead(appConfig.auth.register.head);
</script>

<template>
  <AuthLayout>
    <AuthRegister />
  </AuthLayout>
</template>
