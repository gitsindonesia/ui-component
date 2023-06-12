<script setup lang="ts">
defineProps<{
  inset?: boolean;
  vertical?: boolean;
}>();
</script>

<template>
  <hr
    role="separator"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    class="v-divider"
    :class="{
      'v-divider--inset': inset,
      'v-divider--vertical': vertical,
    }"
  />
</template>