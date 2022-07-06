<script setup lang="ts">
import {toRefs, watch, computed} from 'vue';
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
    type: String,
    default: 'primary',
  },
  inactiveClass: {
    type: String,
    default: 'bg-gray-200',
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
    default: 'text-error-600 mt-1 text-sm',
  },
});

const emit = defineEmits(['update:modelValue']);

const {modelValue, label, name, rules} = toRefs(props);

const colors: Record<Colors, string> = {
  primary: 'bg-primary-600',
  secondary: 'bg-secondary-600',
  info: 'bg-info-600',
  warning: 'bg-warning-600',
  success: 'bg-success-600',
  error: 'bg-error-600',
  default: '',
};

const colorClass = computed(() =>
  props.color ? colors[props.color] : colors.default,
);

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
  <div :class="['w-full', wrapperClass]">
    <SwitchGroup
      as="div"
      class="flex items-center gap-4"
      :class="switchGroupClass"
    >
      <SwitchLabel v-if="label" :class="labelClass">
        {{ label }}
      </SwitchLabel>

      <Switch
        v-slot="{checked}"
        v-model="switchValue"
        as="button"
        class="
          relative
          inline-flex
          flex-shrink-0
          h-6
          transition-colors
          duration-200
          ease-in-out
          border-2 border-transparent
          rounded-full
          cursor-pointer
          w-11
          focus:outline-none
          focus:shadow-outline
        "
        :class="[
          switchValue ? colorClass ?? activeClass : inactiveClass,
          switchClass,
        ]"
      >
        <span
          class="
            inline-block
            w-5
            h-5
            transition
            duration-200
            ease-in-out
            transform
            bg-white
            rounded-full
          "
          :class="[
            {'translate-x-5': checked, 'translate-x-0': !checked},
            buttonClass,
          ]"
        />
      </Switch>
    </SwitchGroup>
    <div v-if="errorMessage" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>
