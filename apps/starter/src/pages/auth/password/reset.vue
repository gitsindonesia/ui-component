<script setup lang="ts">
import AuthLayout from '@gits-id/ui/src/pages/auth/Auth.vue';
import ResetPassword from '@gits-id/ui/src/pages/auth/ResetPassword.vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const onSubmit = () => {
  router.push('/');
};
</script>

<template>
  <AuthLayout>
    <ResetPassword @submit="onSubmit" />
  </AuthLayout>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: blank
</route>
