<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <span class="breadcrumbs-divider">
    <slot> {{ text }} </slot>
  </span>
</template>
