<script setup lang="ts">
import { computed, PropType, resolveComponent } from "vue";

export type CardShadow = boolean | "sm" | "md" | "lg" | "xl" | "2xl" | "inner" | "none";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  defaultWrapperClass: {
    type: String,
    default: "",
  },
  defaultHeaderClass: {
    type: String,
    default: "card-header",
  },
  defaultFooterClass: {
    type: String,
    default: "card-footer",
  },
  defaultBodyClass: {
    type: String,
    default: "card-body",
  },
  wrapperClass: {
    type: String,
    default: "",
  },
  headerClass: {
    type: String,
    default: "",
  },
  footerClass: {
    type: String,
    default: "",
  },
  bodyClass: {
    type: String,
    default: "",
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  borderPosition: {
    type: String as PropType<"top" | "left" | "bottom" | "right">,
    default: "top",
  },
  flat: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [Boolean, String] as PropType<CardShadow>,
    default: false,
  },
  to: {
    type: String,
    default: undefined,
  },
  color: {
    type: String,
    default: "default",
  },
  as: {
    type: String,
    default: "div",
  },
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
  rel: {
    type: String,
    default: undefined,
  },
  nuxt: {
    type: Boolean,
    default: false,
  },
  bodyless: {
    type: Boolean,
    default: false,
  },
});

const tag = computed(() => {
  if (props.href) return "a";

  if (props.to) {
    return props.nuxt ? resolveComponent("NuxtLink") : resolveComponent("RouterLink");
  }

  return props.as;
});

const classes = computed(() => {
  const shadowClass = props.flat
    ? "card--shadow-none"
    : typeof props.shadow === "string"
    ? `card--shadow-${props.shadow}`
    : "card--shadow";

  return [
    `card card-${props.color}`,
    props.defaultWrapperClass,
    props.wrapperClass,
    shadowClass,
    {
      "card--bordered": props.bordered,
      [`card--bordered-${props.borderPosition}`]: props.bordered,
    },
  ];
});

const attrs = computed(() => {
  const attrs: Record<string, any> = {};

  if (props.href) {
    attrs.href = props.href;
    attrs.target = props.target;
    attrs.rel = props.rel;
  } else if (props.to) {
    attrs.to = props.to;
  }

  return attrs;
});
</script>

<template>
  <component :is="tag" :class="classes" v-bind="{ ...$attrs, ...attrs }">
    <slot name="image" />
    <div v-if="!hideHeader" :class="[defaultHeaderClass, headerClass]">
      <slot name="header.prepend" />
      <slot name="header">
        <div class="card-title" v-if="title">{{ title }}</div>
      </slot>
      <slot name="header.append" />
    </div>
    <slot v-if="bodyless" />
    <div v-else :class="[defaultBodyClass, bodyClass]">
      <slot />
    </div>
    <div v-if="!hideFooter" :class="[defaultFooterClass, footerClass]">
      <slot name="footer" />
    </div>
  </component>
</template>
