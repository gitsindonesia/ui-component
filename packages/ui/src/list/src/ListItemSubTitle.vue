<script setup lang="ts">
interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: "p",
});
</script>

<template>
  <component :is="tag" class="v-list-item__subtitle">
    <slot />
  </component>
</template>
