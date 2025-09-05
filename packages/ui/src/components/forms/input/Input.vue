<script setup lang="ts">
import {type PropType, computed, ref} from 'vue';
import Icon from '@morpheme/icon';
import SelectOptions, {type Option} from './SelectOptions.vue';
import {useVModel} from '@vueuse/core';

type IconSize = InstanceType<typeof Icon>['$props']['size'];

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
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
    default: undefined,
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
    type: String,
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
    default: undefined,
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
  as: {
    type: String,
    default: 'input',
  },
  options: {
    type: Array as PropType<Option[]>,
    default: () => [] as Option[],
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'clickPrepend'): void;
  (e: 'clickPrependIcon'): void;
  (e: 'clickAppend'): void;
  (e: 'clickAppendIcon'): void;
  (e: 'clear'): void;
}>();

const inputId = computed(() => props.id || props.name);
const uncontrolledValue = useVModel(props, 'modelValue', emit);
const input = ref();

function clear() {
  uncontrolledValue.value = '';
  emit('clear');
}

function focus() {
  input.value?.focus();
}

defineExpose({
  focus,
});

defineSlots<{
  default?: (props: {}) => any;
  label?: (props: {for?: string}) => any;
  prepend?: (props: {}) => any;
  'prepend.outer'?: (props: {}) => any;
  append?: (props: {}) => any;
  'append.outer'?: (props: {}) => any;
  clearable?: (props: {}) => any;
  hint?: (props: {}) => any;
  error?: (props: {}) => any;
}>();
</script>

<template>
  <div
    :class="[
      `v-input v-input-${color} v-input-${
        as === 'input' ? type : as
      } v-input--${size}`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--shadow': shadow,
        'v-input--rounded': rounded,
        'v-input--borderless': borderless,
        'v-input--no-ring': noRing,
      },
      wrapperClass,
    ]"
  >
    <slot v-if="label" name="label" v-bind="{for: inputId}">
      <label
        v-if="label"
        :for="inputId"
        class="v-input-label"
        :class="labelClass"
      >
        {{ label }}
      </label>
    </slot>
    <div class="v-input-wrapper">
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
      <component
        :is="as"
        :id="id || name"
        :name="name"
        :value="uncontrolledValue"
        @input="emit('update:modelValue', $event.target.value)"
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
      >
        <slot>
          <SelectOptions v-if="options.length > 0" :options="options" />
        </slot>
      </component>
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
      <slot v-if="clearable && uncontrolledValue" name="clearable">
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
