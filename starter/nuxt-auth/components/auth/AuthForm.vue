<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, string} from 'yup';

const appConfig = useAppConfig();
const router = useRouter();
const route = useRoute();
const {signIn, status} = useSession();

useHead(appConfig.auth.head.login);

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

  console.log(res);

  if (res.error) {
    error.value = 'Invalid credentials';
    return;
  }

  // get path name from callback url
  const callbackUrl = new URL(String(route.query.callbackUrl)).pathname;

  router.push(
    String(route.query.next || callbackUrl || appConfig.auth.redirect.home),
  );
});
</script>

<template>
  <div class="p-6 grid items-center justify-center">
    <form class="md:w-[400px]" @submit="onSubmit">
      <VLogo img-class="mb-6" />
      <div class="space-y-2 mb-4">
        <h1 class="text-2xl font-semibold text-gray-900">Masuk</h1>
        <p class="text-sm text-gray-700">
          Silahkan login untuk mengakses semua fitur!
        </p>
      </div>
      <VAlert v-if="error" color="error" class="mb-4"> {{ error }} </VAlert>
      <VInput
        wrapper-class="mb-4"
        label="Username"
        placeholder="Username"
        name="username"
      />
      <VInput
        wrapper-class="mb-4"
        label="Password"
        placeholder="Password"
        name="password"
        type="password"
      />
      <div class="mb-4 flex gap-4 justify-between">
        <VCheckbox label="Ingat saya" name="remember" />
        <VBtn to="/auth/forgot-password" color="primary" text flush>
          Forgot Password?
        </VBtn>
      </div>
      <VBtn :loading="status === 'loading'" type="submit" color="primary" block>
        Login
      </VBtn>

      <p class="text-sm text-gray-700 text-center mt-5">
        Don't have an account yet?
        <VBtn to="/auth/register" color="primary" text flush> Register </VBtn>
      </p>
    </form>
  </div>
</template>
