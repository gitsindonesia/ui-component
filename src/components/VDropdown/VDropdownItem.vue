<script setup lang="ts">
import {toRefs} from 'vue';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';

const props = defineProps({
  item: {
    type: Object as DropdownItem,
    default: () => ({}),
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const {item, active} = toRefs(props);
const {icon, text, ...rest} = item.value;
</script>

<template>
  <button
    :class="[
      active ? 'bg-primary-500 text-white' : 'text-gray-900',
      'group flex rounded-md items-center w-full px-2 py-2 text-sm',
    ]"
    v-bind="rest"
  >
    <vue-feather
      v-if="icon"
      :name="icon"
      class="w-5 h-5 mr-2"
      :class="active ? 'text-white' : 'text-primary-400'"
    />
    <slot>{{ text }}</slot>
  </button>
</template>

<style scoped></style>
