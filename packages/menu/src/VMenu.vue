<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, ref, toRefs} from 'vue';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';
import {ChevronRightIcon} from '@heroicons/vue/outline';
import VMenuTooltip from './VMenuTooltip.vue';
import VMenuItem from './VMenuItem.vue';
import {useRouter} from 'vue-router';

const props = defineProps({
  menu: {
    type: Object,
    default: null,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  expandHover: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
  bgColor: {
    type: String,
    default: '',
  },
  darkColor: {
    type: String,
    default: '',
  },
  darkBgColor: {
    type: String,
    default: '',
  },
  classMenuParent: {
    type: String,
    default: 'text-primary-500 bg-gray-700',
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const {menu, mini, dark, classMenuParent, expandHover} = toRefs(props);

const panel = ref<HTMLDivElement | null>(null);

const menuItemColor = computed(() => {
  return dark.value ? props.darkColor : props.color;
});
const menuItemBgColor = computed(() => {
  return dark.value ? props.darkBgColor : props.bgColor;
});

const textColor = computed(() =>
  dark.value
    ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
    : 'text-gray-700 hover:bg-gray-100',
);

const openClass = (isOpen: boolean) => {
  if (dark.value) {
    return isOpen ? `${classMenuParent.value}` : '';
  }
  return isOpen ? `${classMenuParent.value}` : '';
};

const getScrollHeight = () => {
  const scrollHeight = (panel as any).value?.el?.scrollHeight;
  return `${scrollHeight}px`;
};

const isActive = (path: any) => {
  const currentPath = router.currentRoute.value.path;
  const currentRoute = currentPath.split('/');
  const route = path.to.split('/');
  return route[2] === currentRoute[2];
};
</script>

<template>
  <template v-if="menu">
    <Disclosure v-if="menu.children" v-slot="{open}">
      <DisclosureButton
        v-slot="{open}"
        class="focus:outline-none w-full transition duration-300 rounded group"
        :class="[textColor, small ? 'text-sm' : '']"
      >
        <div
          class="py-3 w-full flex items-center px-2 gap-x-2 rounded"
          :class="[
            openClass(open),
            mini && !expandHover ? 'justify-center' : '',
            open ? menuItemBgColor : '',
          ]"
        >
          <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
          <span v-else-if="menu.svg" v-html="menu.svg" />
          <template v-else-if="menu.icon">
            <template v-if="typeof menu.icon === 'string'">
              <slot name="icon" :menu="menu">
                <v-icon :name="menu.icon" />
              </slot>
            </template>
            <component
              :is="menu.icon"
              v-else
              class="w-5 h-5"
              :class="open ? '' : ''"
            />
          </template>

          <span
            :title="menu.text"
            class="flex-grow text-left truncate"
            :class="{'sm:hidden': mini && !expandHover, 'text-sm': small}"
          >
            {{ menu.text }}
          </span>

          <ChevronRightIcon
            class="w-5 h-5"
            :class="[
              open ? 'transform rotate-90' : '',
              mini && !expandHover ? 'inline sm:hidden' : '',
            ]"
          />

          <v-menu-tooltip :show="mini && !expandHover">
            {{ menu.text }}
          </v-menu-tooltip>
        </div>
      </DisclosureButton>
      <DisclosurePanel
        ref="panel"
        static
        class="duration-300 overflow-hidden transition-all h-auto"
        :style="{maxHeight: open ? getScrollHeight() : 0}"
      >
        <v-menu-item
          v-for="(child, j) in menu.children"
          :key="j"
          :item="child"
          :mini="mini"
          :expandHover="expandHover"
          :dark="dark"
          :text-color="isActive(child) ? menuItemColor : textColor"
        />
      </DisclosurePanel>
    </Disclosure>
    <router-link
      v-else
      :to="menu.to"
      exact
      class="group menu-item transition duration-300 w-full px-2.5 py-3 rounded flex w-full gap-x-2 items-center relative"
      :class="[
        small ? 'text-sm' : '',
        dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
        isActive(menu) ? menuItemColor : textColor,
        mini && !expandHover ? 'justify-start sm:justify-center' : '',
      ]"
    >
      <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
      <component :is="menu.icon" v-else-if="menu.icon" class="w-5 h-5" />
      <span :class="{'sm:hidden': mini && !expandHover}">
        {{ menu.text }}
      </span>

      <v-menu-tooltip :show="mini && !expandHover">
        {{ menu.text }}
      </v-menu-tooltip>
    </router-link>
  </template>
</template>

<style scoped>
.fill-white {
  fill: #fff;
}
/**
.menu-item.router-link-active,
.menu-item.router-link-active.router-link-exact-active,
.menu-item.router-link-active.router-link-exact-active .menu-tooltip {
  @apply text-primary-600;
}
.sub-menu.router-link-active,
.sub-menu.router-link-active.router-link-exact-active,
.sub-menu.router-link-active.router-link-exact-active .menu-tooltip {
  @apply text-primary-600;
}
.sub-menu.router-link-active svg circle,
.sub-menu.router-link-active.router-link-exact-active svg circle {
  @apply text-primary-600;
}
**/
</style>
