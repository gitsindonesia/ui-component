<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const appConfig = useAppConfig();

const router = useRouter();
const route = useRoute();
const {signIn, getProviders} = useSession();
const providers = await getProviders();

const error = ref();
const loading = ref(false);

const {handleSubmit} = useForm({
  validationSchema: object({
    username: string().required().label('Username'),
    password: string().required().label('Password'),
  }),
});

const onSubmit = handleSubmit(async (values) => {
  error.value = null;
  loading.value = true;

  const res = await signIn('credentials', {
    username: values.username,
    password: values.password,
    redirect: false,
  });

  loading.value = false;

  if (res.error) {
    error.value = 'Invalid credentials';
    return;
  }

  // get path name from callback url
  const callbackUrl = new URL(String(route.query?.callbackUrl)).pathname;

  router.push(
    String(route.query.next || callbackUrl || appConfig.auth.redirect.home),
  );
});

const socialProviders = computed(() => {
  return Object.keys(providers)
    .map((name) => name !== 'credentials')
    .filter(Boolean);
});
</script>

<template>
  <div class="p-6 grid items-center justify-center">
    <form class="md:w-[400px]" @submit="onSubmit">
      <slot name="logo">
        <VLogo
          v-if="appConfig.auth.logo || appConfig.auth.login.logo"
          img-class="mb-6"
        />
      </slot>
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ appConfig.auth.login.title }}
        </h1>
        <p class="text-sm text-gray-700">
          {{ appConfig.auth.login.description }}
        </p>
      </div>
      <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
      <VInput
        wrapper-class="mb-4"
        name="username"
        v-bind="appConfig.auth.login.usernameProps"
      />
      <VInput
        wrapper-class="mb-4"
        name="password"
        type="password"
        v-bind="appConfig.auth.login.passwordProps"
      />
      <div class="mb-4 flex gap-4 justify-between">
        <VCheckbox
          v-if="appConfig.auth.login.rememberMe.enabled"
          :label="appConfig.auth.login.rememberMe.label"
          name="rememberMe"
        />
        <VBtn to="/auth/forgot-password" color="primary" text flush>
          {{ appConfig.auth.login.forgotPasswordLinkText }}
        </VBtn>
      </div>
      <VBtn
        :loading="loading"
        type="submit"
        v-bind="appConfig.auth.login.submitProps"
      >
        {{ appConfig.auth.login.submitText }}
      </VBtn>

      <p class="text-sm text-gray-700 text-center mt-5">
        {{ appConfig.auth.login.registerText }}
        <VBtn to="/auth/register" color="primary" text flush>
          {{ appConfig.auth.login.registerLinkText }}
        </VBtn>
      </p>

      <div
        v-if="socialProviders.length > 0"
        class="flex gap-4 items-center mt-5 mb-4"
      >
        <div class="border-t flex-1"></div>
        <span class="text-sm text-gray-600">
          {{ appConfig.auth.login.orText }}
        </span>
        <div class="border-t flex-1"></div>
      </div>

      <template v-for="provider in providers" :key="provider?.id">
        <VBtn
          v-if="provider?.id !== 'credentials'"
          block
          :color="
            appConfig.auth.login.providerButtonColors[String(provider?.id)]
          "
          @click="signIn(provider?.id)"
        >
          {{ appConfig.auth.login.loginWithText }} {{ provider?.name }}
        </VBtn>
      </template>
    </form>
  </div>
</template>
