<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <i :class="`isax isax-${name}`"></i>
</template>
