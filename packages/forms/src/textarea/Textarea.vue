<script setup lang="ts">
import {computed, toRefs, PropType, watch} from 'vue';
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
  /**
   * @deprecated
   */
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

const {validationMode, name, rules} = toRefs(props);

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

const validationListeners = computed(() => {
  // If the field is valid or have not been validated yet
  // lazy
  if (!errorMessage.value && isEagerValidation.value) {
    return {
      blur: handleChange,
      change: handleChange,
      // disable `shouldValidate` to avoid validating on input
      input: (e: any) => handleChange(e, false),
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
  <div
    :class="[
      `v-input v-input--textarea`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--shadow': shadow,
      },
      wrapperClass,
    ]"
  >
    <label v-if="label" :for="name" class="v-input-label">{{ label }}</label>
    <textarea
      :id="name"
      v-model="value"
      v-on="validationListeners"
      :class="['v-input-control', inputClass]"
      :readonly="readonly"
      :disabled="disabled"
      :cols="cols"
      :rows="rows"
      v-bind="$attrs"
    />
    <div class="v-input-footer">
      <div class="v-input-error" v-text="errorMessage" />
      <div v-if="counter" class="v-input-counter">
        <slot name="counter" :count="value.length">
          {{ value.length }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style>
@import '../forms.css';
</style>
