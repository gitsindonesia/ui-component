<script setup lang="ts">
import {toRefs, computed, PropType, watch} from 'vue';
import {useField} from 'vee-validate';

type CheckboxValue = any[] | boolean | undefined;

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
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
  size: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String,
    default: 'aggressive',
  },
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValue>,
    default: false,
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
  wrapperClass: {
    type: String,
    default: '',
  },
  checkedValue: {
    type: Boolean,
    default: true,
  },
  uncheckedValue: {
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
    default: 'v-checkbox--disabled',
  },
  errorClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: CheckboxValue): void;
  }>();

const {modelValue, label, inputClass, disabled, name, rules, validationMode} =
  toRefs(props);

const isEagerValidation = computed(() => {
  return validationMode.value === 'eager';
});

const {
  value: innerValue,
  errorMessage,
  validate,
} = useField<CheckboxValue>(name, rules, {
  type: 'checkbox',
  valueProp: props.value,
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(modelValue, (val) => {
  innerValue.value = val;
});

watch(innerValue, (val) => {
  emit('update:modelValue', val);
});

const handleBlur = (m: any) => {
  if (isEagerValidation.value) {
    validate();
  }
};

const handleChange = (m: any) => {
  if (errorMessage.value && isEagerValidation.value) {
    validate();
  }
};
</script>

<template>
  <div :class="wrapperClass">
    <div
      class="v-checkbox"
      :class="[
        `v-checkbox-${color}`,
        {'v-checkbox--disabled': disabled, 'v-checkbox--error': !!errorMessage},
      ]"
    >
      <input
        :id="id || name"
        v-model="innerValue"
        @blur="handleBlur"
        @input="handleChange"
        :name="name"
        :value="value"
        type="checkbox"
        :class="['v-checkbox-input', inputClass]"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        class="v-checkbox-label"
        :for="id || name"
        @mousedown.prevent="null"
      >
        {{ label }}
      </label>
    </div>
    <div v-if="errorMessage" class="v-checkbox-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
:root {
  --v-checkbox-bg-color: theme('colors.white');
  --v-checkbox-border-width: 1px;
  --v-checkbox-border-style: solid;
  --v-checkbox-border-color: theme('colors.gray.500');
  --v-checkbox-border-radius: theme('borderRadius.DEFAULT');
}

.v-checkbox {
  @apply flex items-center gap-2;
}
.v-checkbox-input {
  border-radius: var(--v-checkbox-border-radius);
  background-color: var(--v-checkbox-bg-color);
  border: var(--v-checkbox-border-width) var(--v-checkbox-border-style)
    var(--v-checkbox-border-color);

  @apply transition duration-300
    disabled:bg-gray-100 disabled:border-gray-200 disabled:cursor-not-allowed;
}
.v-checkbox-label {
  @apply select-none;
}
.v-checkbox-error {
  @apply text-sm text-error-500;
}
.v-checkbox-primary .v-checkbox-input {
  @apply text-primary-500 focus:border-primary-500 focus:ring-primary-500;
}
.v-checkbox-secondary .v-checkbox-input {
  @apply text-secondary-500 focus:border-secondary-500 focus:ring-secondary-500;
}
.v-checkbox-info .v-checkbox-input {
  @apply text-info-500 focus:border-info-500 focus:ring-info-500;
}
.v-checkbox-success .v-checkbox-input {
  @apply text-success-500 focus:border-success-500 focus:ring-success-500;
}
.v-checkbox-warning .v-checkbox-input {
  @apply text-warning-500 focus:border-warning-500 focus:ring-warning-500;
}
.v-checkbox-error .v-checkbox-input {
  @apply text-error-500 focus:border-error-500 focus:ring-error-500;
}
.v-checkbox--error .v-checkbox-input {
  @apply text-error-500 border-error-500 ring-error-500 focus:border-error-500 focus:ring-error-500;
}
</style>
