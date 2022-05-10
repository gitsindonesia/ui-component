<script setup lang="ts">
import {computed, toRefs} from 'vue';
import {useInputClasses, useTextSize} from '@gits-id/utils';
import {useField} from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
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
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  cols: {
    type: [String, Number],
    default: undefined,
  },
  rows: {
    type: [String, Number],
    default: undefined,
  },
  label: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
});

const {error, size} = toRefs(props);

defineEmits(['input:modelValue']);

const {value, errorMessage} = useField(props.name, props.rules, {
  initialValue: props.modelValue || props.value,
});

const {class: sizeClass} = useTextSize(size.value);
const inputClass = computed(() =>
  useInputClasses(error.value || !!errorMessage.value),
);

const classes = computed(() => [
  inputClass.value,
  sizeClass.value,
  {shadow: props.shadow},
]);
</script>

<template>
  <div class="mb-4">
    <label v-if="label" :for="name" class="mb-1 block">{{ label }}</label>
    <textarea
      :id="name"
      v-model="value"
      class="block w-full"
      :class="classes"
      :readonly="readonly"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
      v-bind="$attrs"
    />
    <div class="flex p-0 relative">
      <div
        v-if="errorMessage"
        class="text-error-600 text-sm mt-1"
        v-text="errorMessage"
      />
      <div v-if="counter" class="absolute right-0">
        {{ value.length }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
