<script setup lang="ts">
import {PropType} from 'vue';

type ToggleClass = {
  open: string;
  close: string;
};

defineProps({
  mini: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  miniClass: {
    type: Object as PropType<ToggleClass>,
    default: () => ({
      open: 'sm:ml-[85px]',
      close: 'sm:ml-[250px]',
    }),
  },
  fixedClass: {
    type: Object as PropType<ToggleClass>,
    default: () => ({
      open: 'pt-24',
      close: 'pt-6',
    }),
  },
});
</script>

<template>
  <div
    class="container mx-auto py-10 px-4 lg:px-0"
    :class="[
      'transition-all duration-300',
      mini ? miniClass.open : miniClass.close,
      fixed ? fixedClass.open : fixedClass.close,
    ]"
  >
    <slot />
  </div>
</template>
