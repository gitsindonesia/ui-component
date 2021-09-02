<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {UserIcon, LockClosedIcon} from '@heroicons/vue/outline';
import VInput from '../../components/VInput/VInput.vue';
import VBtn from '../../components/VBtn/VBtn.vue';
import VCheckbox from '../../components/VCheckbox/VCheckbox.vue';
import VInputGroup from '../../components/VInputGroup/VInputGroup.vue';
import {useForm, useField} from 'vee-validate';
import {string, object} from 'yup';

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
});

const {message, title, subtitle, register} = toRefs(props);

const emit = defineEmits(['submit', 'loginSSO']);

const isError = ref(false);

watch(
  message,
  () => {
    isError.value = !!props.message;
  },
  {immediate: true},
);

// Define a validation schema
const schema = object({
  email: string().required().label('Email'),
  password: string().required().label('Password'),
  // remember: undefined,
});

// Create a form context with the validation schema
const {errors, handleSubmit} = useForm({
  validationSchema: schema,
});

// No need to define rules for fields
const {value: email, errorMessage: emailError} = useField('email');
const {value: password, errorMessage: passwordError} = useField('password');
const {value: remember} = useField('remember');

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});
</script>

<template>
  <div class="w-full md:w-[400px]">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">{{ title }}</h1>
    <div class="text-gray-600">{{ subtitle }}</div>

    <v-alert v-model="isError" color="error" class="mt-5" icon dismissable>{{
      message
    }}</v-alert>

    <form @submit.prevent="onSubmit">
      <div class="mt-8">
        <label
          for="email"
          class="mb-2 block font-medium"
          :class="errors.email ? 'text-error' : ''"
        >
          Email
        </label>
        <v-input-group
          id="email"
          v-model="email"
          placeholder="Email"
          name="email"
          prepend
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
          Password
        </label>
        <v-input-group
          id="password"
          v-model="password"
          placeholder="Password"
          type="password"
          name="password"
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
          <v-checkbox v-model="remember" label="Remember me" />
          <VBtn color="primary" text dense small :to="passwordPath" class="px-0"
            >Forgot Password</VBtn
          >
        </div>

        <VBtn
          type="submit"
          color="primary"
          block
          uppercase
          :disabled="loading"
          :loading="loading"
          >Login</VBtn
        >
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
