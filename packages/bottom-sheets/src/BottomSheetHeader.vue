<script setup lang="ts">
import Icon from '@gits-id/icon';
import {inject} from 'vue';
import type {BottomSheetApi} from './types';

const api = inject<BottomSheetApi>('bottom-sheet');
</script>

<template>
  <div class="v-bottom-sheet-header">
    <h3 class="v-bottom-sheet-title">
      <slot />
    </h3>
    <button
      type="button"
      aria-label="Close"
      class="v-bottom-sheet-close-button"
      @click="api.close"
    >
      <Icon class="v-bottom-sheet-close-icon" name="ic:round-close" />
    </button>
  </div>
</template>
