<script setup lang="ts">
import {toRefs} from 'vue';
import type {Comment} from '../services';

interface Props {
  comment: Comment;
}

const props = withDefaults(defineProps<Props>(), {});

const {comment} = toRefs(props);
</script>

<template>
  <div class="flex flex-row gap-4">
    <div class="w-12 sm:w-auto">
      <img
        class="w-12 h-12 rounded-full"
        :src="comment.image"
        :alt="`Comment Image`"
      />
    </div>
    <div class="w-10/12 sm:w-full">
      <div class="mb-1 flex justify-between">
        <span class="font-bold text-sm"> {{ comment.user }} </span>
        <span class="text-xs text-gray-500"> {{ comment.time }} </span>
      </div>
      <div class="text-gray-700 text-sm text-justify">
        {{ comment.body }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
