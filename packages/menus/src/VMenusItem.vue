<script setup lang="ts">
import {ListItemDivider} from '@gits-id/list';
import Icon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';
import {RouteLocation} from 'vue-router';
import {computed, resolveComponent, useAttrs} from 'vue';

const props = withDefaults(
  defineProps<{
    text?: string;
    small?: boolean;
    divider?: boolean;
    prependIcon?: string;
    prependIconSize?: string;
    prependIconClass?: string;
    appendIcon?: string;
    appendIconSize?: string;
    appendIconClass?: string;
    to?: RouteLocation | string;
    href?: string;
    newTab?: boolean;
    as?: string;
  }>(),
  {
    prependIconSize: 'sm',
    appendIconSize: 'sm',
    as: 'button',
  },
);

const computedComponent = computed(() => {
  if (props.to) {
    return resolveComponent('router-link');
  }

  if (props.href) {
    return 'a';
  }

  return props.as;
});

const computedAttrs = computed(() => {
  return {
    ...(props.as === 'button' ? {type: 'button'} : {}),
    to: props.to ? props.to : undefined,
    href: props.href ? props.href : undefined,
    target: props.newTab ? '_blank' : undefined,
    rel: props.newTab ? 'noopener noreferrer' : undefined,
    ...useAttrs(),
  };
});
</script>

<template>
  <ListItemDivider v-if="divider" v-bind="computedAttrs" />
  <component
    :is="computedComponent"
    v-else
    :aria-label="text"
    class="v-menus-item"
    :class="{'v-menus-item--sm': small}"
    v-bind="computedAttrs"
  >
    <Icon
      v-if="prependIcon"
      :name="prependIcon"
      :size="prependIconSize"
      class="v-menus-item-icon"
      :class="prependIconClass"
    />
    <div class="v-menus-item-text">
      <slot>
        {{ text }}
      </slot>
    </div>
    <Icon
      v-if="appendIcon"
      :name="appendIcon"
      :size="appendIconSize"
      class="v-menus-item-icon"
      :class="appendIconClass"
    />
  </component>
</template>
