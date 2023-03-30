<template>
  <div class="progress-ring">
    <svg :width="size" :height="size">
      <circle
        class="progress-background"
        :stroke-width="strokeWidth"
        :r="radius"
        :cx="center"
        :cy="center"
        fill="transparent"
        :style="{stroke: 'rgba(0, 0, 0, 0.1)'}"
      />
      <circle
        class="progress"
        :class="{indeterminate}"
        :stroke-width="strokeWidth"
        :r="radius"
        :cx="center"
        :cy="center"
        :stroke-dasharray="[circumference, circumference]"
        :stroke-dashoffset="offset"
        :stroke="color"
        fill="none"
      />
      <text
        class="progress-text"
        :x="center"
        :y="center"
        alignment-baseline="central"
      >
        {{ text }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps, ref, watchEffect} from 'vue';

const props = defineProps({
  value: {type: Number, default: 0},
  size: {type: Number, default: 60},
  strokeWidth: {type: Number, default: 6},
  color: {type: String, default: '#42b983'},
  indeterminate: {type: Boolean, default: false},
  text: {type: String, default: ''},
});

const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const center = computed(() => props.size / 2);

const offset = ref(0);

watchEffect(() => {
  if (props.indeterminate) {
    const interval = setInterval(() => {
      offset.value = offset.value - 1;
    }, 10);
    return () => clearInterval(interval);
  } else {
    offset.value = `${
      circumference.value - (props.value / 100) * circumference.value
    }px`;
  }
});

const indeterminate = computed(() => props.indeterminate && props.value === 0);
</script>

<style>
.progress-ring {
  display: inline-block;
  position: relative;
}

.progress {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-background {
  stroke-dasharray: var(--circumference) var(--circumference);
  stroke-dashoffset: 0;
  --circumference: {{ circumference }};
}

.progress.indeterminate {
  animation: indeterminate 2s linear infinite;
}

@keyframes indeterminate {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: v-bind(circumference) px;
  }
}

.progress-text {
  fill: #333;
  font-size: 0.3em;
  font-weight: bold;
  text-anchor: middle;
}
</style>
