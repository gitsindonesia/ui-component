<script setup lang="ts">
type Props = {
  name?: string;
};

withDefaults(defineProps<Props>(), {
  name: 'alert-group-transition',
});

defineSlots<{
  default?: (props: {}) => any
}>()
</script>

<template>
  <TransitionGroup :name="name">
    <slot />
  </TransitionGroup>
</template>
