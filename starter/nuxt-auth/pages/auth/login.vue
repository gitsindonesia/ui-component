<script setup lang="ts">
definePageMeta({
  auth: false,
  middleware: 'guest',
});
</script>

<template>
  <AuthLayout>
    <AuthLogin />
  </AuthLayout>
</template>
