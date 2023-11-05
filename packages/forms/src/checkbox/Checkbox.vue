<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {computed, type PropType} from 'vue';

export type CheckboxValue = string | number | any[] | boolean | undefined;

const props = defineProps({
  modelValue: {
    type: [Boolean, Array] as PropType<CheckboxValue>,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValue>,
    default: false,
  },
  name: {
    type: String,
    default: undefined,
  },
  id: {
    type: String,
    default: undefined,
  },
  wrapperClass: {
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
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: CheckboxValue): void;
}>();

const inputId = computed(() => props.id || props.name);
const uncontrolledValue = useVModel(props, 'modelValue', emit);

defineSlots<{
  default?: (props: {}) => any;
  hint?: (props: {}) => any;
  error?: (props: {}) => any;
}>();
</script>

<template>
  <div :class="wrapperClass">
    <div
      class="v-checkbox"
      :class="[
        `v-checkbox-${color}`,
        {
          'v-checkbox--disabled': disabled,
          'v-checkbox--error': error || !!errorMessage,
        },
      ]"
    >
      <input
        :id="inputId"
        v-model="uncontrolledValue"
        :name="name"
        :value="value"
        type="checkbox"
        :class="['v-checkbox-input', inputClass]"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        v-if="label"
        class="v-checkbox-label"
        :class="labelClass"
        :for="inputId"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="hint" class="v-checkbox-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div
      v-if="error && errorMessage && !hideError"
      class="v-checkbox-error"
      :class="errorClass"
    >
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
