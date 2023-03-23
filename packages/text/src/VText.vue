<script setup lang="ts">
import {type Component, type PropType, computed} from 'vue';
import { FontWeightVariants, TextVariants, ColorVariants, mappedColors } from './variants';
import {colorVariants} from './variants'
import {colors} from '@morpheme/design-tokens/js/tailwind';
import { get } from './helpers';

const props = defineProps({
  variant: {
    type: String as PropType<TextVariants>,
    required: true
  },
  fontWeight: {
    type: String as PropType<FontWeightVariants>,
    default: 'normal',
  },
  color: {
    type: String as PropType<ColorVariants | string>,
    default: 'text',
  },
  as: {
    type: String as PropType<string | Component>,
    default: 'p',
  },
});

const isCustomColor = computed(() => {
  return !colorVariants.includes(props.color)
})

const computedStyles = computed(() => {
  let defaultColor = props.color ?? undefined

  if (isCustomColor.value) {
    const color = get(colors, props.color, defaultColor)
    return {color}
  }

  const color = get(colors, mappedColors[props.color], defaultColor)
  return {color}
})
</script>

<template>
  <component
    :is="as"
    class="v-text"
    :class="{
      [`v-text--${variant}`]: variant,
      [`v-text--${fontWeight}`]: fontWeight,
      [`v-text--${color}`]: !isCustomColor && color,
    }"
    :style="computedStyles"
  >
    <slot />
  </component>
</template>

<style src="./VText.scss" lang="scss"></style>
