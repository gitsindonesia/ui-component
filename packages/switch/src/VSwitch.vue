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
  hint: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg' | string>,
    default: 'md',
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
      `v-switch--${size}`,
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
    <p v-if="hint" class="v-switch-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div v-if="errorMessage" class="v-switch--error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>
