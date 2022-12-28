<script setup lang="ts">
import {MenuItem} from '@headlessui/vue';
import {computed, resolveComponent, useAttrs} from 'vue';
import VIcon from '@gits-id/icon';

const props = withDefaults(
  defineProps<{
    text?: string;
    to?: string;
    href?: string;
    icon?: string | any;
    iconSize?: string;
    iconClass?: string;
    newTab?: boolean;
    divider?: boolean;
  }>(),
  {
    iconClass: '',
    iconSize: 'sm',
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
        <VIcon
          v-if="typeof icon === 'string'"
          :name="icon"
          :size="iconSize"
          :class="iconClass"
          class="dropdown-item-icon"
        />
        <component
          v-else
          :is="icon"
          :class="iconClass"
          class="dropdown-item-icon"
        />
      </slot>
      <slot>{{ text }}</slot>
    </component>
  </MenuItem>
</template>
