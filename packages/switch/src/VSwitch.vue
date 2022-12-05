<script setup lang="ts">
import {toRefs, watch, PropType} from 'vue';
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue';
import type {Colors} from './colors';
import {useField} from 'vee-validate';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String as PropType<Colors>,
    default: 'primary',
  },
  inactiveClass: {
    type: String,
    default: '',
  },
  activeClass: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  switchClass: {
    type: String,
    default: '',
  },
  switchGroupClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue, label, name, rules} = toRefs(props);

const {value: switchValue, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value,
});

watch(switchValue, (value) => {
  emit('update:modelValue', value);
});

watch(modelValue, (val) => {
  switchValue.value = val;
});
</script>

<template>
  <div
    class="v-switch"
    :class="[
      `v-switch-${color}`,
      {
        'v-switch--checked': switchValue,
      },
      wrapperClass,
    ]"
  >
    <SwitchGroup as="div" class="v-switch-group" :class="switchGroupClass">
      <SwitchLabel v-if="label" class="v-switch-label" :class="labelClass">
        {{ label }}
      </SwitchLabel>
      <Switch
        v-model="switchValue"
        as="button"
        class="v-switch-button"
        :class="[switchValue ? activeClass : inactiveClass, switchClass]"
      >
        <span class="v-switch-thumb" :class="[buttonClass]" />
      </Switch>
    </SwitchGroup>
    <div v-if="errorMessage" class="v-switch--error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style>
:root {
  --v-switch-width: theme('width.full');
  /* button */
  --v-switch-button-bg-color: theme('colors.primary.500');
  --v-switch-button-border-color: theme('colors.primary.500');
  --v-switch-button-width: theme('width.11');
  --v-switch-button-height: theme('height.6');
  --v-switch-button-padding-y: theme('padding.0');
  --v-switch-button-padding-x: theme('padding.0');
  /* thumb */
  --v-switch-thumb-bg-color: theme('colors.white');
  --v-switch-thumb-width: theme('width.5');
  --v-switch-thumb-height: theme('height.5');
  --v-switch-thumb-border-radius: theme('borderRadius.full');
  /* label */
  --v-switch-label-font-size: theme('fontSize.base');
  --v-switch-label-font-weight: theme('fontWeight.normal');
}

.v-switch {
  width: var(--v-switch-width);
}

.v-switch-group {
  @apply flex items-center gap-4;
}

.v-switch-label {
  font-size: var(--v-switch-label-font-size);
  font-weight: var(--v-switch-label-font-weight);
}

.v-switch-button {
  background: var(--v-switch-button-bg-color);
  border: 2px solid var(--v-switch-button-border-color);
  width: var(--v-switch-button-width);
  height: var(--v-switch-button-height);
  padding: var(--v-switch-button-padding-y) var(--v-switch-button-padding-x);

  @apply relative
    inline-flex
    items-center
    flex-shrink-0
    transition-colors
    duration-200
    ease-in-out
    rounded-full
    cursor-pointer;
}

.v-switch-button:focus {
  outline-color: var(--v-switch-button-border-color);
}

.v-switch-thumb {
  background: var(--v-switch-thumb-bg-color);
  width: var(--v-switch-thumb-width);
  height: var(--v-switch-thumb-height);
  border-radius: var(--v-switch-thumb-border-radius);

  @apply inline-block
    transition
    duration-200
    ease-in-out
    transform
    translate-x-0;
}

.v-switch--error {
  @apply text-error-600 mt-1 text-sm;
}

/* checked */
.v-switch--checked .v-switch-thumb {
  @apply translate-x-5;
}

/* colors */
.v-switch-secondary .v-switch-button {
  --v-switch-button-bg-color: theme('colors.secondary.500');
  --v-switch-button-border-color: theme('colors.secondary.500');
}

.v-switch-success .v-switch-button {
  --v-switch-button-bg-color: theme('colors.success.500');
  --v-switch-button-border-color: theme('colors.success.500');
}

.v-switch-info .v-switch-button {
  --v-switch-button-bg-color: theme('colors.info.500');
  --v-switch-button-border-color: theme('colors.info.500');
}

.v-switch-warning .v-switch-button {
  --v-switch-button-bg-color: theme('colors.warning.500');
  --v-switch-button-border-color: theme('colors.warning.500');
}

.v-switch-error .v-switch-button {
  --v-switch-button-bg-color: theme('colors.error.500');
  --v-switch-button-border-color: theme('colors.error.500');
}
</style>
