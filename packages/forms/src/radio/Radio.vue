<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {computed} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
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
  name: {
    type: String,
    default: '',
  },
  id: {
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
  hideError: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorClass: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  groupClass: {
    type: String,
    default: '',
  },
});

type RadioValue = string | number | boolean;

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: RadioValue): void;
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
  <div
    class="v-radio"
    :class="[
      wrapperClass,
      {
        'v-radio--error': !!errorMessage,
      },
    ]"
  >
    <div class="v-radio-wrapper" :class="groupClass">
      <input
        :id="id"
        v-model="uncontrolledValue"
        type="radio"
        :name="name"
        :value="value"
        class="v-radio-input"
        :class="inputClass"
        :aria-disabled="disabled"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        v-if="label"
        :for="inputId"
        class="v-radio-label"
        :class="labelClass"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="hint" class="v-radio-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div
      v-if="errorMessage && !hideError"
      class="v-radio-error"
      :class="errorClass"
    >
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
