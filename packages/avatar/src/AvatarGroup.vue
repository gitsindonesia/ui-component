<script setup lang="ts">
defineProps({
  spacing: {
    type: [String, Number],
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
