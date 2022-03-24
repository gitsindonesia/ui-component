<script setup lang="ts">
import {computed, onMounted, ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import PostForm from '../__Form.vue';
import {useRouter} from 'vue-router';
import {usePost} from '../__index';

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {});

const {id} = toRefs(props);
// const emit = defineEmits(['update:modelValue']);

const breadcrumbs = ref([
  {
    title: 'Master Data',
    to: '/cms/posts',
  },
  {
    title: 'Posts',
    to: '/cms/posts',
  },
  {
    title: 'View Post',
    to: `/cms/posts/${id.value}`,
  },
]);

const router = useRouter();
const {loading, item, fetchItem} = usePost();

const initialValues = computed(() => ({
  title: item.value?.title,
  body: item.value?.body,
}));

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <page-header title="View Post" :breadcrumbs="breadcrumbs" />

  <post-form action="view" :initial-values="initialValues" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
