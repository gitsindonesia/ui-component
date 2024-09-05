<script setup lang="ts">
withDefaults(defineProps<{}>(), {});
</script>

<template>
  <li class="v-timeline-item-content">
    <slot />
  </li>
</template>
