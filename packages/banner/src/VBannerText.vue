<script setup lang="ts">
interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: 'div',
});
</script>

<template>
  <component :is="tag" class="v-banner-text">
    <slot />
  </component>
</template>
