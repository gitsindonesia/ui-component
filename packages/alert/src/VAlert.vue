<script setup lang="ts">
import {computed, toRefs, ref, watch, provide, onMounted, PropType} from 'vue';
import Icon from '@morpheme/icon';
import {AlertSymbol} from './api';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
  },
  /**
   * @deprecated Use `dismissible` instead
   */
  dismissable: {
    type: Boolean,
    default: false,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated Use `bordered` instead
   */
  border: {
    type: [String, Boolean],
    default: false,
  },
  transition: {
    type: String,
    default: 'fade',
  },
  iconClass: {
    type: String,
    default: '',
  },
  iconSize: {
    type: String,
    default: 'xs',
  },
  tile: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  borderPosition: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
    default: 'left',
  },
});

const {modelValue, color} = toRefs(props);

const emit =
  defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
    (event: 'dismissed'): void;
  }>();

const isOpen = ref(modelValue.value);

watch(modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

const classes = computed(() => {
  return [
    `alert-${props.color}`,
    `alert--bordered-${props.borderPosition}`,
    {
      'alert--outlined': props.outlined,
      'alert--solid': props.solid,
      'alert--bordered': props.border || props.bordered,
      'alert--tile': props.tile
    },
  ];
});

const dismiss = () => {
  isOpen.value = false;
  emit('dismissed');
};

const mappedIcons: Record<string, string> = {
  info: 'heroicons:information-circle',
  success: 'heroicons:check-circle',
  warning: 'heroicons:exclamation-triangle',
  error: 'heroicons:x-circle',
};

const api = {
  isOpen,
  dismiss,
  color,
};

provide(AlertSymbol, api);

onMounted(() => {
  if (props.dismissable) {
    console.warn(
      'The `dismissable` prop is deprecated. Use `dismissible` instead.',
    );
  }
});
</script>

<template>
  <transition :name="transition">
    <div v-if="isOpen" class="alert" role="alert" :class="classes">
      <slot name="icon" :icon="icon">
        <Icon
          v-if="icon"
          :name="mappedIcons[icon] || icon"
          class="alert-icon"
          :class="iconClass"
        />
      </slot>
      <div class="alert-content">
        <slot />
      </div>
      <slot
        v-if="dismissable || dismissible"
        name="x-button"
        :dismiss="dismiss"
      >
        <button class="alert-dismissable" aria-label="Dismiss" @click="dismiss">
          <slot name="x-icon">
            <Icon
              :size="iconSize"
              name="heroicons:x-mark"
              class="alert-x-icon"
            />
          </slot>
        </button>
      </slot>
    </div>
  </transition>
</template>
