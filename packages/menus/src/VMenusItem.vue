<script setup lang="ts">
import {ListItem, ListItemDivider} from '@gits-id/list';

withDefaults(
  defineProps<{
    text?: string;
    small?: boolean;
    divider?: boolean;
    prependIcon?: string;
    hidePrepend?: boolean;
  }>(),
  {
    hidePrepend: true,
  },
);
</script>

<template>
  <ListItemDivider v-if="divider" />
  <ListItem
    v-else
    class="v-menus-item"
    :class="{'v-menus-item--sm': small}"
    :prepend-icon="prependIcon"
    :hide-prepend="!prependIcon"
  >
    <slot>{{ text }}</slot>
  </ListItem>
</template>
