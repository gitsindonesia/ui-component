<script setup lang="ts">
import VIcon from '@morpheme/icon';
import DropdownButton from './DropdownButton.vue';

withDefaults(
  defineProps<{
    as?: any;
    btnProps?: Record<string, any>;
    text?: string;
    icon?: string;
    iconSize?: string;
    iconClass?: string;
    prefixIcon?: string;
    prefixIconSize?: string;
    prefixIconClass?: string;
  }>(),
  {
    as: 'button',
    btnProps: () => ({
      variant: 'secondary',
    }),
    text: 'Options',
    icon: 'ri:arrow-down-s-line',
    iconSize: 'sm',
    iconClass: '',
    prefixIcon: '',
    prefixIconSize: 'sm',
  },
);
</script>

<template>
  <DropdownButton
    :as="as"
    class="dropdown-button-activator"
    v-bind="btnProps"
    v-slot="{open}"
  >
    <VIcon
      v-if="prefixIcon"
      :name="prefixIcon"
      :size="prefixIconSize"
      :class="[
        'dropdown-button-icon',
        'dropdown-button-icon--prefix',
        {
          'dropdown-button-icon--open': open,
        },
        prefixIconClass,
      ]"
    />
    <slot :open="open">{{ text }}</slot>
    <VIcon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      :class="[
        'dropdown-button-icon',
        'dropdown-button-icon--suffix',
        {
          'dropdown-button-icon--open': open,
        },
        iconClass,
      ]"
    />
  </DropdownButton>
</template>
