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

const props = defineProps({
  menu: {
    type: Object,
    default: null,
  },
  mini: {
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
});

const emit = defineEmits([]);

const {menu, mini, dark} = toRefs(props);

const panel = ref<HTMLDivElement | null>(null);

const menuItemColor = computed(() => {
  return dark.value ? props.darkColor : props.color;
});
const menuItemBgColor = computed(() => {
  return dark.value ? props.darkBgColor : props.bgColor;
});

const textColor = computed(() =>
  dark.value
    ? 'text-gray-400 hover:bg-gray-600'
    : 'text-gray-700 hover:bg-gray-100',
);

const openClass = (isOpen: boolean) => {
  if (dark.value) {
    return isOpen ? 'text-primary-600 bg-gray-700' : '';
  }
  return isOpen ? 'text-primary-600 bg-gray-100' : '';
};

const scrollHeight = computed(() => (panel as any).value?.el?.scrollHeight);
</script>

<template>
  <template v-if="menu">
    <Disclosure v-if="menu.children" v-slot="{open}">
      <DisclosureButton
        v-slot="{open}"
        class="focus:outline-none w-full transition duration-300 rounded group"
        :class="[textColor]"
      >
        <div
          class="py-3 w-full flex items-center px-2 gap-x-2 rounded"
          :class="[openClass(open), mini ? 'justify-center' : '']"
        >
          <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
          <span v-else-if="menu.svg" v-html="menu.svg" />
          <template v-else-if="menu.icon">
            <template v-if="typeof menu.icon === 'string'">
              <v-icon :name="menu.icon" />
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
            class="text-sm flex-grow text-left truncate"
            :class="{'sm:hidden': mini}"
          >
            {{ menu.text }}
          </span>

          <ChevronRightIcon
            class="w-5 h-5"
            :class="[
              open ? 'transform rotate-90' : '',
              mini ? 'inline sm:hidden' : '',
            ]"
          />

          <v-menu-tooltip :show="mini">
            {{ menu.text }}
          </v-menu-tooltip>
        </div>
      </DisclosureButton>
      <DisclosurePanel
        ref="panel"
        static
        class="mt-2 duration-300 overflow-hidden transition-all h-auto"
        :style="{maxHeight: open ? `${scrollHeight}px` : 0}"
      >
        <v-menu-item
          v-for="(child, j) in menu.children"
          :key="j"
          :item="child"
          :mini="mini"
          :text-color="textColor"
        />
      </DisclosurePanel>
    </Disclosure>
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
        gap-x-2
        items-center
        text-sm
        mb-1
        relative
      "
      :class="[textColor, mini ? 'justify-start sm:justify-center' : '']"
    >
      <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
      <component :is="menu.icon" v-else-if="menu.icon" class="w-5 h-5" />
      <span :class="{'sm:hidden': mini}"> {{ menu.text }}</span>

      <v-menu-tooltip :show="mini">
        {{ menu.text }}
      </v-menu-tooltip>
    </router-link>
  </template>
</template>

<style scoped>
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
</style>
