<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue';

interface Props {
  modelValue?: boolean;
  centered?: boolean;
  fullscreen?: boolean;
  loading?: boolean;
  persistent?: boolean;
  overlayBlur?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const isOpen = useVModel(props, 'modelValue', emit);
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      :open="isOpen"
      @close="isOpen = false"
      as="div"
      class="v-modal"
      :class="[
        {
          'v-modal--centered': centered,
          'v-modal--fullscreen': fullscreen,
          'v-modal--loading': loading,
          'v-modal--persistent': persistent,
        },
      ]"
    >
      <div class="v-modal-dialog">
        <div class="v-modal-content">
          <transition name="fade">
            <div
              v-if="!fullscreen && isOpen"
              class="v-modal-overlay"
              :class="{
                'v-modal-overlay--blur': overlayBlur,
              }"
            />
          </transition>

          <span v-if="!fullscreen" class="v-modal-spacer" aria-hidden="true">
            &#8203;
          </span>

          <DialogPanel class="v-modal-panel">
            <slot />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
