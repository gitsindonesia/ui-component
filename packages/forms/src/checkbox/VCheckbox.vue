<script setup lang="ts">
import {toRefs, computed, PropType} from 'vue';
import {useTextSize} from '@gits-id/utils';
import {useField} from 'vee-validate';

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
    type: [String, Number, Boolean] as PropType<any[] | boolean | undefined>,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);

const {
  label,
  inputClass,
  color,
  disabled,
  size,
  value: checkboxValue,
} = toRefs(props);

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

const {value: innerValue, errorMessage} = useField(props.name, props.rules, {
  initialValue: props.modelValue || props.value,
});
</script>

<template>
  <label class="flex items-center gap-2">
    <input
      :id="name"
      v-model="innerValue"
      type="checkbox"
      :value="checkboxValue"
      class="
        rounded
        transition
        duration-300
        disabled:border-gray-400
        disabled:bg-gray-400
        disabled:hover:bg-gray-300
      "
      :disabled="disabled"
      :class="[inputClass, colorClass]"
    />
    <span class="select-none" :for="name" :class="[sizeClass]">
      {{ label }}
    </span>
  </label>

  <div v-if="errorMessage" class="text-error-500 text-sm">
    {{ errorMessage }}
  </div>
</template>
