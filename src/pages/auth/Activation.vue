<script setup>
import {ref, toRefs, watch} from 'vue';
import {UserIcon, LockClosedIcon, ArrowLeftIcon} from '@heroicons/vue/outline';
import VInput from '../../components/VInput/VInput.vue';
import VBtn from '../../components/VBtn/VBtn.vue';
import VInputGroup from '../../components/VInputGroup/VInputGroup.vue';
import {Form, Field} from 'vee-validate';
import {string, object, ref as YupRef} from 'yup';

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

const schema = object({
  currentPassword: props.withOldPassword
    ? string().required().label(props.currentPasswordText)
    : undefined,
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

const onSubmit = (values) => {
  emit('submit', values);
};
</script>

<template>
  <div class="w-auto md:w-[400px] px-4">
    <slot name="back">
      <v-btn
        v-if="backArrow"
        color="primary"
        text
        class="relative -left-10 md:absolute md:top-20 md:left-24 gap-4"
        @click="cancel"
      >
        <ArrowLeftIcon class="w-6 h-6" />

        <span v-if="backText" class="text-gray-1">{{ backText }}</span>
      </v-btn>
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

    <v-alert v-model="isError" color="error" class="mt-5" icon dismissable>
      {{ message }}
    </v-alert>

    <Form v-slot="{handleSubmit, errors}" :validation-schema="schema">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="mt-8">
          <template v-if="withOldPassword">
            <label
              for="currentPassword"
              class="mb-2 block font-medium"
              :class="errors.currentPassword ? 'text-error' : ''"
            >
              {{ currentPasswordText }}
            </label>

            <Field v-slot="{field, errors: fieldErrors}" name="currentPassword">
              <VInputGroup
                id="currentPassword"
                v-bind="field"
                :placeholder="currentPasswordText"
                type="password"
                name="currentPassword"
                :error="!!fieldErrors.length"
                :error-messages="[fieldErrors.length]"
                error-class="min-h-[20px]"
                class="mb-4"
              >
                <template v-if="currentPasswordHint" #hint>
                  <div class="text-sm mt-1">
                    {{ currentPasswordHint }}
                  </div>
                </template>
              </VInputGroup>
            </Field>
          </template>

          <label
            for="password"
            class="mb-2 block font-medium"
            :class="errors.password ? 'text-error' : ''"
          >
            {{ passwordText }}
          </label>

          <Field v-slot="{field, errors: fieldErrors}" name="password">
            <VInputGroup
              id="password"
              v-bind="field"
              :placeholder="passwordText"
              type="password"
              name="password"
              :error="!!fieldErrors.length"
              :error-messages="fieldErrors"
              error-class="min-h-[20px]"
              class="mb-4"
            >
              <template v-if="!fieldErrors.length" #hint>
                <div class="text-sm mt-1">
                  {{ passwordHint }}
                </div>
              </template>
            </VInputGroup>
          </Field>

          <label
            for="password"
            class="mb-2 block font-medium"
            :class="errors.passwordConfirmation ? 'text-error' : ''"
          >
            {{ passwordConfirmationText }}
          </label>

          <Field
            v-slot="{field, errors: fieldErrors}"
            name="passwordConfirmation"
          >
            <VInputGroup
              id="passwordConfirmation"
              v-bind="field"
              :placeholder="passwordConfirmationText"
              type="password"
              name="passwordConfirmation"
              :error="!!fieldErrors.length"
              :error-messages="[fieldErrors.length]"
              error-class="min-h-[20px]"
              class="mb-2"
            >
            </VInputGroup>
          </Field>

          <VBtn
            type="submit"
            color="primary"
            block
            uppercase
            :disabled="loading"
            :loading="loading"
          >
            {{ submitText }}
          </VBtn>
        </div>
      </form>
    </Form>
  </div>
</template>

<style scoped></style>
