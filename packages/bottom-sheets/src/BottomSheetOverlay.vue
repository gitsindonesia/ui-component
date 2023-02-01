<script setup lang="ts">
import {inject} from 'vue';
import type {BottomSheetApi} from './types';

withDefaults(
  defineProps<{
    transition?: string;
  }>(),
  {
    transition: 'v-bottom-sheet-overlay-transition',
  },
);

const api = inject<BottomSheetApi>('bottom-sheet');
</script>

<template>
  <Teleport to="body">
    <transition :name="transition">
      <div
        v-if="api.isOpen"
        class="v-bottom-sheet-overlay"
        @click="api.close"
      ></div>
    </transition>
  </Teleport>
</template>
