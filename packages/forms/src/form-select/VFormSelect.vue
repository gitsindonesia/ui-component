<script setup lang="ts">
import {PropType} from 'vue';
import type {VFormSelectItem} from './types';
import { type ValidationMode, useFormValue } from '../composables';

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
  items: {
    type: Array as PropType<VFormSelectItem[]>,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
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
  size: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorClass: {
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
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
  hint: {
    type: String,
    default: ''
  }
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();


const {errorMessage, uncontrolledValue, handleBlur, inputId} =
  useFormValue(props, emit);

const getValue = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[props.itemValue];
};

const getText = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[props.itemText];
};
</script>

<template>
  <div
    :class="[
      `v-input v-input--select`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
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
    <select
      :id="inputId"
      v-model="uncontrolledValue"
      @blur="handleBlur"
      class="v-input-control"
      :disabled="disabled"
      v-bind="$attrs"
    >
      <option
        v-for="(option, index) in items"
        :key="index"
        v-bind="option"
        :value="getValue(option)"
      >
        {{ getText(option) }}
      </option>
    </select>
    <p v-if="hint" class="v-input-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div v-if="errorMessage" class="v-input-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="../forms.scss" lang="scss"></style>
