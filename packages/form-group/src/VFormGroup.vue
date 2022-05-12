<script setup lang="ts">
import {toRefs} from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  labelFor: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'mb-2 font-medium text-sm',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  inlineClass: {
    type: String,
    default: 'w-full sm:w-3/12',
  },
});

const {label, labelFor, inline, labelClass, inlineClass} = toRefs(props);

defineEmits(['update:label']);
</script>

<template>
  <div
    class="mb-5 flex w-full"
    :class="[inline ? 'flex-col sm:flex-row' : 'flex-col']"
  >
    <label :for="labelFor" :class="[labelClass, inline ? inlineClass : '']">
      {{ label }}
    </label>
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>
