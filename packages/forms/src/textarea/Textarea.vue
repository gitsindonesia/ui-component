<script setup lang="ts">
import {computed, toRefs, PropType, watch} from 'vue';
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
  wrapperClass: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String as PropType<'aggressive' | 'eager'>,
    default: 'aggressive',
  },
});

const {error, size, validationMode, name, rules} = toRefs(props);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

const isEagerValidation = computed(() => {
  return validationMode.value === 'eager';
});

const {value, errorMessage, handleChange} = useField(name, rules, {
  initialValue: props.modelValue || props.value,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(value, (val) => emit('update:modelValue', val));

const {class: sizeClass} = useTextSize(size.value);
const inputClasses = computed(() =>
  useInputClasses(error.value || !!errorMessage.value),
);

const classes = computed(() => [
  inputClasses.value,
  sizeClass.value,
  {shadow: props.shadow},
  props.inputClass,
]);

const validationListeners = computed(() => {
  // If the field is valid or have not been validated yet
  // lazy
  if (!errorMessage.value && isEagerValidation.value) {
    return {
      blur: handleChange,
      change: handleChange,
      // disable `shouldValidate` to avoid validating on input
      input: (e) => handleChange(e, false),
    };
  }
  // Aggressive
  return {
    blur: handleChange,
    change: handleChange,
    input: handleChange, // only switched this
  };
});
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="name" class="mb-1 block">{{ label }}</label>
    <textarea
      :id="name"
      v-model="value"
      v-on="validationListeners"
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
