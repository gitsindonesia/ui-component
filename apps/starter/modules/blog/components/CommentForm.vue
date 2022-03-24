<script setup lang="ts">
import {Field, Form} from 'vee-validate';
import {ref, toRefs} from 'vue';
import * as zod from 'zod';
import CommentList from './CommentList.vue';
import type {SubmissionContext} from 'vee-validate';
import {toFormValidator} from '@vee-validate/zod';

interface Props {
  hideReset?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hideReset: false,
});

const {hideReset} = toRefs(props);

const emit = defineEmits(['submit']);

const schema = toFormValidator(
  zod.object({
    name: zod.string().nonempty(),
    email: zod.string().nonempty().email(),
    message: zod.string().nonempty().max(1000),
  }),
);

const onSubmit = (evt: any, ctx: any) => {
  emit('submit', {values: evt, resetForm: ctx.resetForm});
};
</script>

<template>
  <Form
    v-slot="{isSubmitting, resetForm}"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <h3 class="text-xl sm:text-xl font-bold">Add Comment</h3>
    <h3 class="text-gray-700 mb-4">What's your thought?</h3>

    <v-form-group label-for="name" label="Name">
      <Field v-slot="{field, errors}" name="name">
        <v-input
          id="name"
          :error="!!errors.length"
          :error-messages="errors"
          placeholder="Your Name"
          v-bind="field"
        />
      </Field>
    </v-form-group>

    <v-form-group label-for="email" label="Email">
      <Field v-slot="{field, errors}" name="email">
        <v-input
          id="email"
          :error="!!errors.length"
          :error-messages="errors"
          placeholder="Your Email"
          v-bind="field"
        />
      </Field>
    </v-form-group>

    <v-form-group label-for="message" label="Message">
      <Field v-slot="{field, errors}" name="message">
        <v-textarea
          id="message"
          :error="!!errors.length"
          :error-messages="errors"
          rows="5"
          placeholder="Your Message"
          v-bind="field"
        />
      </Field>
    </v-form-group>

    <v-btn type="submit" color="primary" :disabled="isSubmitting">
      Submit
    </v-btn>
    <v-btn
      v-if="!hideReset"
      class="ml-2"
      type="reset"
      :disabled="isSubmitting"
      @click="resetForm"
    >
      Reset
    </v-btn>
  </Form>
</template>

<style scoped></style>
