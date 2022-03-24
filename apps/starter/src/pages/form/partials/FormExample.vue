<script setup lang="ts">
import {reactive, ref, toRefs} from 'vue';
import {object, string} from 'yup';
import {Field, Form} from 'vee-validate';
import {VEditor} from '@gits-id/ui';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Form',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  initialValues: {
    type: Object,
    default: () => ({}),
  },
});

const {modelValue} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'submit', 'cancel']);

const genders = ref([
  {
    text: 'Male',
    value: 'male',
  },
  {
    text: 'Female',
    value: 'female',
  },
]);

const statusItems = ref([
  {
    text: 'Active',
    value: true,
  },
  {
    text: 'Inactive',
    value: false,
  },
]);

const tags = ref([
  {
    text: 'Tag 1',
    value: 1,
  },
  {
    text: 'Tag 2',
    value: 2,
  },
]);

const isOpen = ref(false);

const initialValues = reactive({
  ...props.initialValues,
});

const schema = object({
  name: string().required().label('Name'),
  email: string().required().label('Email'),
  password: string().min(8).max(100).required().label('Password'),
});

const onSubmit = (values: any) => {
  emit('submit', values);
};

const onCancel = () => emit('cancel');
</script>

<template>
  <Form
    v-slot="{handleSubmit, meta: {pending: submitting}}"
    :initial-values="initialValues"
    :validation-schema="schema"
  >
    <form @submit.prevent="handleSubmit(onSubmit)">
      <v-card
        default-wrapper-class="!border-none px-0"
        default-body-class="px-0"
        header-class="capitalize hidden"
        footer-class="flex gap-2 hidden"
      >
        <Field v-slot="{field, errors}" name="name">
          <v-form-group :inline="inline" label="Name" label-for="name">
            <v-input
              id="name"
              placeholder="Name"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="email">
          <v-form-group :inline="inline" label="Email" label-for="email">
            <v-input
              id="email"
              placeholder="Email"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="password">
          <v-form-group :inline="inline" label="Password" label-for="password">
            <v-input
              id="password"
              placeholder="Password"
              type="password"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="gender">
          <v-form-group :inline="inline" label="Gender" label-for="gender">
            <v-select
              id="gender"
              placeholder="Gender"
              :items="genders"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="status">
          <v-form-group :inline="inline" label="Status" label-for="status">
            <v-radio-group
              id="status"
              placeholder="Status"
              :items="statusItems"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="image0">
          <v-form-group :inline="inline" label="Image" label-for="image0">
            <v-file-upload
              id="image0"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="image">
          <v-form-group :inline="inline" label="Image" label-for="image">
            <v-file-upload
              id="image"
              theme="dropzone"
              preview
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="image2">
          <v-form-group :inline="inline" label="Image" label-for="image2">
            <v-file-upload
              id="image2"
              theme="image"
              preview
              image
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="image3">
          <v-form-group :inline="inline" label="Image" label-for="image3">
            <v-file-upload
              id="image3"
              theme="button"
              preview
              image
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="tags">
          <v-form-group :inline="inline" label="Tags" label-for="tags">
            <v-multi-select
              id="tags"
              :items="tags"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="content">
          <v-form-group :inline="inline" label="Content" label-for="content">
            <v-editor
              id="content"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
            />
          </v-form-group>
        </Field>

        <div class="flex flex-col sm:flex-row border-t pt-5">
          <div v-if="inline" class="w-full sm:w-3/12"></div>
          <v-btn :loading="submitting" type="submit" color="primary">
            Submit
          </v-btn>
          <v-btn
            :disabled="submitting"
            type="reset"
            class="ml-2"
            @click="onCancel"
          >
            Cancel
          </v-btn>
        </div>
      </v-card>
    </form>
  </Form>
</template>

<style scoped></style>
