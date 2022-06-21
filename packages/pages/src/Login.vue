<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import {VInput, VCheckbox} from '@gits-id/forms';
import VBtn from '@gits-id/button';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import VAlert from '@gits-id/alert';

const props = defineProps({
  message: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Login Account',
  },
  subtitle: {
    type: String,
    default: 'Please enter your credentials',
  },
  passwordPath: {
    type: String,
    default: '/auth/password/forgot',
  },
  register: {
    type: String,
    default: '',
  },
  usernameText: {
    type: String,
    default: 'Email',
  },
  passwordText: {
    type: String,
    default: 'Password',
  },
  forgotPasswordText: {
    type: String,
    default: 'Forgot Password',
  },
  loginText: {
    type: String,
    default: 'Login',
  },
  hideRememberMe: {
    type: Boolean,
    default: false,
  },
  email: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  btnProps: {
    type: Object,
    default: () => ({}),
  },
  btnRegisterProps: {
    type: Object,
    default: () => ({}),
  },
});

const {message} = toRefs(props);

const emit = defineEmits(['submit', 'loginSSO']);

const isError = ref(false);

watch(
  message,
  () => {
    isError.value = !!props.message;
  },
  {immediate: true},
);
const schema = computed(() => {
  let usernameRules = string().required();
  if (props.email) {
    usernameRules = usernameRules.email();
  }
  usernameRules = usernameRules.label(props.usernameText);

  return object({
    email: usernameRules,
    password: string().required().label(props.passwordText),
  });
});

const {handleSubmit} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});
</script>

<template>
  <div class="w-full md:w-[400px]">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">{{ title }}</h1>
    <div class="text-gray-600">{{ subtitle }}</div>

    <v-alert v-model="isError" color="error" class="mt-5" dismissable>
      {{ message }}
    </v-alert>

    <form @submit.prevent="onSubmit">
      <div class="mt-8">
        <VInput
          id="username"
          name="email"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:at-symbol"
          :label="usernameText"
          :placeholder="usernameText"
          :autocomplete="autocomplete"
        />

        <VInput
          id="password"
          name="password"
          type="password"
          prepend-icon="heroicons-outline:lock-closed"
          wrapper-class="mb-4"
          :label="passwordText"
          :placeholder="passwordText"
        />

        <div class="mb-4 flex justify-between items-center">
          <div class="w-6/12">
            <v-checkbox
              v-if="!hideRememberMe"
              label="Remember me"
              name="remember_me"
            />
          </div>
          <slot name="forgotPassword">
            <VBtn
              color="primary"
              text
              dense
              small
              :to="passwordPath"
              class="!p-0"
            >
              {{ forgotPasswordText }}
            </VBtn>
          </slot>
        </div>

        <VBtn
          type="submit"
          color="primary"
          block
          uppercase
          :disabled="loading || disabled"
          :loading="loading"
          v-bind="btnProps"
        >
          {{ loginText }}
        </VBtn>
      </div>
      <template v-if="register">
        <slot name="register">
          <div class="mt-4">
            Already have an account?
            <v-btn
              text
              color="primary"
              :to="register"
              v-bind="btnRegisterProps"
            >
              Register
            </v-btn>
          </div>
        </slot>
      </template>
      <slot name="extra" />
    </form>
  </div>
</template>
