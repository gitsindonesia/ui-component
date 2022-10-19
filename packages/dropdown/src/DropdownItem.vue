<script setup lang="ts">
import {MenuItem} from '@headlessui/vue';
import {computed, resolveComponent, useAttrs} from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    to?: string;
    href?: string;
    icon?: any;
    iconClass?: string;
    newTab?: boolean;
    divider?: boolean;
  }>(),
  {
    iconClass: 'dropdown-item-icon',
  },
);

const computedComponent = computed(() => {
  if (props.href) return 'a';

  return props.to ? resolveComponent('RouterLink') : 'button';
});

const attributes = computed(() => {
  return {
    to: props.to ?? undefined,
    href: props.href ?? undefined,
    target: props.href && props.newTab ? '_blank' : undefined,
    rel: props.href && props.newTab ? 'noopener' : undefined,
    ...useAttrs(),
  };
});
</script>

<template>
  <MenuItem v-slot="{active}">
    <div v-if="divider" class="dropdown-divider"></div>
    <component
      v-else
      :is="computedComponent"
      :class="[active ? 'dropdown-item--active' : '', 'group dropdown-item']"
      v-bind="attributes"
    >
      <slot name="icon">
        <component :is="icon" :class="iconClass" />
      </slot>
      <slot>{{ text }}</slot>
    </component>
  </MenuItem>
</template>
