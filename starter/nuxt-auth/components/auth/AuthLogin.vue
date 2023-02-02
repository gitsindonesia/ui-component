<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const props = withDefaults(
  defineProps<{
    redirect?: string;
    title?: string;
    description?: string;
    usernameProps?: Record<string, any>;
    passwordProps?: Record<string, any>;
    rememberMe?: boolean;
    rememberMeLabel?: string;
    submitText?: string;
    submitProps?: Record<string, any>;
    forgotPasswordLinkText?: string;
    registerLinkText?: string;
    registerText?: string;
    loginWithText?: string;
    orText?: string;
    providerButtonColors?: Record<string, string>;
  }>(),
  {
    redirect: '/',
    title: 'Login',
    description: 'Enter your username and password to login.',
    usernameProps: () => ({
      label: 'Username',
      placeholder: 'Username',
    }),
    passwordProps: () => ({
      label: 'Password',
      placeholder: 'Password',
    }),
    rememberMe: true,
    rememberMeLabel: 'Remember Me',
    submitText: 'Login',
    submitProps: () => ({
      color: 'primary',
      block: true,
    }),
    forgotPasswordLinkText: 'Forgot Password?',
    registerLinkText: 'Register',
    registerText: "Don't have an account?",
    loginWithText: 'Login with',
    orText: 'or',
    providerButtonColors: () => ({
      google: 'danger',
      facebook: 'primary',
      twitter: 'info',
      github: 'dark',
    }),
  },
);

const router = useRouter();
const route = useRoute();
const {signIn, status, getProviders} = useSession();
const providers = await getProviders();

const error = ref();

const {handleSubmit} = useForm({
  validationSchema: object({
    username: string().required().label('Username'),
    password: string().required().label('Password'),
  }),
});

const onSubmit = handleSubmit(async (values) => {
  error.value = null;
  const res = await signIn('credentials', {
    username: values.username,
    password: values.password,
    redirect: false,
  });

  if (res.error) {
    error.value = 'Invalid credentials';
    return;
  }

  // get path name from callback url
  const callbackUrl = new URL(String(route.query.callbackUrl)).pathname;

  router.push(String(route.query.next || callbackUrl || props.redirect));
});
</script>

<template>
  <div class="p-6 grid items-center justify-center">
    <form class="md:w-[400px]" @submit="onSubmit">
      <VLogo img-class="mb-6" />
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ title }}
        </h1>
        <p class="text-sm text-gray-700">
          {{ description }}
        </p>
      </div>
      <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
      <VInput wrapper-class="mb-4" name="username" v-bind="usernameProps" />
      <VInput
        wrapper-class="mb-4"
        name="password"
        type="password"
        v-bind="passwordProps"
      />
      <div class="mb-4 flex gap-4 justify-between">
        <VCheckbox
          v-if="rememberMe"
          :label="rememberMeLabel"
          name="rememberMe"
        />
        <VBtn to="/auth/forgot-password" color="primary" text flush>
          {{ forgotPasswordLinkText }}
        </VBtn>
      </div>
      <VBtn :loading="status === 'loading'" type="submit" v-bind="submitProps">
        {{ submitText }}
      </VBtn>

      <p class="text-sm text-gray-700 text-center mt-5">
        {{ registerText }}
        <VBtn to="/auth/register" color="primary" text flush>
          {{ registerLinkText }}
        </VBtn>
      </p>

      <div class="flex gap-4 items-center mt-5 mb-4">
        <div class="border-t flex-1"></div>
        <span class="text-sm text-gray-600">
          {{ orText }}
        </span>
        <div class="border-t flex-1"></div>
      </div>

      <template v-for="provider in providers" :key="provider?.id">
        <VBtn
          v-if="provider?.id !== 'credentials'"
          block
          :color="providerButtonColors[String(provider?.id)]"
          @click="signIn(provider?.id)"
        >
          {{ loginWithText }} {{ provider?.name }}
        </VBtn>
      </template>
    </form>
  </div>
</template>
