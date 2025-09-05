<script setup lang="ts">
interface Props {
  src?: string;
  alt?: string;
}

defineProps<Props>();
</script>

<template>
  <img :src="src" :alt="alt" class="card-image" />
</template>
