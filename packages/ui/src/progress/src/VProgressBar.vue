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

defineSlots<{
  default?: (props: {value: number}) => any;
  label?: (props: {value: number}) => any;
}>();
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
