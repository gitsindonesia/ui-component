<script setup lang="ts">
interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: "h3",
});
</script>

<template>
  <component :is="tag" class="v-list-item__title">
    <slot />
  </component>
</template>
