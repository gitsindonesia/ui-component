<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue';
import {ref, watch} from 'vue';

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
    (e: 'close'): void;
    (e: 'open'): void;
  }>();

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => (isOpen.value = val),
);
watch(isOpen, (val) => emit('update:modelValue', val));

function onModalClose() {
  if (props.persistent || props.loading) {
    return null;
  } else {
    closeModal();
  }
}

function closeModal() {
  isOpen.value = false;
  emit('update:modelValue', false);
  emit('close');
}

function openModal() {
  isOpen.value = true;
  emit('update:modelValue', true);
  emit('open');
}
</script>

<template>
  <slot name="activator" :open="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      :open="isOpen"
      static
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
      @close="onModalClose"
      v-bind="$attrs"
    >
      <div class="v-modal-dialog">
        <div class="v-modal-content">
          <TransitionChild
            as="template"
            enter="v-modal-overlay-transition-enter-active"
            enter-from="v-modal-overlay-transition-enter-from"
            enter-to="v-modal-overlay-transition-enter-to"
            leave="v-modal-overlay-transition-leave-active"
            leave-from="v-modal-overlay-transition-leave-from"
            leave-to="v-modal-overlay-transition-leave-to"
          >
            <slot name="overlay">
              <div
                class="v-modal-overlay"
                :class="{
                  'v-modal-overlay--blur': overlayBlur,
                }"
              />
            </slot>
          </TransitionChild>

          <span v-if="!fullscreen" class="v-modal-spacer" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="v-modal-transition-enter-active"
            enter-from="v-modal-transition-enter-from"
            enter-to="v-modal-transition-enter-to"
            leave="v-modal-transition-leave-active"
            leave-from="v-modal-transition-leave-from"
            leave-to="v-modal-transition-leave-to"
          >
            <DialogPanel class="v-modal-panel">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
