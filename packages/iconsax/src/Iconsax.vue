<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <span :class="`isax isax-${name}`" class="w-6 h-6"></span>
</template>
