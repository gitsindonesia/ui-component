<script setup lang="ts">
import {ref, watch, toRefs} from 'vue';
import {ChevronDownIcon} from '@heroicons/vue/outline';
import VCollapse from './VCollapse.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  headerClass: {
    type: String,
    default: 'font-semibold',
  },
  activeClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: 'mb-5',
  },
  inactiveClass: {
    type: String,
    default: '',
  },
  activatorClass: {
    type: String,
    default: '',
  },
  panelClass: {
    type: String,
    default: 'px-4 pb-4',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
});

const {
  modelValue,
  title,
  activeClass,
  inactiveClass,
  activatorClass,
  panelClass,
} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(modelValue.value);

const toggle = () => (isOpen.value = !isOpen.value);

watch(
  modelValue,
  (value) => {
    isOpen.value = value;
  },
  {immediate: true},
);

watch(isOpen, (value) => {
  emit('update:modelValue', value);
  emit('change', value);
});
</script>

<template>
  <div>
    <div
      class="
        py-3
        w-full
        flex
        justify-between
        items-center
        px-4
        gap-x-4
        transition
        duration-300
        group
        cursor-pointer
        font-semibold
      "
      :class="[activatorClass, isOpen ? activeClass : inactiveClass]"
      @click="toggle"
    >
      <slot name="header" :is-open="isOpen">
        {{ title }}
      </slot>

      <slot name="icon">
        <ChevronDownIcon
          v-if="!hideIcon"
          class="w-5 h-5 transform transition duration-300"
          :class="[isOpen ? 'rotate-180' : '']"
        />
      </slot>
    </div>
    <v-collapse :show="isOpen">
      <div :class="panelClass">
        <slot />
      </div>
    </v-collapse>
  </div>
</template>
