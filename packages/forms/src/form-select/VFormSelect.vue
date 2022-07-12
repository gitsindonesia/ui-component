<script setup lang="ts">
import {toRefs, PropType, watch, computed} from 'vue';
import {useField} from 'vee-validate';
import {useInputClasses, useTextSize} from '@gits-id/utils';
import type {VFormSelectItem} from './types';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
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
    default: 'text-error-600 mt-1 text-sm',
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
    default: 'block mb-1',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const {modelValue, value, itemText, itemValue, error, name, disabled, rules} =
  toRefs(props);

const {value: inputValue, errorMessage} = useField(name, rules, {
  initialValue: value.value || modelValue.value,
});

const message = computed(() => {
  return errorMessage.value || props.errorMessages[0];
});

const {class: sizeClass} = useTextSize(props.size);
const inputClass = computed(() => useInputClasses(error.value));

const classes = computed(() => {
  return [inputClass.value, sizeClass.value];
});

watch(inputValue, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  inputValue.value = val;
});

const getValue = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[itemValue.value];
};

const getText = (option: string | Record<string, any>) => {
  return typeof option === 'string' ? option : option[itemText.value];
};
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="name" :class="labelClass">
      {{ label }}
    </label>
    <select
      v-model="inputValue"
      class="w-full block transition duration-300"
      :class="classes"
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
    <div v-if="message" :class="errorClass">
      {{ message }}
    </div>
  </div>
</template>
