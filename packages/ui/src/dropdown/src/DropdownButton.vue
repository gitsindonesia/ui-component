<script setup lang="ts">
import {MenuButton} from '@headlessui/vue';
import {VBtn} from '../../button/src';
import {computed} from 'vue';
import VDropdownItem from './DropdownItem.vue';
import VDropdownHeader from './DropdownHeader.vue';

const props = withDefaults(
  defineProps<{
    as?: any;
  }>(),
  {
    as: 'button',
  },
);

const componentMap: Record<string, any> = {
  VBtn,
  VDropdownItem,
  VDropdownHeader,
  // aliases
  item: VDropdownItem,
  header: VDropdownHeader,
  btn: VBtn,
};

const is = computed(() => {
  return componentMap[props.as] || props.as;
});

defineSlots<{
  default?: (props: {open?: boolean}) => any;
}>();
</script>

<template>
  <MenuButton v-slot="props" :as="is">
    <slot v-bind="props" />
  </MenuButton>
</template>
