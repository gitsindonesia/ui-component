<script setup lang="ts">
import {computed, toRefs, watch} from 'vue';
import {useField} from 'vee-validate';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {component as ckeditor} from '@ckeditor/ckeditor5-vue';
import editorConfig from './config';

type Props = {
  modelValue?: string;
  value?: string;
  name?: string;
  rules?: string;
  label?: string;
  labelClass?: string;
  wrapperClass?: string;
  error?: boolean;
  errorClass?: string;
  errorMessages?: string[];
  readonly?: string;
  config?: Record<string, any>;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  value: '',
  name: '',
  errorMessages: () => [],
  labelClass: '',
  errorClass: '',
  config: () => editorConfig,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:value', value: string): void;
    (e: 'change', value: string): void;
    (e: 'input', value: string): void;
    (e: 'blur', event: any): void;
  }>();

const {modelValue, value, name, rules} = toRefs(props);

const {value: content, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value || value.value,
});

watch([modelValue, value], ([newModelValue, newVal]) => {
  const val = newModelValue || newVal;

  content.value = val;

  emit('update:modelValue', val);
  emit('update:value', val);
  emit('change', val);
  emit('input', val);
});

const hasError = computed(
  () => props.error || props.errorMessages.length > 0 || !!errorMessage.value,
);

const message = computed(() => props.errorMessages[0] || errorMessage.value);
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="name" class="v-editor-label" :class="labelClass">
      {{ label }}
    </label>
    <ckeditor
      :id="name"
      v-model="content"
      class="v-editor"
      :editor="ClassicEditor"
      :config="config"
    />
    <div v-if="hasError" class="v-editor-error" :class="errorClass">
      {{ message }}
    </div>
  </div>
</template>

<style src="./VEditor.scss" lang="scss"></style>
