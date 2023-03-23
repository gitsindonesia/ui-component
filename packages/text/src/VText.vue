<script setup lang="ts">
import {type Component, computed} from 'vue';
import { FontWeightVariants, TextVariants, ColorVariants, mappedColors } from './variants';
import {colors} from '@morpheme/design-tokens/js/tailwind';
import { get } from './helpers';

type Props = {
  variant?: TextVariants
  fontWeight?: FontWeightVariants
  color?: ColorVariants
  as?: string | Component
}

const props = withDefaults(defineProps<Props>(), {
  fontWeight: 'normal',
  color: '',
  as: 'p',
})

const isCustomColor = computed(() => {
  return !Object.keys(mappedColors).includes(props.color)
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
