<script setup lang="ts">
import {PropType} from 'vue';
import { type ValidationMode, useFormValue } from 'src/composables';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * @deprecated Use `modelValue` instead
   */
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
    type: Array,
    default: () => [],
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
  /**
   * @deprecated
   */
  size: {
    type: String,
    default: '',
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
  rules: {
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
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const {errorMessage, uncontrolledValue, validationListeners, inputId} =
  useFormValue(props, emit);
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
    <textarea
      :id="inputId"
      v-model="uncontrolledValue"
      v-on="validationListeners"
      :class="['v-input-control', inputClass]"
      :readonly="readonly"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
      v-bind="$attrs"
    />
    <div class="v-input-footer">
      <div class="v-input-error" v-text="errorMessage" />
      <div v-if="counter" class="v-input-counter">
        <slot name="counter" :count="uncontrolledValue.length">
          {{ uncontrolledValue.length }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style src="../forms.scss" lang="scss"></style>
