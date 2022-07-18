<script setup lang="ts">
import VBtn from '@gits-id/button';

type Props = {
  borderClass?: string;
  fileName?: string;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  hasFile?: boolean;
  changeText?: string;
  browseText?: string;
  hideRemove?: boolean;
  removeText?: string;
};

withDefaults(defineProps<Props>(), {
  borderClass: '',
  changeText: 'Change',
  removeText: 'Remove',
});

const emit =
  defineEmits<{
    (e: 'remove'): void;
    (e: 'choose'): void;
  }>();
</script>

<template>
  <div
    class="
      transition
      duration-300
      border
      group
      rounded-lg
      flex
      gap-4
      items-center
      py-1
    "
    :class="borderClass"
  >
    <div
      class="
        flex-1
        text-gray-500
        hover:text-gray-700
        text-sm
        truncate
        px-3
        py-1
        h-full
      "
      :title="fileName || placeholder"
      @click="emit('choose')"
    >
      {{ fileName || placeholder }}
    </div>
    <div class="space-x-1 px-1">
      <VBtn
        :disabled="readonly || disabled"
        type="button"
        size="sm"
        @click="emit('choose')"
      >
        {{ hasFile ? changeText : browseText }}
      </VBtn>
      <VBtn
        v-if="hasFile && !hideRemove"
        type="button"
        size="sm"
        color="error"
        :disabled="readonly || disabled"
        @click="emit('remove')"
      >
        {{ removeText }}
      </VBtn>
    </div>
  </div>
</template>
