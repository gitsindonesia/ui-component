<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import UserForm from './__Form.vue';
import {useUser} from './__index';
import {useRouter} from 'vue-router';

// interface Props {}

// const props = withDefaults(defineProps<Props>(), {});

// const {} = toRefs(props);
// const emit = defineEmits(['update:modelValue']);

const breadcrumbs = ref([
  {
    title: 'Master Data',
    to: '/cms/users',
  },
  {
    title: 'Users',
    to: '/cms/users',
  },
  {
    title: 'Add User',
    to: '/cms/users/create',
  },
]);

const router = useRouter();
const {loading, create} = useUser();

const onSubmit = async (values: Record<string, unknown>) => {
  const res = await create(values);

  if (res.id) {
    router.push('/cms/users');
  } else {
    // TODO: handle errors
  }
};
</script>

<template>
  <page-header title="Add User" :breadcrumbs="breadcrumbs" />

  <user-form action="create" :loading="loading.create" @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
