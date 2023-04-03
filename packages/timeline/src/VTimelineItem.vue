<script setup lang="ts">
withDefaults(defineProps<{}>(), {});
</script>

<template>
  <li class="v-timeline-item">
    <slot />
  </li>
</template>
