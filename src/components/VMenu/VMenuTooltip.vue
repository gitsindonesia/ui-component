<script setup>
import {ref, toRefs} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const {show} = toRefs(props);

const emit = defineEmits(['update:show']);
</script>

<template>
  <span
    v-if="show"
    class="
      menu-tooltip
      hidden
      shadow
      absolute
      bg-gray-200
      text-gray-700
      px-4
      py-3
      min-w-[200px]
      rounded
      left-20
      sm:group-hover:block
      z-10
    "
  >
    <slot />
  </span>
</template>

<style scoped></style>
