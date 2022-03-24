<script setup lang="ts">
import {computed, PropType, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import type {Actions} from '~/composables';
import {useFormAction} from '~/composables';
import {object, string} from 'yup';

// interface Props {
//   action: Actions;
//   loading?: boolean;
//   initialValues?: Record<string, any>;
// }

// const props = withDefaults(defineProps<Props>(), {
//   loading: false,
// });

const props = defineProps({
  action: {
    type: String as PropType<Actions>,
    default: 'view',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  initialValues: {
    type: Object,
    default: () => ({}),
  },
});

const {action, loading, initialValues} = toRefs(props);

const emit = defineEmits(['submit']);

const {isEdit, isCreate, isView} = useFormAction(action.value);
const title = computed(() => `${action.value} User`);

const schema = computed(() => {
  if (isView.value) return {};

  return object({
    name: string().required().label('Name'),
    email: string().required().label('Email'),
    password: string().min(8).max(100).required().label('Password'),
  });
});

const onSubmit = (values: any) => {
  emit('submit', values);
};
</script>

<template>
  <Form
    :initial-values="initialValues"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <v-card :title="title" header-class="capitalize" footer-class="flex gap-2">
      <Field v-slot="{field, errors}" name="name">
        <v-form-group label="Name" label-for="name">
          <v-input
            id="name"
            placeholder="Name"
            v-bind="field"
            :error="!!errors.length"
            :error-messages="errors"
            :readonly="isView"
            :text="isView"
          />
        </v-form-group>
      </Field>

      <Field v-slot="{field, errors}" name="email">
        <v-form-group label="Email" label-for="email">
          <v-input
            id="email"
            placeholder="Email"
            v-bind="field"
            :error="!!errors.length"
            :error-messages="errors"
            :readonly="isView"
            :text="isView"
          />
        </v-form-group>
      </Field>

      <Field v-if="!isView" v-slot="{field, errors}" name="password">
        <v-form-group label="Password" label-for="password">
          <v-input
            id="password"
            placeholder="Password"
            type="password"
            v-bind="field"
            :error="!!errors.length"
            :error-messages="errors"
            :readonly="isView"
            :text="isView"
          />
        </v-form-group>
      </Field>

      <template v-if="!isView" #footer>
        <v-btn :loading="loading" type="submit" color="primary"> Submit </v-btn>
        <v-btn :disabled="loading" type="reset" to="/cms/users"> Cancel </v-btn>
      </template>
    </v-card>
  </Form>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
