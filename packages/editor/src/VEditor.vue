<script setup lang="ts">
import {computed, PropType, ref, toRefs, watch} from 'vue';
import {useField} from 'vee-validate';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {component as CKEditor} from '@ckeditor/ckeditor5-vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'block mb-2',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorClass: {
    type: String,
    default: 'text-error-600 mt-1 text-sm',
  },
  errorMessages: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'update:value',
  'change',
  'input',
  'blur',
]);

const {rules, name, modelValue, value} = toRefs(props);

const {value: content, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value || value.value,
});

const error = computed(() => {
  return errorMessage.value || props.errorMessages[0];
})

const classicEditor = ref(ClassicEditor);
const editorConfig = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'blockQuote',
    '|',
    'indent',
    'outdent',
    '|',
    'insertTable',
    '|',
    'undo',
    'redo',
  ],
};

watch(value, (val) => {
  if (modelValue.value) {
    return;
  }

  if (val) {
    content.value = val;
  }
});

watch(modelValue, (val) => {
  if (value.value) return;

  if (val) {
    content.value = val;
  }
});

watch(content, (value) => {
  emit('update:modelValue', value);
  emit('update:value', value);
  emit('change', value);
  emit('input', value);
});
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="name" :class="labelClass">
      {{ label }}
    </label>
    <CKEditor
      :id="name"
      v-model="content"
      :editor="classicEditor"
      :config="editorConfig"
    />
    <div v-if="error" :class="errorClass">
      {{ error }}
    </div>
  </div>
</template>

<style scoped>
:deep(.ck-editor__editable),
:deep(.ql-editor) {
  min-height: 300px;
}
ul,
ol {
  margin: 0.5em;
  padding: 0.5em;
}
ul {
  list-style: initial !important;
}
ol {
  list-style: decimal !important;
}
</style>
