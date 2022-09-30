<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {toRefs, ref, watch, PropType} from 'vue';
import type {DefaultColors} from '@gits-id/theme/defaultTheme';

export type AppBarShadow =
  | boolean
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'inner'
  | 'none';

export type AppBarColors = DefaultColors | 'default';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [Boolean, String] as PropType<AppBarShadow>,
    default: false,
  },
  color: {
    type: String as PropType<AppBarColors>,
    default: 'default',
  },
  transition: {
    type: String,
    default: 'fade',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

const isOpen = ref(modelValue.value);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  isOpen.value = val;
});

const toggle = () => (isOpen.value = !isOpen.value);

defineExpose(toggle);
</script>

<template>
  <transition :name="transition">
    <header
      v-if="isOpen"
      class="app-bar"
      :class="[
        `app-bar-${color}`,
        typeof shadow === 'string'
          ? `app-bar--shadow-${shadow}`
          : shadow
          ? 'app-bar--shadow'
          : '',
        size ? `app-bar--${size}` : '',
        {
          'app-bar--fixed': fixed,
          'app-bar--sticky': sticky,
          'app-bar--bordered': bordered,
        },
      ]"
      v-bind="$attrs"
    >
      <slot :toggle="toggle" />
    </header>
  </transition>
</template>
