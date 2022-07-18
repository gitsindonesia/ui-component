<script setup lang="ts">
import VBtn from '@gits-id/button';

type Props = {
  readonly?: boolean;
  button?: boolean;
  full?: boolean;
  disabled?: boolean;
  hideRemove?: boolean;
  changeText?: string;
  removeText?: string;
};

withDefaults(defineProps<Props>(), {
  hasFile: false,
  changeText: 'Change',
  removeText: 'Remove',
});

const emit =
  defineEmits<{
    (e: 'choose'): void;
    (e: 'remove'): void;
  }>();
</script>

<template>
  <div
    class="flex w-full mt-3 justify-center items-center gap-y-2 gap-x-2"
    :class="[full || button ? 'flex-row' : 'w-full sm:w-[180px] flex-col']"
  >
    <div>
      <slot name="prepend" />
    </div>
    <div class="flex gap-2">
      <VBtn
        :disabled="readonly || disabled"
        small
        dense
        type="button"
        @click="emit('choose')"
      >
        {{ changeText }}
      </VBtn>
      <VBtn
        v-if="!hideRemove"
        small
        dense
        type="button"
        color="error"
        :disabled="readonly || disabled"
        @click="emit('remove')"
      >
        {{ removeText }}
      </VBtn>
    </div>
    <div>
      <slot name="append" />
    </div>
  </div>
</template>
