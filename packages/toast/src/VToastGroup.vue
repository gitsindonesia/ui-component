<script setup lang="ts">
//
</script>

<template>
  <TransitionGroup name="v-toast-group">
    <slot />
  </TransitionGroup>
</template>

<style>
.v-toast-group-enter-active,
.v-toast-group-leave-active {
  transition: all 0.5s ease;
}
.v-toast-group-enter-from,
.v-toast-group-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
