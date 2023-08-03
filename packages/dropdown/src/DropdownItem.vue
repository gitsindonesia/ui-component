<script setup lang="ts">
import {MenuItem} from '@headlessui/vue';
import {computed, resolveComponent} from 'vue';
import VIcon from '@morpheme/icon';

const props = withDefaults(
  defineProps<{
    text?: string;
    to?: string;
    href?: string;
    icon?: string | any;
    iconSize?: string;
    iconClass?: string;
    newTab?: boolean;
    divider?: boolean;
    nuxt?: boolean;
    disabled?: boolean;
    suffixIcon?: string;
    suffixIconSize?: string;
    suffixIconClass?: string;
  }>(),
  {
    iconClass: '',
    iconSize: 'sm',
  },
);

const computedComponent = computed(() => {
  if (props.nuxt) return resolveComponent('NuxtLink');

  if (props.href) return 'a';

  return props.to ? resolveComponent('RouterLink') : 'button';
});

const attributes = computed(() => {
  let attrs: Record<string, any> = {};

  if (props.disabled) {
    attrs['aria-disabled'] = true;
    attrs['disabled'] = true;
  }

  if (props.to) {
    attrs['to'] = props.to;
  }

  if (props.href) {
    attrs['href'] = props.disabled ? 'javascript:void(0)' : props.href;
  }

  if (props.newTab && !props.disabled) {
    attrs['rel'] = 'noopener';
    attrs['target'] = '_blank';
  }

  return attrs;
});

defineSlots<{
  default?: (props: {}) => any;
  icon?: (props: {}) => any;
  suffixIcon?: (props: {}) => any;
}>();
</script>

<template>
  <MenuItem v-slot="{active}" :disabled="disabled">
    <div v-if="divider" class="dropdown-divider"></div>
    <component
      v-else
      :is="computedComponent"
      :class="[
        'group dropdown-item',
        {
          'dropdown-item--active': active,
          'dropdown-item--disabled': disabled,
        },
      ]"
      v-bind="attributes"
    >
      <slot name="icon">
        <component
          v-if="icon"
          :is="typeof icon === 'string' ? VIcon : icon"
          :name="icon"
          :size="iconSize"
          :class="['dropdown-item-icon', iconClass]"
        />
      </slot>
      <slot>
        <div class="dropdown-item-content">
          {{ text }}
        </div>
      </slot>
      <slot name="suffixIcon">
        <component
          v-if="suffixIcon"
          :is="typeof suffixIcon === 'string' ? VIcon : suffixIcon"
          :name="suffixIcon"
          :size="suffixIconSize"
          :class="[
            'dropdown-item-icon dropdown-item-icon--suffix',
            suffixIconClass,
          ]"
        />
      </slot>
    </component>
  </MenuItem>
</template>
