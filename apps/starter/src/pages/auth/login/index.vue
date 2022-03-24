<script setup lang="ts">
import {Login} from '@gits-id/ui';
import {useRouter} from 'vue-router';
import {useAuth} from '~/plugins/auth';

const {error, login, loginAs, loading} = useAuth();

console.log(useAuth);

const router = useRouter();

const onSubmit = (values: any) => {
  loginAs(values, 'token123');
  router.push('/cms');
};
</script>

<template>
  <Login
    :message="error"
    :loading="loading"
    password-path="/auth/password/forgot"
    hide-remember-me
    @submit="onSubmit"
  />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: auth
  auth: 'guest'
</route>
