<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, PropType, toRefs} from 'vue';
import VMenuTooltip from './VMenuTooltip.vue';
import VMenuItem from './VMenuItem.vue';
import {VCollapsible} from '@gits-id/collapsible';
import {useRoute} from 'vue-router';
import VMenuIcon from './VMenuIcon.vue';
import {Menu} from './types';

const props = defineProps({
  menu: {
    type: Object as PropType<Menu>,
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

const {menu, mini, dark, classMenuParent, expandHover} = toRefs(props);

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

const route = useRoute();

const isActive = (path: any) => {
  const currentPath = route?.path;
  const currentRoute = currentPath?.split('/');
  const parts = path?.to?.split('/');
  return parts?.[2] === currentRoute?.[2];
};

const activatorClass = computed(() => {
  return [
    'font-normal hover:bg-gray-100 rounded !p-2 !py-3',
    props.mini ? '!justify-center' : '',
  ].join(' ');
});
</script>

<template>
  <template v-if="menu">
    <VCollapsible
      v-if="menu.children"
      :activator-class="activatorClass"
      panel-class=""
      header-class=""
      :hide-icon="mini"
      :active-class="classMenuParent"
    >
      <template #header="{isOpen: open}">
        <div
          class="flex items-center gap-x-3 rounded"
          :class="[
            openClass(open),
            mini ? (!expandHover ? 'justify-center' : '') : '',
            open ? menuItemBgColor : '',
          ]"
        >
          <div class="menu-icon w-6">
            <img
              v-if="menu.img"
              :src="menu.img"
              alt="img icon"
              class="w-5 h-5"
            />
            <span v-else-if="menu.svg" v-html="menu.svg" />
            <template v-else-if="menu.icon">
              <VMenuIcon :icon="menu.icon" :menu="menu" />
            </template>
          </div>

          <span
            :title="menu.text"
            class="flex-grow text-left truncate"
            :class="{'sm:hidden': mini && !expandHover, 'text-sm': small}"
          >
            {{ menu.text }}
          </span>

          <v-menu-tooltip :show="mini && !expandHover">
            {{ menu.text }}
          </v-menu-tooltip>
        </div>
      </template>

      <div>
        <v-menu-item
          v-for="(child, j) in menu.children"
          :key="j"
          :item="child"
          :mini="mini"
          :expandHover="expandHover"
          :dark="dark"
          :small="child.small || small"
          :text-color="isActive(child) ? menuItemColor : textColor"
        />
      </div>
    </VCollapsible>
    <router-link
      v-else
      :to="menu.to"
      exact
      class="
        group
        menu-item
        transition
        duration-300
        w-full
        px-2
        py-3
        rounded
        flex
        gap-x-4
        items-center
        relative
      "
      :class="[
        small ? 'text-sm' : '',
        dark ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
        isActive(menu) ? menuItemColor : textColor,
        mini && !expandHover ? 'justify-start sm:justify-center' : '',
      ]"
    >
      <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
      <VMenuIcon :icon="menu.icon" :menu="menu" />

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
</style>
