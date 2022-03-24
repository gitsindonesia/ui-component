<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import RoleForm from './__Form.vue';

// interface Props {}

// const props = withDefaults(defineProps<Props>(), {});

// const {} = toRefs(props);
// const emit = defineEmits(['update:modelValue']);

const breadcrumbs = ref([
  {
    title: 'Master Data',
    to: '/cms/roles',
  },
  {
    title: 'Roles',
    to: '/cms/roles',
  },
  {
    title: 'Add Role',
    to: '/cms/roles/create',
  },
]);

const onSubmit = (values: Record<string, unknown>) => {
  console.log(values);
};
</script>

<template>
  <page-header title="Add Role" :breadcrumbs="breadcrumbs" />

  <role-form action="create" @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
