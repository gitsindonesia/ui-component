<script setup lang="ts">
import {ref, toRefs} from 'vue';
import {TrashIcon} from '@heroicons/vue/outline';
import VBtn from '@gits-id/button';

const props = defineProps({
  item: {
    type: Object,
    default: null,
  },
  index: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
  removeable: {
    type: Boolean,
    default: false,
  },
  getRef: {
    type: Function,
    default: undefined,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String,
    default: 'font-semibold',
  },
  inactiveClass: {
    type: String,
    default: '',
  },
  defaultClass: {
    type: String,
    default: '',
  },
});

const {
  index,
  active,
  item,
  removeable,
  vertical,
  activeClass,
  inactiveClass,
  defaultClass,
} = toRefs(props);

const wrapper = ref(null);

const emit = defineEmits(['click', 'remove']);

const hovered = ref(0);

const onClick = (idx: number, event: any) => {
  emit('click', {index: idx, event, item: item.value});
};

const remove = (idx: number) => emit('remove', idx);

const setRef = (el: any) => {
  wrapper.value = el;
  if (props.getRef) {
    props.getRef(el);
  }
};
</script>

<template>
  <div
    :id="`tab-item-${index}`"
    :ref="setRef"
    class="
      focus:outline-none
      text-base
      flex
      items-center
      justify-between
      gap-y-1
      transition
      duration-300
      px-4
      py-3
      cursor-pointer
      h-full
    "
    :class="[
      defaultClass,
      active ? activeClass : inactiveClass,
      vertical ? 'w-full min-w-full' : '',
    ]"
  >
    <div
      @click="onClick(index, $event)"
      @mouseover="hovered = index"
      @mouseout="hovered = -1"
    >
      <slot />
    </div>
    <v-btn
      v-if="active && removeable"
      class="ml-2 !p-0"
      color="error"
      x-small
      text
      icon
      type="button"
      @click="remove(index)"
    >
      <TrashIcon class="w-5 h-5" />
    </v-btn>
  </div>
</template>
