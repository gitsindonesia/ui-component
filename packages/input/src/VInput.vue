<script setup lang="ts">
import {ref, toRefs, computed, watch, useSlots} from 'vue';
import {ErrorMessage} from 'vee-validate';
import {inputDisabledClasses} from '@gits-id/utils';
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
    default: 'default',
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
  color: {
    type: String,
    default: 'primary',
  },
  text: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: Object,
    default: () => ({
      wrapper: '',
      input: '',
      prepend: '',
      append: '',
    }),
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
  placeholder,
  prependIcon,
  appendIcon,
} = toRefs(props);

const emit = defineEmits(['input:modelValue', 'blur']);

const inputValue = ref(props.value || props.modelValue);

const sizeClass = computed(() => {
  const sizes: Record<string, string> = {
    xs: 'text-sm',
    sm: 'text-sm',
    default: 'text-base',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  return sizes[props.size];
});

const slots = useSlots();

const inputClasses = computed(() => {
  return [
    'border-none rounded-lg focus:ring-0 focus:border-none w-full',
    'disabled:text-gray-300 disabled:placeholder:text-gray-300 disabled:cursor-not-allowed',
    sizeClass.value,
    error ? 'has-error' : '',
    slots.prepend ? 'input-prepend' : '',
    slots.append ? 'input-append' : '',
  ];
});

const wrapperColorClasses = computed(() => {
  let colorClass = '';
  if (error.value) {
    colorClass = 'input-has-error';
  } else {
    const colors: Record<string, string> = {
      default:
        'focus-within:ring focus-within:ring-blue-500/30 focus-within:border focus-within:border-blue-500',
      primary:
        'focus-within:ring focus-within:ring-blue-500/30 focus-within:border focus-within:border-blue-500',
      secondary: 'input-secondary',
      info: 'input-info',
      warning: 'input-warning',
      error: 'input-error',
      success: 'input-success',
      dark: 'input-dark',
    };
    colorClass = colors[props.color];
  }
  return colorClass;
});

const wrapperClasses = computed(() => {
  return [wrapperColorClasses.value];
});

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
      gap-2
      items-center
      transition
      duration-300
      rounded-md
      border border-gray-300
      text-gray-500
    "
    :class="[wrapperClasses, {shadow}]"
  >
    <slot name="prepend">
      <SearchIcon v-if="prependIcon === 'search'" class="w-5 h-5 ml-3" />
    </slot>
    <input
      v-model="inputValue"
      :class="inputClasses"
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
    class="text-error-500 text-sm"
    :name="name"
  />
</template>
