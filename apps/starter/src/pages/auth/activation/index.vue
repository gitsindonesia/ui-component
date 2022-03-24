<script setup lang="ts">
import {Activation} from '@gits-id/ui';
import {useRoute, useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import {useAuth} from '~/plugins/auth';
// import useUsers from "../../composables/useUsers";

const router = useRouter();
const route = useRoute();
const auth = useAuth();
const code = route.query.code;
const loading = ref(false);
// const { activateAccount, loading } = useUsers();

onMounted(() => {
  if (!code) {
    router.push('/?no_activation_code');
  }
});

const message = ref('');

const onSubmit = async (values: any) => {
  // try {
  //   message.value = "";
  //   const res = await activateAccount({
  //     code,
  //     password: values.password,
  //     password_confirmation: values.passwordConfirmation,
  //   });
  //   auth.setToken(res.data?.token);
  //   auth.fetchUser();
  //   loading.value = false;
  //   await router.push("/");
  // } catch (e) {
  //   loading.value = false;
  //   message.value = e.response?.data?.message || e.message;
  // }
};
</script>

<template>
  <Activation :message="message" :loading="loading" @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: auth
  auth: guest
</route>
