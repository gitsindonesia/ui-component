<script setup lang="ts">
import VBtn from '@gits-id/button';
import {PlusIcon, TrashIcon} from '@heroicons/vue/solid';

type Props = {
  hasFile?: boolean;
  disabledClass?: string;
  borderClass?: string;
  fileName?: string;
  fileURL?: string;
  viewFileText?: string;
  readonly?: boolean;
  placeholder?: string;
  hidePlaceholder?: boolean;
  changeText?: string;
  removeText?: string;
  hideRemove?: boolean;
  disabled?: boolean;
  browseText?: string;
};

withDefaults(defineProps<Props>(), {
  hasFile: false,
  removeText: 'Remove',
  changeText: 'Change',
  browseText: 'Browse',
  placeholder: 'No file selected',
  viewFileText: 'View file',
});

const emit =
  defineEmits<{
    (e: 'choose'): void;
    (e: 'remove'): void;
  }>();
</script>

<template>
  <div class="flex gap-2">
    <div v-if="hasFile" class="flex gap-2 items-center">
      <div
        class="
          px-4
          py-2
          truncate
          text-center
          border
          rounded
          hover:border-gray-400
        "
        :class="[disabledClass, borderClass]"
        @click="emit('choose')"
      >
        {{ fileName }}
      </div>
      <v-btn
        v-if="readonly"
        :href="fileURL"
        target="_blank"
        tag="a"
        class="whitespace-nowrap"
        small
        color="primary"
      >
        {{ viewFileText }}
      </v-btn>

      <div
        v-if="!hasFile && !hidePlaceholder"
        class="text-sm mt-1 text-gray-500"
      >
        {{ placeholder }}
      </div>
    </div>
    <div class="flex gap-2 items-center">
      <VBtn
        uppercase
        outlined
        type="button"
        color="primary"
        class="line-clamp"
        :disabled="readonly || disabled"
        @click="emit('choose')"
      >
        <slot name="icon.plus">
          <PlusIcon class="w-5 h-5 mr-2" />
        </slot>

        {{ hasFile ? changeText : browseText }}
      </VBtn>

      <VBtn
        v-if="hasFile && !hideRemove"
        small
        dense
        outlined
        type="button"
        color="error"
        class="space-x-2"
        :disabled="readonly || disabled"
        @click="emit('remove')"
      >
        <slot name="icon.trash">
          <TrashIcon class="w-5 h-5" />
        </slot>
        <span>{{ removeText }}</span>
      </VBtn>
    </div>
  </div>
</template>
