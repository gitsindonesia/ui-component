<script setup lang="ts">
type Props = {
  hidePrepend?: boolean;
  hideAppend?: boolean;
  shaped?: boolean;
  rounded?: boolean;
  tile?: boolean;
  hover?: boolean;
  flush?: boolean;
  dense?: boolean;
  small?: boolean;
  large?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  hidePrepend: false,
  hideAppend: false,
});
</script>

<template>
  <div
    class="v-list group"
    :class="{
      'v-list--shaped': shaped,
      'v-list--rounded': rounded,
      'v-list--tile': tile,
      'v-list--hover': hover,
      'v-list--flush': flush,
      'v-list--dense': dense,
      'v-list--small': small,
      'v-list--large': large,
    }"
  >
    <slot v-bind="props" />
  </div>
</template>
