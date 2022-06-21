<script setup lang="ts">
//
</script>

<template>
  <div class="flex gap-4">
    <slot name="prepend"></slot>
    <slot />
    <slot name="append"></slot>
  </div>
</template>
