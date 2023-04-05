<script setup lang="ts">
type Props = {
  name?: string;
};

withDefaults(defineProps<Props>(), {
  name: 'alert-group-transition',
});
</script>

<template>
  <TransitionGroup :name="name">
    <slot />
  </TransitionGroup>
</template>
