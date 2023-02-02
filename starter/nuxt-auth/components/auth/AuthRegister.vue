<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, boolean, string, ref as YupRef} from 'yup';

const props = withDefaults(
  defineProps<{
    inputs?: Record<string, any>[];
    title?: string;
    description?: string;
    buttonText?: string;
    buttonProps?: Record<string, any>;
    successMessage?: string;
    loginButtonText?: string;
  }>(),
  {
    title: 'Register',
    description: 'Enter your details to create your account.',
    buttonText: 'Register',
    buttonProps: () => ({
      color: 'primary',
      block: true,
    }),
    successMessage: 'Account created successfully.',
    loginButtonText: 'Back to Login',
    inputs: () => [
      {
        name: 'name',
        label: 'Name',
        placeholder: 'Name',
        validation: string().required(),
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
        type: 'email',
        validation: string().email().required(),
      },
      {
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        validation: string().required(),
      },
      {
        name: 'password_confirmation',
        label: 'Password Confirmation',
        placeholder: 'Password Confirmation',
        type: 'password',
        validation: string()
          .required()
          .oneOf([YupRef('password')], 'Password does not match'),
      },
      {
        name: 'agree_to_toc',
        label: 'Agree to Terms and Conditions',
        component: 'checkbox',
        validation: boolean().required(),
      },
    ],
  },
);

const loading = ref(false);
const error = ref();
const success = ref(false);

const schema = props.inputs.reduce((acc, input) => {
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
        <VBtn to="/auth/login" block> {{ loginButtonText }} </VBtn>
      </template>
      <form v-else @submit="onSubmit">
        <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
        <slot name="inputs">
          <template v-for="input in inputs" :key="input.name">
            <component
              :is="inputComponent(input?.component)"
              wrapper-class="mb-4"
              v-bind="input"
            />
          </template>
        </slot>
        <VBtn :loading="loading" type="submit" v-bind="buttonProps">
          {{ buttonText }}
        </VBtn>
      </form>
    </div>
  </div>
</template>
