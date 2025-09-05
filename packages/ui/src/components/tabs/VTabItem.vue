<script setup lang="ts">
import {Tab} from '@headlessui/vue';
import {computed, resolveComponent, useAttrs} from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    to?: string;
    href?: string;
    newTab?: boolean;
    nuxt?: boolean;
    disabled?: boolean;
    target?: string;
  }>(),
  {},
);

const computedComponent = computed(() => {
  if (props.nuxt) return resolveComponent('NuxtLink');

  if (props.href) return 'a';

  return props.to ? resolveComponent('RouterLink') : 'button';
});

const attributes = computed(() => {
  let attrs: Record<string, any> = {};

  if (props.disabled) {
    attrs['aria-disabled'] = true;
    attrs['disabled'] = true;
  }

  if (props.to) {
    attrs['to'] = props.to;
  }

  if (props.href) {
    attrs['href'] = props.href;
  }

  if (props.newTab) {
    attrs['rel'] = 'noopener';
    attrs['target'] = '_blank';
  }

  return {
    ...attrs,
    ...useAttrs(),
  };
});

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <Tab as="template" v-slot="{selected}">
    <component
      :is="computedComponent"
      class="v-tabs-item"
      :class="[
        {
          'v-tabs-item--active': selected,
        },
      ]"
      v-bind="attributes"
    >
      <slot />
    </component>
  </Tab>
</template>
