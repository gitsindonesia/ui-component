<script setup lang="ts">
interface Props {
  src?: string;
}

defineProps<Props>();
</script>

<template>
  <img
    :src="src"
    width="40"
    height="40"
    class="shrink-0 object-cover rounded-full w-10 h-10"
  />
</template>
