<template>
  <template v-if="button">
    <div v-if="hasFile" class="flex gap-2 items-center">
      <div
        class="border rounded-10 px-4 py-2 truncate text-center"
        :class="[disabledClass]"
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
    </div>
    <VBtn
      v-else
      uppercase
      outlined
      type="button"
      color="primary"
      class="line-clamp"
      :disabled="readonly || disabled"
      @click="pickFile"
    >
      <slot name="icon.plus">
        <PlusIcon class="w-5 h-5 mr-2" />
      </slot>
      {{ browseText }}
    </VBtn>
    <div v-if="!hasFile" class="text-sm mt-1 text-gray-500">
      {{ placeholder }}
    </div>
  </template>

  <div
    v-else-if="image"
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
      h-[150px]
    "
    :class="[sizeClass, {'rounded-10': rounded}]"
    :style="{'background-image': image ? `url(${previewURL})` : 'none'}"
    @click="pickFile"
  >
    <div v-if="hasFile" class="px-2 text-center">
      {{ image ? '' : fileName }}
    </div>
    <template v-else>
      <CameraIcon class="w-10 h-10 text-gray-500 mb-1" />
      <div class="uppercase text-gray-500 font-bold">{{ browseText }}</div>
    </template>
  </div>
  <div v-else>
    <v-input
      :model-value="fileName"
      :placeholder="placeholder"
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

  <div
    v-if="placeholder && image && !hasFile"
    class="text-sm mt-1 text-gray-500"
  >
    {{ placeholder }}
  </div>

  <input
    :id="id"
    ref="fileRef"
    style="display: none"
    type="file"
    :readonly="readonly"
    :accept="acceptedTypes"
    v-bind="inputProps"
    @change="onFileChanged"
  />

  <div
    v-if="hasFile && !readonly && (image || button)"
    class="flex w-full mt-3 justify-center items-center gap-y-2 gap-x-2"
    :class="[full || button ? 'flex-row' : 'w-[150px] flex-col']"
  >
    <div>
      <slot name="prepend" />
    </div>
    <div>
      <VBtn
        :disabled="readonly || disabled"
        small
        dense
        type="button"
        color="primary"
        @click="pickFile"
      >
        {{ changeText }}
      </VBtn>
    </div>
    <div>
      <VBtn
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
    <div>
      <slot name="append" />
    </div>
  </div>

  <ErrorMessage
    v-if="errorMessages.length"
    class="text-error-500 text-sm"
    :name="name"
  />
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {ref, toRefs, computed, watch} from 'vue';
import {CameraIcon, PlusIcon} from '@heroicons/vue/solid';
import VBtn from '../VBtn/VBtn.vue';
import VInput from '../VInput/VInput.vue';
import {ErrorMessage} from 'vee-validate';

const props = defineProps({
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
  value: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: Object,
    default: null,
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
  button,
  rounded,
  image,
  value,
  modelValue,
  accept,
  inputProps,
  error,
  errorMessages,
  name,
  placeholder,
  id,
  readonly,
  disabled,
  browseText,
  changeText,
  removeText,
  viewFileText,
} = toRefs(props);

const sizeClass = computed(() =>
  props.full ? 'w-full' : 'w-[150px] h-[150px]',
);

const file = ref(null);
const fileRef = ref(null);
const previewURL = ref(null);
const hasInitialValue = ref(false);

const acceptedTypes = computed(() => (image.value ? 'image/*' : accept.value));

const pickFile = () => {
  fileRef.value.click();
};

const onFileChanged = (event) => {
  previewURL.value = null;

  const fileTarget = event.target.files[0];

  if (fileTarget) {
    file.value = fileTarget;

    if (image.value && file.value) {
      previewURL.value = URL.createObjectURL(file.value);
    }

    emit('input', fileTarget);
    emit('change', fileTarget);
    emit('update:modelValue', fileTarget);
    emit('update:value', fileTarget);
  } else {
    removeFile();
  }
};

const removeFile = () => {
  file.value = null;
  previewURL.value = null;
  hasInitialValue.value = false;

  emit('removed');
};

const setInitialValue = (val) => {
  hasInitialValue.value = true;

  if (image.value && val?.file) {
    previewURL.value = val?.file;
  }
};

const hasFile = computed(() => !!file.value || !!hasInitialValue.value);

const fileName = computed(
  () => (file.value || value.value || modelValue.value || {name: ''}).name,
);

const fileURL = computed(
  () => (file.value || value.value || modelValue.value || {file: ''}).file,
);

watch(value, (val) => {
  setInitialValue(val);
});

watch(modelValue, (val) => {
  setInitialValue(val);
});

const disabledClass = computed(() => {
  return disabled.value || readonly.value
    ? 'bg-[#F5F5F5] text-[#BDBDBD] placeholder-[#BDBDBD] cursor-not-allowed border-secondary-300'
    : '';
});
</script>

<style scoped></style>
