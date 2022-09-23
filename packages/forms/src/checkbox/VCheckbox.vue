<script setup lang="ts">
import {toRefs, computed, PropType, watch} from 'vue';
import {useTextSize} from '@gits-id/utils';
import {useField} from 'vee-validate';

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
    default: false,
  },
  uncheckedValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledClass: {
    type: String,
    default:
      'disabled:bg-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: CheckboxValue): void;
  }>();

const {modelValue, label, inputClass, color, disabled, size, name, rules} =
  toRefs(props);

const colorClass = computed(() => {
  switch (color.value) {
    case 'secondary':
      return 'text-secondary-600 focus:ring-secondary-600';
    case 'info':
      return 'text-info-600 focus:ring-info-600';
    case 'success':
      return 'text-success-600 focus:ring-success-600';
    case 'warning':
      return 'text-warning-600 focus:ring-warning-600';
    case 'error':
      return 'text-error-600 focus:ring-error-600';
    case 'primary':
    default:
      return 'text-primary-600 focus:ring-primary-600';
  }
});

const {class: sizeClass} = useTextSize(size.value);

const {value: innerValue, errorMessage} = useField<CheckboxValue>(name, rules, {
  type: 'checkbox',
  valueProp: props.value,
  checkedValue: props.value,
  uncheckedValue: props.uncheckedValue,
});

watch(modelValue, (val) => {
  innerValue.value = val;
});

watch(innerValue, (val) => {
  emit('update:modelValue', val);
});
</script>

<template>
  <div class="flex items-center gap-2" :class="wrapperClass">
    <input
      :id="id || name"
      v-model="innerValue"
      :name="name"
      :value="value"
      type="checkbox"
      class="rounded transition duration-300"
      :disabled="disabled"
      :class="[inputClass, colorClass, disabledClass]"
    />
    <label class="select-none" :for="id || name" :class="[sizeClass]">
      {{ label }}
    </label>
  </div>

  <div v-if="errorMessage" class="text-error-500 text-sm">
    {{ errorMessage }}
  </div>
</template>
