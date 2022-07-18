<script setup lang="ts">
import {computed, onMounted, onUnmounted} from 'vue';
import {FileValue} from './types';

type Props = {
  modelValue?: FileValue;
  readonly?: boolean;
  hasError?: boolean;
  hasFile?: boolean;
  fileName?: string;
  previewURL?: string | null;
  image?: boolean;
  preview?: boolean;
  disabled?: boolean;
  hideRemove?: boolean;
  changeText?: string;
  uploadText?: string;
  dragText?: string;
  removeText?: string;
  hint?: string;
  previewClass?: string;
  loading?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  readonly: false,
  hasError: false,
  hasFile: false,
  fileName: '',
  previewURL: '',
  image: false,
  preview: false,
  disabled: false,
  hideRemove: false,
  changeText: 'Change',
  uploadText: 'Upload',
  dragText: 'Drag and drop files',
  removeText: 'Remove',
  hint: '',
  previewClass: '',
  loading: false,
});

const emit =
  defineEmits<{
    (e: 'choose'): void;
    (e: 'remove'): void;
    (e: 'update:modelValue', value: any): void;
    (e: 'dropped', file: any): void;
  }>();

const dropzoneBorderClass = computed(() => {
  if (props.readonly) return 'border';

  return props.hasError
    ? 'border-2 border-error-500 border-dashed'
    : 'border-2 border-gray-300 hover:border-gray-400 border-dashed';
});

let guid = () => crypto.randomUUID();

const dropzoneId = computed(() => guid());

const dragInactiveClass = 'border-gray-300';
const dragClass = 'border-primary-600';

const isDropZoneTarget = (event: any) => {
  return Array.from(event.target.classList).includes(dropzoneId.value);
};

const onDrop = (e: any) => {
  e.preventDefault();

  e.target.classList.remove(dragClass);
  e.target.classList.add(dragInactiveClass);

  if (isDropZoneTarget(e)) {
    emit('dropped', e.dataTransfer.files);
  }
};

const onDragOver = (e: any) => {
  e.preventDefault();
};

const onDragEnter = (event: any) => {
  if (isDropZoneTarget(event)) {
    event.target.classList.remove(dragInactiveClass);
    event.target.classList.add(dragClass);
  }
};

const onDragLeave = (event: any) => {
  if (isDropZoneTarget(event)) {
    event.target.classList.remove(dragClass);
    event.target.classList.add(dragInactiveClass);
  }
};

onMounted(() => {
  document.addEventListener('dragover', onDragOver, false);
  document.addEventListener('drop', onDrop);
  document.addEventListener('dragenter', onDragEnter, false);
  document.addEventListener('dragleave', onDragLeave, false);
});

onUnmounted(() => {
  document.removeEventListener('dragover', onDragOver, false);
  document.removeEventListener('drop', onDrop);
  document.removeEventListener('dragenter', onDragEnter, false);
  document.removeEventListener('dragleave', onDragLeave, false);
});
</script>

<template>
  <div
    class="
      flex
      justify-center
      items-center
      p-4
      rounded-md
      transition
      duration-300
    "
    :class="[dropzoneId, dropzoneBorderClass]"
  >
    <div v-if="hasFile" class="text-center flex flex-col gap-4">
      <slot
        name="dropzone.preview"
        :value="modelValue"
        :file-name="fileName"
        :has-file="hasFile"
      >
        <div class="flex flex-col gap-4">
          <div
            v-if="image || preview"
            class="
              w-60
              h-40
              flex
              bg-contain bg-gray-100
              mx-auto
              rounded-lg
              bg-no-repeat bg-center
            "
            :class="previewClass"
            :style="{
              backgroundImage: !loading ? `url(${previewURL})` : 'none',
            }"
          ></div>
          <div v-if="fileName" class="text-gray-500 text-sm">
            {{ fileName }}
          </div>
        </div>
      </slot>

      <div v-if="!readonly && !disabled" class="space-x-3">
        <button
          type="button"
          class="
            appearance-none
            relative
            cursor-pointer
            bg-white
            rounded-md
            font-medium
            text-primary-600
            hover:text-primary-500
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-offset-2
            focus-within:ring-primary-500
          "
          @click="emit('choose')"
        >
          <span>{{ changeText }} </span>
        </button>

        <button
          type="button"
          v-if="!hideRemove"
          class="
            appearance-none
            relative
            cursor-pointer
            bg-white
            rounded-md
            font-medium
            text-error-600
            hover:text-error-500
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-offset-2
            focus-within:ring-error-500
          "
          @click="emit('remove')"
        >
          <span>{{ removeText }} </span>
        </button>
      </div>
    </div>

    <div v-else class="space-y-1 text-center">
      <slot name="dropzone.image">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
      <div class="flex text-sm text-gray-600">
        <button
          type="button"
          class="
            appearance-none
            relative
            cursor-pointer
            bg-white
            rounded-md
            font-medium
            text-primary-600
            hover:text-primary-500
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-offset-2
            focus-within:ring-primary-500
          "
          @click="emit('choose')"
        >
          <span>{{ uploadText }} </span>
        </button>
        <p class="pl-1">{{ dragText }}</p>
      </div>
      <p class="text-xs text-gray-500">{{ hint }}</p>
    </div>
  </div>
</template>
