<script setup lang="ts">
withDefaults(
  defineProps<{
    cols?: "auto" | string | number;
    offset?: string | number;
    order?: string | number;
  }>(),
  {
    cols: "auto",
  }
);
</script>

<template>
  <div
    class="v-col"
    :class="[
      `v-col-${cols}`,
      {
        [`v-offset-${offset}`]: !!offset,
        [`v-order-${order}`]: !!order,
      },
    ]"
  >
    <slot />
  </div>
</template>
