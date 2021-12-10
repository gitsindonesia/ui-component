<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  ref,
  toRefs,
  computed,
  watch,
  PropType,
  onMounted,
  onUnmounted,
} from 'vue';
import {CameraIcon, PlusIcon, TrashIcon} from '@heroicons/vue/solid';
import VBtn from '../VBtn/VBtn.vue';
import VInput from '../VInput/VInput.vue';
import {ErrorMessage} from 'vee-validate';
import {AnyMessageParams} from 'yup/lib/types';

type FileValue = File | FileList | File[] | Record<string, any> | null;

const props = defineProps({
  value: {
    type: Object as PropType<FileValue>,
    default: null,
  },
  modelValue: {
    type: Object as PropType<FileValue>,
    default: null,
  },
  button: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: String,
    default: '',
  },
  inputProps: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Browse file...',
  },
  hint: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  browseText: {
    type: String,
    default: 'Browse',
  },
  changeText: {
    type: String,
    default: 'Change',
  },
  removeText: {
    type: String,
    default: 'Remove',
  },
  viewFileText: {
    type: String,
    default: 'View File',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: 'Uploading...',
  },
  theme: {
    type: String,
    default: '',
    validator: (v: string) =>
      ['button', 'image', '', 'default', 'dropzone'].includes(v),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  hidePlaceholder: {
    type: Boolean,
    default: false,
  },
  uploadText: {
    type: String,
    default: 'Upload a file',
  },
  dragText: {
    type: String,
    default: 'or drag and drop',
  },
  preview: {
    type: Boolean,
    default: false,
  },
  previewClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits([
  'input',
  'removed',
  'update:modelValue',
  'update:value',
  'change',
  'blur',
]);

const {
  image,
  value,
  modelValue,
  accept,
  inputProps,
  readonly,
  disabled,
  multiple,
} = toRefs(props);

const sizeClass = computed(() =>
  props.full ? 'w-full' : 'w-full sm:w-[180px] h-[180px]',
);

const innerValue = ref<FileValue>(null);
const fileRef = ref<HTMLInputElement | null>(null);
const previewURL = ref<string | null>(null);
const hasInitialValue = ref(false);

const acceptedTypes = computed(() => (image.value ? 'image/*' : accept.value));

const inputAttrs = computed(() => ({
  ...inputProps.value,
  multiple: multiple.value,
}));

const pickFile = () => {
  fileRef.value?.click();
};

const handleFiles = (files: FileList) => {
  if (multiple.value) {
    innerValue.value = files;

    emit('change', files);
    emit('update:modelValue', files);
    emit('update:value', files);
  } else {
    const firstFile = files[0];

    innerValue.value = firstFile;

    if (firstFile && (image.value || props.preview)) {
      previewURL.value = URL.createObjectURL(firstFile);
    }

    emit('change', firstFile);
    emit('update:modelValue', firstFile);
    emit('update:value', firstFile);
  }
};

const onFileChanged = (event: any) => {
  previewURL.value = null;

  const files = event.target?.files;

  handleFiles(files);
};

const removeFile = () => {
  innerValue.value = null;
  previewURL.value = null;
  hasInitialValue.value = false;
  fileRef.value = null;

  emit('change', null);
  emit('update:modelValue', null);
  emit('update:value', null);
  emit('removed');
};

const setInitialValue = (val: any) => {
  const isFile = val instanceof File;
  const isFileList = val instanceof FileList;

  if (typeof val === 'string') {
    hasInitialValue.value = true;
    previewURL.value = val;
  }

  if (isFile || isFileList) {
    innerValue.value = val;
  }

  if (image.value && val) {
    hasInitialValue.value = true;
    previewURL.value = URL.createObjectURL(innerValue.value as any);
  }

  if (!val) {
    innerValue.value = null;
    previewURL.value = null;
    hasInitialValue.value = false;
  }
};

const hasFile = computed(() => {
  return !!innerValue.value || !!hasInitialValue.value;
});

const fileName = computed(
  () =>
    (innerValue.value || value.value || modelValue.value || {name: ''}).name,
);

const fileURL = computed(
  () =>
    (innerValue.value || value.value || modelValue.value || {file: ''}).file,
);

watch(
  value,
  (val) => {
    setInitialValue(val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    setInitialValue(val);
  },
  {immediate: true},
);

const disabledClass = computed(() => {
  return disabled.value || readonly.value ? 'disabled-input' : '';
});

//generates random id;
let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

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
    handleFiles(e.dataTransfer.files);
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
  <div v-if="theme === 'button'" class="flex gap-2">
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
        :class="[disabledClass]"
        @click="pickFile"
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
        @click="pickFile"
      >
        <template v-if="!hasFile">
          <slot name="icon.plus">
            <PlusIcon class="w-5 h-5 mr-2" />
          </slot>
        </template>
        <template v-if="hasFile">
          <slot name="icon.plus">
            <PlusIcon class="w-5 h-5 mr-2" />
          </slot>
        </template>

        {{ hasFile ? changeText : browseText }}
      </VBtn>

      <VBtn
        v-if="hasFile"
        small
        dense
        outlined
        type="button"
        color="error"
        class="space-x-2"
        :disabled="readonly || disabled"
        @click="removeFile"
      >
        <slot name="icon.trash">
          <TrashIcon class="w-5 h-5" />
        </slot>
        <span>{{ removeText }}</span>
      </VBtn>
    </div>
  </div>

  <div v-else-if="theme === 'image'">
    <div
      class="
        transition
        duration-300
        border
        cursor-pointer
        hover:bg-lime-50 hover:border-primary-600
        flex flex-col
        items-center
        justify-center
        border-gray-200
        py-10
        bg-no-repeat bg-contain bg-center
        h-[180px]
        max-w-full
      "
      :class="[sizeClass, {'rounded-10': rounded}]"
      :style="{
        backgroundImage: image && !loading ? `url(${previewURL})` : 'none',
      }"
      @click="pickFile"
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
    </div>
  </div>

  <template v-else-if="theme === 'dropzone'">
    <div
      class="flex justify-center items-center p-4 rounded-md"
      :class="[
        dropzoneId,
        readonly ? 'border' : 'border-2 border-gray-300 border-dashed',
      ]"
    >
      <div v-if="hasFile" class="text-center flex flex-col gap-4">
        <slot
          name="dropzone.preview"
          :value="innerValue"
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
          <label
            for="file-upload"
            class="
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
            @click="pickFile"
          >
            <span>{{ changeText }} </span>
          </label>

          <label
            class="
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
            @click="removeFile"
          >
            <span>{{ removeText }} </span>
          </label>
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
          <label
            for="file-upload"
            class="
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
            @click="pickFile"
          >
            <span>{{ uploadText }} </span>
          </label>
          <p class="pl-1">{{ dragText }}</p>
        </div>
        <p class="text-xs text-gray-500">{{ hint }}</p>
      </div>
    </div>
  </template>

  <div v-else>
    <v-input
      :model-value="fileName"
      :placeholder="!hidePlaceholder ? placeholder : ''"
      readonly
      @click="pickFile"
    >
      <template #append>
        <div class="p-0.5 flex gap-1">
          <VBtn
            :disabled="readonly || disabled"
            small
            dense
            type="button"
            @click="pickFile"
          >
            {{ hasFile ? changeText : browseText }}
          </VBtn>
          <VBtn
            v-if="hasFile"
            small
            dense
            type="button"
            color="error"
            outlined
            :disabled="readonly || disabled"
            @click="removeFile"
          >
            {{ removeText }}
          </VBtn>
        </div>
      </template>
    </v-input>
  </div>

  <input
    :id="id"
    ref="fileRef"
    style="display: none"
    type="file"
    :readonly="readonly"
    :accept="acceptedTypes"
    v-bind="inputAttrs"
    @change="onFileChanged"
  />

  <div
    v-if="hasFile && !readonly && (image || button) && !loading"
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
        @click="pickFile"
      >
        {{ changeText }}
      </VBtn>
      <VBtn
        small
        dense
        type="button"
        color="error"
        :disabled="readonly || disabled"
        @click="removeFile"
      >
        {{ removeText }}
      </VBtn>
    </div>
    <div>
      <slot name="append" />
    </div>
  </div>

  <slot name="hint">
    <div v-if="hint" class="text-xs mt-2 text-black">
      {{ hint }}
    </div>
  </slot>

  <slot
    name="error"
    :error="error"
    :error-messages="errorMessages"
    :name="name"
  >
    <ErrorMessage
      v-if="errorMessages.length"
      class="text-error-500 text-sm"
      :name="name"
    />
  </slot>
</template>

<style scoped>
.disabled-input {
  @apply bg-[#F5F5F5] text-[#BDBDBD] placeholder-[#BDBDBD] cursor-not-allowed border-secondary-300;
}
</style>
