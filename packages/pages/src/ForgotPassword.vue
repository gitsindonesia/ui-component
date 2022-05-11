<script setup>
import {toRefs} from 'vue';
import {AtSymbolIcon} from '@heroicons/vue/outline';
import VBtn from '@gits-id/button';
import {VInput} from '@gits-id/input';
import {useForm} from 'vee-validate';
import {string} from 'yup';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: 'Forgot Password',
  },
  subtitle: {
    type: String,
    default: "We'll send you a reset password link to your email",
  },
  emailText: {
    type: String,
    default: 'Email',
  },
  schema: {
    type: Object,
    default: () => ({
      email: string().required().email().label('Email'),
    }),
  },
});

const {title, subtitle} = toRefs(props);

const emit = defineEmits(['submit']);

const {handleSubmit, errors} = useForm({
  validationSchema: props.schema,
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
    <form @submit.prevent="onSubmit">
      <div class="mt-10">
        <VInput
          id="email"
          name="email"
          type="email"
          wrapper-class="mb-4"
          class="pl-10"
          :label="emailText"
          :placeholder="emailText"
        >
          <template #prepend>
            <AtSymbolIcon
              class="w-5 h-5 ml-3"
              :class="errors.email ? 'text-error' : 'text-gray-300'"
            />
          </template>
        </VInput>

        <VBtn type="submit" color="primary" block uppercase> Submit </VBtn>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
