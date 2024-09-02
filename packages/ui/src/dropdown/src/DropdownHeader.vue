<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>

<template>
  <div class="dropdown-header">
    <slot>{{ text }}</slot>
  </div>
</template>
