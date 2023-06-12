<script setup lang="ts">
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  email: string().required().email().label('Email'),
  password: string().required().label('Password'),
});

const {handleSubmit} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});

const showPassword = ref(false);
</script>

<template>
  <VCard>
    <form @submit="onSubmit">
      <h1 class="text-display-md dark:text-gray-true-200 font-semibold">
        Sign in
      </h1>
      <p class="mt-2 text-gray-500 mb-6 text-sm dark:text-gray-true-500">
        Please enter your email and password to proceed
      </p>

      <VInput
        wrapper-class="mb-4"
        prepend-icon="ic:round-person"
        name="email"
        label="Email"
        type="email"
      />
      <VInput
        wrapper-class="mb-4"
        prepend-icon="ic:round-lock"
        :append-icon="
          showPassword ? 'ic:round-visibility-off' : 'ic:round-visibility'
        "
        name="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        @click-append-icon="showPassword = !showPassword"
      />
      <div class="flex mb-4 gap-4 items-center">
        <VCheckbox name="remember" label="Remember me" />
        <div class="flex-1"></div>
        <VBtn color="primary" flush text to="/pages/forgot-password">
          Forgot password?
        </VBtn>
      </div>
      <VBtn type="submit" color="primary" block>Login</VBtn>

      <div class="flex gap-4 items-center my-6">
        <div
          class="flex-1 border-b border-gray-200 dark:border-gray-true-700"
        ></div>
        <div class="text-gray-500 text-sm">OR</div>
        <div
          class="flex-1 border-b border-gray-200 dark:border-gray-true-700"
        ></div>
      </div>

      <div class="flex flex-col lg:flex-row gap-2">
        <VBtn prefix-icon="mdi:facebook" color="primary" block>
          Login with Facebook
        </VBtn>
        <VBtn prefix-icon="mdi:google" block>Login with Google</VBtn>
        <VBtn prefix-icon="mdi:github" color="dark" block
          >Login with GitHub</VBtn
        >
      </div>
    </form>
  </VCard>
</template>
