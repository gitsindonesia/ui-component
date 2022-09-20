<script setup lang="ts">
import {computed} from 'vue';
import {
  DefaultColors,
  defaultSizes,
  DefaultSizes,
} from '@gits-id/theme/defaultTheme';

export type Props = {
  color?: DefaultColors;
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
      width: `${props.size}px`,
      height: `${props.size}px`,
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
    <span v-else class="avatar-initial">{{ initial }}</span>
  </div>
</template>

<style>
.avatar {
  @apply flex items-center justify-center font-semibold border uppercase overflow-hidden;
}

/* shapes */
.avatar-square,
.avatar-square .avatar-image {
  @apply rounded-none;
}

.avatar-circle,
.avatar-circle .avatar-image {
  @apply rounded-full;
}

.avatar-rounded,
.avatar-rounded .avatar-image {
  @apply rounded;
}

/* colors */

.avatar-primary {
  @apply bg-primary-500 border text-white;
}

.avatar-secondary {
  @apply bg-secondary-500 text-white border;
}

.avatar-warning {
  @apply bg-warning-500 text-white border;
}

.avatar-info {
  @apply bg-info-500 text-white border;
}

.avatar-error {
  @apply bg-error-500 text-white border;
}

.avatar-success {
  @apply bg-success-500 text-white border;
}

/* sizes */
.avatar-xxs,
.avatar-xxs .avatar-image {
  @apply w-4 h-4 text-[8px];
}

.avatar-xs,
.avatar-xs .avatar-image {
  @apply w-5 h-5 text-[10px];
}

.avatar-sm,
.avatar-sm .avatar-image {
  @apply w-6 h-6 text-xs;
}

.avatar-md,
.avatar-md .avatar-image {
  @apply w-7 h-7 text-sm;
}

.avatar-lg,
.avatar-lg .avatar-image {
  @apply w-8 h-8 text-sm;
}

.avatar-xl,
.avatar-xl .avatar-image {
  @apply w-10 h-10;
}

/* image */
.avatar-image {
  @apply object-cover;
}
</style>
