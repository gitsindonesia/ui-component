<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {useField} from 'vee-validate';
import {toRefs, watch} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
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
  rules: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  groupClass: {
    type: String,
    default: '',
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  disabledClass: {
    type: String,
    default: 'disabled:text-gray-200 disabled:cursor-not-allowed',
  },
  errorClass: {
    type: String,
    default: '',
  },
});

const {modelValue, rules, label, inputClass, name, id} = toRefs(props);

const emit = defineEmits(['update:modelValue']);

type RadioValue = string | number | string[] | undefined;

const {value: inputValue, errorMessage} = useField<RadioValue>(name, rules, {
  initialValue: modelValue.value,
});

watch(
  inputValue,
  (val) => {
    emit('update:modelValue', val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    inputValue.value = val;
  },
  {immediate: true},
);
</script>

<template>
  <div
    class="v-radio"
    :class="[
      wrapperClass,
      {
        'v-radio--error': !!errorMessage,
      },
    ]"
  >
    <div class="v-radio-group" :class="groupClass">
      <input
        :id="id"
        v-model="inputValue"
        type="radio"
        :name="name"
        :value="value"
        class="v-radio-input"
        :class="inputClass"
        :aria-disabled="disabled"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        v-if="label"
        :for="id || name"
        class="v-radio-label"
        :class="labelClass"
      >
        {{ label }}
      </label>
    </div>
    <div v-if="errorMessage && !hideError" class="v-radio-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
.v-radio-group {
  @apply flex w-full items-center gap-2 select-none;
}
.v-radio-input {
  @apply transition duration-300;
}
.v-radio-error {
  @apply text-error-500 text-sm;
}
.v-radio.v-radio--error .v-radio-input {
  @apply border-error-500 focus:border-error-500 focus:ring-error-500;
}
</style>
