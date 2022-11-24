<script setup lang="ts">
import {computed, toRefs, ref, watch} from 'vue';

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  color: {
    type: String,
    default: 'default',
  },
  min: {
    type: [Number, String],
    default: 0,
  },
  max: {
    type: [Number, String],
    default: 100,
  },
  height: {
    type: [Number, String],
    default: '',
  },
  bgColor: {
    type: String,
    default: '',
  },
  fillColor: {
    type: String,
    default: '',
  },
  bgClass: {
    type: String,
    default: '',
  },
  fillClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
  }>();

const {modelValue} = toRefs(props);

const value = ref(props.modelValue);

watch(modelValue, (val) => {
  value.value = val;
});

watch(value, (val) => {
  emit('update:modelValue', val);
});

const computedHeight = computed(() =>
  typeof props.height === 'string' ? props.height : `${props.height}px`,
);

const computedStyles = computed(() => {
  const styles: Record<string, string> = {};

  if (props.height) {
    styles['--v-progress-bar-height'] = computedHeight.value;
  }

  if (props.bgColor) {
    styles['--v-progress-bar-bg-color'] = props.bgColor;
  }

  if (props.fillColor) {
    styles['--v-progress-bar-fill-color'] = props.fillColor;
  }

  return styles;
});

const percentage = computed(() => {
  return Math.floor((+value.value / +props.max) * 100);
});
</script>

<template>
  <div
    class="v-progress-bar"
    :class="[
      `v-progress-bar-${color}`,
      `v-progress-bar--${percentage}`,
      {
        'v-progress-bar--indeterminate': indeterminate,
      },
    ]"
    role="progressbar"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-valuenow="percentage"
    aria-labelledby="progress-label"
    :style="computedStyles"
  >
    <div class="v-progress-bar-label" :class="labelClass" id="progress-label">
      <slot name="label" :value="percentage">
        {{ label }}
      </slot>
    </div>
    <div class="v-progress-bar-background" :class="bgClass">
      <div
        :style="{width: indeterminate ? '100%' : percentage + '%'}"
        class="v-progress-bar-fill"
        :class="fillClass"
      >
        <slot :value="percentage" />
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.gray.400');
  --v-progress-bar-height: theme('height.2');
  --v-progress-bar-border-radius: theme('borderRadius.full');
  --v-progress-bar-font-size: theme('fontSize.xs');
  --v-progress-bar-label-color: theme('colors.white');
  --v-progress-bar-transition-property: theme('transitionProperty.all');
  --v-progress-bar-transition-duration: theme('transitionDuration.300');
  --v-progress-bar-transition-timing-function: theme(
    'transitionTimingFunction.in-out'
  );
  --v-progress-bar-indeterminate-animation-name: indeterminateAnimation;
  --v-progress-bar-indeterminate-animation-duration: 2s;
  --v-progress-bar-indeterminate-animation-timing-function: linear;
  --v-progress-bar-indeterminate-animation-iteration-count: infinite;
}

.v-progress-bar {
  position: relative;
  font-size: var(--v-progress-bar-font-size);
}

.v-progress-bar-background {
  height: var(--v-progress-bar-height);
  background-color: var(--v-progress-bar-bg-color);
  border-radius: var(--v-progress-bar-border-radius);

  @apply overflow-hidden flex;
}

.v-progress-bar-fill {
  background-color: var(--v-progress-bar-fill-color);
  border-radius: var(--v-progress-bar-border-radius);
  transition-property: var(--v-progress-bar-transition-property);
  transition-duration: var(--v-progress-bar-transition-duration);
  transition-timing-function: var(--v-progress-bar-transition-timing-function);

  @apply flex flex-col items-center justify-center;
}

/* colors */
.v-progress-bar-primary {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.primary.500');
}
.v-progress-bar-secondary {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.secondary.500');
}
.v-progress-bar-info {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.info.500');
}
.v-progress-bar-warning {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.warning.500');
}
.v-progress-bar-success {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.success.500');
}
.v-progress-bar-error {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.error.500');
}
.v-progress-bar-dark {
  --v-progress-bar-bg-color: theme('colors.gray.200');
  --v-progress-bar-fill-color: theme('colors.gray.800');
}

/* label */
.v-progress-bar-label {
  color: var(--v-progress-bar-label-color);

  @apply absolute inset-0 flex items-center justify-center;
}

.v-progress-bar-label:empty {
  display: none;
}

/* indeterminate */
.v-progress-bar--indeterminate .v-progress-bar-fill {
  animation-name: var(--v-progress-bar-indeterminate-animation-name);
  animation-duration: var(--v-progress-bar-indeterminate-animation-duration);
  animation-iteration-count: var(
    --v-progress-bar-indeterminate-animation-iteration-count
  );
  animation-timing-function: var(
    --v-progress-bar-indeterminate-animation-timing-function
  );
  transform-origin: 0% 50%;
  width: 100%;
}

@keyframes indeterminateAnimation {
  0% {
    transform: translateX(0) scaleX(0);
  }
  40% {
    transform: translateX(0) scaleX(0.4);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
}
</style>
