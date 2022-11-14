<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {toRefs, computed, watch, PropType, ref} from 'vue';
import {useField} from 'vee-validate';
import Icon from '@gits-id/icon';

type IconSize = InstanceType<typeof Icon>['$props']['size'];

const props = defineProps({
  /**
   * @deprecated Use `modelValue` instead
   */
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
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
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
  validationMode: {
    type: String,
    default: 'aggressive',
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
  prependIconSize: {
    type: String as PropType<IconSize>,
    default: 'md',
  },
  appendClass: {
    type: String,
    default: '',
  },
  appendIconClass: {
    type: String,
    default: '',
  },
  appendIconSize: {
    type: String as PropType<IconSize>,
    default: 'md',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearableIcon: {
    type: String,
    default: 'ri:close-line',
  },
  clearableIconClass: {
    type: String,
    default: '',
  },
  clearableIconSize: {
    type: String as PropType<IconSize>,
    default: 'md',
  },
});

const {
  type,
  readonly,
  disabled,
  placeholder,
  prependIcon,
  name,
  rules,
  validationMode,
} = toRefs(props);

const emit = defineEmits([
  'update:modelValue',
  'blur',
  'change',
  'clickPrepend',
  'clickPrependIcon',
  'clickAppend',
  'clickAppendIcon',
  'clear',
]);

const isEagerValidation = computed(() => {
  return validationMode.value === 'eager';
});

const input = ref();

const {
  value: inputValue,
  errorMessage,
  handleChange,
  resetField,
} = useField(name, rules, {
  initialValue: props.modelValue || props.value,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(inputValue, (val) => emit('update:modelValue', val));

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

const clear = () => {
  resetField();
  emit('clear');
  input.value?.focus();
};
</script>

<template>
  <div
    :class="[
      `v-input v-input-${color} v-input--${size}`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--shadow': shadow,
      },
      wrapperClass,
    ]"
  >
    <slot v-if="label" name="label" :v-slot="{for: id || name}">
      <label v-if="label" :for="id || name" class="v-input-label">
        {{ label }}
      </label>
    </slot>
    <div v-if="text" v-bind="$attrs" class="v-input-text">{{ inputValue }}</div>
    <div v-else class="v-input-wrapper">
      <slot name="prepend.outer">
        <div
          class="v-input-prepend"
          :class="prependClass"
          @click="emit('clickPrepend')"
        >
          <slot name="prepend">
            <Icon
              v-if="prependIcon"
              :name="prependIcon"
              :size="prependIconSize || size"
              class="v-input-icon v-input-icon--prepend"
              :class="prependIconClass"
              @click="emit('clickPrependIcon')"
            />
          </slot>
        </div>
      </slot>
      <input
        :id="id || name"
        v-model="inputValue"
        v-on="validationListeners"
        ref="input"
        class="v-input-control"
        :class="[
          {
            'v-input-control--has-prepend-class': !!prependClass,
            'v-input-control--has-append-class': !!appendClass,
          },
          inputClass,
        ]"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
      />
      <slot name="append.outer">
        <div
          class="v-input-append"
          :class="appendClass"
          @click="emit('clickAppend')"
        >
          <slot name="append">
            <Icon
              v-if="appendIcon"
              :name="appendIcon"
              :size="appendIconSize || size"
              class="v-input-icon v-input-icon--append"
              :class="appendIconClass"
              @click="emit('clickAppendIcon')"
            />
          </slot>
        </div>
      </slot>
      <slot v-if="clearable && inputValue" name="clearable">
        <button
          type="button"
          aria-label="Clear"
          class="v-input-clearable"
          title="Clear"
          @click="clear"
        >
          <Icon
            :name="clearableIcon"
            :size="clearableIconSize || size"
            class="v-input-icon v-input-icon--append v-input-icon--clearable"
            :class="clearableIconClass"
          />
        </button>
      </slot>
    </div>

    <div v-if="errorMessage" class="v-input-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
:root {
  /* input control */
  --v-input-height: 2.5rem;
  --v-input-border-color: theme('colors.gray.300');
  --v-input-placeholder-color: theme('colors.gray.500');
  --v-input-border-radius: theme('borderRadius.md');
  --v-input-padding-x: theme('padding.3');
  --v-input-padding-y: theme('padding.2');
  --v-input-font-size: theme('fontSize.base');
  --v-input-bg-color: theme('colors.white');

  /* label */
  --v-input-label-font-size: theme('fontSize.sm')
  --v-input-label-font-weight: theme('fontWeight.semibold');
  --v-input-label-display: block;
  --v-input-label-margin-bottom: theme('margin.1');

  /* text */
  --v-input-text-color: theme('colors.gray.600');
  --v-input-text-font-size: theme('fontSize.sm');
  --v-input-text-font-weight: theme('fontWeight.normal');

  /* icon */
  --v-input-icon-width: theme('width.5');
  --v-input-icon-height: theme('height.5');
  --v-input-icon-color: theme('colors.gray.500');
}
.v-input-label {
  font-size: var(--v-input-label-font-size);
  font-weight: var(--v-input-label-font-weight);
  display: var(--v-input-label-display);
  margin-bottom: var(--v-input-label-margin-bottom);
}
.v-input-wrapper {
  border: 1px solid var(--v-input-border-color);
  border-radius: var(--v-input-border-radius);
  background-color: var(--v-input-bg-color);

  @apply relative flex items-center transition duration-300;
  @apply focus-within:ring-1;
}
.v-input-prepend:empty,
.v-input-append:empty {
  display: none;
}
.v-input-prepend:not(:empty){
  border-top-left-radius: var(--v-input-border-radius);
  border-bottom-left-radius: var(--v-input-border-radius);

  @apply px-3;
}
.v-input-append:not(:empty){
  border-top-right-radius: var(--v-input-border-radius);
  border-bottom-right-radius: var(--v-input-border-radius);

  @apply px-3;
}
.v-input-prepend,
.v-input-append {
  @apply self-stretch flex items-center;
}

.v-input-control {
  flex: 1;
  border-radius: var(--v-input-border-radius);
  height: var(--v-input-height);
  font-size: var(--v-input-font-size);
  background-color: transparent;

  @apply focus:ring-0 border-none focus:border-none focus:outline-none;
}

.v-input:has(.v-input-prepend:not(:empty)) .v-input-control:not(.v-input-control--has-prepend-class) {
  @apply pl-0;
}
.v-input:has(.v-input-append:not(:empty)) .v-input-control:not(.v-input-control--has-append-class) {
  @apply pr-0;
}

.v-input-control::placeholder {
  color: var(--v-input-placeholder-color);
}
/* colors */
.v-input.v-input-default .v-input-wrapper {
  @apply focus-within:border-blue-500 focus-within:ring-blue-500;
}
.v-input.v-input-primary .v-input-wrapper {
  @apply focus-within:border-primary-500 focus-within:ring-primary-500;
}
.v-input.v-input-secondary .v-input-wrapper {
  @apply focus-within:border-secondary-500 focus-within:ring-secondary-500;
}
.v-input.v-input-info .v-input-wrapper {
  @apply focus-within:border-info-500 focus-within:ring-info-500;
}
.v-input.v-input-warning .v-input-wrapper {
  @apply focus-within:border-warning-500 focus-within:ring-warning-500;
}
.v-input.v-input-success .v-input-wrapper {
  @apply focus-within:border-success-500 focus-within:ring-success-500;
}
.v-input.v-input-error .v-input-wrapper {
  @apply focus-within:border-error-500 focus-within:ring-error-500;
}
.v-input.v-input-dark .v-input-wrapper {
  @apply focus-within:border-gray-500 focus-within:ring-gray-500;
}
/* error */
.v-input.v-input--error .v-input-wrapper {
  @apply border-error-500 focus-within:border-error-500 focus-within:ring-error-500;
}
.v-input-error {
  @apply text-error-500 text-sm mt-1 transition duration-300;
}

/* disabled */
.v-input.v-input--disabled .v-input-wrapper {
  @apply border-gray-200 bg-gray-100;
}
.v-input.v-input--disabled .v-input-control {
  @apply cursor-not-allowed;
}
/* shadow */
.v-input.v-input--shadow .v-input-wrapper {
  @apply shadow-sm;
}
/* text */
.v-input-text {
  color: var(--v-input-text-color);
  font-size: var(--v-input-text-font-size);
  font-weight: var(--v-input-text-font-weight);
}

/* icon */
.v-input-icon {
  width: var(--v-input-icon-width) !important;
  height: var(--v-input-icon-height) !important;
  color: var(--v-input-icon-color);
}

/* sizes */
.v-input.v-input--sm {
  --v-input-height: 2rem;
  --v-input-padding-x: theme('padding.2');
  --v-input-padding-y: theme('padding.1');
  --v-input-font-size: theme('fontSize.sm');
  --v-input-label-font-size: theme('fontSize.xs');
}
.v-input.v-input--sm .v-input-icon {
  --v-input-icon-width: theme('width.4');
  --v-input-icon-height: theme('height.4');
}
.v-input.v-input--sm .v-input-prepend:not(:empty) {
  @apply px-2;
}

.v-input.v-input--lg {
  --v-input-height: 50px;
  --v-input-padding-x: theme('padding.5');
  --v-input-padding-y: theme('padding.3');
  --v-input-font-size: theme('fontSize.lg');
  --v-input-label-font-size: theme('fontSize.base');
}
.v-input.v-input--lg .v-input-icon {
  --v-input-icon-width: theme('width.7');
  --v-input-icon-height: theme('height.7');
}

.v-input-clearable {
  @apply cursor-pointer w-7 h-7 flex items-center justify-center
  hover:bg-gray-100 active:bg-gray-50 rounded-full mr-2;
}
</style>
