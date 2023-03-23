<script setup lang="ts">
import {PropType} from 'vue';

export type AvatarGroupSpacing =
  | number
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

defineProps({
  spacing: {
    type: [String, Number] as PropType<AvatarGroupSpacing>,
    default: 'md',
  },
});
</script>

<template>
  <div
    class="avatar-group"
    :class="{
      [`avatar-group--${spacing}`]: spacing,
    }"
  >
    <slot />
  </div>
</template>
