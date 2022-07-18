<script lang="ts">
import {defineComponent} from 'vue';
import {FileValue} from './types';

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import {ref, toRefs, computed, watch, PropType} from 'vue';
import {ErrorMessage, useField} from 'vee-validate';
import VFileUploadActions from './VFileUploadActions.vue';
import VFileUploadDefaultTheme from './VFileUploadDefaultTheme.vue';
import VFileUploadButtonTheme from './VFileUploadButtonTheme.vue';
import VFileUploadImageTheme from './VFileUploadImageTheme.vue';
import VFileUploadDropzoneTheme from './VFileUploadDropzoneTheme.vue';

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

function getFileValue(key: string, defaultValue?: any) {
  const val = (innerValue.value || value.value || modelValue.value) as Record<
    string,
    any
  >;

  return (val as any)?.[key] || defaultValue;
}

const fileName = computed(() => {
  if (typeof innerValue.value === 'string') {
    return innerValue.value.split('/').pop();
  }

  return getFileValue('name', '');
});

const fileURL = computed(() => {
  if (typeof innerValue.value === 'string') {
    return innerValue.value;
  }

  return getFileValue('name', '');
});

const disabledClass = computed(() => {
  return disabled.value || readonly.value ? 'disabled-input' : '';
});

const hasError = computed(() => {
  return props.error || props.errorMessages.length > 0 || !!errorMessage.value;
});

const borderClass = computed(() => {
  return hasError.value
    ? 'border-error-500'
    : 'border-gray-300 focus-within:border-primary-500 hover:border-gray-400';
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

    <VFileUploadImageTheme
      v-else-if="theme === 'image'"
      v-bind="{
        rounded,
        sizeClass,
        borderClass,
        previewURL,
        loading,
        image,
        fileName,
        hasFile,
        loadingText,
        browseText,
      }"
      @choose="pickFile"
    />

    <VFileUploadDropzoneTheme
      v-else-if="theme === 'dropzone'"
      v-bind="{
        modelValue: innerValue,
        readonly,
        hasError,
        hasFile,
        fileName,
        previewURL,
        image,
        preview,
        disabled,
        hideRemove,
        changeText,
        uploadText,
        dragText,
        removeText,
        hint,
        previewClass,
        loading,
      }"
      @dropped="handleFiles"
      @choose="pickFile"
      @remove="removeFile"
    />

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
