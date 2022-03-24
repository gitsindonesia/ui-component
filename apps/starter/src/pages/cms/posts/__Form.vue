<script setup lang="ts">
import {computed, defineComponent, PropType, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import type {Actions} from '~/composables';
import {useFormAction} from '~/composables';
import {object, string} from 'yup';
import {VEditor} from '@gits-id/ui';

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
const title = computed(() => `${action.value} Post`);

const schema = computed(() => {
  if (isView.value) return {};

  return object({
    title: string().required().label('Title'),
    body: string().required().label('Content'),
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
    <v-card
      :title="title"
      header-class="capitalize"
      footer-class="flex gap-2 bg-gray-50 rounded-b-lg"
    >
      <Field v-slot="{field, errors}" name="title">
        <v-form-group label="Title" label-for="title">
          <div v-if="isView" class="text-sm text-gray-800">
            {{ initialValues?.title }}
          </div>
          <v-input
            v-else
            id="title"
            placeholder="Title"
            v-bind="field"
            :error="!!errors.length"
            :error-messages="errors"
            :readonly="isView"
            :text="isView"
          />
        </v-form-group>
      </Field>

      <Field v-slot="{field, errors}: any" name="body">
        <v-form-group label="Content" label-for="body">
          <div
            v-if="isView"
            class="text-sm text-gray-800"
            v-html="initialValues?.body"
          ></div>
          <v-editor
            v-else
            id="body"
            placeholder="Content"
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
        <v-btn :disabled="loading" type="reset" to="/cms/posts"> Cancel </v-btn>
      </template>
    </v-card>
  </Form>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
