<script setup lang="ts">
import {computed, onMounted, ref, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import PostForm from '../__Form.vue';
import {useRouter} from 'vue-router';
import {usePost} from '../__index';
import {useToast} from '@gits-id/ui';

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
    title: 'Edit Post',
    to: `/cms/posts/${id.value}/edit`,
  },
]);

const router = useRouter();
const toast = useToast();
const {loading, item, fetchItem, update} = usePost();

const initialValues = computed(() => ({
  title: item.value?.title,
  body: item.value?.body,
}));

const onSubmit = async (values: Record<string, unknown>) => {
  try {
    const res = await update(id.value, values);

    router.push('/cms/posts');
  } catch (e: any) {
    toast.show(e.message, {color: 'error'});
  }
};

onMounted(() => {
  fetchItem(id.value);
});
</script>

<template>
  <page-header title="Edit Post" :breadcrumbs="breadcrumbs" />

  <post-form
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
