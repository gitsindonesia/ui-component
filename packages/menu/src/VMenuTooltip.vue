<script setup lang="ts">
import {toRefs} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const {show} = toRefs(props);

defineEmits(['update:show']);
</script>

<template>
  <span
    v-if="show"
    class="
      menu-tooltip
      hidden
      shadow
      absolute
      bg-gray-100
      text-gray-700
      px-4
      py-2.5
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
