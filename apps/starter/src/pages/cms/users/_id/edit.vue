<script setup lang="ts">
import {computed, onMounted, ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import {useRouter} from 'vue-router';
import UserForm from '../__Form.vue';
import {useUser} from '../__index';

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {});

const {id} = toRefs(props);
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
    title: 'Edit User',
    to: `/cms/users/${id.value}/edit`,
  },
]);

const router = useRouter();
const {loading, item, fetchItem, update} = useUser();

const initialValues = computed(() => ({
  name: item.value?.name,
  email: item.value?.email,
}));

const onSubmit = async (values: Record<string, unknown>) => {
  const res = await update(id.value, values);

  if (res.id) {
    router.push('/cms/users');
  } else {
    // TODO: handle errors
  }
};

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <page-header title="Edit User" :breadcrumbs="breadcrumbs" />

  <user-form
    action="edit"
    :initial-values="initialValues"
    :loading="loading.update"
    @submit="onSubmit"
  />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
