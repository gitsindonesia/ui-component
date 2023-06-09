<script setup lang="ts">
import VSpinner from '@morpheme/spinner';
import {computed} from 'vue';
import Icon from '@morpheme/icon';

type Props = {
  rounded?: boolean;
  sizeClass?: string;
  borderClass?: string;
  previewURL?: string | null;
  loading?: boolean;
  image?: boolean;
  fileName?: string;
  hasFile?: boolean;
  loadingText?: string;
  browseText?: string;
  previewClass?: string;
};

const props = withDefaults(defineProps<Props>(), {
  rounded: false,
  loadingText: 'Loading...',
  browseText: 'Browse',
});

const emit =
  defineEmits<{
    (e: 'choose'): void;
  }>();

const backgroundImage = computed(() =>
  props.image && !props.loading ? `url(${props.previewURL})` : 'none',
);
</script>

<template>
  <div>
    <button
      class="
        appearance-none
        transition
        duration-300
        border
        dark:hover:border-gray-true-500
        dark:border-gray-true-700
        cursor-pointer
        flex flex-col
        items-center
        justify-center
        py-10
        bg-no-repeat bg-contain bg-center
        max-w-full
      "
      :class="[sizeClass, {'rounded-lg': rounded}, borderClass, previewClass]"
      :style="{backgroundImage}"
      type="button"
      @click="emit('choose')"
    >
      <v-spinner v-if="loading" color="primary" large />
      <div v-else-if="hasFile" class="px-2 text-center">
        <slot name="filename" :value="fileName">
          {{ image ? '' : fileName }}
        </slot>
      </div>
      <template v-else>
        <Icon
          name="heroicons:camera-solid"
          class="w-10 h-10 text-gray-500 dark:text-gray-true-500 mb-1"
        />
        <div class="text-gray-500 text-sm dark:text-gray-true-500">
          {{ loading ? loadingText : browseText }}
        </div>
      </template>
    </button>
  </div>
</template>
