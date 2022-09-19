<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {toRefs, computed} from 'vue';
import {useField} from 'vee-validate';
import {Icon} from '@iconify/vue';

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
    default: 'default',
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
  label: {
    type: String,
    default: '',
  },
  rules: {
    type: [Object, String],
    default: null,
  },
  id: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  prependClass: {
    type: String,
    default: '',
  },
  prependIconClass: {
    type: String,
    default: '',
  },
  appendClass: {
    type: String,
    default: '',
  },
  appendIconClass: {
    type: String,
    default: '',
  },
});

const {type, readonly, disabled, placeholder, prependIcon, name, rules} =
  toRefs(props);

const emit = defineEmits([
  'input:modelValue',
  'blur',
  'change',
  'clickPrepend',
  'clickPrependIcon',
  'clickAppend',
  'clickAppendIcon',
]);

const sizeClass = computed(() => {
  const sizes: Record<string, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    default: 'text-base',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  return sizes[props.size];
});

const {value: inputValue, errorMessage} = useField(name, rules, {
  initialValue: props.modelValue || props.value,
});

const inputVariantClass = computed(() => {
  if (props.error || errorMessage.value) {
    return 'border-error-500 focus:ring-error-500 focus:ring-opacity-50 focus:border-error-500';
  } else {
    const variants: Record<string, string> = {
      default:
        'border-gray-300 hover:border-gray-400 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500',
      blue: 'border-gray-300 hover:border-gray-400 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500',
      primary:
        'border-gray-300 hover:border-gray-400 focus:ring-primary-500 focus:ring-opacity-50 focus:border-primary-500',
      secondary:
        'border-gray-300 hover:border-gray-400 focus:ring-secondary-500 focus:ring-opacity-50 focus:border-secondary-500',
      info: 'border-gray-300 hover:border-gray-400 focus:ring-info-500 focus:ring-opacity-50 focus:border-info-500',
      warning:
        'border-gray-300 hover:border-gray-400 focus:ring-warning-500 focus:ring-opacity-50 focus:border-warning-500',
      success:
        'border-gray-300 hover:border-gray-400 focus:ring-success-500 focus:ring-opacity-50 focus:border-success-500',
      error:
        'border-gray-300 hover:border-gray-400 focus:ring-error-500 focus:ring-opacity-50 focus:border-error-500',
      dark: 'border-gray-300 hover:border-gray-400 focus:ring-gray-500 focus:ring-opacity-50 focus:border-gray-500',
    };
    return variants[props.color];
  }
});

const paddingClass = computed(() => {
  const classes = [];

  if (props.prependIcon) {
    classes.push('pl-10');
  }

  if (props.appendIcon) {
    classes.push('pr-10');
  }

  return classes.join(' ');
});
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="label" :for="id || name" class="mb-1 block">{{ label }}</label>
    <div v-if="text" v-bind="$attrs">{{ inputValue }}</div>
    <div v-else class="relative w-full flex gap-2 items-center">
      <slot name="prepend.outer">
        <div
          class="
            absolute
            inset-y-0
            left-0
            h-full
            flex
            items-center
            px-3
            text-gray-500
          "
          :class="prependClass"
          @click="emit('clickPrepend')"
        >
          <slot name="prepend">
            <Icon
              :icon="prependIcon"
              class="w-5 h-5"
              :class="prependIconClass"
              @click="emit('clickPrependIcon')"
            />
          </slot>
        </div>
      </slot>
      <input
        :id="id || name"
        v-model="inputValue"
        class="
          w-full
          border
          px-3
          py-2
          focus:outline-none
          rounded-md
          transition
          duration-300
          disabled:cursor-not-allowed
          focus:ring-2
        "
        :class="[
          {shadow},
          sizeClass,
          inputVariantClass,
          inputClass,
          paddingClass,
        ]"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
      />
      <slot name="append.outer">
        <div
          class="
            absolute
            inset-y-0
            right-0
            h-full
            flex
            items-center
            px-3
            text-gray-500
          "
          :class="appendClass"
          @click="emit('clickAppend')"
        >
          <slot name="append">
            <Icon
              :icon="appendIcon"
              class="w-5 h-5"
              :class="appendIconClass"
              @click="emit('clickAppendIcon')"
            />
          </slot>
        </div>
      </slot>
    </div>

    <div v-if="errorMessage" class="text-error-500 text-sm">
      {{ errorMessage }}
    </div>
  </div>
</template>
