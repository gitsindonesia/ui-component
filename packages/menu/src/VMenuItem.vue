<script setup lang="ts">
import VMenuTooltip from './VMenuTooltip.vue';
import {computed, PropType} from 'vue';
import {Menu} from './types';

const props = defineProps({
  item: Object as PropType<Menu>,
  mini: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: '',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  expandHover: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
});

const centerClass = computed(() => {
  if (props.expandHover) {
    return 'justify-start sm:justify-center';
  }

  if (props.mini) {
    return 'justify-center flex justify-center';
  }

  return '';
});
</script>

<template>
  <router-link
    v-if="item"
    :to="item.to"
    exact
    class="
      group
      sub-menu
      gap-x-3
      w-full
      px-2
      py-2.5
      rounded
      flex
      items-center
      truncate
      hover:bg-gray-100
    "
    :class="[textColor, mini ? 'py-4' : '', centerClass]"
  >
    <span :class="mini ? '' : 'px-1 w-6'">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="2" />
      </svg>
    </span>

    <span :class="{hidden: mini && !expandHover, 'text-sm': small}">
      {{ item.text }}
    </span>

    <v-menu-tooltip :show="mini && !expandHover">
      {{ item.text }}
    </v-menu-tooltip>
  </router-link>
</template>
