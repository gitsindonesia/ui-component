<script setup>
import {MenuItem} from '@headlessui/vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <MenuItem v-slot="{active}">
    <a
      :class="[
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        disabled ? 'text-gray-700 cursor-not-allowed opacity-50' : '',
      ]"
      class="
        flex
        justify-between
        w-full
        px-4
        py-2
        text-sm
        leading-5
        text-left
        cursor-pointer
      "
      :disabled="disabled"
      v-bind="$attrs"
    >
      <slot />
    </a>
  </MenuItem>
</template>
