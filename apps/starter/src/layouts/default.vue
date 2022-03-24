<script setup lang="ts">
import {ref} from 'vue';
import {useAuth} from '~/plugins/auth';
import {useMenu} from '~/plugins/menus';

const menu = ref(false);
const {menus} = useMenu('main');

const auth = useAuth();

const onLogout = () => auth.forceLogout();
</script>

<template>
  <v-navbar
    v-model="menu"
    :menus="menus"
    :user="auth.user"
    login-path="/auth/login"
    @logout="onLogout"
  >
    <!-- <template #logo> <div class="font-black text-xl">Logo</div> </template> -->
  </v-navbar>

  <div class="container mx-auto px-4 2xl:px-0 py-5">
    <router-view />
  </div>
</template>

<style scoped></style>
