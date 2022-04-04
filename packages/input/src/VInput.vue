<script setup lang="ts">
import {ref, toRefs, computed, watch} from 'vue';
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
  noShadow: {
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
    xs: 'text-xs',
    sm: 'text-sm',
    default: 'text-sm',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  return sizes[props.size];
});

const inputClasses = computed(() => {
  return [sizeClass.value, inputDisabledClasses];
});

const wrapperColorClasses = computed(() => {
  let colorClass = '';
  if (error.value) {
    colorClass = 'input-has-error';
  } else {
    const colors: Record<string, string> = {
      default: 'input-default',
      primary: 'input-primary',
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
    class="flex w-full gap-2 items-center transition duration-300 rounded-md border border-gray-300 text-gray-500"
    :class="[wrapperClasses, noShadow ? '' : 'shadow-sm']"
  >
    <slot name="prepend">
      <SearchIcon v-if="prependIcon === 'search'" class="w-5 h-5 ml-3" />
    </slot>
    <input
      v-model="inputValue"
      class="v-input-field"
      :class="[
        inputClasses,
        error ? 'has-error' : '',
        $slots.prepend ? 'input-prepend' : '',
        $slots.append ? 'input-append' : '',
      ]"
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

<style scoped>
.v-input-field {
  @apply text-gray-800 w-full block transition duration-300 border-none rounded-md focus:outline-none focus:border-none focus:ring-transparent focus:ring-0 focus:shadow-none;
}
.v-input-field.has-error {
  @apply text-error-500;
}
.input-append {
  @apply px-0 pl-4;
}
.input-prepend {
  @apply px-0 pr-4;
}
.input-has-error {
  @apply border-error-500 focus-within:text-error-500 focus-within:border-error-500 focus-within:ring-error-500 focus-within:ring-1;
}
.input-default,
.input-primary {
  @apply focus-within:border-primary-500 focus-within:ring-primary-500 focus-within:ring-1;
}
.input-secondary {
  @apply focus-within:border-secondary-500 focus-within:ring-secondary-500 focus-within:ring-1;
}
.input-info {
  @apply focus-within:border-info-500 focus-within:ring-info-500 focus-within:ring-1;
}
.input-warning {
  @apply focus-within:border-warning-500 focus-within:ring-warning-500 focus-within:ring-1;
}
.input-success {
  @apply focus-within:border-success-500 focus-within:ring-success-500 focus-within:ring-1;
}
.input-error {
  @apply focus-within:border-error-500 focus-within:ring-error-500 focus-within:ring-1;
}
.input-dark {
  @apply focus-within:border-gray-500 focus-within:ring-gray-500 focus-within:ring-1;
}
</style>
