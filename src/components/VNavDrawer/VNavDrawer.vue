<script setup lang="ts">
import {computed, PropType, toRefs} from 'vue';
import {XIcon} from '@heroicons/vue/outline';
import VMenu from '../VMenu/VMenu.vue';
import VLogo from '../VLogo/VLogo.vue';
import {ChevronLeftIcon} from '@heroicons/vue/solid';
import {getBgColor} from '../../utils';
import {VNavbarMenuItem} from '../VNavbar/VNavbar';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  menus: {
    type: Array as PropType<VNavbarMenuItem[]>,
    default: () => [],
  },
  mini: {
    type: Boolean,
    default: false,
  },
  logoProps: {
    type: Object,
    default: () => ({}),
  },
  dark: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  hideToggle: {
    type: Boolean,
    default: false,
  },
  btnToggleClass: {
    type: String,
    default: '',
  },
  classMenuParent: {
    type: String,
    default: '',
  },
  toggleColor: {
    type: String,
    default: 'primary',
  },
  expandColor: {
    type: String,
    default: '',
  },
  expandHover: {
    type: Boolean,
    default: false,
  },
  isExpandHover: {
    type: Boolean,
    default: false,
  }
});

const {mini, menus, logoProps, dark, color, hideToggle, classMenuParent, expandHover, isExpandHover} =
  toRefs(props);

const emit = defineEmits(['update:modelValue', 'update:mini', 'toggle:click', 'update:expandHover']);

const toggleMenu = () => {
  emit('toggle:click');
  emit('update:mini', !mini.value);
};

const mouseOver = () => {
  if (isExpandHover.value) {
    emit('update:expandHover', true);
  }
};
const mouseOverLeave = () => {
  if (isExpandHover.value) {
    emit('update:expandHover', false);
  }
};

const bgColor = computed(() =>
  getBgColor(color.value, dark.value ? 'bg-gray-900' : 'bg-white'),
);
</script>

<template>
  <transition
    enter-active-class="ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="mini"
      class="fixed sm:hidden inset-0 z-20 transition-opacity"
      aria-hidden="true"
      @click="toggleMenu"
    >
      <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
    </div>
  </transition>

  <div
    @mouseover="mouseOver"
    @mouseleave="mouseOverLeave"
    class="
      fixed
      top-0
      left-0
      z-20
      h-screen
      min-h-screen
      shadow-md
      py-2
      px-2
      transition-all
      duration-300
      flex flex-col
    "
    :class="[
      bgColor,
      mini
        ? 'w-10/12 sm:w-[85px]'
        : 'transform -translate-x-full sm:transform-none sm:w-[260px]',
      expandHover ? 'hover:sm:w-[260px]' : '',
    ]"
  >
    <div class="hidden sm:block">
      <template v-if="!hideToggle">
        <slot name="toggle" :on="{click: toggleMenu}">
          <v-btn
            size="sm"
            icon
            rounded
            no-ring
            class="absolute -right-4"
            :class="btnToggleClass"
            :color="toggleColor"
            @click="toggleMenu"
          >
            <ChevronLeftIcon
              class="w-5 h-5"
              :class="[mini ? 'rotate-180' : '']"
            />
          </v-btn>
        </slot>
      </template>
      <template v-if="mini && !expandHover">
        <slot name="logo.mini" />
      </template>
      <slot v-else name="logo">
        <v-logo :white="dark" v-bind="logoProps" />
      </slot>
    </div>
    <div class="flex sm:hidden justify-between items-center">
      <slot name="logo">
        <v-logo :white="dark" v-bind="logoProps" />
      </slot>
      <v-btn text icon no-ring @click="toggleMenu">
        <XIcon class="w-5 h-5" />
      </v-btn>
    </div>

    <div class="mt-5 flex-grow overflow-auto space-y-1">
      <slot name="menus">
        <v-menu
          v-for="(menu, i) in menus"
          :classMenuParent="classMenuParent"
          :key="i"
          :menu="menu"
          :mini="mini"
          :expandHover="expandHover"
          :dark="dark"
          :bg-color="expandColor"
          :color="color"
        >
        </v-menu>
      </slot>
    </div>

    <div class="append flex flex-col justify-center">
      <slot name="append" />
    </div>
  </div>
</template>

<style scoped></style>
