<script setup lang="ts">
import {toRefs} from 'vue';
import VBtn from '@gits-id/button';

const props = defineProps({
  fillHeight: {
    type: Boolean,
    default: true,
  },
  noButton: {
    type: Boolean,
    default: false,
  },
  noImage: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '404 Page Not Found',
  },
  description: {
    type: String,
    default: 'Sorry, the page you are looking is not found',
  },
});

const {fillHeight, noButton, noImage, title, description} = toRefs(props);
</script>

<template>
  <div
    class="flex items-center justify-center"
    :class="[fillHeight ? 'min-h-screen' : '']"
  >
    <div class="mx-auto py-4 text-center">
      <slot v-if="!noImage" name="image" />
      <div class="font-semibold text-2xl mb-2 text-gray-700">
        {{ title }}
      </div>
      <div class="mb-6 text-gray-500">
        {{ description }}
      </div>
      <v-btn v-if="!noButton" to="/" color="primary"> Back to Home </v-btn>
    </div>
  </div>
</template>
