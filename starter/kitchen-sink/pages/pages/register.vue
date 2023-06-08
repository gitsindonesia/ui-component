<script setup lang="ts">
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  name: string().required().label('Name'),
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
        Sign up
      </h1>
      <p class="mt-2 text-gray-500 mb-6 text-sm dark:text-gray-true-500">
        Fill in the form to get started
      </p>

      <VInput
        wrapper-class="mb-4"
        prepend-icon="ic:round-person"
        name="name"
        label="Name"
      />
      <VInput
        wrapper-class="mb-4"
        prepend-icon="ic:round-mail"
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
        <VCheckbox name="toc" label="I agree with terms and condition" />
      </div>
      <VBtn type="submit" color="primary" block> Sign up </VBtn>

      <div class="flex gap-4 items-center my-6">
        <div
          class="flex-1 border-b border-gray-200 dark:border-gray-true-800"
        ></div>
        <div class="text-gray-500 dark:text-gray-true-500 text-sm">OR</div>
        <div
          class="flex-1 border-b border-gray-200 dark:border-gray-true-800"
        ></div>
      </div>

      <div class="flex gap-2">
        <VBtn prefix-icon="mdi:facebook" color="primary" block>
          Sign up with Facebook
        </VBtn>
        <VBtn prefix-icon="mdi:google" block> Sign up with Google </VBtn>
        <VBtn prefix-icon="mdi:github" color="dark" block>
          Sign up with GitHub
        </VBtn>
      </div>
    </form>
  </VCard>
</template>
