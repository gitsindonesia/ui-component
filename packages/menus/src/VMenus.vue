<script setup lang="ts">
import {computed} from 'vue';
import Icon from '@morpheme/icon';
import VMenusItem from './VMenusItem.vue';
import FloatingVue, {Menu, Dropdown} from 'floating-vue';

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
  iconSize: 'sm',
});

FloatingVue.options.themes.menus = {
  $extend: 'dropdown',
  $resetCss: false,
};

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
      <div class="v-menus-items" :class="itemsClass" :style="itemsStyle">
        <slot name="items">
          <template v-for="item in items" :key="item.text">
            <VMenusItem
              :class="itemClass"
              v-bind="item"
              :small="item.small || small"
            />
          </template>
        </slot>
      </div>
    </template>
  </component>
</template>
