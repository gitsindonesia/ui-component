<script setup lang="ts">
import {getColor} from '@morpheme/utils';

const props = withDefaults(
  defineProps<{
    color?: string;
    textColor?: string;
  }>(),
  {},
);

const bgColor = getColor(props.color);
const textColor = getColor(props.textColor);
</script>

<template>
  <li
    class="v-timeline-item-dot"
    :style="{backgroundColor: bgColor, color: textColor}"
  >
    <slot />
  </li>
</template>
