<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from 'vue';
import {BottomSheetInjectionKey} from './api';
import type {BottomSheetApi} from './types';

const api = inject<BottomSheetApi>(BottomSheetInjectionKey);
const draggableArea = ref<HTMLElement | null>(null);
const sheetHeight = ref<number>(0);

const setSheetHeight = (value: number) => {
  sheetHeight.value = Math.max(0, Math.min(100, value));
  api?.setHeight(`${sheetHeight.value}vh`);
};

const touchPosition = (event: TouchEvent | MouseEvent) =>
  'touches' in event ? event.touches[0] : (event as MouseEvent);

let dragPosition: number | undefined;

const onDragStart = (event: TouchEvent | MouseEvent) => {
  dragPosition = touchPosition(event).pageY;
  if (draggableArea.value) {
    draggableArea.value.style.cursor = 'grabbing';
  }
  document.body.style.cursor = 'grabbing';
  api?.el?.value?.classList.add('v-bottom-sheet--dragging');
};

const onDragMove = (event: TouchEvent | MouseEvent) => {
  if (dragPosition === undefined) return;

  const y = touchPosition(event).pageY;
  const deltaY = dragPosition - y;
  const deltaHeight = (deltaY / window.innerHeight) * 100;

  setSheetHeight(sheetHeight.value + deltaHeight);
  dragPosition = y;
};

const onDragEnd = () => {
  dragPosition = undefined;
  if (draggableArea.value) {
    draggableArea.value.style.cursor = '';
  }
  document.body.style.cursor = '';

  if (sheetHeight.value < 25) {
    api?.close();
  } else if (sheetHeight.value > 75) {
    setSheetHeight(100);
  } else {
    setSheetHeight(sheetHeight.value);
  }

  api?.el?.value?.classList.remove('v-bottom-sheet--dragging');
};

onMounted(() => {
  sheetHeight.value = api?.getHeight() as number;

  draggableArea.value?.addEventListener('mousedown', onDragStart);
  draggableArea.value?.addEventListener('touchstart', onDragStart);

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove);

  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('touchmove', onDragMove);

  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchend', onDragEnd);
});

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div ref="draggableArea" class="v-bottom-sheet-handle">
    <slot />
  </div>
</template>
