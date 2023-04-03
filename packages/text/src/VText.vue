<script setup lang="ts">
import {type Component, computed} from 'vue';
import type { FontWeightVariants, TextVariants } from './variants';
import {getColor, type ColorVariants, mappedColors} from '@morpheme/utils'

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
  const color = getColor(props.color)
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
