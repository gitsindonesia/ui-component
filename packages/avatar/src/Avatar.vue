<script setup lang="ts">
import {computed} from 'vue';
import {
  DefaultColors,
  defaultSizes,
  DefaultSizes,
} from '@morpheme/theme/defaultTheme';

export type Props = {
  color?: DefaultColors | string;
  size?: DefaultSizes | string | number;
  shape?: 'square' | 'circle' | 'rounded';
  alt?: string;
  src?: string;
  name?: string;
  maxInitial?: number;
};

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  shape: 'circle',
  maxInitial: 2,
  color: 'default',
});

const classes = computed(() => [
  `avatar avatar-${props.color} avatar-${props.size} avatar-${props.shape}`,
  {},
]);

const initial = computed(() => {
  return props.name
    ?.split(' ')
    .map((word) => word[0])
    .slice(0, props.maxInitial)
    .join('');
});

const computedSize = computed(() => {
  if (!defaultSizes.includes(String(props.size))) {
    return {
      width: props.size,
      height: props.size,
    };
  }

  return {};
});

const computedStyle = computed(() => {
  if (!defaultSizes.includes(String(props.size))) {
    return {
      '--avatar-width': `${props.size}px`,
      '--avatar-height': `${props.size}px`,
    };
  }

  return {};
});
</script>

<template>
  <div :class="classes" :style="computedStyle">
    <img
      v-if="src"
      :src="src"
      :alt="name || alt"
      class="avatar-image"
      v-bind="computedSize"
    />
    <div v-else class="avatar-initial">
      <slot>
        {{ initial }}
      </slot>
    </div>
  </div>
</template>

<style src="./Avatar.scss" lang="scss"></style>
