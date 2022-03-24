<script setup lang="ts">
import {ref, toRefs} from 'vue';
import type {Comment} from '../services';
import CommentItem from './CommentItem.vue';

interface Props {
  comments: Comment[];
}

const props = withDefaults(defineProps<Props>(), {});

const {comments} = toRefs(props);

// const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="mb-10">
    <h3 class="text-xl sm:text-xl font-bold mb-5">
      Comments ({{ comments.length }})
    </h3>

    <div class="flex flex-col gap-6">
      <comment-item
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<style scoped></style>
