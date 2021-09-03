<script setup>
import {ref, toRefs, watch} from 'vue';
import {UserIcon, LockClosedIcon} from '@heroicons/vue/outline';
import VInput from '../../components/VInput/VInput.vue';
import VBtn from '../../components/VBtn/VBtn.vue';
import VInputGroup from '../../components/VInputGroup/VInputGroup.vue';
import {useForm, useField} from 'vee-validate';
import * as zod from 'zod';

const props = defineProps({
  title: {
    type: String,
    default: 'Activate Your Account',
  },
  subtitle: {
    type: String,
    default: 'Create a secure password to activate your account',
  },
  message: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const {message, title, subtitle} = toRefs(props);

const emit = defineEmits(['submit']);

const isError = ref(false);

watch(
  message,
  () => {
    isError.value = !!props.message;
  },
  {immediate: true},
);

const schema = zod.object({
  password: zod.string().required().min(8).label('Password'),
  passwordConfirmation: zod
    .string()
    .required()
    .oneOf([YupRef('password'), null], 'Passwords must match')
    .label('Password Confirmation'),
});

const {errors, handleSubmit} = useForm({
  validationSchema: schema,
});

const {value: password, errorMessage: passwordError} = useField('password');
const {value: passwordConfirmation, errorMessage: passwordConfirmationError} =
  useField('passwordConfirmation');

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});
</script>

<template>
  <div class="w-auto md:w-[400px]">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">
      {{ title }}
    </h1>
    <div class="text-gray-600">
      {{ subtitle }}
    </div>

    <v-alert v-model="isError" color="error" class="mt-5" icon dismissable>
      {{ message }}
    </v-alert>

    <form @submit.prevent="onSubmit">
      <div class="mt-8">
        <label
          for="password"
          class="mb-2 block font-medium"
          :class="errors.password ? 'text-error' : ''"
        >
          Create Password
        </label>
        <VInputGroup
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
        </VInputGroup>

        <label
          for="password"
          class="mb-2 block font-medium"
          :class="errors.passwordConfirmation ? 'text-error' : ''"
        >
          Re-type Your Password
        </label>
        <VInputGroup
          id="passwordConfirmation"
          v-model="passwordConfirmation"
          placeholder="Password"
          type="password"
          name="password_confirmation"
          prepend
          :error="!!errors.passwordConfirmation"
          :error-messages="[errors.passwordConfirmation]"
          error-class="min-h-[20px]"
          class="mb-2"
        >
          <template #prepend>
            <LockClosedIcon
              class="w-5 h-5"
              :class="
                errors.passwordConfirmation ? 'text-error' : 'text-[#DFE0E0]'
              "
            />
          </template>
        </VInputGroup>

        <VBtn
          type="submit"
          color="primary"
          block
          uppercase
          :disabled="loading"
          :loading="loading"
        >
          Activate My Account
        </VBtn>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
