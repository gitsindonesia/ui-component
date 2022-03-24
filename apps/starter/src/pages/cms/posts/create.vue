<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import PostForm from './__Form.vue';
import {usePost} from './__index';
import {useRouter} from 'vue-router';
import {useToast} from '@gits-id/ui';

// interface Props {}

// const props = withDefaults(defineProps<Props>(), {});

// const {} = toRefs(props);
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
    title: 'Add Post',
    to: '/cms/posts/create',
  },
]);

const router = useRouter();
const toast = useToast();
const {loading, create} = usePost();

const onSubmit = async (values: Record<string, unknown>) => {
  try {
    const res = await create(values);

    router.push('/cms/posts');
  } catch (e: any) {
    toast.show(e.message);
  }
};
</script>

<template>
  <page-header title="Add Post" :breadcrumbs="breadcrumbs" />

  <post-form action="create" :loading="loading.create" @submit="onSubmit" />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: cms
</route>
