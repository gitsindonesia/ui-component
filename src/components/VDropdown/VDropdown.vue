<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {ChevronDownIcon, UserIcon} from '@heroicons/vue/solid';
import {PropType, toRefs} from 'vue';
import VBtn from '../VBtn/VBtn.vue';
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
  right: {
    type: Boolean,
    default: false,
  },
  btnProps: {
    type: Object,
    default: () => ({}),
  },
});

const {label, items, right, btnProps} = toRefs(props);

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton as="template">
          <v-btn v-bind="btnProps">
            {{ label }}
            <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
            w-56
            mt-2
            origin-top-right
            bg-white
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
          :class="right ? 'right-0' : 'left-0'"
        >
          <div class="px-1 py-1">
            <MenuItem
              v-for="(item, index) in items"
              :key="index"
              v-slot="{active}"
            >
              <v-dropdown-item :item="item" :active="active" />
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
