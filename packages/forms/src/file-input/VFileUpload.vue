<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  inheritAttrs: false,
});
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
import {CameraIcon} from '@heroicons/vue/solid';
import VSpinner from '@gits-id/spinner';
import {ErrorMessage, useField} from 'vee-validate';
import VFileUploadActions from './VFileUploadActions.vue';
import VFileUploadDefaultTheme from './VFileUploadDefaultTheme.vue';
import VFileUploadButtonTheme from './VFileUploadButtonTheme.vue';

type FileValue = File | FileList | File[] | Record<string, any> | null | string;

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
    type: String as PropType<'button' | 'image' | '' | 'default' | 'dropzone'>,
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
  customSize: {
    type: String,
    default: 'w-full sm:w-[180px] h-[180px]',
  },
  customLayout: {
    type: String,
    default: '',
  },
  hideRemove: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: 'text-error-500 text-sm',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'block mb-1',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['removed', 'update:modelValue', 'change', 'blur']);

const {
  image,
  value,
  modelValue,
  accept,
  inputProps,
  readonly,
  disabled,
  multiple,
  customSize,
  hideRemove,
  name,
  rules,
} = toRefs(props);

const {value: innerValue, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value || value.value,
});

const fileRef = ref<HTMLInputElement | null>(null);
const previewURL = ref<string | null>(null);
const hasInitialValue = ref(false);

const isDropzone = computed(() => props.theme === 'dropzone');
const sizeClass = computed(() => (props.full ? 'w-full' : customSize.value));

const acceptedTypes = computed(() => (image.value ? 'image/*' : accept.value));

const setInitialValue = (val: any) => {
  const isFile = val instanceof File;
  const isFileList = val instanceof FileList;

  if (typeof val === 'string') {
    hasInitialValue.value = true;
    innerValue.value = val;
    previewURL.value = val;
  } else if (isFile || isFileList) {
    innerValue.value = val;
  } else if (image.value && val && !previewURL.value) {
    hasInitialValue.value = true;
    previewURL.value = URL.createObjectURL(innerValue.value as any);
  } else if (!val) {
    innerValue.value = null;
    previewURL.value = null;
    hasInitialValue.value = false;
  }
};

setInitialValue(innerValue.value);

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
  } else {
    const firstFile = files[0];

    innerValue.value = firstFile;

    if (firstFile && (image.value || props.preview)) {
      previewURL.value = URL.createObjectURL(firstFile);
    }

    emit('change', firstFile);
    emit('update:modelValue', firstFile);
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
  emit('removed');
};

watch(modelValue, (val) => {
  setInitialValue(val);
});

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

const disabledClass = computed(() => {
  return disabled.value || readonly.value ? 'disabled-input' : '';
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

const hasError = computed(() => {
  return props.error || props.errorMessages.length > 0 || !!errorMessage.value;
});

const borderClass = computed(() => {
  return hasError.value
    ? 'border-error-500'
    : 'border-gray-300 focus-within:border-primary-500 hover:border-gray-400';
});

const dropzoneBorderClass = computed(() => {
  if (readonly.value) return 'border';

  return hasError.value
    ? 'border-2 border-error-500 border-dashed'
    : 'border-2 border-gray-300 hover:border-gray-400 border-dashed';
});
</script>

<template>
  <div :class="[customLayout, wrapperClass]">
    <label v-if="label" :for="name" :class="labelClass">
      {{ label }}
    </label>

    <VFileUploadButtonTheme
      v-if="theme === 'button'"
      v-bind="{
        hasFile,
        disabledClass,
        borderClass,
        fileName,
        fileURL,
        viewFileText,
        readonly,
        placeholder,
        hidePlaceholder,
        changeText,
        removeText,
        hideRemove,
        disabled,
        browseText,
      }"
      @choose="pickFile"
      @remove="removeFile"
    />

    <div v-else-if="theme === 'image'">
      <div
        class="
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
              v-if="!hideRemove"
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

    <VFileUploadDefaultTheme
      v-else
      v-bind="{
        borderClass,
        fileName,
        placeholder,
        readonly,
        disabled,
        hasFile,
        changeText,
        browseText,
        hideRemove,
        removeText,
      }"
      @choose="pickFile"
      @remove="removeFile"
    />

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

    <VFileUploadActions
      v-if="
        hasFile && !readonly && (image || button) && !isDropzone && !loading
      "
      v-bind="{
        readonly,
        button,
        full,
        disabled,
        hideRemove,
        changeText,
        removeText,
      }"
      @choose="pickFile"
      @remove="removeFile"
    />

    <slot name="hint">
      <div v-if="hint" class="text-xs mt-2 text-black">
        {{ hint }}
      </div>
    </slot>

    <slot
      name="error"
      :error="error"
      :error-messages="errorMessages"
      :field-name="name"
    >
      <div v-if="errorMessage" :class="errorClass">
        {{ errorMessage }}
      </div>
      <ErrorMessage
        v-else-if="errorMessages.length"
        :class="errorClass"
        :name="name"
      />
    </slot>
  </div>
</template>

<style scoped>
.disabled-input {
  @apply bg-[#F5F5F5] text-[#BDBDBD] placeholder-[#BDBDBD] cursor-not-allowed border-secondary-300;
}
</style>
