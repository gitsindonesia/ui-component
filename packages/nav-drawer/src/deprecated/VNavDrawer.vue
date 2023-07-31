<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { computed, onMounted, PropType, ref, toRefs, watch } from 'vue';
import VMenu, { type Menu } from '@morpheme/menu';
import VLogo from '@morpheme/logo';
import { getBgColor } from '@morpheme/utils';
import VBtn from '@morpheme/button'
import Icon from '@morpheme/icon'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  menus: {
    type: Array as PropType<Menu[]>,
    default: () => [],
  },
  mini: {
    type: Boolean,
    default: false,
  },
  logoProps: {
    type: Object,
    default: () => ({
      imgClass: 'h-10'
    }),
  },
  dark: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'default',
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
  },
  drawerClass: {
    type: String,
    default: ''
  },
  transition: {
    type: String,
    default: 'v-nav-drawer-transition'
  }
});

const { modelValue, mini, isExpandHover, color, dark} = toRefs(props);

const emit = defineEmits([
  'update:modelValue',
  'update:mini',
  'toggle:click',
  'update:expandHover',
]);

const isOpen = ref(modelValue.value)

watch(modelValue, val => {
  isOpen.value = val
}, { immediate: true })

const isMini = ref(mini.value)

watch(mini, val => {
  isMini.value = val
}, { immediate: true })

watch(isMini, val => {
  emit('update:mini', val);
})

const toggleMenu = () => {
  isMini.value = !isMini.value
  emit('toggle:click');
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

onMounted(() => {
  console.warn('v-nav-drawer is deprecated. Switch to new VNavDrawer component instead.');
});

defineSlots<{
  default?: (props: {}) => any;
  toggle?: (props: {}) => any;
  'logo.mini'?: (props: {}) => any;
  logo?: (props: {}) => any;
  menus?: (props: {}) => any;
  append?: (props: {}) => any;
}>()
</script>

<template>
  <transition :name="transition">
    <div
      v-if="isMini"
      class="v-nav-drawer-overlay"
      aria-hidden="true"
      @click="toggleMenu"
    ></div>
  </transition>

  <div
    @mouseover="mouseOver"
    @mouseleave="mouseOverLeave"
    class="v-nav-drawer"
    :class="[
      bgColor,
      isMini ? 'v-nav-drawer--mini' : 'v-nav-drawer--default',
      expandHover ? 'v-nav-drawer--expand-hover' : '',
    ]"
    v-bind="$attrs"
  >
    <slot>
      <div class="v-nav-drawer-toggle">
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
              <Icon
                name="heroicons:chevron-left"
                class="w-5 h-5"
                :class="[isMini ? 'rotate-180' : '']"
              />
            </v-btn>
          </slot>
        </template>
        <template v-if="isMini && !expandHover">
          <slot name="logo.mini" />
        </template>
        <slot v-else name="logo">
          <v-logo :white="dark" v-bind="logoProps" />
        </slot>
      </div>
      <div class="v-nav-drawer-header">
        <slot name="logo">
          <v-logo :white="dark" v-bind="logoProps" />
        </slot>
        <v-btn text icon no-ring @click="toggleMenu">
          <Icon name="heroicons:x-mark" class="v-nav-drawer-toggle-icon" />
        </v-btn>
      </div>
      <div class="v-nav-drawer-body">
        <slot name="menus">
          <v-menu
            v-for="(menu, i) in menus"
            :classMenuParent="classMenuParent"
            :key="i"
            :menu="menu"
            :mini="isMini"
            :expandHover="expandHover"
            :dark="dark"
            :bg-color="expandColor"
            :color="color"
            :small="small"
          >
          </v-menu>
        </slot>
      </div>
      <div class="v-nav-drawer-footer">
        <slot name="append" />
      </div>
    </slot>
  </div>
</template>

<style>
.v-nav-drawer {
  @apply fixed top-0 left-0 z-20 h-screen min-h-screen
    shadow-md py-2 px-2 transition-all duration-300 flex flex-col;
}

.v-nav-drawer-header {
  @apply flex sm:hidden justify-between items-center;
}

.v-nav-drawer-footer {
  @apply flex flex-col justify-center;
}

.v-nav-drawer-body {
  @apply mt-5 flex-grow overflow-auto space-y-1;
}

.v-nav-drawer-overlay {
  @apply fixed sm:hidden inset-0 z-20
    transition-opacity bg-gray-900 opacity-75;
}

.v-nav-drawer-toggle {
  @apply hidden sm:block;
}

.v-nav-drawer-toggle-icon {
  @apply w-5 h-5;
}

.v-nav-drawer--mini {
  @apply w-10/12 sm:w-[85px];
}

.v-nav-drawer--default {
  @apply transform -translate-x-full sm:transform-none sm:w-[260px];
}

.v-nav-drawer--expand-hover {
  @apply hover:sm:w-[260px];
}
</style>
