<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {ref, provide, toRefs, watch} from 'vue';
import type {BottomSheetApi} from './types';

export interface Props {
  modelValue?: boolean;
  transition?: string;
  maxWidth?: number | string;
  overlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  transition: 'v-bottom-sheet-transition',
  overlay: true,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);
const isOpen = ref(modelValue.value);

watch(modelValue, (val) => (isOpen.value = val));
watch(isOpen, (val) => emit('update:modelValue', val));

const close = () => (isOpen.value = false);

const api: BottomSheetApi = {
  isOpen,
  close,
};

provide('bottom-sheet', api);
</script>

<template>
  <teleport to="body">
    <transition name="v-bottom-sheet-overlay-transition">
      <div
        v-if="isOpen && overlay"
        class="v-bottom-sheet-overlay"
        @click="close"
      />
    </transition>
    <transition :name="transition">
      <div v-if="isOpen" class="v-bottom-sheet" v-bind="$attrs">
        <div class="v-bottom-sheet-panel" :style="{maxWidth}">
          <slot :close="close" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style src="./BottomSheet.scss" lang="scss"></style>
