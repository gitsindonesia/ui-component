<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import type { DropdownItemProps } from "./types";
import DropdownItem from "./DropdownItem.vue";
import { Icon } from "@morpheme/icon";

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
  prefixIcon?: string;
  prefixIconSize?: string;
  prefixIconClass?: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  btnProps: () => ({
    variant: "secondary",
  }),
  label: "Options",
  right: false,
  items: () => [],
  top: false,
  topClass: "",
  bottomClass: "",
  panelClass: "",
  buttonWrapperClass: "",
  leftClass: "",
  rightClass: "",
  transition: "dropdown",
  icon: "ri:arrow-down-s-line",
  iconSize: "sm",
  iconClass: "",
  prefixIcon: "",
  prefixIconSize: "sm",
});
</script>

<template>
  <Menu as="div" class="dropdown">
    <div class="dropdown-button-wrapper" :class="buttonWrapperClass">
      <slot name="activator" :btn-props="btnProps" :label="label">
        <MenuButton as="button" class="dropdown-button-activator" v-bind="btnProps">
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
    <transition :name="transition">
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
        <slot>
          <DropdownItem v-for="item in items" :key="item.text" v-bind="item" />
        </slot>
      </MenuItems>
    </transition>
  </Menu>
</template>
