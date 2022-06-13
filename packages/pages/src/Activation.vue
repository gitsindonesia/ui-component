<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {VInput} from '@gits-id/forms';
import Button from '@gits-id/button';
import {useForm} from 'vee-validate';
import {string, object, ref as YupRef} from 'yup';
import Alert from '@gits-id/alert';
import {Icon} from '@iconify/vue';

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
  submitText: {
    type: String,
    default: 'Ubah Kata Sandi',
  },
  passwordText: {
    type: String,
    default: 'Kata Sandi Baru',
  },
  passwordHint: {
    type: String,
    default: '',
  },
  passwordConfirmationText: {
    type: String,
    default: 'Konfirmasi Kata Sandi Baru',
  },
  currentPasswordText: {
    type: String,
    default: 'Kata Sandi Lama',
  },
  currentPasswordHint: {
    type: String,
    default: '',
  },
  withOldPassword: {
    type: Boolean,
    default: false,
  },
  passwordFormatError: {
    type: String,
    default: 'Kata Sandi harus berisi 8 karakter dan minimal ada 1 angka',
  },
  backArrow: {
    type: Boolean,
    default: false,
  },
  backText: {
    type: String,
    default: 'Kembali ke halaman Login',
  },
  passwordMatchError: {
    type: String,
    default: 'Tidak sesuai dengan kata sandi baru',
  },
  passwordConfirmationHint: {
    type: String,
    default: '',
  },
});

const {message, title, subtitle} = toRefs(props);

const emit = defineEmits(['submit', 'cancel']);

const isError = ref(false);

watch(
  message,
  () => {
    isError.value = !!props.message;
  },
  {immediate: true},
);

const schema = object({
  currentPassword: props.withOldPassword
    ? string().required().label(props.currentPasswordText)
    : string(),
  password: string()
    .required()
    .min(8)
    .matches(
      /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/i,
      props.passwordFormatError,
    )
    .label(props.passwordText),
  passwordConfirmation: string()
    .required()
    .oneOf([YupRef('password'), null], props.passwordMatchError)
    .label(props.passwordConfirmationText),
});

const {handleSubmit} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
});

const cancel = () => {
  emit('cancel');
};
</script>

<template>
  <div class="w-auto md:w-[400px] px-4">
    <slot name="back">
      <Button
        v-if="backArrow"
        color="primary"
        text
        class="relative -left-10 md:absolute md:top-20 md:left-24 gap-4"
        @click="cancel"
      >
        <Icon class="w-6 h-6" icon="heroicons-outline:arrow-left" />

        <span v-if="backText" class="text-gray-1">{{ backText }}</span>
      </Button>
    </slot>
    <slot name="logo" />
    <slot name="header">
      <h1 class="font-extrabold text-4xl mb-2">
        {{ title }}
      </h1>
      <div class="text-gray-600">
        {{ subtitle }}
      </div>
    </slot>

    <Alert v-model="isError" color="error" class="mt-5" dismissable>
      {{ message }}
    </Alert>

    <form @submit.prevent="onSubmit">
      <div class="mt-8">
        <VInput
          v-if="withOldPassword"
          id="currentPassword"
          name="currentPassword"
          type="password"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:lock-closed"
          :label="currentPasswordText"
          :placeholder="currentPasswordText"
          :hint="currentPasswordHint"
        />

        <VInput
          id="password"
          name="password"
          type="password"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:lock-closed"
          :label="passwordText"
          :placeholder="passwordText"
          :hint="passwordHint"
        />

        <VInput
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="passwordConfirmation"
          wrapper-class="mb-4"
          prepend-icon="heroicons-outline:lock-closed"
          :label="passwordConfirmationText"
          :placeholder="passwordConfirmationText"
          :hint="passwordConfirmationHint"
        />

        <Button
          type="submit"
          color="primary"
          block
          uppercase
          :disabled="loading"
          :loading="loading"
        >
          {{ submitText }}
        </Button>
      </div>
    </form>
  </div>
</template>
