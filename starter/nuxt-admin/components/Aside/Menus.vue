<script setup lang="ts">
import {VListItem} from '@gits-id/ui';

export type Menu = InstanceType<typeof VListItem>['$props'] & {
  header?: string;
  divider?: boolean;
  text?: string;
};

defineProps<{
  menus: Menu[];
}>();
</script>

<template>
  <VList hover class="flex-1 px-2">
    <template v-for="{text, header, ...menu} in menus" :key="text">
      <VListItemHeader v-if="header">{{ header }}</VListItemHeader>
      <VListItem v-else v-bind="menu">
        {{ text }}
      </VListItem>
    </template>
  </VList>
</template>
