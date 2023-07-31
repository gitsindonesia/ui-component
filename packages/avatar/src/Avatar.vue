<script setup lang="ts">
import {computed} from 'vue';
import {
  DefaultColors,
  defaultSizes,
  DefaultSizes,
} from '@morpheme/theme/defaultTheme';
import VIcon from '@morpheme/icon';

export type Props = {
  color?: DefaultColors | string;
  size?: DefaultSizes | string | number;
  shape?: 'square' | 'circle' | 'rounded';
  alt?: string;
  src?: string;
  name?: string;
  maxInitial?: number;
  indicator?: 'online' | 'verified' | (string & {});
  indicatorClass?: string;
  width?: string | number;
  height?: string | number;
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

defineSlots<{
  default?: (props: {}) => any;
  indicator?: (props: {indicator: Props['indicator']}) => any;
}>()
</script>

<template>
  <div :class="classes" :style="computedStyle">
    <img
      v-if="src"
      :src="src"
      :alt="name || alt"
      :width="width"
      :height="height"
      class="avatar-image"
      v-bind="computedSize"
    />
    <div v-else class="avatar-initial">
      <slot>
        {{ initial }}
      </slot>
    </div>
    <slot name="indicator" :indicator="indicator">
      <div
        v-if="indicator"
        class="avatar-indicator"
        :class="[
          {
            'avatar-indicator--online': indicator === 'online',
            'avatar-indicator--verified': indicator === 'verified',
          },
          indicatorClass,
        ]"
      >
        <img
          v-if="indicator === 'verified'"
          src="./verified.svg"
          alt="Verified Mark"
          width="16"
          height="16"
        />
        <VIcon
          v-else-if="indicator && indicator !== 'online'"
          :name="indicator"
        />
      </div>
    </slot>
  </div>
</template>
