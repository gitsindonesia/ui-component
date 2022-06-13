<script setup>
import {toRefs} from 'vue';
import {LockClosedIcon} from '@heroicons/vue/outline';
import VBtn from '@gits-id/button';
import {VInput} from '@gits-id/forms';
import {string, object, ref as YupRef} from 'yup';
import {useForm} from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: 'Reset Password',
  },
  subtitle: {
    type: String,
    default: 'Create a new and secure password for your account',
  },
  passwordMatchError: {
    type: String,
    default: 'Tidak sesuai dengan kata sandi baru',
  },
  passwordFormatError: {
    type: String,
    default: 'Kata Sandi harus berisi 8 karakter dan minimal ada 1 angka',
  },
  passwordConfirmationText: {
    type: String,
    default: 'Konfirmasi Kata Sandi Baru',
  },
  passwordText: {
    type: String,
    default: 'Kata Sandi Baru',
  },
  submitText: {
    type: String,
    default: 'Reset Password',
  },
});

const {title, subtitle} = toRefs(props);

const emit = defineEmits(['submit']);

const passwordRegex = /[^\w\d]*((\d+.*[A-Za-z]+.*)|[A-Za-z]+.*(\d+.*))/i;

const schema = object({
  password: string()
    .required()
    .min(8)
    .matches(passwordRegex, props.passwordFormatError)
    .label(props.passwordText),
  passwordConfirmation: string()
    .required()
    .oneOf([YupRef('password'), null], props.passwordMatchError)
    .label(props.passwordConfirmationText),
});

const {handleSubmit, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});
</script>

<template>
  <div class="">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">
      {{ title }}
    </h1>
    <div class="text-gray-600">
      {{ subtitle }}
    </div>
    <form @submit="onSubmit">
      <div class="mt-10">
        <VInput
          id="password"
          name="password"
          type="password"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:lock-closed"
          :label="passwordText"
          :placeholder="passwordText"
        />

        <VInput
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:lock-closed"
          :label="passwordConfirmationText"
          :placeholder="passwordConfirmationText"
        />

        <VBtn color="primary" type="submit" block> {{ submitText }} </VBtn>
      </div>
    </form>
  </div>
</template>
