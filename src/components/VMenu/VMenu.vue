<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, ref, toRefs} from 'vue';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue';
import {ChevronRightIcon} from '@heroicons/vue/outline';

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
});

const emit = defineEmits([]);

const {menu, mini, dark} = toRefs(props);

const panel = ref<HTMLDivElement | null>(null);

const menuItemColor = computed(() => {
  return dark.value ? '#404040' : '#f5f5f5';
});
const menuItemBgColor = computed(() => {
  return dark.value ? '#404040' : '#f5f5f5';
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
          class="py-3 w-full flex px-2 gap-x-2 rounded"
          :class="[openClass(open)]"
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
        </div>
      </DisclosureButton>
      <DisclosurePanel
        ref="panel"
        static
        class="mt-2 duration-300 relative overflow-hidden transition-all h-auto"
        :style="{maxHeight: open ? `${(panel as any)?.el?.scrollHeight}px` : 0}"
      >
        <router-link
          v-for="(child, j) in menu.children"
          :key="j"
          :to="child.to"
          exact
          class="
            group
            sub-menu
            gap-x-2
            w-full
            px-2
            py-3
            rounded
            flex
            items-center
            text-sm
            relative
          "
          :class="[textColor]"
        >
          <span class="px-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6"
                cy="6"
                r="5"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </span>

          <span :class="{'sm:hidden': mini}"> {{ child.text }}</span>
          <span
            v-if="mini"
            class="
              menu-tooltip
              hidden
              shadow
              absolute
              bg-gray-200
              text-gray-700
              px-4
              py-3
              min-w-[200px]
              rounded
              left-14
              sm:group-hover:block
            "
          >
            {{ child.text }}
          </span>
        </router-link>
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
      :class="[textColor]"
    >
      <img v-if="menu.img" :src="menu.img" alt="img icon" class="w-5 h-5" />
      <component :is="menu.icon" v-else-if="menu.icon" class="w-5 h-5" />
      <span :class="{'sm:hidden': mini}"> {{ menu.text }}</span>
      <span
        v-if="mini"
        class="
          menu-tooltip
          hidden
          sm:group-hover:block
          shadow
          absolute
          bg-gray-100
          text-gray-700
          px-4
          py-3
          min-w-[200px]
          rounded
          left-14
        "
      >
        {{ menu.text }}
      </span>
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
