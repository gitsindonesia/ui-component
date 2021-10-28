<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {ref, toRefs, computed, watch, PropType} from 'vue';
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
    validator: (v: string) => ['button', 'image', '', 'default'].includes(v),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  hidePlaceholder: {
    type: Boolean,
    default: false,
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

const onFileChanged = (event: any) => {
  previewURL.value = null;

  const files = event.target?.files;

  if (multiple.value) {
    innerValue.value = files;

    emit('change', files);
    emit('update:modelValue', files);
    emit('update:value', files);
  } else {
    const firstFile = files[0];

    innerValue.value = firstFile;

    if (image.value && firstFile) {
      previewURL.value = URL.createObjectURL(firstFile.value);
    }

    emit('change', firstFile);
    emit('update:modelValue', firstFile);
    emit('update:value', firstFile);
  }
};

const removeFile = () => {
  innerValue.value = null;
  previewURL.value = null;
  hasInitialValue.value = false;

  emit('change', null);
  emit('update:modelValue', null);
  emit('update:value', null);
  emit('removed');
};

const setInitialValue = (val: any) => {
  const isFile = val instanceof File;
  const isFileList = val instanceof FileList;

  if (isFile || isFileList) {
    innerValue.value = val;
  }

  if (image.value && val) {
    hasInitialValue.value = true;
    previewURL.value = URL.createObjectURL(innerValue.value);
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
    console.log('value', val);
    setInitialValue(val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    console.log('modelValue', val);
    setInitialValue(val);
  },
  {immediate: true},
);

const disabledClass = computed(() => {
  return disabled.value || readonly.value ? 'disabled-input' : '';
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
        <slot v-if="!hasFile" name="icon.plus">
          <PlusIcon class="w-5 h-5 mr-2" />
        </slot>
        <slot v-if="hasFile" name="icon.plus">
          <PlusIcon class="w-5 h-5 mr-2" />
        </slot>
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
        'background-image': image && !loading ? `url(${previewURL})` : 'none',
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
