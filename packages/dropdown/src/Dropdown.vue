<script setup lang="ts">
import {Menu, MenuButton, MenuItems} from '@headlessui/vue';
import type {DropdownItemProps} from './types';
import DropdownItem from './DropdownItem.vue';
import {Icon} from '@gits-id/icon';

export interface Props {
  modelValue?: boolean;
  btnProps?: Record<string, any>;
  label?: string;
  right?: boolean;
  items?: DropdownItemProps[];
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
  topClass: 'bottom-10',
  bottomClass: 'top-6',
  panelClass: '',
  buttonWrapperClass: '',
  leftClass: 'left-0',
  rightClass: 'right-0',
  transition: 'fade',
  icon: 'ri:arrow-down-s-line',
  iconSize: 'sm',
  iconClass: '',
});
</script>

<template>
  <Menu as="div" class="dropdown">
    <div class="dropdown-button-wrapper" :class="buttonWrapperClass">
      <slot name="activator" :btn-props="btnProps" :label="label">
        <MenuButton
          as="button"
          class="dropdown-button-activator"
          v-bind="btnProps"
        >
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
    <transition :name="transition">
      <MenuItems
        class="dropdown-panel"
        :class="[
          right ? rightClass : leftClass,
          top ? topClass : bottomClass,
          panelClass,
        ]"
      >
        <slot>
          <DropdownItem v-for="item in items" :key="item.text" v-bind="item" />
        </slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
