<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    buttonText: string;
    loginButtonText: string;
    successMessage: string;
    inputProps: Record<string, any>;
    buttonProps: Record<string, any>;
  }>(),
  {
    title: 'Forgot Password',
    description: 'Enter your email address to reset your password.',
    buttonText: 'Reset Password',
    loginButtonText: 'Login',
    successMessage: 'Password reset email sent.',
    inputProps: () => ({
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      type: 'email',
    }),
    buttonProps: () => ({
      type: 'submit',
      color: 'primary',
      block: true,
    }),
  },
);

const loading = ref(false);
const error = ref();
const success = ref(false);

const {handleSubmit} = useForm({
  validationSchema: object({
    email: string().required().label('Email'),
  }),
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  error.value = '';
  try {
    await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: values,
    });
    success.value = true;
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6 grid items-center justify-center">
    <div class="md:w-[400px]">
      <VLogo img-class="mb-6" />
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ title }}
        </h1>
        <p class="text-sm text-gray-700">
          {{ description }}
        </p>
      </div>
      <template v-if="success">
        <VAlert color="success" solid class="mb-4">
          {{ successMessage }}
        </VAlert>
        <VBtn to="/auth/login" block>
          {{ loginButtonText }}
        </VBtn>
      </template>
      <form v-else @submit="onSubmit">
        <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
        <VInput wrapper-class="mb-4" name="email" v-bind="inputProps" />
        <VBtn :loading="loading" type="submit" v-bind="buttonProps">
          {{ buttonText }}
        </VBtn>
      </form>
    </div>
  </div>
</template>
