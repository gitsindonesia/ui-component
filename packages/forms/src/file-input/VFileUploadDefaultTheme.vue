<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import VBtn from '@morpheme/button';
import VInput from '../input/VInput.vue';

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
  error?: boolean;
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

defineSlots<{
  default?: (props: {}) => any;
  filename?: (props: {value: string | undefined}) => any;
}>();
</script>

<template>
  <VInput
    readonly
    :model-value="fileName"
    :placeholder="fileName ? '' : placeholder"
    :error="error"
    @click="emit('choose')"
  >
    <template #append>
      <div class="v-input-action">
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
    </template>
  </VInput>
  <slot name="filename" :value="fileName" />
</template>
