<script setup lang="ts">
import { computed, provide, toRefs } from "vue";
import type { VListContextApi} from "./api";
import { VListInjectionKey } from "./api";

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
  activeVariant?: "filled" | "bordered" | "filled-bordered";
  activeBorderPosition?: "top" | "right" | "bottom" | "left";
  mini?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  activeVariant: "filled",
  activeBorderPosition: "bottom",
});

const apiProps = toRefs(props);

const api: VListContextApi = {
  ...apiProps,
};

provide(VListInjectionKey, api);

const isBorderedVariant = computed(() => {
  return ["bordered", "filled-bordered"].includes(props.activeVariant);
});
</script>

<template>
  <div
    class="v-list group"
    :class="[
      `v-list--active-${activeVariant}`,
      {
        'v-list--shaped': shaped,
        'v-list--rounded': rounded,
        'v-list--tile': tile,
        'v-list--hover': hover,
        'v-list--flush': flush,
        'v-list--dense': dense,
        'v-list--small': small,
        'v-list--large': large,
        'v-list--hide-text': hideText,
        'v-list--mini': mini,
        [`v-list--active-${activeVariant}-${activeBorderPosition}`]: isBorderedVariant,
      },
    ]"
  >
    <slot v-bind="props" />
  </div>
</template>
