<script setup lang="ts">
import {computed, inject, ref, toRefs} from 'vue';

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
    default: '',
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

const {index, active, item, vertical, inactiveClass, defaultClass} =
  toRefs(props);

const wrapper = ref(null);

const emit = defineEmits(['click', 'remove']);

const hovered = ref(0);

const onClick = (idx: number, event: any) => {
  emit('click', {index: idx, event, item: item.value});
};

// const remove = (idx: number) => emit('remove', idx);

const setRef = (el: any) => {
  wrapper.value = el;
  if (props.getRef) {
    props.getRef(el);
  }
};

const isActive = computed(() => {
  const injected = inject('activeTab', {value: 0})?.value;
  return injected === index.value || active.value;
});

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <button
    type="button"
    role="tab"
    :id="`tab-item-${index}`"
    :ref="setRef"
    class="v-tabs-item"
    :class="[
      defaultClass,
      {
        'v-tabs-item--active': isActive,
      },
      isActive ? activeClass : inactiveClass,
      vertical ? 'v-tabs-item--vertical' : '',
    ]"
    @click="onClick(index, $event)"
    @mouseover="hovered = index"
    @mouseout="hovered = -1"
  >
    <slot />
  </button>
</template>
