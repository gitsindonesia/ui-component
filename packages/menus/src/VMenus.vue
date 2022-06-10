<script setup lang="ts">
import {computed, PropType} from 'vue';
import {ChevronDownIcon, ChevronRightIcon} from '@heroicons/vue/solid';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import VBtn from '@gits-id/button';

const props = defineProps({
  items: {
    type: Array as PropType<Record<string, any>>,
    default: () => [],
  },
  right: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  rightIcon: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
    default: '',
  },
});

const placementClass = computed(() => (props.right ? 'right-0' : 'left-0'));
</script>

<template>
  <Menu as="div" class="relative inline-block mx-4 text-left">
    <div>
      <MenuButton
        class="
          inline-flex
          font-medium
          text-gray-700
          justify-center
          items-center
          w-full
          py-1
          focus:outline-none
        "
        :class="[btnClass, small ? 'text-sm' : '']"
      >
        <slot />
        <slot name="icon">
          <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </slot>
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
          z-10
          w-56
          mt-2
          bg-white
          divide-y divide-gray-100
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        :class="placementClass"
      >
        <div :class="['arrow', {right: right}]"></div>
        <div class="px-1 py-1">
          <slot name="prepend" />
          <MenuItem v-for="(item, i) in items" :key="i" v-slot="{active}">
            <VBtn
              :to="item.to"
              no-ring
              block
              :color="active ? 'primary' : ''"
              class="rounded border-none !justify-start font-normal"
            >
              <span class="flex-none">
                {{ item.text }}
              </span>
              <template v-if="rightIcon">
                <slot name="right-icon">
                  <ChevronRightIcon class="w-6 h-6" />
                </slot>
              </template>
            </VBtn>
          </MenuItem>
          <slot name="append" />
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.arrow {
  width: 35px;
  height: 20px;
  position: absolute;
  top: -19px;
  left: 15px;
  overflow: hidden;
}
.arrow:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background: white;
  transform: rotate(45deg); /* Prefixes... */
  top: 10px;
  left: 5px;
  box-shadow: -1px -1px 5px -2px rgba(0, 0, 0, 0.5);
}
.arrow.right {
  left: initial;
  right: 20px;
}
</style>
