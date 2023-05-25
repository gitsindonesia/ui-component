<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle,
  DialogPanel,
} from '@headlessui/vue';
import VBtn from '@morpheme/button';
import Icon from '@morpheme/icon';

export type ConfirmEventPayload = {
  open: () => void;
  close: () => void;
};

export interface Props {
  /**
   * The v-model binding for the modal.
   *
   * @default false
   * @type boolean
   * @model
   * @example
   * ```html
   * <v-modal v-model="isOpen" />
   * ```
   */
  modelValue?: boolean;
  /**
   * The title of the modal.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal title="Modal Title" />
   * ```
   */
  title?: string;
  /**
   * Whether to show the confirm button.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal confirm />
   * ```
   */
  confirm?: boolean;
  /**
   * The color of the confirm button.
   *
   * @default 'primary'
   * @type string
   * @example
   * ```html
   * <v-modal confirm-color="danger" />
   * ```
   */
  confirmColor?: string;
  /**
   * The props to pass to the confirm button.
   *
   * @default {}
   * @type object
   * @example
   * ```html
   * <v-modal :confirm-props="{size: 'sm'}" />
   * ```
   */
  confirmProps?: {};
  /**
   * The text to display on the confirm button.
   *
   * @default 'Confirm'
   * @type string
   * @example
   * ```html
   * <v-modal confirm-text="Yes" />
   * ```
   */
  confirmText?: string;
  /**
   * The text to display on the close button.
   *
   * @default 'Close'
   * @type string
   * @example
   * ```html
   * <v-modal close-text="No" />
   * ```
   */
  closeText?: string;
  /**
   * The props to pass to the close button.
   *
   * @default {}
   * @type object
   * @example
   * ```html
   * <v-modal :close-props="{size: 'sm'}" />
   * ```
   */
  closeProps?: {};
  /**
   * The class to apply to the header.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal header-class="bg-gray-100" />
   * ```
   */
  headerClass?: string;
  /**
   * The class to apply to the body.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal title-class="bg-gray-100" />
   * ```
   */
  titleClass?: string;
  /**
   * The class to apply to the footer.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal body-class="bg-gray-100" />
   * ```
   */
  bodyClass?: string;
  /**
   * The class to apply to the modal.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal footer-class="bg-gray-100" />
   * ```
   */
  footerClass?: string;
  /**
   * The class to apply to the modal.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal modal-class="bg-gray-100" />
   * ```
   */
  modalClass?: string;
  /**
   * Whether the modal is in loading state.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal loading />
   * ```
   */
  loading?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal hide-header />
   * ```
   */
  hideHeader?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal hide-footer />
   * ```
   */
  hideFooter?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal centered />
   * ```
   */
  centered?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal fullscreen />
   * ```
   */
  fullscreen?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal persistent />
   * ```
   */
  persistent?: boolean;
  /**
   * Whether the modal is a boolean modal.
   *
   * @default false
   * @type boolean
   * @example
   * ```html
   * <v-modal hide-x-button />
   * ```
   */
  hideXButton?: boolean;
  /**
   * The props to pass to the x button.
   *
   * @default {}
   * @type object
   * @example
   * ```html
   * <v-modal :x-button-props="{size: 'sm'}" />
   * ```
   */
  xButtonProps?: Record<string, any>;
  /**
   * The class to apply to the x icon.
   *
   * @default ''
   * @type string
   * @example
   * ```html
   * <v-modal x-icon-class="text-red-500" />
   * ```
   */
  xIconClass?: string;
  /**
   * The width of the modal.
   *
   * @default 'auto'
   * @type string | number
   * @example
   * ```html
   * <v-modal width="500px" />
   * ```
   */
  width?: string | number;
  /**
   * The max width of the modal.
   *
   * @default 'auto'
   * @type string | number
   * @example
   * ```html
   * <v-modal maxWidth="500px" />
   * ```
   */
  maxWidth?: string | number;
  /**
   * Determine whether to blur the overlay.
   *
   * @default false
   * @example
   * ```html
   * <v-modal overlay-blur />
   * ```
   * */
  overlayBlur?: boolean;
}

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

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'confirm', payload: ConfirmEventPayload): void;
    (e: 'close'): void;
    (e: 'open'): void;
  }>();

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

const panelStyles = computed(() => {
  const styles: Record<string, any> = {};

  if (props.width) {
    styles['width'] = props.width;
  }

  if (props.maxWidth) {
    styles['max-width'] = props.maxWidth;
  }

  return styles;
});
</script>

<template>
  <slot name="activator" :open="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      static
      :open="isOpen"
      as="div"
      @close="onModalClose"
      class="v-modal"
      :class="[
        {
          'v-modal--centered': centered,
          'v-modal--fullscreen': fullscreen,
          'v-modal--loading': loading,
          'v-modal--persistent': persistent,
        },
      ]"
      v-bind="$attrs"
    >
      <div class="v-modal-dialog">
        <div class="v-modal-content">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="v-modal-overlay"
              :class="{
                'v-modal-overlay--blur': overlayBlur,
              }"
            />
          </TransitionChild>

          <span v-if="!fullscreen" class="v-modal-spacer" aria-hidden="true">
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
              class="v-modal-panel"
              :style="panelStyles"
              :class="[modalClass]"
            >
              <DialogTitle
                v-if="!hideHeader"
                as="div"
                class="v-modal-header"
                :class="headerClass"
              >
                <slot name="header">
                  <h3 class="v-modal-title" :class="titleClass">
                    {{ title }}
                  </h3>
                </slot>
                <VBtn
                  v-if="!hideXButton"
                  icon
                  text
                  rounded
                  fab
                  size="sm"
                  class="p-0"
                  :disabled="isLoading"
                  v-bind="xButtonProps"
                  @click="closeModal"
                >
                  <Icon
                    name="ri:close-line"
                    class="w-5 h-5"
                    :class="xIconClass"
                  />
                </VBtn>
              </DialogTitle>
              <div class="v-modal-body" :class="bodyClass">
                <slot />
              </div>

              <div
                v-if="!hideFooter"
                class="v-modal-footer"
                :class="[footerClass]"
              >
                <slot
                  name="footer"
                  :loading="isLoading"
                  :confirm-props="confirmProps"
                  :on-confirm="onConfirm"
                  :close="closeModal"
                >
                  <v-btn
                    v-if="confirm"
                    :color="confirmColor"
                    :disabled="isLoading"
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
