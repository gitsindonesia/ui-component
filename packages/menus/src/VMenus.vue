<script setup lang="ts">
import {Menu, Dropdown} from 'floating-vue';
import {List} from '@gits-id/list';
import 'floating-vue/dist/style.css';
import {computed} from 'vue';
import Icon from '@gits-id/icon';
import VMenusItem from './VMenusItem.vue';

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
          class="v-menus-button-icon"
          :class="btnIconClass"
        />
      </button>
    </slot>
    <template #popper>
      <List class="v-menus-items">
        <slot name="items">
          <template v-for="item in items" :key="item.text">
            <VMenusItem v-bind="{...item, small}">
              {{ item.text }}
            </VMenusItem>
          </template>
        </slot>
      </List>
    </template>
  </component>
</template>

<style>
:root {
  /* items */
  --v-menus-items-margin-y: theme('margin.1');
  --v-menus-items-margin-x: theme('margin.1');
  --v-menus-items-width: theme('width.56');

  /* item */
  --v-menus-item-padding-y: theme('spacing.2');
  --v-menus-item-padding-x: theme('spacing.3');
  --v-menus-item-bg-color: theme('colors.white');
  --v-menus-item-text-color: theme('colors.gray.800');
  --v-menus-item-font-size: theme('fontSize.base');
  --v-menus-item-font-weight: theme('fontWeight.normal');
}

.v-menus-items {
  margin: var(--v-menus-items-margin-y) var(--v-menus-items-margin-x);
  width: var(--v-menus-items-width);

  @apply space-y-1;
}

.v-menus-item {
  cursor: pointer;
  background-color: var(--v-menus-item-bg-color);
  color: var(--v-menus-item-color);
  padding: var(--v-menus-item-padding-y) var(--v-menus-item-padding-x);
  font-size: var(--v-menus-item-font-size);
  font-weight: var(--v-menus-item-font-weight);
}

.v-menus-item:hover {
  --v-menus-item-bg-color: theme('colors.gray.200');
  --v-menus-item-text-color: theme('colors.gray.800');
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
  @apply text-gray-500 w-5 h-5;
}
</style>
