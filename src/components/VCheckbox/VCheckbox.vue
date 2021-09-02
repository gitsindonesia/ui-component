<script setup lang="ts">
import {ref, toRefs, watch, computed} from 'vue';
import {useTextSize} from '../../utils';

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
});

const {modelValue, label, inputClass, color, disabled, size} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);

const colorClass = computed(() => {
  switch (color.value) {
    case 'primary':
    default:
      return 'text-primary-500 focus:ring-primary-500';
    case 'secondary':
      return 'text-secondary-500 focus:ring-secondary-500';
    case 'info':
      return 'text-info-500 focus:ring-info-500';
    case 'success':
      return 'text-success-500 focus:ring-success-500';
    case 'warning':
      return 'text-warning-500 focus:ring-warning-500';
    case 'error':
      return 'text-error-500 focus:ring-error-500';
  }
});

const {class: sizeClass} = useTextSize(size.value);

watch(value, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  value.value = val;
});
</script>

<template>
  <label class="flex items-center gap-2 select-none" :class="[sizeClass]">
    <input
      v-model="value"
      type="checkbox"
      class="
        rounded
        transition
        duration-300
        disabled:border-gray-400 disabled:bg-gray-400 disabled:hover:bg-gray-300
      "
      :disabled="disabled"
      :class="[inputClass, colorClass]"
    />
    {{ label }}
  </label>
</template>

<style scoped></style>
