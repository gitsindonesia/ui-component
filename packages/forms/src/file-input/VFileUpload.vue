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
import {CameraIcon, PlusIcon, TrashIcon} from '@heroicons/vue/solid';
import VBtn from '@gits-id/button';
import VSpinner from '@gits-id/spinner';
import {ErrorMessage, useField} from 'vee-validate';

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
  customSize,
  hideRemove,
  name,
  rules,
} = toRefs(props);

const {value: innerValue, errorMessage} = useField(name, rules, {
  initialValue: props.modelValue || props.value,
});

const isDropzone = computed(() => props.theme === 'dropzone');
const sizeClass = computed(() => (props.full ? 'w-full' : customSize.value));

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

  if (image.value && val && !previewURL.value) {
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
          :class="[disabledClass, borderClass]"
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
          v-if="hasFile && !hideRemove"
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

    <template v-else>
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
          @click="pickFile"
        >
          {{ fileName || placeholder }}
        </div>
        <div class="space-x-1 px-1">
          <VBtn
            :disabled="readonly || disabled"
            type="button"
            size="sm"
            @click="pickFile"
          >
            {{ hasFile ? changeText : browseText }}
          </VBtn>
          <VBtn
            v-if="hasFile && !hideRemove"
            type="button"
            size="sm"
            color="error"
            :disabled="readonly || disabled"
            @click="removeFile"
          >
            {{ removeText }}
          </VBtn>
        </div>
      </div>
    </template>

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
      v-if="
        hasFile && !readonly && (image || button || !isDropzone) && !loading
      "
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
          v-if="!hideRemove"
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
