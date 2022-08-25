<script setup lang="ts">
import VMenuTooltip from './VMenuTooltip.vue';
import {computed, PropType, resolveComponent} from 'vue';
import {Menu} from './types';
import {Icon} from '@iconify/vue';

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
  as: {
    type: String,
    default: '',
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

const is = computed(() => props.as || resolveComponent('RouterLink'));
</script>

<template>
  <component
    v-if="item"
    :is="is"
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
      <Icon icon="ic:outline-circle" class="w-4 h-4" />
    </span>

    <span :class="{'sm:hidden': mini && !expandHover, 'text-sm': small}">
      {{ item.text }}
    </span>

    <v-menu-tooltip :show="mini && !expandHover">
      {{ item.text }}
    </v-menu-tooltip>
  </component>
</template>
