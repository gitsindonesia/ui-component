<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import {UserIcon, LockClosedIcon} from '@heroicons/vue/outline';
import VInput from '../../components/VInput/VInput.vue';
import VBtn from '../../components/VBtn/VBtn.vue';
import VCheckbox from '../../components/VCheckbox/VCheckbox.vue';
import VInputGroup from '../../components/VInputGroup/VInputGroup.vue';
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';

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
  autocomplateForm: {
    type: String,
    default: 'on',
  },
});

const {
  message,
  title,
  subtitle,
  register,
  usernameText,
  passwordText,
  forgotPasswordText,
  loginText,
  hideRememberMe,
  autocomplateForm,
} = toRefs(props);

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

// Create a form context with the validation schema
const {errors, handleSubmit} = useForm({
  validationSchema: schema,
});

// No need to define rules for fields
const {value: email, errorMessage: emailError} = useField<string>('email');
const {value: password, errorMessage: passwordError} =
  useField<string>('password');
const {value: remember} = useField<boolean>('remember');

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});
</script>

<template>
  <div class="w-full md:w-[400px]">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">{{ title }}</h1>
    <div class="text-gray-600">{{ subtitle }}</div>

    <v-alert v-model="isError" color="error" class="mt-5" icon dismissable>
      {{ message }}
    </v-alert>

    <form @submit.prevent="onSubmit" :autocomplete="autocomplateForm">
      <div class="mt-8">
        <label
          for="email"
          class="mb-2 block font-medium"
          :class="errors.email ? 'text-error' : ''"
        >
          {{ usernameText }}
        </label>
        <v-input-group
          id="email"
          v-model="email"
          :placeholder="usernameText"
          name="email"
          prepend
          :autocomplete="autocomplateForm"
          :error="!!errors.email"
          :error-messages="[errors.email]"
          error-class="min-h-[20px]"
          class="mb-2"
        >
          <template #prepend>
            <UserIcon
              class="w-5 h-5"
              :class="errors.email ? 'text-error' : 'text-[#DFE0E0]'"
            />
          </template>
        </v-input-group>

        <label
          for="password"
          class="mb-2 block font-medium"
          :class="errors.email ? 'text-error' : ''"
        >
          {{ passwordText }}
        </label>
        <v-input-group
          id="password"
          v-model="password"
          :placeholder="passwordText"
          type="password"
          name="password"
          :autocomplete="autocomplateForm"
          prepend
          :error="!!errors.password"
          :error-messages="[errors.password]"
          error-class="min-h-[20px]"
          class="mb-2"
        >
          <template #prepend>
            <LockClosedIcon
              class="w-5 h-5"
              :class="errors.password ? 'text-error' : 'text-[#DFE0E0]'"
            />
          </template>
        </v-input-group>

        <div class="mb-4 flex justify-between items-center">
          <div class="w-6/12">
            <v-checkbox
              v-if="!hideRememberMe"
              v-model="remember"
              label="Remember me"
            />
          </div>
          <slot name="forgotPassword">
            <VBtn
              color="primary"
              text
              dense
              small
              :to="passwordPath"
              class="px-0"
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
          :disabled="loading"
          :loading="loading"
        >
          {{ loginText }}
        </VBtn>
      </div>
      <slot v-if="register" name="register">
        <div class="mt-4">
          Already have an account?
          <v-btn text color="primary" :to="register">Register</v-btn>
        </div>
        <!-- <div class="flex mt-5 w-full items-center gap-x-4 relative">
          <div class="h-2 flex-grow border-b"></div>
          <div class="flex-none pt-2 text-sm font-medium">OR</div>
          <div class="h-2 flex-grow border-b"></div>
        </div>-->
      </slot>
      <slot name="extra" />
    </form>
  </div>
</template>

<style scoped></style>
