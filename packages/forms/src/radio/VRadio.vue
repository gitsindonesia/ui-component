<script setup lang="ts">
import {ref, toRefs, watch, computed} from 'vue';

const props = defineProps({
  modelValue: {
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
});

const {modelValue, label, inputClass, color, name, id} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const value = ref<string | number | string[] | undefined>(props.modelValue);

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
  value,
  (val) => {
    emit('update:modelValue', val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    value.value = val;
  },
  {immediate: true},
);
</script>

<template>
  <label class="flex w-full items-center gap-2 select-none">
    <input
      :id="id"
      v-model="value"
      type="radio"
      :name="name"
      :value="value"
      class="transition duration-300"
      :class="[inputClass, colorClass]"
    />
    {{ label }}
  </label>
</template>
