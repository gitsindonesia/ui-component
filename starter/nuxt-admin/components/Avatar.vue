<script setup lang="ts">
interface Props {
  src?: string | null;
  alt?: string;
}

withDefaults(defineProps<Props>(), {
  alt: '',
});
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="alt"
    width="40"
    height="40"
    class="shrink-0 object-cover rounded-full w-10 h-10"
  />
  <span v-else></span>
</template>
