<script setup lang="ts">
import {useFileDialog} from '@vueuse/core';
import {ref, watch} from 'vue';
import FileInputDefaultActivator from './FileInputDefaultActivator.vue';
import FileInputButtonActivator from './FileInputButtonActivator.vue';
import FileInputItems from './FileInputItems.vue';

interface Props {
  modelValue?: any[];
  multiple?: boolean;
  accept?: string;
  capture?: string;
  reset?: boolean;
  variant?: 'default' | 'button';
  variantProps?: Record<string, any>;
  hideItems?: boolean;
  label?: string;
  hint?: string;
  wrapperClass?: string;
  error?: boolean;
  errorMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: any): void;
  }>();

const {files, open, reset} = useFileDialog({
  multiple: props.multiple,
  accept: props.accept,
  capture: props.capture,
  reset: props.reset,
});

const normalizedFiles = ref<File[]>([]);

const normalizeFiles = (items: typeof files.value): File[] =>
  items ? Array.from(items as any) : [];

watch(files, (newFiles) => {
  normalizedFiles.value = normalizeFiles(newFiles);
});

watch(normalizedFiles, (newValue) => {
  emit('update:modelValue', newValue);
});

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue.length === 0) {
      reset();
    }
  },
  {deep: true},
);

function removeItem(idx: number) {
  const newFiles = [...normalizedFiles.value];
  newFiles.splice(idx, 1);
  normalizedFiles.value = newFiles;
}

function onDrop(files: File[] | null) {
  normalizedFiles.value = files!;
}

defineExpose({
  open,
  reset,
  removeItem,
});
</script>

<template>
  <div class="v-input" :class="wrapperClass">
    <label v-if="label" class="v-input-label">
      {{ label }}
    </label>
    <slot v-bind="{files: normalizedFiles, open, reset}">
      <component
        :is="
          variant === 'button'
            ? FileInputButtonActivator
            : FileInputDefaultActivator
        "
        v-bind="{files: normalizedFiles, open, reset, onDrop, ...variantProps}"
      />
    </slot>
    <slot v-if="!hideItems" name="items" v-bind="{files: normalizedFiles}">
      <div class="mt-2 space-y-2 empty:hidden">
        <FileInputItems :files="normalizedFiles" @remove="removeItem" />
      </div>
    </slot>
    <div v-if="hint" class="v-input-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="error" class="v-input-error">
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
