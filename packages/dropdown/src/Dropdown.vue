<script setup lang="ts">
import {Menu, MenuButton, MenuItems} from '@headlessui/vue';
import type {DropdownItemProps} from './types';
import DropdownItem from './DropdownItem.vue';
import {Icon} from '@morpheme/icon';
import {Float} from '@headlessui-float/vue';
import type {Placement} from '@floating-ui/vue';
import DropdownHeader from './DropdownHeader.vue';

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
  offset: 0,
  shift: true,
  flip: true,
});

defineSlots<{
  default?: (props: {}) => any;
  activator?: (props: {btnProps: Record<string, any>; label: string}) => any;
  item?: (props: DropdownItemProps) => any;
  prepend?: (props: {}) => any;
  append?: (props: {}) => any;
}>();
</script>

<template>
  <Menu as="div" class="dropdown">
    <Float
      as="div"
      class="relative"
      floating-as="template"
      :placement="placement"
      :transition="transition"
      :offset="offset"
      :shift="shift"
      :flip="flip"
    >
      <div class="dropdown-button-wrapper" :class="buttonWrapperClass">
        <slot name="activator" :btn-props="btnProps" :label="label">
          <MenuButton
            as="button"
            class="dropdown-button-activator"
            v-bind="btnProps"
          >
            <Icon
              :name="prefixIcon"
              :size="prefixIconSize"
              :class="prefixIconClass"
              class="dropdown-button-icon"
              aria-hidden="true"
            />
            {{ label }}
            <Icon
              :name="icon"
              :size="iconSize"
              :class="iconClass"
              class="dropdown-button-icon"
              aria-hidden="true"
            />
          </MenuButton>
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
