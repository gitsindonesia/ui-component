<script setup lang="ts">
defineProps<{
  inset?: boolean;
}>();
</script>

<template>
  <div
    class="v-list-item-divider"
    :class="{
      'v-list-item-divider--inset': inset,
    }"
  />
</template>
