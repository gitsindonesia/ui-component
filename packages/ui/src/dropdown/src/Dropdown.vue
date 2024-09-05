<script setup lang="ts">
import {Menu, MenuItems} from '@headlessui/vue';
import type {DropdownItemProps} from './types';
import DropdownItem from './DropdownItem.vue';
import {Float} from '@headlessui-float/vue';
import type {Placement} from '@floating-ui/vue';
import DropdownHeader from './DropdownHeader.vue';
import DropdownActivator from './DropdownActivator.vue';

export interface Props {
  modelValue?: boolean;
  btnProps?: Record<string, any>;
  label?: string;
  right?: boolean;
  items?: DropdownItemProps[];
  /**
   * @deprecated use `placement="top-start"` instead
   */
  top?: boolean;
  topClass?: string;
  bottomClass?: string;
  panelClass?: string;
  buttonWrapperClass?: string;
  rightClass?: string;
  leftClass?: string;
  transition?: string;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  prefixIcon?: string;
  prefixIconSize?: string;
  prefixIconClass?: string;
  placement?: Placement;
  offset?: number;
  shift?: boolean | number;
  flip?: boolean | number;
  block?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  btnProps: () => ({
    variant: 'secondary',
  }),
  label: 'Options',
  right: false,
  items: () => [],
  top: false,
  topClass: '',
  bottomClass: '',
  panelClass: '',
  buttonWrapperClass: '',
  leftClass: '',
  rightClass: '',
  transition: 'dropdown',
  icon: 'ri:arrow-down-s-line',
  iconSize: 'sm',
  iconClass: '',
  prefixIcon: '',
  prefixIconSize: 'sm',
  placement: 'bottom-start',
  offset: 4,
  shift: true,
  flip: true,
  size: 'md',
});

defineSlots<{
  default?: (props: {}) => any;
  activator?: (props: {
    open: boolean;
    btnProps: Record<string, any>;
    label: string;
  }) => any;
  item?: (props: DropdownItemProps) => any;
  prepend?: (props: {}) => any;
  append?: (props: {}) => any;
}>();
</script>

<template>
  <Menu
    as="div"
    class="dropdown"
    :class="[`dropdown--${size}`, {'dropdown--block': block}]"
    v-slot="{open}"
  >
    <Float
      as="template"
      floating-as="template"
      :placement="placement"
      :transition-name="transition"
      :offset="offset"
      :shift="shift"
      :flip="flip"
    >
      <div class="dropdown-button-wrapper" :class="buttonWrapperClass">
        <slot
          name="activator"
          :btn-props="btnProps"
          :label="label"
          :open="open"
        >
          <DropdownActivator
            v-bind="{
              btnProps,
              text: label,
              icon,
              iconSize,
              iconClass,
              prefixIcon,
              prefixIconSize,
              prefixIconClass,
            }"
          />
        </slot>
      </div>
      <MenuItems
        class="dropdown-panel"
        :class="[
          {
            'dropdown-panel--right': right,
            'dropdown-panel--left': !right,
            'dropdown-panel--top': top,
            'dropdown-panel--bottom': !top,
          },
          panelClass,
        ]"
      >
        <slot name="prepend" />
        <slot>
          <template v-for="item in items" :key="item.text">
            <DropdownHeader v-if="item.header" :text="item.text" />
            <DropdownItem v-else v-bind="item" />
          </template>
        </slot>
        <slot name="append" />
      </MenuItems>
    </Float>
  </Menu>
</template>
