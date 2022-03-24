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
    title: 'View User',
    to: `/cms/users/${id.value}`,
  },
]);

const router = useRouter();
const {loading, item, fetchItem} = useUser();

const initialValues = computed(() => ({
  name: item.value?.name,
  email: item.value?.email,
}));

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <page-header title="View User" :breadcrumbs="breadcrumbs" />

  <user-form action="view" :initial-values="initialValues" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
