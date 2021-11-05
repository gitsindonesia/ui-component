<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {defineAsyncComponent, PropType, ref, toRefs, watch} from 'vue';
import {ErrorMessage} from 'vee-validate';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {component as ckeditor} from '@ckeditor/ckeditor5-vue';

const VTextarea = defineAsyncComponent(
  () => import('../VTextarea/VTextarea.vue'),
);

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
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  theme: {
    type: String,
    default: 'ckeditor',
    validator: (v: string) => ['quill', 'ckeditor', 'textarea'].includes(v),
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

const {value, modelValue, name, errorMessages} = toRefs(props);

const content = ref(value.value || modelValue.value);
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
  <div>
    <template v-if="theme === 'ckeditor'">
      <ckeditor
        v-model="content"
        :editor="classicEditor"
        :config="editorConfig"
      />
    </template>
    <template v-else>
      <v-textarea v-model="content" />
    </template>
    <ErrorMessage
      v-if="errorMessages.length"
      class="text-error-600 mt-1 text-sm"
      :name="name"
    />
  </div>
</template>

<style scoped>
::v-deep(.ck-editor__editable),
::v-deep(.ql-editor) {
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
