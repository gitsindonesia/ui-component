<script setup lang="ts">
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import VBtn from '@gits-id/button';
import VLogo from '@gits-id/logo';
import {VInput} from '@gits-id/forms';
import Card from '@gits-id/card';

const sent = ref(false);
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
      <Card>
        <v-logo img-class="h-10 mx-auto" />

        <template v-if="sent">
          <h1 class="text-center text-3xl font-semibold mt-5 text-gray-800">
            Email Sent
          </h1>
          <p class="text-gray-500 text-center mt-5">
            It can take a few minutes to receive your password recovery link.
          </p>
          <p class="text-gray-500 text-center mt-3">
            If you do not receive this link, please contact your administrator.
          </p>
        </template>
        <template v-else>
          <h1 class="text-center text-3xl font-semibold mt-4 text-gray-800">
            Password Recovery
          </h1>
          <p class="text-gray-500 text-center mt-2">
            We'll send reset password link to your email.
          </p>

          <v-alert v-model="showAlert" color="error" class="mt-6">
            {{ error }}
          </v-alert>

          <form class="mt-4" @submit="onSubmit">
            <v-input
              label="Email"
              placeholder="e.g. budi@gitsmail.com"
              name="email"
              prepend-icon="ri:mail-line"
            />
            <v-btn
              :loading="isSubmitting"
              type="submit"
              class="mt-5"
              color="primary"
              block
            >
              Send Email
            </v-btn>
          </form>
        </template>
      </Card>
      <div class="text-center mt-2">
        <v-btn color="primary" text to="/auth/login">
          <template v-if="sent"> Sign in </template>
          <template v-else> Ready to sign in? </template>
        </v-btn>
      </div>
    </div>
  </div>
</template>
