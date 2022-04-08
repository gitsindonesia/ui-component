<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, ref, toRefs} from 'vue';
import VMenuTooltip from './VMenuTooltip.vue';
import VMenuItem from './VMenuItem.vue';
import {useRouter} from 'vue-router';
import {VCollapsible} from '@gits-id/collapsible';

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
    <VCollapsible
      v-if="menu.children"
      activator-class="font-normal hover:bg-gray-100 rounded !p-2 !py-3"
      panel-class=""
      header-class=""
      :hide-icon="mini"
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
              <template v-if="typeof menu.icon === 'string'">
                <slot name="icon" :menu="menu">
                  <v-icon :name="menu.icon" />
                </slot>
              </template>
              <component :is="menu.icon" v-else class="w-5 h-5" />
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
        w-full
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
