<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {computed} from 'vue';
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
};

const props = withDefaults(defineProps<Props>(), {
  defaultClass: 'select-none',
  prependClass: 'w-5 shrink-0',
  appendClass: 'w-5 shrink-0',
});

const is = computed(() => {
  if (props.to) return RouterLink;

  if (props.href) return 'a';

  return props.as || 'div';
});

const attrs = computed(() => {
  if (props.to) return {to: props.to};

  if (props.href) return {href: props.href};

  return {};
});
</script>

<template>
  <component
    :is="is"
    class="
      flex
      gap-4
      px-3
      py-2
      hover:bg-gray-100
      rounded
      transition
      duration-300
      items-center
    "
    v-bind="{...attrs, ...$attrs}"
  >
    <slot name="prepend">
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
    <slot name="append">
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
