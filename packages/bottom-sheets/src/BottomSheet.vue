<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import {ref, provide, toRefs, watch} from 'vue';
import {BottomSheetInjectionKey} from './api';
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

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const {modelValue} = toRefs(props);
const isOpen = ref(modelValue.value);
const bottomSheetRef = ref<HTMLDivElement>();

watch(modelValue, (val) => (isOpen.value = val));
watch(isOpen, (val) => emit('update:modelValue', val));

const open = () => (isOpen.value = true);
const close = () => (isOpen.value = false);

const setHeight = (height: string | number) => {
  if (!bottomSheetRef.value) return;

  bottomSheetRef.value!.style.height = height as string;
};

const getHeight = () => {
  if (!bottomSheetRef.value) return 0;

  const height = bottomSheetRef.value.clientHeight;
  return (height / window.innerHeight) * 100;
};

const api: BottomSheetApi = {
  isOpen,
  close,
  open,
  setHeight,
  getHeight,
  el: bottomSheetRef,
};

provide(BottomSheetInjectionKey, api);

defineExpose({
  close,
  open,
  setHeight,
  getHeight,
});

defineSlots<{
  default?: (props: {close: () => void}) => any;
}>();
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
      <div
        ref="bottomSheetRef"
        v-if="isOpen"
        class="v-bottom-sheet"
        v-bind="$attrs"
      >
        <div class="v-bottom-sheet-panel" :style="{maxWidth}">
          <slot :close="close" />
        </div>
      </div>
    </transition>
  </teleport>
</template>
