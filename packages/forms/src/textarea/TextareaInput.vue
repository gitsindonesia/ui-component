<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {computed, ref, watch} from 'vue';

const props = defineProps({
  modelValue: {
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
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  cols: {
    type: [String, Number],
    default: undefined,
  },
  rows: {
    type: [String, Number],
    default: undefined,
  },
  label: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

const inputId = computed(() => props.id || props.name);
const uncontrolledValue = useVModel(props, 'modelValue', emit);
const input = ref();

function focus() {
  input.value?.focus();
}

defineExpose({
  focus,
});
</script>

<template>
  <div
    :class="[
      `v-input v-input--textarea`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--shadow': shadow,
      },
      wrapperClass,
    ]"
  >
    <label
      v-if="label"
      :for="inputId"
      class="v-input-label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <div class="v-input-wrapper">
      <textarea
        :id="inputId"
        v-model="uncontrolledValue"
        :class="['v-input-control', inputClass]"
        :readonly="readonly"
        :disabled="disabled"
        :cols="cols"
        :rows="rows"
        v-bind="$attrs"
      />
    </div>
    <div class="v-input-footer">
      <p v-if="hint" class="v-input-hint">
        <slot name="hint">
          {{ hint }}
        </slot>
      </p>
      <div v-if="counter" class="v-input-counter">
        <slot name="counter" :count="uncontrolledValue.length">
          {{ uncontrolledValue.length }}
        </slot>
      </div>
    </div>
    <div v-if="!hideError" class="v-input-error">
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
