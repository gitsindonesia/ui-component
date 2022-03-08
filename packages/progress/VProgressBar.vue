<script setup>
import { computed } from "vue";
import { getBgColor } from "@gits-id/utils/colors";

const props = defineProps({
  width: {
    type: Number,
    default: 50,
  },
  color: {
    type: String,
    default: "default",
  },
});

const colorClass = computed(() => {
  return getBgColor(props.color);
});

const classes = computed(() => {
  return [colorClass.value];
});
</script>

<template>
  <div class="relative pt-1">
    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
      <div
        :style="{ width: width + '%' }"
        :class="classes"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
