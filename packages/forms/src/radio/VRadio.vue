<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {useField} from 'vee-validate';
import {toRefs, watch, computed} from 'vue';

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
  rules: {
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
  groupClass: {
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
  disabledClass: {
    type: String,
    default: 'disabled:text-gray-200 disabled:cursor-not-allowed',
  },
});

const {modelValue, rules, label, inputClass, color, name, id} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

type RadioValue = string | number | string[] | undefined;

const {value: inputValue, errorMessage} = useField<RadioValue>(name, rules, {
  initialValue: modelValue.value,
});

const colorClass = computed(() => {
  switch (color.value) {
    case 'secondary':
      return 'text-secondary focus:ring-secondary';
    case 'info':
      return 'text-info focus:ring-info';
    case 'success':
      return 'text-success focus:ring-success';
    case 'warning':
      return 'text-warning focus:ring-warning';
    case 'error':
      return 'text-error focus:ring-error';
    case 'primary':
    default:
      return 'text-primary focus:ring-primary';
  }
});

watch(
  inputValue,
  (val) => {
    emit('update:modelValue', val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    inputValue.value = val;
  },
  {immediate: true},
);
</script>

<template>
  <div :class="wrapperClass">
    <div class="flex w-full items-center gap-2 select-none" :class="groupClass">
      <input
        :id="id"
        v-model="inputValue"
        type="radio"
        :name="name"
        :value="value"
        class="transition duration-300"
        :class="[inputClass, colorClass, disabled && disabledClass]"
        :aria-disabled="disabled"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label v-if="label" :for="id || name" :class="labelClass">
        {{ label }}
      </label>
    </div>
    <div v-if="errorMessage && !hideError" class="text-error-500 text-sm">
      {{ errorMessage }}
    </div>
  </div>
</template>
