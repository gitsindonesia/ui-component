<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from 'vue';
import type {BottomSheetApi} from './types';

const api = inject<BottomSheetApi>('bottom-sheet');
const draggableArea = ref()

let sheetHeight: number | string

const setSheetHeight = (value: number | string) => {
  sheetHeight = Math.max(0, Math.min(100, +value));
  api?.setHeight(`${sheetHeight}vh`)
};

const touchPosition = (event: any) => (event.touches ? event.touches[0] : event);

let dragPosition: number | undefined;

const onDragStart = (event: Event) => {
  dragPosition = touchPosition(event).pageY;
  draggableArea.value.style.cursor = document.body.style.cursor = 'grabbing';
  api?.el?.value?.classList?.add('v-bottom-sheet--dragging')
};

const onDragMove = (event: Event) => {
  if (dragPosition === undefined) return;

  const y = touchPosition(event).pageY;
  const deltaY = dragPosition - y;
  const deltaHeight = (deltaY / window.innerHeight) * 100;

  setSheetHeight(+sheetHeight + deltaHeight);
  dragPosition = y;
};

const onDragEnd = () => {
  dragPosition = undefined;
  draggableArea.value.style.cursor = document.body.style.cursor = '';

  if (sheetHeight < 25) {
    api?.close()
  } else if (sheetHeight > 75) {
    setSheetHeight(100);
  } else {
    setSheetHeight(sheetHeight)
  }

  api?.el?.value?.classList?.remove('v-bottom-sheet--dragging')
};

onMounted(() => {
  sheetHeight = api?.getHeight() as number

  draggableArea.value.addEventListener('mousedown', onDragStart);
  draggableArea.value.addEventListener('touchstart', onDragStart);

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove);

  window.addEventListener('mouseup', onDragEnd);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('touchmove', onDragMove);

  window.removeEventListener('mouseup', onDragEnd);
});
</script>

<template>
  <div
    ref="draggableArea"
    class="v-bottom-sheet-handle"
  >
    <slot />
  </div>
</template>
