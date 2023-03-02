<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object} from 'yup';

const appConfig = useAppConfig();

const loading = ref(false);
const error = ref();
const success = ref(false);

const schema = appConfig.auth.register.inputs.reduce((acc, input) => {
  if (input.validation) {
    acc[input.name] = input.validation.label(input.label);
  }
  return acc;
}, {} as Record<string, any>);

const {handleSubmit} = useForm({
  validationSchema: object(schema),
});

const onSubmit = handleSubmit(async (values) => {
  loading.value = true;
  error.value = '';
  try {
    await $fetch('/api/auth/register', {
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

const inputComponent = (component: any) => {
  switch (component) {
    case 'checkbox':
      return resolveComponent('VCheckbox');
    default:
      return resolveComponent('VInput');
  }
};
</script>

<template>
  <div class="p-6 grid items-center justify-center">
    <div class="md:w-[400px]">
      <slot name="logo">
        <VLogo
          v-if="appConfig.auth.logo || appConfig.auth.register.logo"
          img-class="mb-6 dark:hidden block"
        />
        <VLogo
          v-if="appConfig.auth.logo || appConfig.auth.register.logo"
          img-class="mb-6 dark:block hidden"
          white
        />
      </slot>
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-neutral-200">
          {{ appConfig.auth.register.title }}
        </h1>
        <p class="text-sm text-gray-700 dark:text-neutral-400">
          {{ appConfig.auth.register.description }}
        </p>
      </div>
      <template v-if="success">
        <VAlert color="success" solid class="mb-4">
          {{ appConfig.auth.register.successMessage }}
        </VAlert>
        <VBtn to="/auth/login" block>
          {{ appConfig.auth.register.loginButtonText }}
        </VBtn>
      </template>
      <form v-else @submit="onSubmit">
        <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
        <slot name="inputs">
          <template
            v-for="input in appConfig.auth.register.inputs"
            :key="input.name"
          >
            <component
              :is="inputComponent(input?.component)"
              wrapper-class="mb-4"
              v-bind="input"
            />
          </template>
        </slot>
        <VBtn
          :loading="loading"
          type="submit"
          v-bind="appConfig.auth.register.buttonProps"
        >
          {{ appConfig.auth.register.buttonText }}
        </VBtn>
      </form>
    </div>
  </div>
</template>
