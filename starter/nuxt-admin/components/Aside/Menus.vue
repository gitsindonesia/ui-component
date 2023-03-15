<script setup lang="ts">
import {VListItem} from '@morpheme/ui';

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
  <VList hover class="flex-1 px-2 mb-4 overflow-y-auto">
    <template v-for="{text, header, ...menu} in menus" :key="text">
      <VListItemHeader v-if="header">{{ header }}</VListItemHeader>
      <VListItem v-else v-bind="menu" @click="hideDrawerOnMobile">
        {{ text }}
      </VListItem>
    </template>
  </VList>
</template>
