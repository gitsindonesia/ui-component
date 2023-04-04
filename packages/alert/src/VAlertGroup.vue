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

<style>
.alert-group-transition-move, /* apply transition to moving elements */
.alert-group-transition-enter-active,
.alert-group-transition-leave-active {
  transition: all 0.5s ease;
}

.alert-group-transition-enter-from,
.alert-group-transition-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.alert-group-transition-leave-active {
  position: absolute;
}
</style>
