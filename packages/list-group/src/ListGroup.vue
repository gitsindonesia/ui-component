<script setup lang="ts">
type Props = {
  hidePrepend?: boolean;
  hideAppend?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  hidePrepend: false,
  hideAppend: false,
});
</script>

<template>
  <div class="flex flex-col gap-1 group overflow-hidden">
    <slot v-bind="props" />
  </div>
</template>
