<script setup lang="ts">
import {computed, ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import type {Actions} from '~/composables';
import {useFormAction} from '~/composables';
import * as zod from 'zod';
import {toFormValidator} from '@vee-validate/zod';

interface Props {
  action: Actions;
}

const props = withDefaults(defineProps<Props>(), {});

const {action} = toRefs(props);

const emit = defineEmits(['submit']);

const {isEdit, isCreate, isView} = useFormAction(action.value);
const title = computed(() => `${action.value} Role`);

const schema = toFormValidator(
  zod.object({
    name: isView.value ? zod.string() : zod.string().nonempty(),
  }),
);

const onSubmit = (values: any) => {
  emit('submit', values);
};

const headers = [
  {
    text: '#',
    value: 'selected',
    sortable: false,
  },
  {
    text: 'Name',
    value: 'name',
  },
];

const permissions = ref(
  Array.from({length: 20}).map((v, k) => ({
    name: `Permission ${k}`,
    slug: `permission_${k}`,
    selected: true,
  })),
);

const search = ref('');

const selectedAll = ref(false);
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <v-card
        title="Role Detail"
        class="w-full sm:w-4/12"
        header-class="capitalize"
        footer-class="flex gap-2"
      >
        <Field v-slot="{field, errors}" name="name">
          <v-form-group label="Name" label-for="name">
            <v-input
              id="name"
              placeholder="Name"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
              :readonly="isView"
            />
          </v-form-group>
        </Field>

        <Field v-slot="{field, errors}" name="description">
          <v-form-group label="Description" label-for="description">
            <v-textarea
              id="description"
              placeholder="Description"
              v-bind="field"
              :error="!!errors.length"
              :error-messages="errors"
              :readonly="isView"
              rows="5"
            />
          </v-form-group>
        </Field>

        <!-- <template v-if="!isView" #footer>
          <v-btn type="submit" color="primary"> Submit </v-btn>
          <v-btn type="reset" to="/cms/Roles"> Cancel </v-btn>
        </template> -->
      </v-card>

      <v-card class="w-full sm:w-8/12" hide-footer body-class="!px-0">
        <template #header>
          <div
            class="
              flex flex-col
              sm:flex-row
              items-start
              smn:items-center
              justify-between
              gap-3
            "
          >
            <div>Permissions</div>
            <div class="w-full sm:w-4/12">
              <v-input
                v-model="search"
                append-icon="search"
                placeholder="Search..."
              />
            </div>
          </div>
        </template>
        <v-data-table
          v-model:search="search"
          search-by="name"
          class="border-t !rounded-none !shadow-none"
          :items="permissions"
          :headers="headers"
        >
          <template #header.selected="{item}">
            <v-checkbox v-model="selectedAll" :disabled="isView" />
          </template>
          <template #item.selected="{item}">
            <v-checkbox v-model="item.selected" :disabled="isView" />
          </template>
        </v-data-table>
      </v-card>
    </div>

    <v-card
      v-if="!isView"
      body-class="p-4 grid grid-cols-1 sm:flex gap-4 justify-end"
      hide-header
      hide-footer
    >
      <v-btn type="submit" color="primary"> Submit </v-btn>
      <v-btn type="reset" to="/cms/Roles"> Cancel </v-btn>
    </v-card>
  </Form>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
