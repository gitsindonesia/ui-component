<script setup lang="ts">
import {MenuItem} from '@headlessui/vue';
import {computed, resolveComponent, useAttrs} from 'vue';
import VIcon from '@morpheme/icon';

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
    nuxt?: boolean;
    disabled?: boolean;
  }>(),
  {
    iconClass: '',
    iconSize: 'sm',
  },
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
    attrs['href'] = props.disabled ? 'javascript:void(0)' : props.href;
  }

  if (props.newTab && !props.disabled) {
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
  icon?: (props: {}) => any;
}>();
</script>

<template>
  <MenuItem v-slot="{active}" :disabled="disabled">
    <div v-if="divider" class="dropdown-divider"></div>
    <component
      v-else
      :is="computedComponent"
      :class="[
        'group dropdown-item',
        {
          'dropdown-item--active': active,
          'dropdown-item--disabled': disabled,
        },
      ]"
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
