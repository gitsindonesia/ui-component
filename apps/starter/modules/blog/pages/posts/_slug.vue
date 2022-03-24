<script setup lang="ts">
import {onMounted, ref, toRefs} from 'vue';
import PostItem from '../../components/PostItem.vue';
import CommentList from '../../components/CommentList.vue';
import CommentForm from '../../components/CommentForm.vue';
import PostDetail from '../../components/PostDetail.vue';
import NextReading from '../../components/NextReading.vue';
import RelatedPosts from '../../components/RelatedPosts.vue';
import {useRoute} from 'vue-router';
import {useBlog} from '../../blog';
import {CommentRaw} from '../../types';

interface Props {
  slug?: string;
}

const props = withDefaults(defineProps<Props>(), {
  slug: '',
});

const {slug} = toRefs(props);

const emit = defineEmits(['update:slug']);

const breadcrumbs = ref([
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
    to: '/blog/posts/lorem-ipsum-1',
  },
]);

const route = useRoute();

const {
  post,
  relatedPosts,
  nextReading,
  comments,
  getPostById,
  getRelatedPosts,
  getNextReading,
  getComments,
} = useBlog();

onMounted(() => {
  const id = Number(String(route.params.slug).split('-').pop());

  getPostById(id);
  getRelatedPosts(id);
  getNextReading(id);
  getComments(id);
});

const onCommentSubmitted = ({
  values,
  resetForm,
}: {
  values: CommentRaw;
  resetForm: (state?: Partial<{}>) => void;
}) => {
  const id = comments.value.length + 1;
  comments.value.push({
    id,
    user: values.name,
    body: values.message,
    time: 'a moment ago',
    image: `https://i.pravatar.cc/120?img=${id}`,
  });
  resetForm();
};
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" />

  <div v-if="post" class="flex flex-col sm:flex-row gap-6">
    <div class="w-full sm:w-8/12">
      <post-detail :post="post" />

      <comment-list :comments="comments" />

      <comment-form @submit="onCommentSubmitted" />

      <div class="mt-12 mb-10">
        <next-reading :posts="nextReading" />
      </div>
    </div>
    <div class="w-full sm:w-4/12">
      <related-posts :posts="relatedPosts" />
    </div>
  </div>
</template>

<style scoped></style>
