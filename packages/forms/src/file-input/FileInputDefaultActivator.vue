<script setup lang="ts">
import VIcon from '@morpheme/icon';

interface Props {
  open: () => void;
  reset: () => void;
  files: File[];
  uploadText?: string;
  hint?: string;
  dragText?: string;
  icon?: string;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  uploadText: 'Click to upload',
  dragText: 'or drag and drop',
  icon: 'untitled:upload-cloud-02',
});
</script>

<template>
  <div
    class="
      px-6
      py-4
      border
      rounded-[12px]
      text-center
      space-y-1
      transition
      duration-200
    "
    :class="[
      disabled ? 'bg-gray-50 cursor-not-allowed' : 'hover:border-primary-600',
    ]"
  >
    <slot name="icon">
      <div
        class="
          w-10
          h-10
          rounded-full
          bg-gray-100
          border-[6px] border-gray-50
          flex
          items-center
          justify-center
          mx-auto
        "
      >
        <VIcon :name="icon" class="mx-auto text-gray-600" />
      </div>
    </slot>
    <slot>
      <div class="flex gap-1 items-center justify-center">
        <button
          type="button"
          class="font-semibold text-sm"
          :class="[
            disabled ? 'text-gray-400 cursor-not-allowed' : 'text-primary-700',
          ]"
          :aria-label="uploadText"
          :disabled="disabled"
          @click="open"
        >
          {{ uploadText }}
        </button>
        <span class="text-gray-600 text-sm">
          {{ dragText }}
        </span>
      </div>
    </slot>
    <slot name="hint">
      <div class="text-gray-400 text-xs">
        {{ hint }}
      </div>
    </slot>
  </div>
</template>
