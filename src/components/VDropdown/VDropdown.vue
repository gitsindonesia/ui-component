<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {ChevronDownIcon, UserIcon} from '@heroicons/vue/solid';
import {PropType, toRefs} from 'vue';
import VBtn from '@gits-id/button';
import {DropdownItem} from './VDropdown';
import VDropdownItem from './VDropdownItem.vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Options',
  },
  items: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  top: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tile: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
  noRing: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: '',
  },
  btnProps: {
    type: Object,
    default: () => ({}),
  },
  widthClass: {
    type: String,
    default: 'w-56',
  },
  dividerClass: {
    type: String,
    default: '',
  },
  hideLabel: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
    default: '',
  },
});

const {label, items, right, btnProps, ...rest} = toRefs(props);

type RestProps = Record<string, any>;

const restBtnProps = Object.fromEntries(
  Object.keys(rest).map((key) => [key, (rest as RestProps)[key].value]),
);
// console.log(rest, restBtnProps);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <Menu as="div" class="relative inline-block text-left" :class="wrapperClass">
    <div>
      <MenuButton as="template">
        <v-btn v-bind="{...restBtnProps, ...btnProps}">
          <slot name="btn" :label="label">
            <template v-if="!hideLabel">
              <slot name="label">
                {{ label }}
              </slot>
            </template>
            <slot name="icon">
              <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
            </slot>
          </slot>
        </v-btn>
      </MenuButton>
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
          mt-2
          bg-white
          divide-y divide-gray-100
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          z-10
        "
        :class="[
          widthClass,
          right ? 'right-0' : 'left-0',
          top ? 'bottom-12' : 'top-8',
        ]"
      >
        <div class="px-1 py-1">
          <template v-for="(item, index) in items" :key="index">
            <div
              v-if="item.divider"
              class="border-b my-1 -mx-1"
              :class="dividerClass"
            ></div>
            <MenuItem v-else v-slot="{active}">
              <v-dropdown-item :item="item" :active="active" />
            </MenuItem>
          </template>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
