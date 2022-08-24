<script setup lang="ts">
import {Menu, MenuButton, MenuItems} from '@headlessui/vue';
import type {DropdownItemProps} from './types';
import DropdownItem from './DropdownItem.vue';
import {Icon} from '@gits-id/icon';

withDefaults(
  defineProps<{
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
  }>(),
  {
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
  },
);
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div :class="buttonWrapperClass">
      <slot name="activator" :btn-props="btnProps" :label="label">
        <MenuButton as="button" v-bind="btnProps">
          {{ label }}
          <Icon
            name="ri:arrow-down-s-line"
            class="w-5 h-5 inline"
            aria-hidden="true"
          />
        </MenuButton>
      </slot>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="
          absolute
          z-10
          p-1
          w-56
          mt-2
          bg-white
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
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
