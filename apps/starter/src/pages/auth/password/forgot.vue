<script setup lang="ts">
import {ForgotPassword} from '@gits-id/ui';
import {useRouter} from 'vue-router';

const router = useRouter();
const onSubmit = () => {
  router.push('/');
};
</script>

<template>
  <ForgotPassword @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: auth
</route>
