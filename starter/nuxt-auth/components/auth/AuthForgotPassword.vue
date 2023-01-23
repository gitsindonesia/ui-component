<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const router = useRouter();
const appConfig = useAppConfig();

useHead(appConfig.auth.head.forgotPassword);

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
    <div>
      <VLogo img-class="mb-6" />
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ appConfig.auth.forgotPassword.title }}
        </h1>
        <p class="text-sm text-gray-700">
          {{ appConfig.auth.forgotPassword.description }}
        </p>
      </div>
      <template v-if="success">
        <VAlert color="success" solid class="mb-4">
          {{ appConfig.auth.forgotPassword.successMessage }}
        </VAlert>
        <VBtn to="/auth/login" block>
          {{ appConfig.auth.forgotPassword.loginButtonText }}
        </VBtn>
      </template>
      <form v-else class="md:w-[400px]" @submit="onSubmit">
        <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
        <VInput
          wrapper-class="mb-4"
          name="email"
          v-bind="appConfig.auth.forgotPassword.inputProps"
        />
        <VBtn
          :loading="loading"
          type="submit"
          v-bind="appConfig.auth.forgotPassword.buttonProps"
        >
          {{ appConfig.auth.forgotPassword.buttonText }}
        </VBtn>
      </form>
    </div>
  </div>
</template>
