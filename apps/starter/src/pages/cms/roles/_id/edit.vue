<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import RoleForm from '../__Form.vue';

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {});

const {id} = toRefs(props);
// const emit = defineEmits(['update:modelValue']);

const breadcrumbs = ref([
  {
    title: 'Master Data',
    to: '/cms/Roles',
  },
  {
    title: 'Roles',
    to: '/cms/Roles',
  },
  {
    title: 'Edit Role',
    to: `/cms/Roles/${id.value}/edit`,
  },
]);

const onSubmit = (values: Record<string, unknown>) => {
  console.log(values);
};
</script>

<template>
  <page-header title="Edit Role" :breadcrumbs="breadcrumbs" />

  <role-form action="edit" @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
