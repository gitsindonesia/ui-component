<script setup lang="ts">
import tokens from "@morpheme/design-tokens/js/tailwind";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    flexWrap?: string;
    flex?: string;
    alignItems?: string;
    alignContent?: string;
    alignSelf?: string;
    justifyContent?: string;
    justifySelf?: string;
    justifyItems?: string;
    gap?: string | number;
  }>(),
  {
    flexWrap: "wrap",
    flex: "1 1 auto",
    alignItems: "flex-start",
  }
);

const gapValue = computed(() => tokens.spacing[props.gap]);
</script>

<template>
  <div class="v-row">
    <slot />
  </div>
</template>

<style scoped>
.v-row {
  display: flex;
  flex-wrap: v-bind(flexWrap);
  flex: v-bind(flex);
  align-items: v-bind(alignItems);
  align-self: v-bind(alignSelf);
  align-content: v-bind(alignContent);
  justify-content: v-bind(justifyContent);
  justify-self: v-bind(justifySelf);
  justify-items: v-bind(justifyItems);
  gap: v-bind(gapValue);
  margin: calc(-1rem / 2);
}
</style>
