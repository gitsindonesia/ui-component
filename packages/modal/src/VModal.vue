<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue';
import VBtn from '@gits-id/button';

type Props = {
  modelValue?: boolean;
  title?: string;
  confirm?: boolean;
  confirmColor?: string;
  confirmProps?: {};
  confirmText?: string;
  closeText?: string;
  closeProps?: {};
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  modalClass?: string;
  loading?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  centered?: boolean;
  fullscreen?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  confirm: false,
  confirmColor: 'primary',
  confirmProps: () => ({}),
  confirmText: 'Confirm',
  closeText: 'Close',
  closeProps: () => ({}),
  headerClass: '',
  bodyClass: '',
  footerClass: '',
  modalClass: '',
  boolean: false,
  hideHeader: false,
  hideFooter: false,
  centered: false,
  fullscreen: false,
});

const emit = defineEmits(['update:modelValue', 'confirm', 'close', 'open']);

const {
  modelValue,
  title,
  confirm,
  confirmColor,
  confirmProps,
  confirmText,
  closeText,
  closeProps,
  loading,
} = toRefs(props);

const isOpen = ref(modelValue.value);

watch(modelValue, (val) => (isOpen.value = val));

watch(isOpen, (val) => emit('update:modelValue', val));

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

const onConfirm = () => {
  emit('confirm', {
    open: openModal,
    close: closeModal,
  });
};
</script>

<template>
  <slot name="activator" :open="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-30 overflow-y-auto">
        <div class="min-h-screen text-center" :class="{'px-4': !fullscreen}">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed bg-black bg-opacity-50 inset-0" />
          </TransitionChild>

          <span
            v-if="!fullscreen"
            class="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                w-full
                overflow-hidden
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                p-6
              "
              :class="[
                {
                  'max-w-md inline-block rounded-lg my-8': !fullscreen,
                  'h-screen flex flex-col': fullscreen,
                },
                centered ? 'text-center' : 'text-left',
                modalClass,
              ]"
            >
              <DialogTitle
                v-if="!hideHeader"
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
                :class="headerClass"
              >
                <slot name="header">
                  {{ title }}
                </slot>
              </DialogTitle>
              <div
                class="mt-4 text-gray-600 flex-1"
                :class="[centered ? 'text-center' : '', bodyClass]"
              >
                <slot />
              </div>

              <div
                v-if="!hideFooter"
                class="mt-6 flex gap-2"
                :class="[
                  centered ? 'justify-center' : 'justify-end',
                  footerClass,
                ]"
              >
                <slot
                  name="footer"
                  :loading="loading"
                  :confirm-props="confirmProps"
                  :on-confirm="onConfirm"
                >
                  <v-btn
                    v-if="confirm"
                    :color="confirmColor"
                    :loading="loading"
                    v-bind="confirmProps"
                    @click="onConfirm"
                  >
                    {{ confirmText }}
                  </v-btn>
                  <v-btn v-bind="closeProps" @click="closeModal">
                    {{ closeText }}
                  </v-btn>
                </slot>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
