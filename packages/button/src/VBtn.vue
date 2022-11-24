<script setup lang="ts">
import {computed, resolveComponent} from 'vue';
import type {DefaultColors} from '@gits-id/theme/defaultTheme';
import type {RouteLocationRaw} from 'vue-router';
import VIcon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';

export type ButtonColors = DefaultColors | 'default' | string;

export interface Props {
  color?: ButtonColors;
  size?: 'sm' | 'md' | 'lg' | string;
  to?: RouteLocationRaw;
  href?: string;
  text?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  noRing?: boolean;
  tile?: boolean;
  block?: boolean;
  shadow?: boolean;
  icon?: boolean;
  loading?: boolean;
  loadingText?: string;
  newTab?: boolean;
  type?: 'submit' | 'reset' | 'button';
  /**
   * @deprecated
   */
  ring?: boolean;
  /**
   * @deprecated
   */
  solid?: boolean;
  fab?: boolean;
  loadingIcon?: string;
  prefix?: boolean;
  prefixIcon?: string;
  prefixIconSize?: string;
  prefixIconClass?: string;
  suffix?: boolean;
  suffixIcon?: string;
  suffixIconSize?: string;
  suffixIconClass?: string;
  loadingClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'default',
  type: 'button',
  loadingText: 'Loading...',
  loadingIcon: 'gg:spinner',
  prefixIcon: '',
  prefixIconClass: '',
  prefixIconSize: 'sm',
  suffixIcon: '',
  suffixIconSize: 'sm',
  suffixIconClass: '',
  loadingClass: 'animate-spin',
});

const computedComponent = computed(() => {
  if (props.to) {
    return resolveComponent('router-link');
  } else if (props.href) {
    return 'a';
  }

  return 'button';
});

const ringClass = computed(() => {
  const classes: Record<string, string> = {
    default: '',
    primary: 'focus:ring-primary-500',
    secondary: 'focus:ring-secondary-500',
    info: 'focus:ring-info-500',
    warning: 'focus:ring-warning-500',
    success: 'focus:ring-success-500',
    error: 'focus:ring-error-500',
    dark: 'focus:ring-gray-500',
  };
  const klass = classes[props.color];
  return `focus:ring focus:ring-offset-2 focus:outline-none ${klass}`;
});

const classes = computed(() => {
  return [
    'btn',
    `btn-${props.color}`,
    `btn--${props.size}`,
    {
      [ringClass.value]: !props.noRing,
      'btn--rounded': props.rounded,
      'btn--outlined': props.outlined,
      'btn--fab': props.fab,
      'btn--tile': props.tile,
      'btn--block': props.block,
      'btn--loading': props.loading,
      'btn--text': props.text,
      shadow: props.shadow,
    },
  ];
});

const attributes = computed(() => {
  let attrs: Record<string, any> = {
    type: props.type,
    'aria-label': 'Button',
  };

  if (props.disabled) {
    attrs['aria-disabled'] = true;
    attrs['disabled'] = true;
  }

  if (props.to) {
    attrs['to'] = props.to;
  }

  if (props.href) {
    attrs['href'] = props.href;
  }

  if (props.newTab) {
    attrs['rel'] = 'noopener';
    attrs['target'] = '_blank';
  }

  return attrs;
});
</script>

<template>
  <component
    :is="computedComponent"
    :class="classes"
    v-bind="{...attributes, ...$attrs}"
  >
    <slot name="prefix">
      <VIcon
        v-if="prefixIcon || loading"
        :name="loading ? loadingIcon : prefixIcon"
        :class="[
          'btn-icon',
          prefixIconClass,
          loading ? loadingClass : undefined,
        ]"
        :size="prefixIconSize"
      />
    </slot>
    <slot />
    <slot name="suffix">
      <VIcon
        v-if="suffixIcon"
        :name="suffixIcon"
        :size="suffixIconSize"
        :class="['btn-icon', suffixIconClass]"
      />
    </slot>
  </component>
</template>
