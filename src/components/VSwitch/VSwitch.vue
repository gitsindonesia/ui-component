<script setup lang="ts">
import {toRefs, watch, computed, ref, inject} from 'vue';
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue';
import type {Colors} from '../../../types';

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
});

const emit = defineEmits(['update:modelValue']);

const {modelValue, label} = toRefs(props);

const colors: Record<Colors, string> = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  info: 'bg-info-500',
  warning: 'bg-warning-500',
  success: 'bg-success-500',
  error: 'bg-error-500',
  default: '',
};

const colorClass = computed(() =>
  props.color ? colors[props.color] : colors.default,
);

const switchValue = ref(modelValue.value);

watch(switchValue, (value) => {
  emit('update:modelValue', value);
});

watch(modelValue, (val) => {
  switchValue.value = val;
});
</script>

<template>
  <div class="w-full">
    <SwitchGroup as="div" class="flex items-center space-x-4">
      <SwitchLabel>{{ label }}</SwitchLabel>

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
          focus:outline-none focus:shadow-outline
        "
        :class="switchValue ? colorClass : 'bg-gray-200'"
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
          :class="{'translate-x-5': checked, 'translate-x-0': !checked}"
        />
      </Switch>
    </SwitchGroup>
  </div>
</template>
