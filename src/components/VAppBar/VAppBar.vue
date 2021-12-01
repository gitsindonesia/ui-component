<script setup lang="ts">
import {MenuIcon} from '@heroicons/vue/outline';
import {toRefs} from 'vue';
import VBtn from '../VBtn/VBtn.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  drawer: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  hideToggle: {
    type: Boolean,
    default: false,
  },
  defaultHidden: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggleMenu', 'update:modelValue']);

const {mini, fixed, drawer, dark, hideToggle} = toRefs(props);

const toggleMenu = () => emit('toggleMenu');
</script>

<template>
  <div
    class="v-app-bar"
    :class="[
      dark ? 'bg-black' : 'bg-white',
      mini ? 'v-app-bar-mini' : drawer ? 'v-app-bar-drawer' : '',
      defaultHidden ? 'flex sm:hidden' : fixed ? 'fixed w-full' : 'relative',
    ]"
  >
    <template v-if="!hideToggle">
      <slot name="toggle" :toggle="toggleMenu">
        <v-btn
          text
          icon
          dense
          rounded
          :color="dark ? 'white' : ''"
          class="hover:bg-transparent hover:text-primary-2 mr-2"
          @click="toggleMenu"
        >
          <MenuIcon class="w-6 h-6" />
        </v-btn>
      </slot>
    </template>
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.v-app-bar {
  @apply top-0
      shadow-md
      px-4
      py-3
      flex-initial
      items-center
      justify-between
      z-20
      transition-all
      duration-300;
}
.v-app-bar-mini {
  @apply sm:ml-[85px] w-full sm:w-[calc(100%-85px)];
}
.v-app-bar-drawer {
  @apply sm:ml-[250px] w-full sm:w-[calc(100%-250px)];
}
</style>
