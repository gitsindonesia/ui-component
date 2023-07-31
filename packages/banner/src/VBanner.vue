<script setup lang="ts">
import {provide, ref, toRefs, watch} from 'vue';
import {VBannerSymbol} from './symbol';

export type BannerColors =
  | 'white'
  | 'light'
  | 'dark'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'custom';

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    color?: BannerColors;
    sticky?: boolean;
    fixed?: boolean;
    absolute?: boolean;
    top?: boolean;
    bottom?: boolean;
    transition?: string;
    center?: boolean;
    dismissible?: boolean;
  }>(),
  {
    modelValue: true,
    transition: 'v-banner-transition',
  },
);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

const isOpen = ref(modelValue.value);

watch(modelValue, (value) => {
  isOpen.value = value;
});

watch(isOpen, (value) => {
  emit('update:modelValue', value);
});

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

const api = {
  isOpen,
  close,
  open,
};

provide(VBannerSymbol, api);

defineSlots<{
  default?: (props: {}) => any;
  prefix?: (props: {close: () => void; isOpen: boolean}) => any;
  actions?: (props: {close: () => void; isOpen: boolean}) => any;
}>();
</script>

<template>
  <Transition :name="transition">
    <div
      v-if="isOpen"
      class="v-banner"
      :class="[
        `v-banner-${color}`,
        {
          'v-banner--sticky': sticky,
          'v-banner--fixed': fixed,
          'v-banner--absolute': absolute,
          'v-banner--top': top,
          'v-banner--bottom': bottom,
          'v-banner--center': center,
          'v-banner--dismissible': dismissible,
        },
      ]"
    >
      <slot name="prefix" :close="close" :isOpen="isOpen" />
      <slot :close="close" :isOpen="isOpen" />
      <slot name="actions" :close="close" :isOpen="isOpen" />
    </div>
  </Transition>
</template>
