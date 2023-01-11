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
  errorClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
});

const {
  modelValue,
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
const uncontrolledValue = ref();

const {
  value: vvValue,
  errorMessage,
  handleChange,
  resetField,
  setValue,
} = useField(name, rules, {
  initialValue: props.modelValue || props.value,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(modelValue, (val) => {
  uncontrolledValue.value = val;
});

watch(vvValue, (val) => {
  uncontrolledValue.value = val;
});

watch(uncontrolledValue, (val) => {
  if (name.value) {
    setValue(val);
  }

  emit('update:modelValue', val);
});

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
  uncontrolledValue.value = "";

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
      <label v-if="label" :for="id || name" class="v-input-label" :class="labelClass">
        {{ label }}
      </label>
    </slot>
    <div v-if="text" v-bind="$attrs" class="v-input-text">{{ uncontrolledValue }}</div>
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
        v-model="uncontrolledValue"
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

    <div v-if="errorMessage" class="v-input-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="../forms.scss" lang="scss"></style>
