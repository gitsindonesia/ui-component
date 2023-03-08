<script setup lang="ts">
import {Delta, QuillEditor} from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {useField} from 'vee-validate';
import {toRefs, ref, watch, nextTick} from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | Delta;
    value?: string | Delta;
    name: string;
    label: string;
    toolbar?: 'essential' | 'minimal' | 'full' | '';
    rules?: string | Record<string, any>;
    contentType?: 'html' | 'text' | 'delta';
    enable?: boolean;
    readOnly?: boolean;
    labelClass?: string;
    errorClass?: string;
    hideError?: boolean;
    autoFixCursor?: boolean;
  }>(),
  {
    toolbar: 'essential',
    modelValue: '',
    contentType: 'html',
    enable: true,
    readOnly: false,
    labelClass: 'block mb-2 font-medium',
    errorClass: 'text-sm mt-1 text-error-500',
    autoFixCursor: false,
  },
);

const {name, rules, modelValue} = toRefs(props);

const {value: content, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value || '',
});

const editor = ref();

watch(modelValue, (value) => {
  if (value) {
    content.value = value;
  }
});

watch(
  content,
  (val: any) => {
    if (props.autoFixCursor) {
      editor.value?.setHTML(val);
      nextTick(() => {
        let q = editor.value?.getQuill();
        if (q) {
          q.setSelection(val.length, 0, 'api');
          q.focus();
        }
      });
    }
  },
  {immediate: true},
);
</script>

<template>
  <div class="mb-5">
    <label v-if="label" :class="labelClass" :for="name">
      {{ label }}
    </label>
    <QuillEditor
      :id="name"
      ref="editor"
      v-model:content="content"
      theme="snow"
      :toolbar="toolbar"
      :content-type="contentType"
      :enable="enable"
      :read-only="readOnly"
      v-bind="$attrs"
    />
    <div v-if="errorMessage && !hideError" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
.ql-toolbar {
  @apply rounded-t-md;
}

.ql-container {
  @apply rounded-b-md;
}

.ql-editor {
  height: 250px;
}
</style>
