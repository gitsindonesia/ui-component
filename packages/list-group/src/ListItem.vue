<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {computed, useAttrs} from 'vue';
import {RouterLink, RouteLocation} from 'vue-router';

type Props = {
  to?: string | RouteLocation;
  href?: string;
  as?: string | any;
  defaultClass?: string;
  prependClass?: string;
  prependIcon?: string;
  prependIconClass?: string;
  appendClass?: string;
  appendIcon?: string;
  appendIconClass?: string;
  hidePrepend?: boolean;
  hideAppend?: boolean;
  hover?: boolean;
  hoverClass?: string;
};

const props = withDefaults(defineProps<Props>(), {
  defaultClass: 'select-none',
  prependClass: 'w-5 shrink-0',
  appendClass: 'w-5 shrink-0',
  hidePrepend: false,
  hideAppend: false,
  hoverClass: 'hover:bg-gray-100',
});

const is = computed(() => {
  if (props.to) return RouterLink;

  if (props.href) return 'a';

  return props.as || 'div';
});

const attrs = useAttrs();

const attributes = computed(() => {
  if (props.to) return {to: props.to};

  if (props.href) return {href: props.href};

  return attrs;
});

const hoverClass = computed(() => {
  return props.hover || props.to || props.href ? props.hoverClass : '';
});
</script>

<template>
  <component
    :is="is"
    class="flex gap-4 px-3 py-2 rounded transition duration-300 items-center"
    :class="hoverClass"
    v-bind="attributes"
  >
    <slot v-if="!hidePrepend" name="prepend">
      <div :class="prependClass">
        <slot name="prepend.icon">
          <Icon
            :icon="prependIcon"
            class="transition duration-300 transform w-5 h-5"
            :class="prependIconClass"
          />
        </slot>
      </div>
    </slot>
    <div class="flex-1" :class="defaultClass">
      <slot />
    </div>
    <slot v-if="!hideAppend" name="append">
      <div :class="appendClass">
        <slot name="append.icon">
          <Icon
            :icon="appendIcon"
            class="transition duration-300 transform w-5 h-5"
            :class="appendIconClass"
          />
        </slot>
      </div>
    </slot>
  </component>
</template>
