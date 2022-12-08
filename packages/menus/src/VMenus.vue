<script setup lang="ts">
import {Menu, Dropdown, options} from 'floating-vue';
import {List} from '@gits-id/list';
import {computed} from 'vue';
import Icon from '@gits-id/icon';
import VMenusItem from './VMenusItem.vue';
import 'floating-vue/dist/style.css';
import '@gits-id/icon/dist/style.css';

export type VMenuItem = InstanceType<typeof VMenusItem>['$props'];
export type Placement = InstanceType<typeof Menu>['$props']['placement'];

export interface Props {
  items?: VMenuItem[];
  right?: boolean;
  /**
   * @deprecated
   */
  rightIcon?: string;
  small?: boolean;
  btnClass?: string;
  placement?: Placement;
  label?: string;
  hover?: boolean;
  btnIcon?: string;
  btnIconClass?: string;
  itemClass?: string;
  itemsClass?: string;
  itemsStyle?: Record<string, any>;
  theme?: string;
  iconSize?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  right: false,
  rightIcon: 'ri:arrow-down-s-line',
  small: false,
  btnClass: '',
  placement: 'bottom-start',
  label: 'Menu',
  hover: false,
  btnIcon: 'ri:arrow-down-s-line',
  btnIconClass: '',
  itemClass: '',
  itemsClass: '',
  itemsStyle: () => ({}),
  theme: 'menus',
  iconSize: 'sm'
});

Object.assign(options, {
  themes: {
    menus: {
      $extend: 'dropdown',
      '$resetCss': false,
    },
  },
});

const menuPlacement = computed(() => {
  return props.right ? 'bottom-end' : props.placement;
});
</script>

<template>
  <component
    :is="hover ? Menu : Dropdown"
    :placement="menuPlacement"
    class="v-menus"
    popper-class="v-menus-popper"
    theme="menus"
    :triggers="hover ? ['hover'] : ['click']"
    :autoHide="true"
  >
    <slot>
      <button
        :class="['v-menus-button', btnClass]"
        :aria-label="label"
        type="button"
      >
        {{ label }}
        <Icon
          :name="btnIcon"
          :size="iconSize"
          class="v-menus-button-icon"
          :class="btnIconClass"
        />
      </button>
    </slot>
    <template #popper>
      <List class="v-menus-items" :class="itemsClass" :style="itemsStyle">
        <slot name="items">
          <template v-for="item in items" :key="item.text">
            <VMenusItem :class="itemClass" v-bind="item" :small="(item.small || small)" />
          </template>
        </slot>
      </List>
    </template>
  </component>
</template>

<style>
:root {
  --v-menus-popper-border: 1px solid #ddd;
  /* menus */
  --v-menus-margin-y: theme('margin.0');
  --v-menus-margin-x: theme('margin.0');
  --v-menus-padding-y: theme('padding.1');
  --v-menus-padding-x: theme('padding.1');
  --v-menus-width: theme('width.56');
  --v-menus-bg-color: theme('colors.white');
  --v-menus-border-width: 1px;
  --v-menus-border-style: solid;
  --v-menus-border-color: theme('colors.transparent');
  --v-menus-box-shadow: theme('boxShadow.DEFAULT');
  --v-menus-border-radius: theme('borderRadius.DEFAULT');
  --v-menus-opacity: 1;

  /* button */
  --v-menus-button-icon-color: theme('colors.gray.500');

  /* item */
  --v-menus-item-padding-y: theme('spacing.2');
  --v-menus-item-padding-x: theme('spacing.3');
  --v-menus-item-bg-color: theme('colors.transparent');
  --v-menus-item-text-color: theme('colors.gray.800');
  --v-menus-item-font-size: theme('fontSize.base');
  --v-menus-item-font-weight: theme('fontWeight.normal');
  --v-menus-item-transition: all 0.2s ease-in-out;
  --v-menus-item-text-align: left;
  --v-menus-item-justify-content: flex-start;
  --v-menus-item-gap: theme('gap.4');
  --v-menus-item-border-radius: theme('borderRadius.DEFAULT');
  
  /* item hover */
  --v-menus-item-hover-bg-color: theme('colors.gray.100');
  --v-menus-item-hover-text-color: theme('colors.gray.800');

  /* arrow */
  --v-menus-arrow-border-color: theme('colors.white');
}

.v-popper--theme-menus .v-popper__inner {
  background: transparent;
  border: var(--v-menus-popper-border);
}

.v-menus-items {
  padding: var(--v-menus-padding-y) var(--v-menus-padding-x);
  margin: var(--v-menus-margin-y) var(--v-menus-margin-x);
  width: var(--v-menus-width);
  background: var(--v-menus-bg-color);
  /* border: var(--v-menus-border-width) var(--v-menus-border-style) var(--v-menus-border-color); */
  backdrop-filter: var(--v-menus-backdrop-filter);
  box-shadow: var(--v-menus-box-shadow);
  border-radius: var(--v-menus-border-radius);
  opacity: var(--v-menus-opacity);

  @apply space-y-1;
}

.v-menus-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: var(--v-menus-item-bg-color);
  color: var(--v-menus-item-text-color);
  padding: var(--v-menus-item-padding-y) var(--v-menus-item-padding-x);
  font-size: var(--v-menus-item-font-size);
  font-weight: var(--v-menus-item-font-weight);
  transition: var(--v-menus-item-transition);
  text-align: var(--v-menus-item-text-align);
  justify-content: var(--v-menus-item-justify-content);
  gap: var(--v-menus-item-gap);
  border-radius: var(--v-menus-item-border-radius);
}

.v-menus-item-text {
  flex: 1;
}

.v-menus-item:hover {
  --v-menus-item-bg-color: var(--v-menus-item-hover-bg-color);
  --v-menus-item-text-color: var(--v-menus-item-hover-text-color);
}

.v-menus-item--sm {
  --v-menus-item-padding-x: theme('spacing.2');
  --v-menus-item-padding-y: theme('spacing.1');
  --v-menus-item-font-size: theme('fontSize.sm');
}

.v-menus-button {
  @apply inline-flex items-center justify-center gap-1;
}

.v-menus-button-icon {
  color: var(--v-menus-button-icon-color);
}
</style>
