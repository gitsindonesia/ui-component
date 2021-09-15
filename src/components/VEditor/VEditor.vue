<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {ErrorMessage} from 'vee-validate';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {component as ckeditor} from '@ckeditor/ckeditor5-vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
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
});

const emit = defineEmits([
  'update:modelValue',
  'update:value',
  'change',
  'input',
  'blur',
]);

const {value, modelValue, name, error, errorMessages} = toRefs(props);

const content = ref(value.value || modelValue.value);
const editor = ref(ClassicEditor);
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
  <div>
    <ckeditor v-model="content" :editor="editor" :config="editorConfig" />

    <ErrorMessage
      v-if="errorMessages.length"
      class="text-error text-sm"
      :name="name"
    />
  </div>
</template>

<style>
.ck-editor__editable {
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
