<script setup lang="ts">
import {ListItemDivider} from '@gits-id/list';
import Icon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';

withDefaults(
  defineProps<{
    text?: string;
    small?: boolean;
    divider?: boolean;
    prependIcon?: string;
    prependIconSize?: string;
    prependIconClass?: string;
    appendIcon?: string;
    appendIconSize?: string;
    appendIconClass?: string;
  }>(),
  {
    prependIconSize: 'sm',
    appendIconSize: 'sm',
  },
);
</script>

<template>
  <ListItemDivider v-if="divider" />
  <button
    v-else
    type="button"
    :aria-label="text"
    class="v-menus-item"
    :class="{'v-menus-item--sm': small}"
  >
    <Icon
      v-if="prependIcon"
      :name="prependIcon"
      :size="prependIconSize"
      class="v-menus-item-icon"
      :class="prependIconClass"
    />
    <div class="v-menus-item-text">
      <slot>
        {{ text }}
      </slot>
    </div>
    <Icon
      v-if="appendIcon"
      :name="appendIcon"
      :size="appendIconSize"
      class="v-menus-item-icon"
      :class="appendIconClass"
    />
  </button>
</template>
