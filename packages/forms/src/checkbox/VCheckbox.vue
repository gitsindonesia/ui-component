<script setup lang="ts">
import {computed, PropType} from 'vue';
import {useFormValue, ValidationMode} from '../composables';

type CheckboxValue = any[] | boolean | undefined;

const props = defineProps({
  modelValue: {
    type: Boolean,
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
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValue>,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  id: {
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
  checkedValue: {
    type: Boolean,
    default: true,
  },
  uncheckedValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  disabledClass: {
    type: String,
    default: 'v-checkbox--disabled',
  },
  errorClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: CheckboxValue): void;
  }>();

const isEagerValidation = computed(() => {
  return props.validationMode === 'eager';
});

const {errorMessage, uncontrolledValue, inputId, handleChange} = useFormValue(
  props,
  emit,
  {
    type: 'checkbox',
    valueProp: props.value,
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
    validateOnValueUpdate: !isEagerValidation.value,
  },
);
</script>

<template>
  <div :class="wrapperClass">
    <div
      class="v-checkbox"
      :class="[
        `v-checkbox-${color}`,
        {'v-checkbox--disabled': disabled, 'v-checkbox--error': !!errorMessage},
      ]"
    >
      <input
        :id="inputId"
        v-model="uncontrolledValue"
        @blur="handleBlur"
        @input="handleChange"
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
        @mousedown.prevent="null"
      >
        {{ label }}
      </label>
    </div>
    <div v-if="errorMessage" class="v-checkbox-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="./VCheckbox.scss" lang="scss"></style>
