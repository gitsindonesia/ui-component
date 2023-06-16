<script setup lang="ts">
import { computed, PropType } from "vue";
import Icon from "@morpheme/icon";
import { DefaultColors, DefaultRounded } from "@morpheme/theme/defaultTheme";
import { useBadge } from "./api";

export type BadgeColors = DefaultColors | string;

const props = defineProps({
  color: {
    type: String as PropType<BadgeColors>,
    default: "default",
  },
  rounded: {
    type: [Boolean, String] as PropType<boolean | DefaultRounded>,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated use `color` prop instead
   */
  bgColor: {
    type: String,
    default: "",
  },
  /**
   * @deprecated use `color` prop instead
   */
  textColor: {
    type: String,
    default: "text-white",
  },
  /**
   * @deprecated use `rounded="full"` instead
   */
  circle: {
    type: Boolean,
    default: false,
  },
  dismissable: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  dot: {
    type: Boolean,
    default: false,
  },
  dotOffset: {
    type: [String, Number],
    default: 0,
  },
  dotSize: {
    type: String as PropType<"sm" | "md" | "lg" | string>,
    default: "md",
  },
  dotLeft: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: String,
    default: "ri:close-line",
  },
  iconSize: {
    type: [String, Number],
    default: "xs",
  },
});

const emit = defineEmits<{
  (e: "dismiss"): void;
}>();

const onDismiss = () => {
  emit("dismiss");
};

const api = useBadge();

const classes = computed(() => {
  const color = api?.color?.value || props.color;
  const outlined = api?.outlined?.value || props.outlined;

  const roundedClass =
    typeof props.rounded === "string"
      ? { [`badge--rounded-${props.rounded}`]: !!props.rounded }
      : props.rounded
      ? `badge--rounded`
      : "";

  return [
    "badge",
    `badge-${color}`,
    roundedClass,
    {
      "badge--as-child": api?.color?.value,
      "badge--sm": props.small,
      "badge--lg": props.large,
      "badge--outlined": outlined,
      "badge--dismissable": props.dismissable,
      "badge--dot": props.dot,
      "badge--dot--left": props.dot && props.dotLeft,
      [`badge--dot--offset-${props.dotOffset}`]: props.dot && !!props.dotOffset,
      [`badge--dot--${props.dotSize}`]: props.dot && !!props.dotSize,
    },
  ];
});
</script>

<template>
  <span :class="classes">
    <slot v-if="!dot" />
    <slot name="dismissable" :dismiss="onDismiss">
      <button
        v-if="dismissable"
        class="badge-dismiss-button"
        type="button"
        aria-label="Close"
        @click="onDismiss"
      >
        <Icon :name="closeIcon" :size="iconSize" class="badge-icon" />
      </button>
    </slot>
  </span>
</template>
