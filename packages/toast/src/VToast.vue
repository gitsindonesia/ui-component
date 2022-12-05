<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, PropType, ref, toRefs, watch} from 'vue';
import Icon from '@gits-id/icon';
import { DefaultColors } from '@gits-id/theme/defaultTheme';
import { ToastPlacement } from './types';

export type ToastTypes = 'success' | 'error' | 'warning' | 'question';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  /**
   * @deprecated
   */
  title: {
    type: String,
    default: ''
  },
  /**
   * @deprecated
   */
  confirm: {
    type: Boolean,
    default: false
  },
  /**
   * @deprecated
   */
  confirmColor: {
    type: String as PropType<DefaultColors | 'default' | string>,
    default: 'primary'
  },
  /**
   * @deprecated
   */
  confirmProps: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @deprecated
   */
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  /**
   * @deprecated
   */
  closeText: {
    type: String,
    default: 'Close',
  },
  /**
   * @deprecated
   */
  closeProps: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @deprecated
   */
  headerClass: {
    type: String,
    default: ''
  },
  /**
   * @deprecated
   */
  bodyClass: {
    type: String,
    default: ''
  },
  /**
   * @deprecated
   */
  actionsClass: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<ToastPlacement>,
    default: 'bottom'
  },
  /**
   * @deprecated
   */
  actions: {
    type: Boolean,
    default: false
  },
  timeout: {
    type: Number,
    default: 0
  },
  /**
   * @deprecated
   */
  hideXIcon: {
    type: Boolean,
    default: false
  },
  /**
   * @deprecated
   */
  overlay: {
    type: Boolean,
    default: false
  },
  color: {
    type: String as PropType<DefaultColors | 'default' | 'white' | string>,
    default: 'default'
  },
  /**
   * @deprecated use `icon` prop instead
   */
  type: {
    type: String,
    default: ''
  },
  /**
   * @deprecated
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @deprecated
   */
  persistent: {
    type: Boolean,
    default: false
  },
  transition: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: 'md'
  },
  iconClass: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: ''
  },
  actionClass: {
    type: String,
    default: ''
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const { modelValue } = toRefs(props);

const isOpen = ref(modelValue.value);

const close = () => (isOpen.value = false);

const timer = ref();

watch(modelValue, (val) => {
  isOpen.value = val;

  if (props.timeout) {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      isOpen.value = false;
    }, props.timeout);
  }
});

watch(isOpen, (val) => emit('update:modelValue', val));

const transitionName = computed(() => {
  if (props.transition) return props.transition

  if (props.placement === 'center') return 'toast-transition-center';

  return ['top', 'top-start', 'top-end'].includes(props.placement)
    ? 'toast-transition-top'
    : 'toast-transition-bottom';
})
</script>

<template>
  <teleport to="body">
    <transition :name="transitionName">
      <div
        v-if="isOpen"
        class="v-toast"
        :class="[
          `v-toast--${placement}`,
          `v-toast-${color}`,
          `v-toast-${type}`,
        ]"
        v-bind="$attrs"
      >
        <div class="v-toast-panel">
          <slot name="icon">
            <Icon
              v-if="icon"
              :name="icon"
              :size="iconSize"
              class="v-toast-icon"
              :class="iconClass"
            />
          </slot>
          <div class="v-toast-content" :class="contentClass">
            <slot :close="close" />
          </div>
          <div class="v-toast-action" :class="actionClass">
            <slot name="action" :close="close" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style>
:root {
  /* toast */
  --v-toast-wrapper-padding-x: theme('padding.0');
  --v-toast-wrapper-padding-y: theme('padding.3');
  /* panel */
  --v-toast-padding-x: theme('padding.4');
  --v-toast-padding-y: theme('padding.3');
  --v-toast-bg-color: #2F3031;
  --v-toast-text-color: white;
  --v-toast-font-size: theme('fontSize.sm');
  --v-toast-font-weight: theme('fontWeight.normal');
  --v-toast-width: 328px;
  --v-toast-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1);
  --v-toast-border-radius: theme('borderRadius.DEFAULT');
  --v-toast-text-align: left;
  --v-toast-gap: theme('gap.4');
}

.v-toast {
  padding: var(--v-toast-wrapper-padding-y) var(--v-toast-wrapper-padding-x);

  @apply fixed z-50 inset-x-0 transform flex items-center;
}

.v-toast-panel {
  padding: var(--v-toast-padding-y) var(--v-toast-padding-x);
  background: var(--v-toast-bg-color);
  color: var(--v-toast-text-color);
  font-size: var(--v-toast-font-size);
  font-weight: var(--v-toast-font-weight);
  box-shadow: var(--v-toast-box-shadow);
  border-radius: var(--v-toast-border-radius);
  text-align: var(--v-toast-text-align);
  gap: var(--v-toast-gap);

  @apply w-11/12 sm:w-[var(--v-toast-width)] inset-x-0 flex items-center;
}


/* themes */
.v-toast-white {
  --v-toast-bg-color: theme('colors.white');
  --v-toast-text-color: theme('colors.gray.800');
}
.v-toast-primary {
  --v-toast-bg-color: theme('colors.primary.500');
  --v-toast-text-color: theme('colors.white');
}
.v-toast-secondary {
  --v-toast-bg-color: theme('colors.secondary.500');
  --v-toast-text-color: theme('colors.white');
}
.v-toast-info {
  --v-toast-bg-color: theme('colors.info.500');
  --v-toast-text-color: theme('colors.white');
}
.v-toast-warning {
  --v-toast-bg-color: theme('colors.warning.500');
  --v-toast-text-color: theme('colors.white');
}
.v-toast-error {
  --v-toast-bg-color: theme('colors.error.500');
  --v-toast-text-color: theme('colors.white');
}
.v-toast-success {
  --v-toast-bg-color: theme('colors.success.500');
  --v-toast-text-color: theme('colors.white');
}

/* icon */
.v-toast-icon {
  @apply w-5 h-5;
}

.v-toast-content {
  @apply flex-1;
}

.v-toast-action {
  @apply flex items-center gap-1 justify-center;
}

/* placement */
.v-toast--bottom,
.v-toast--bottom-start,
.v-toast--bottom-end {
  @apply bottom-0;
}

.v-toast--bottom {
  @apply justify-center;
}

.v-toast--bottom-start {
  @apply justify-start ml-4;
}

.v-toast--bottom-end {
  @apply justify-end mr-4;
}

/* top */
.v-toast--top,
.v-toast--top-start,
.v-toast--top-end {
  @apply top-0;
}

.v-toast--top {
  @apply justify-center;
}

.v-toast--top-start {
  @apply justify-start ml-4;
}

.v-toast--top-end {
  @apply justify-end mr-4;
}

/* center */
.v-toast--center {
  @apply absolute transform -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 flex justify-center;
}

/* transition */
.toast-transition-center-enter-active,
.toast-transition-center-leave-active {
  transition: opacity 0.3s ease;
}

.toast-transition-center-enter-from,
.toast-transition-center-leave-to {
  opacity: 0;
}

.toast-transition-bottom-enter-active,
.toast-transition-bottom-leave-active {
  transition: all 0.3s ease;
}

.toast-transition-bottom-enter-from,
.toast-transition-bottom-leave-to {
  transform: translateY(100%);
}

.toast-transition-top-enter-active,
.toast-transition-top-leave-active {
  transition: all 0.3s ease;
}

.toast-transition-top-enter-from,
.toast-transition-top-leave-to {
  transform: translateY(-100%);
}
</style>