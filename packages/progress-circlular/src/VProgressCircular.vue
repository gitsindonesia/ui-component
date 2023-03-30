<script setup lang="ts">
import {getColor} from '@morpheme/utils';
import {computed, ref} from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    default: 100,
  },
  width: {
    type: Number,
    default: 10,
  },
  color: {
    type: String,
    default: 'primary.600',
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  underlayColor: {
    type: String,
    default: 'gray.200',
  },
  underlayWidth: {
    type: Number,
  },
  underlayFill: {
    type: String,
    default: 'transparent',
  },
  textFontSize: {
    type: String,
    default: '1rem',
  },
  textFontWeight: {
    type: [String, Number],
    default: 600,
  },
  textColor: {
    type: String,
    default: 'currentColor',
  },
});

defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const radius = ref((props.size - props.width) / 2);
const center = ref(props.size / 2);
const circumference = ref(2 * Math.PI * radius.value);

const progressStyle = computed<any>(() => {
  const dashOffset =
    circumference.value - (props.modelValue / 100) * circumference.value;
  return {
    strokeDasharray: `${circumference.value}px`,
    strokeDashoffset: `${dashOffset}px`,
    stroke: strokeColor.value,
    strokeWidth: `${props.width}px`,
    fill: 'transparent',
  };
});

const computedUnderlayWidth = computed(() => {
  return props.underlayWidth || props.width;
});

const strokeColor = computed(() => {
  return getColor(props.color);
});

const underlayStrokeColor = computed(() => {
  return getColor(props.underlayColor);
});
</script>

<template>
  <div
    class="v-progress-circular"
    :class="{
      'v-progress-circular--indeterminate': indeterminate,
    }"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-valuenow="modelValue"
    role="progressbar"
  >
    <svg :width="size" :height="size">
      <circle
        :r="radius"
        :cx="center"
        :cy="center"
        class="v-progress-circular-underlay"
        v-if="!indeterminate"
      />
      <circle
        :r="radius"
        :cx="center"
        :cy="center"
        class="v-progress-circular-overlay"
        :style="progressStyle"
      />
      <text :x="center" :y="center" class="v-progress-circular-text">
        <slot :value="modelValue" />
      </text>
    </svg>
  </div>
</template>

<style lang="scss">
.v-progress-circular {
  display: inline-block;

  &-underlay {
    stroke: v-bind(underlayStrokeColor);
    stroke-width: v-bind(computedUnderlayWidth);
    fill: v-bind(underlayFill);
  }

  &-overlay {
    stroke-linecap: round;
    transform-origin: center center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  &-text {
    font-size: v-bind(textFontSize);
    font-weight: v-bind(textFontWeight);
    color: v-bind(textColor);
    text-anchor: middle;
    dominant-baseline: middle;
  }

  &--indeterminate &-overlay {
    stroke-dasharray: 80px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    transform-origin: center center;
    animation: v-progress-circular-animation 1s linear infinite;
  }
}

@keyframes v-progress-circular-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
