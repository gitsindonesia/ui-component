<script setup lang="ts">
import { provide, toRefs } from "vue";
import { VListContextApi, VListInjectionKey } from "./api";

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
  hideText?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  hidePrepend: false,
  hideAppend: false,
});

const apiProps = toRefs(props);

const api: VListContextApi = {
  ...apiProps,
};

provide(VListInjectionKey, api);
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
      'v-list--hide-text': hideText,
    }"
  >
    <slot v-bind="props" />
  </div>
</template>
