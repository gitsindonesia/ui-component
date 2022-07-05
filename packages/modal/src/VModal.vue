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
  DialogTitle,
  DialogPanel,
} from '@headlessui/vue';
import VBtn from '@gits-id/button';
import {XIcon} from '@heroicons/vue/outline';

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
  persistent?: boolean;
  hideXButton?: boolean;
  xButtonProps?: Record<string, any>;
  xIconClass?: string;
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
  loading: false,
  persistent: false,
  hideXButton: false,
  xButtonProps: () => ({}),
  xIconClass: '',
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
const isLoading = ref(loading.value);

watch(modelValue, (val) => (isOpen.value = val));

watch(isOpen, (val) => emit('update:modelValue', val));

watch(isLoading, (val) => (isLoading.value = val));

function onModalClose() {
  if (props.persistent || isLoading.value) {
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
    <Dialog static :open="isOpen" as="div" @close="onModalClose">
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
            <div class="fixed bg-black bg-opacity-50 inset-0" />
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
            <DialogPanel
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
                as="div"
                class="flex justify-between gap-4 items-center"
                :class="headerClass"
              >
                <slot name="header">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    {{ title }}
                  </h3>
                </slot>
                <VBtn
                  v-if="!hideXButton"
                  icon
                  text
                  rounded
                  size="sm"
                  class="p-0"
                  :disabled="isLoading"
                  v-bind="xButtonProps"
                  @click="closeModal"
                >
                  <XIcon class="w-5 h-5" :class="xIconClass" />
                </VBtn>
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
                  :loading="isLoading"
                  :confirm-props="confirmProps"
                  :on-confirm="onConfirm"
                >
                  <v-btn
                    v-if="confirm"
                    :color="confirmColor"
                    :loading="isLoading"
                    v-bind="confirmProps"
                    @click="onConfirm"
                  >
                    {{ confirmText }}
                  </v-btn>
                  <v-btn
                    v-bind="closeProps"
                    :disabled="isLoading"
                    @click="closeModal"
                  >
                    {{ closeText }}
                  </v-btn>
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
