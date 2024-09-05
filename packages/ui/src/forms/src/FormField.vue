<script setup lang="ts">
import type {PropType} from 'vue';
import Icon from '../../icon/src';

type IconSize = InstanceType<typeof Icon>['$props']['size'];

defineProps({
  modelValue: {
    type: [String, Number],
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
    type: String as PropType<'primary' | 'secondary' | 'default'>,
    default: 'default',
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
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
  errorClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: '',
  },
  borderless: {
    type: Boolean,
    default: false,
  },
  noRing: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'clickPrepend'): void;
  (e: 'clickPrependIcon'): void;
  (e: 'clickAppend'): void;
  (e: 'clickAppendIcon'): void;
  (e: 'clear'): void;
}>();

function clear() {
  emit('clear');
}
</script>

<template>
  <div
    :class="[
      `v-input v-input-${color} v-input--${size}`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--shadow': shadow,
        'v-input--rounded': rounded,
        'v-input--borderless': borderless,
        'v-input--no-ring': noRing,
      },
    ]"
  >
    <slot v-if="label" name="label" :v-slot="{for: id || name}">
      <label
        v-if="label"
        :for="id || name"
        class="v-input-label"
        :class="labelClass"
      >
        {{ label }}
      </label>
    </slot>
    <div class="v-input-wrapper" :class="wrapperClass">
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
      <slot v-bind="{modelValue, id, name, label, hint}" />
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
      <slot v-if="clearable && modelValue" name="clearable">
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
    <div v-if="hint" class="v-input-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div
      class="v-input-error"
      v-if="errorMessage && !hideError"
      :class="errorClass"
    >
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
