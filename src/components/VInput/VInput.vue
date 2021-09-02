<script setup lang="ts">
import {ref, toRefs, computed, watch} from 'vue';
import {ErrorMessage} from 'vee-validate';
import {useHeight, useInputClasses, useTextSize} from '../../utils';
import {SearchIcon} from '@heroicons/vue/solid';

const props = defineProps({
  value: {
    type: [String, Number],
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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
  size: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  prependIcon: {
    type: String,
    default: '',
  },
  appendIcon: {
    type: String,
    default: '',
  },
  text: {
    type: Boolean,
    default: false,
  },
});

const {
  type,
  modelValue,
  error,
  errorMessages,
  value: externalValue,
  readonly,
  disabled,
  size,
  placeholder,
  prependIcon,
  appendIcon,
  text,
} = toRefs(props);

const emit = defineEmits(['input:modelValue', 'blur']);

const inputValue = ref(props.value || props.modelValue);

const {class: sizeClass} = useTextSize(size.value);
const {class: heightClass} = useHeight(size.value);
const inputClass = computed(() => useInputClasses(error.value));

const classes = computed(() => [inputClass.value, sizeClass.value]);

watch(modelValue, (val) => {
  inputValue.value = val;
});

watch(externalValue, (val) => {
  inputValue.value = val;
});

const onBlur = () => emit('blur');
</script>

<template>
  <div
    class="
      flex
      w-full
      items-center
      transition
      duration-300
      rounded-md
      text-gray-600
    "
    :class="[
      text
        ? 'focus:border-none focus:ring-0'
        : 'border focus-within:text-primary-600 focus-within:border-primary-600 focus-within:ring-primary-600 focus-within:ring-1',
      error
        ? 'border-error-600 focus-within:text-error-600 focus-within:border-error-600 focus-within:ring-error-600 focus-within:ring-1'
        : '',
    ]"
  >
    <slot name="prepend">
      <SearchIcon v-if="prependIcon === 'search'" class="w-5 h-5 ml-3" />
    </slot>
    <input
      v-model="inputValue"
      class="
        w-full
        block
        rounded-md
        border-none
        ring-0
        text-gray-800
        focus:border-none focus:ring-0
      "
      :class="[text ? 'p-0' : heightClass, sizeClass]"
      :type="type"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="$attrs"
      @blur="onBlur"
    />
    <slot name="append">
      <SearchIcon v-if="appendIcon === 'search'" class="w-5 h-5 mr-3" />
    </slot>
  </div>

  <ErrorMessage
    v-if="errorMessages.length"
    class="text-error-600 text-sm"
    :name="name"
  />
</template>

<style scoped></style>
