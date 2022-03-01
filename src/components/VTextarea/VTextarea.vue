<script setup lang="ts">
import {computed, watch, ref, toRefs} from 'vue';
import {ErrorMessage} from 'vee-validate';
import {useInputClasses, useTextSize} from '../../utils';

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
});

const {
  modelValue,
  error,
  errorMessages,
  value: externalValue,
  readonly,
  disabled,
  size,
  rows,
  cols,
} = toRefs(props);

const emit = defineEmits(['input:modelValue', 'blur']);

const value = ref(props.value || props.modelValue);

const {class: sizeClass} = useTextSize(size.value);
const inputClass = computed(() => useInputClasses(error.value));

const classes = computed(() => [inputClass.value, sizeClass.value]);

watch(modelValue, (val) => {
  value.value = val;
});

watch(externalValue, (val) => {
  value.value = val;
});

const onBlur = () => emit('blur');
</script>

<template>
  <textarea
    v-model="value"
    class="block w-full"
    :class="classes"
    :readonly="readonly"
    :disabled="disabled"
    :cols="cols"
    :rows="rows"
    v-bind="$attrs"
    @blur="onBlur"
  />
  <div class="flex p-0 relative">
    <ErrorMessage
      v-if="errorMessages.length"
      class="text-error-600 text-sm"
      :name="name"
    />
    <div v-if="counter" class="absolute right-0 ">
      {{ value.length }}
    </div>
  </div>
</template>

<style scoped></style>
