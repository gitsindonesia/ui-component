<script setup lang="ts">
import {type Component, PropType} from 'vue';
import { TextVariants } from './variants';

defineProps({
  variant: {
    type: String as PropType<TextVariants>,
    required: true
  },
  fontWeight: {
    type: String as PropType<'thin' | 'extrathin' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'>,
    default: 'normal',
  },
  color: {
    type: String as PropType<'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success' | string>,
    default: 'text',
  },
  as: {
    type: String as PropType<string | Component>,
    default: 'p',
  },
});
</script>

<template>
  <component
    :is="as"
    class="v-text"
    :class="{
      [`v-text--${variant}`]: variant,
      [`v-text--${fontWeight}`]: fontWeight,
      [`v-text--${color}`]: color,
    }"
  >
    <slot />
  </component>
</template>
