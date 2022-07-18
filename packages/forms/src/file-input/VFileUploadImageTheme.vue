<script setup lang="ts">
import VSpinner from '@gits-id/spinner';
import {computed} from 'vue';
import {CameraIcon} from '@heroicons/vue/solid';

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
        cursor-pointer
        flex flex-col
        items-center
        justify-center
        py-10
        bg-no-repeat bg-contain bg-center
        max-w-full
      "
      :class="[sizeClass, {'rounded-lg': rounded}, borderClass]"
      :style="{backgroundImage}"
      @click="emit('choose')"
    >
      <v-spinner v-if="loading" color="primary" large />
      <div v-else-if="hasFile" class="px-2 text-center">
        {{ image ? '' : fileName }}
      </div>
      <template v-else>
        <CameraIcon class="w-10 h-10 text-gray-500 mb-1" />
        <div class="uppercase text-gray-500">
          {{ loading ? loadingText : browseText }}
        </div>
      </template>
    </button>
  </div>
</template>
