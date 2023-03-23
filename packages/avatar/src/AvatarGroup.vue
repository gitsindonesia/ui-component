<script setup lang="ts">
import {computed, PropType} from 'vue';

export type AvatarGroupSpacing =
  | number
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

const defaultSpacing = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

const props = defineProps({
  spacing: {
    type: [String, Number] as PropType<AvatarGroupSpacing>,
    default: 'md',
  },
});

const isCustomSpacing = computed(() => {
  return defaultSpacing.includes(props.spacing as any);
});

const computedStyles = computed(() => {
  if (!isCustomSpacing.value) {
    const spacing =
      typeof props.spacing === 'number' ? `${props.spacing}px` : props.spacing;
    return {
      '--avatar-group-spacing': spacing,
    };
  }

  return {};
});
</script>

<template>
  <div
    class="avatar-group"
    :class="{
      [`avatar-group--${spacing}`]: spacing,
    }"
    :style="computedStyles"
  >
    <slot />
  </div>
</template>
