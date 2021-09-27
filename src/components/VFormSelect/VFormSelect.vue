<script setup inherit-attrs="false" lang="ts">
import {ref, toRefs, PropType, watch, computed} from 'vue';
import {ErrorMessage} from 'vee-validate';
import {useInputClasses, useTextSize} from '../../utils';
import type {VFormSelectItem} from './VFormSelect';

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
});

const emit = defineEmits(['update:modelValue']);

const {
  modelValue,
  value,
  itemText,
  itemValue,
  error,
  errorMessages,
  name,
  disabled,
} = toRefs(props);

const inputValue = ref(modelValue.value);

const {class: sizeClass} = useTextSize(props.size);
const inputClass = computed(() => useInputClasses(error.value));

const classes = computed(() => {
  return [inputClass.value, sizeClass.value];
});

watch(inputValue, (val) => {
  emit('update:modelValue', val);
});

watch(
  modelValue,
  (val) => {
    inputValue.value = val;
  },
  {immediate: true},
);

watch(value, (val) => {
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
      :value="getValue(option)"
      v-bind="option"
    >
      {{ getText(option) }}
    </option>
  </select>
  <ErrorMessage
    v-if="errorMessages.length"
    class="text-error text-sm"
    :name="name"
  />
</template>

<style scoped></style>
