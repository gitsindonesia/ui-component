<script setup lang="ts">
import { computed } from "vue";
import Icon from "@morpheme/icon";
import VMenusItem from "./VMenusItem.vue";
import FloatingVue, { Menu, Dropdown } from "floating-vue";

export type VMenuItem = InstanceType<typeof VMenusItem>["$props"] & {
  children?: VMenuItem[];
};

export type Placement = InstanceType<typeof Menu>["$props"]["placement"];

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
  child?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  right: false,
  rightIcon: "ri:arrow-down-s-line",
  small: false,
  btnClass: "",
  placement: "bottom-start",
  label: "Menu",
  hover: false,
  btnIcon: "ri:arrow-down-s-line",
  btnIconClass: "",
  itemClass: "",
  itemsClass: "",
  itemsStyle: () => ({}),
  theme: "menus",
  iconSize: "sm",
});

FloatingVue.options.themes.menus = {
  $extend: "dropdown",
  $resetCss: false,
};

const menuPlacement = computed(() => {
  return props.right ? "bottom-end" : props.placement;
});
</script>

<template>
  <component
    :is="hover ? Menu : Dropdown"
    :placement="menuPlacement"
    class="v-menus"
    :class="{
      'v-menus--child': child,
      'v-menus--right': right,
      'v-menus--small': small,
    }"
    popper-class="v-menus-popper"
    theme="menus"
    :triggers="hover ? ['hover'] : ['click']"
    :autoHide="true"
  >
    <template #default="{ shown, show, hide }">
      <slot v-bind="{ shown, show, hide }">
        <button :class="['v-menus-button', btnClass]" :aria-label="label" type="button">
          {{ label }}
          <Icon
            :name="btnIcon"
            :size="iconSize"
            class="v-menus-button-icon"
            :class="[btnIconClass, { 'v-menus-button-icon--active': shown }]"
          />
        </button>
      </slot>
    </template>
    <template #popper>
      <div class="v-menus-items" :class="itemsClass" :style="itemsStyle">
        <slot name="items">
          <template v-for="item in items" :key="item.text">
            <VMenus
              v-if="item.children"
              :items="item.children"
              placement="right-start"
              child
            >
              <VMenusItem
                :class="itemClass"
                v-bind="item"
                :small="item.small || small"
                append-icon="ri:arrow-right-s-line"
              />
            </VMenus>
            <VMenusItem
              v-else
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
