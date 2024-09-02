<script setup lang="ts">
interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: "div",
});
</script>

<template>
  <component :is="tag" class="v-list-item__content">
    <slot />
  </component>
</template>
