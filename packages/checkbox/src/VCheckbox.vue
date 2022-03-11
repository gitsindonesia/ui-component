<script setup lang="ts">
import {ref, toRefs, watch, computed, PropType} from 'vue';
import {useTextSize} from '@gits-id/utils';

interface VDataTableItem {
  selected?: boolean;
  [key: string]: any;
}

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
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number] as PropType<string | number | VDataTableItem>,
    default: '',
  },
});

const {
  modelValue,
  label,
  inputClass,
  color,
  disabled,
  size,
  value: checkboxValue,
} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const innerValue = ref(props.modelValue);

const colorClass = computed(() => {
  switch (color.value) {
    case 'primary':
    default:
      return 'text-primary-600 focus:ring-primary-600';
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
  }
});

const {class: sizeClass} = useTextSize(size.value);

watch(innerValue, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  innerValue.value = val;
});
</script>

<template>
  <label class="flex items-center gap-2 select-none" :class="[sizeClass]">
    <input
      v-model="innerValue"
      type="checkbox"
      :value="checkboxValue"
      class="rounded transition duration-300 disabled:border-gray-400 disabled:bg-gray-400 disabled:hover:bg-gray-300"
      :disabled="disabled"
      :class="[inputClass, colorClass]"
    />
    {{ label }}
  </label>
</template>
