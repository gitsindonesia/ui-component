<script setup lang="ts">
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import VBtn from '@gits-id/button';
import VLogo from '@gits-id/logo';
import {VInput, VCheckbox} from '@gits-id/forms';
import VCard from '@gits-id/card';

const showPassword = ref(false);
const showAlert = ref(false);
const error = ref('');

const {handleSubmit, isSubmitting} = useForm({
  //
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <div class="h-screen grid place-items-center">
    <div class="sm:max-w-md w-full sm:mx-auto">
      <v-card>
        <v-logo img-class="h-10 mx-auto" />

        <h1 class="text-center text-3xl font-semibold mt-4 text-gray-800">
          Welcome back!
        </h1>
        <p class="text-gray-500 text-center mt-2">Log in to your account</p>

        <v-alert v-model="showAlert" color="error" class="mt-6">
          {{ error }}
        </v-alert>

        <form class="mt-4" @submit="onSubmit">
          <v-input
            label="Email"
            placeholder="Email"
            name="email"
            prepend-icon="ri:mail-line"
          />
          <v-input
            wrapper-class="mt-4"
            label="Password"
            placeholder="Password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="ri:lock-line"
            :append-icon="showPassword ? 'ri:eye-off-line' : 'ri:eye-line'"
            @click-append-icon="showPassword = !showPassword"
          />
          <v-checkbox
            wrapper-class="mt-4"
            name="rememberMe"
            label="Remember me"
          />
          <v-btn
            :loading="isSubmitting"
            type="submit"
            class="mt-4"
            color="primary"
            block
          >
            Login
          </v-btn>
        </form>
      </v-card>

      <div class="text-center mt-2">
        <v-btn color="primary" text to="/auth/forgot-password">
          Forgot Password?
        </v-btn>
      </div>
    </div>
  </div>
</template>
