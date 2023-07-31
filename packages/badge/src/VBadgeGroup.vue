<script setup lang="ts">
import { DefaultColors } from "@morpheme/theme/defaultTheme";
import { provide, toRefs } from "vue";
import { VBadgeContextApi, VBadgeInjectionKey } from "./api";

interface Props {
  color?: DefaultColors;
  outlined?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "default",
});

const { color, outlined } = toRefs(props);

const api: VBadgeContextApi = {
  color,
  outlined,
};

provide(VBadgeInjectionKey, api);

defineSlots<{
  default?: (props: {}) => any;
}>()
</script>

<template>
  <div
    class="badge"
    :class="[
      `badge-${color}`,
      'badge--group',
      {
        'badge--outlined': outlined,
      },
    ]"
    role="alert"
  >
    <slot />
  </div>
</template>
