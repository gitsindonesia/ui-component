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
    title: 'View Role',
    to: `/cms/Roles/${id.value}`,
  },
]);
</script>

<template>
  <page-header title="View Role" :breadcrumbs="breadcrumbs" />

  <role-form action="view" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
