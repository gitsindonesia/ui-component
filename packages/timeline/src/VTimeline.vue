<script setup lang="ts">
withDefaults(
  defineProps<{
    dashed?: boolean;
    horizontal?: boolean;
  }>(),
  {},
);
</script>

<template>
  <ol
    class="v-timeline"
    :class="{
      'v-timeline--dashed': dashed,
      'v-timeline--horizontal': horizontal,
    }"
  >
    <slot name="divider">
      <li class="v-timeline-divider" />
    </slot>
    <slot />
  </ol>
</template>
