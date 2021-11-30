<script setup>
import VMenuTooltip from './VMenuTooltip.vue';

const props = defineProps({
  item: {
    type: Object,
    default: undefined,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <router-link
    :to="item.to"
    exact
    class="
      group
      sub-menu
      gap-x-2
      w-full
      px-5
      py-3
      rounded
      flex
      items-center
      text-sm
    "
    :class="[textColor, mini ? 'justify-start sm:justify-center' : '']"
  >
    <span class="px-1">
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

    <span :class="{'sm:hidden': mini}"> {{ item.text }}</span>
    <v-menu-tooltip :show="mini">
      {{ item.text }}
    </v-menu-tooltip>
  </router-link>
</template>

<style scoped></style>
