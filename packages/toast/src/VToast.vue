<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, PropType, ref, toRefs, watch} from 'vue';
import Icon from '@morpheme/icon';
import {DefaultColors} from '@morpheme/theme/defaultTheme';
import {ToastPlacement} from './types';

export type ToastTypes = 'success' | 'error' | 'warning' | 'question';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @deprecated
   */
  confirm: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  confirmColor: {
    type: String as PropType<DefaultColors | string>,
    default: 'primary',
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
    default: '',
  },
  /**
   * @deprecated
   */
  bodyClass: {
    type: String,
    default: '',
  },
  /**
   * @deprecated
   */
  actionsClass: {
    type: String,
    default: '',
  },
  placement: {
    type: String as PropType<ToastPlacement>,
    default: 'bottom',
  },
  /**
   * @deprecated
   */
  actions: {
    type: Boolean,
    default: false,
  },
  timeout: {
    type: Number,
    default: 0,
  },
  /**
   * @deprecated
   */
  hideXIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  overlay: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<DefaultColors | 'white' | string>,
    default: 'default',
  },
  /**
   * @deprecated use `icon` prop instead
   */
  type: {
    type: String,
    default: '',
  },
  /**
   * @deprecated
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  persistent: {
    type: Boolean,
    default: false,
  },
  transition: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconSize: {
    type: String,
    default: 'md',
  },
  iconClass: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
  actionClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

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
  if (props.transition) return props.transition;

  if (props.placement === 'center') return 'toast-transition-center';

  return ['top', 'top-start', 'top-end'].includes(props.placement)
    ? 'toast-transition-top'
    : 'toast-transition-bottom';
});
</script>

<template>
  <teleport to="body">
    <transition :name="transitionName">
      <div
        v-if="isOpen"
        class="v-toast"
        :class="[`v-toast--${placement}`, `v-toast-${color}`]"
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

<style src="./VToast.scss" lang="scss"></style>
