<script setup lang="ts">
import Icon from "@morpheme/icon";
import { computed, resolveComponent, useAttrs } from "vue";
import { type RouteLocation } from "vue-router";
import { useList } from "./api";

type Props = {
  to?: string | RouteLocation;
  href?: string;
  as?: string | any;
  defaultClass?: string;
  prependClass?: string;
  prependIcon?: string;
  prependIconSize?: string;
  prependIconClass?: string;
  appendClass?: string;
  appendIcon?: string;
  appendIconSize?: string;
  appendIconClass?: string;
  hidePrepend?: boolean;
  hideAppend?: boolean;
  hover?: boolean;
  hoverClass?: string;
  shaped?: boolean;
  shapedClass?: string;
  rounded?: boolean;
  hideText?: boolean;
  appendText?: string;
  appendTextClass?: string;
  tile?: boolean;
  active?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  defaultClass: "",
  prependClass: "",
  appendClass: "",
  hidePrepend: false,
  hideAppend: false,
  hoverClass: "v-list-item--hover",
  shaped: false,
  shapedClass: "v-list-item--shaped",
  rounded: false,
  appendTextClass: "",
  tile: false,
  prependIconSize: "sm",
  appendIconSize: "sm",
});

const emit = defineEmits<{
  (e: "click:prepend"): void;
  (e: "click:prependIcon"): void;
  (e: "click:append"): void;
  (e: "click:appendIcon"): void;
  (e: "click:appendText"): void;
}>();

const is = computed(() => {
  if (props.to) return resolveComponent("RouterLink");

  if (props.href) return "a";

  return props.as || "div";
});

const attrs = useAttrs();

const attributes = computed(() => {
  if (props.to) return { to: props.to };

  if (props.href) return { href: props.href };

  return attrs;
});

const hoverClasses = computed(() => {
  return props.hover || props.to || props.href ? props.hoverClass : "";
});

const context = useList();
function propOrContext<T extends keyof Props>(key: T): Props[T] {
  return props[key] ?? context?.[key]?.value;
}

defineSlots<{
  default?: (props: {}) => any;
  "prepend.icon"?: (props: {
    name?: string;
    size?: string;
    class?: string;
  }) => any;
  prepend?: (props: {}) => any;
  "append.text"?: (props: {
    value?: string;
  }) => any;
  "append.icon"?: (props: {
    name?: string;
    size?: string;
    class?: string;
  }) => any;
  append?: (props: {}) => any;
}>()
</script>

<template>
  <component
    :is="is"
    class="v-list-item"
    :class="[
      hoverClasses,
      {
        'v-list-item--rounded': propOrContext('rounded'),
        'v-list-item--shaped': propOrContext('shaped'),
        'v-list-item--hoverable': propOrContext('hover'),
        'v-list-item--tile': propOrContext('tile'),
        'v-list-item--active': active,
        [shapedClass]: propOrContext('shaped'),
      },
    ]"
    v-bind="attributes"
  >
    <slot v-if="!propOrContext('hidePrepend')" name="prepend">
      <div
        class="v-list-item-prepend"
        :class="prependClass"
        @click="emit('click:prepend')"
      >
        <slot name="prepend.icon">
          <Icon
            v-if="prependIcon"
            :name="prependIcon"
            :size="prependIconSize"
            class="v-list-item-icon v-list-item-icon--prepend"
            :class="prependIconClass"
            @click="emit('click:prependIcon')"
          />
        </slot>
      </div>
    </slot>
    <div
      v-if="!propOrContext('hideText')"
      class="v-list-item-content"
      :class="defaultClass"
    >
      <slot />
    </div>
    <slot v-if="!propOrContext('hideAppend')" name="append">
      <div
        class="v-list-item-append"
        :class="appendClass"
        @click="emit('click:append')"
      >
        <slot name="append.text">
          <span
            v-if="appendText"
            class="v-list-item-append-text"
            :class="appendTextClass"
            @click="emit('click:appendText')"
          >
            {{ appendText }}
          </span>
        </slot>
        <slot name="append.icon">
          <Icon
            v-if="appendIcon"
            :name="appendIcon"
            :size="appendIconSize"
            class="v-list-item-icon v-list-item-icon--append"
            :class="appendIconClass"
            @click="emit('click:appendIcon')"
          />
        </slot>
      </div>
    </slot>
  </component>
</template>
