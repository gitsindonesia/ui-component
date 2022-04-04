<script setup lang="ts">
import {toRefs, watch, computed, ref} from 'vue';
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue';
import type {Colors} from '@gits-id/types';

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
        class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
        :class="switchValue ? colorClass : 'bg-gray-200'"
      >
        <span
          class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full"
          :class="{'translate-x-5': checked, 'translate-x-0': !checked}"
        />
      </Switch>
    </SwitchGroup>
  </div>
</template>
