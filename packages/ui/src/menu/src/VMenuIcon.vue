<script setup lang="ts">
import type {Menu} from './types';
import {Icon} from '@iconify/vue';

defineProps<{
  menu: Menu;
  icon: string | any;
}>();
</script>

<template>
  <template v-if="typeof icon === 'string'">
    <slot name="icon" :menu="menu">
      <Icon :icon="icon" />
    </slot>
  </template>
  <component :is="icon" v-else class="w-5 h-5" />
</template>
