<script setup lang="ts">
import {computed} from 'vue';
import Icon from '../icon/Icon.vue';
import {inject} from 'vue';
import {BottomSheetInjectionKey} from './api';
import type {BottomSheetApi} from './types';

const api = inject<BottomSheetApi>(BottomSheetInjectionKey);

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div v-if="api" class="v-bottom-sheet-header">
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
