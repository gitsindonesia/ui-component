<script lang="ts">
export type ToastTypes = 'success' | 'error' | 'warning' | 'question';

export type ToastPlacement =
  | 'center'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {computed, onUnmounted, ref, toRefs, watch} from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue';
import {
  XIcon,
  CheckIcon,
  ExclamationIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/outline';
import VBtn from '@gits-id/button';

// type Props = {
//   modelValue?: boolean;
//   title?: string;
//   confirm?: boolean;
//   confirmColor?: string;
//   confirmProps?: {};
//   confirmText?: string;
//   closeText?: string;
//   closeProps?: {};
//   headerClass?: string;
//   bodyClass?: string;
//   actionsClass?: string;
//   placement?: ToastPlacement;
//   actions?: boolean;
//   timeout?: number;
//   type?: ToastTypes;
//   hideXIcon?: boolean;
//   overlay?: boolean;
//   loading?: boolean;
//   persistent?: boolean;
//   color?: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   modelValue: false,
//   title: '',
//   confirm: false,
//   confirmColor: 'primary',
//   confirmProps: () => ({}),
//   confirmText: 'Confirm',
//   closeText: 'Close',
//   closeProps: () => ({}),
//   headerClass: '',
//   bodyClass: '',
//   actionsClass: '',
//   placement: 'bottom',
//   actions: false,
//   timeout: 0,
//   hideXIcon: false,
//   overlay: false,
//   color: 'white',
// });

const props = defineProps({
  modelValue: {type: Boolean, default: false},
  title: {type: String, default: ''},
  confirm: {type: Boolean, default: false},
  confirmColor: {type: String, default: 'primary'},
  confirmProps: {
    type: Object,
    default: () => ({}),
  },
  confirmText: {
    type: String,
    default: 'Confirm',
  },
  closeText: {
    type: String,
    default: 'Close',
  },
  closeProps: {
    type: Object,
    default: () => ({}),
  },
  headerClass: {type: String, default: ''},
  bodyClass: {type: String, default: ''},
  actionsClass: {type: String, default: ''},
  placement: {type: String, default: 'bottom'},
  actions: {type: Boolean, default: false},
  timeout: {type: Number, default: 0},
  hideXIcon: {type: Boolean, default: false},
  overlay: {type: Boolean, default: false},
  color: {type: String, default: 'white'},
  type: {type: String, default: ''},
  loading: {type: Boolean, default: false},
  persistent: {type: Boolean, default: false},
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
  placement,
  actions,
  timeout,
  type,
  hideXIcon,
  overlay,
  color,
  loading,
  persistent,
} = toRefs(props);

const isOpen = ref(modelValue.value);
const timer = ref<any>(null);
const internalLoading = ref<boolean>(loading.value);

function closeModal() {
  if (loading.value && persistent.value) return;

  isOpen.value = false;
  emit('update:modelValue', false);
  emit('close');
}

function openModal() {
  isOpen.value = true;
  emit('update:modelValue', true);
  emit('open');
}

const startLoading = () => {
  internalLoading.value = true;
};

const finishLoading = () => {
  internalLoading.value = false;
};

const onConfirm = () => {
  const payload = {
    open: openModal,
    close: closeModal,
    startLoading,
    finishLoading,
  };

  emit('confirm', payload);
};

const placementClass = computed(() => {
  switch (placement.value) {
    case 'top':
      return 'top-4 left-1/2 transform -translate-x-1/2';
    case 'top-start':
      return 'top-4 left-4';
    case 'top-end':
      return 'top-4 right-4';
    case 'bottom':
      return 'bottom-4 left-1/2 transform -translate-x-1/2';
    case 'bottom-start':
      return 'bottom-4 left-4';
    case 'bottom-end':
      return 'bottom-4 right-4';
    case 'center':
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    default:
      return placement;
  }
});

const transitionProps = computed(() => {
  switch (placement.value) {
    case 'top':
    case 'top-start':
    case 'top-end':
      return {
        enter: 'duration-300 ease-out',
        enterFrom: 'opacity-0 -translate-y-full',
        enterTo: 'opacity-100',
        leave: 'duration-200 ease-in',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0 -translate-y-full',
      };
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return {
        enter: 'duration-300 ease-out',
        enterFrom: 'opacity-0 translate-y-full',
        enterTo: 'opacity-100',
        leave: 'duration-200 ease-in',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0 translate-y-full',
      };
    default:
      return {
        enter: 'duration-300 ease-out',
        enterFrom: 'opacity-0 scale-95',
        enterTo: 'opacity-100 scale-100',
        leave: 'duration-200 ease-in',
        leaveFrom: 'opacity-100 scale-100',
        leaveTo: 'opacity-0 scale-95',
      };
  }
});

function setTimer() {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    closeModal();
  }, timeout.value);
}

onUnmounted(() => {
  clearTimeout(timer.value);
});

watch(modelValue, (val) => (isOpen.value = val));

watch(
  isOpen,
  (val) => {
    emit('update:modelValue', val);

    if (timeout.value > 0) {
      setTimer();
    }
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  {immediate: true},
);

watch(
  loading,
  (val) => {
    internalLoading.value = val;
  },
  {immediate: true},
);

const colorClass = computed(() => {
  switch (color.value) {
    case 'primary':
      return 'bg-primary';
    case 'secondary':
      return 'bg-secondary';
    case 'warning':
      return 'bg-warning';
    case 'info':
      return 'bg-info';
    case 'error':
      return 'bg-error';
    case 'black':
      return 'bg-black';
    default:
      return 'bg-white';
  }
});

const textColorClass = computed(() => {
  switch (color.value) {
    case 'primary':
    case 'secondary':
    case 'warning':
    case 'info':
    case 'error':
    case 'black':
      return 'text-white';
    default:
      return '';
  }
});

const iconColorClass = computed(() => {
  switch (color.value) {
    case 'primary':
    case 'secondary':
    case 'info':
    case 'warning':
    case 'error':
      return 'text-white';
    default:
      return '';
  }
});
</script>

<template>
  <slot name="activator" :open="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-30 overflow-y-auto">
        <div class="relative min-h-screen p-4">
          <TransitionChild
            v-if="overlay"
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

          <!-- <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span> -->

          <TransitionChild as="template" v-bind="transitionProps">
            <div
              class="
                inline-block
                w-full
                max-w-sm
                p-4
                overflow-hidden
                text-left
                transition-all
                transform
                shadow-xl
                rounded-lg
                border
                absolute
              "
              :class="[placementClass, colorClass]"
            >
              <div
                class="flex gap-4"
                :class="title ? 'items-start' : 'items-center'"
              >
                <slot name="media">
                  <CheckIcon
                    v-if="type === 'success'"
                    class="w-6 h-6"
                    :class="iconColorClass || 'text-success'"
                  />
                  <XIcon
                    v-if="type === 'error'"
                    class="w-6 h-6"
                    :class="iconColorClass || 'text-error'"
                  />
                  <ExclamationIcon
                    v-if="type === 'warning'"
                    class="w-6 h-6"
                    :class="iconColorClass || 'text-warning'"
                  />
                  <QuestionMarkCircleIcon
                    v-if="type === 'question'"
                    class="w-6 h-6"
                    :class="iconColorClass || 'text-info'"
                  />
                </slot>
                <div class="flex-grow">
                  <DialogTitle
                    v-if="title"
                    as="h3"
                    class="font-semibold leading-6 mb-1"
                    :class="[headerClass, textColorClass]"
                  >
                    <slot name="header">
                      {{ title }}
                    </slot>
                  </DialogTitle>
                  <div class="text-sm" :class="[bodyClass, textColorClass]">
                    <slot />
                  </div>

                  <div
                    v-if="actions"
                    class="flex justify-start gap-2 pt-4"
                    :class="actionsClass"
                  >
                    <slot name="actions">
                      <v-btn
                        v-if="confirm"
                        :color="confirmColor"
                        :loading="internalLoading"
                        v-bind="confirmProps"
                        @click="onConfirm"
                      >
                        {{ confirmText }}
                      </v-btn>
                      <v-btn
                        v-bind="closeProps"
                        :disabled="loading"
                        @click="closeModal"
                      >
                        {{ closeText }}
                      </v-btn>
                    </slot>
                  </div>
                </div>
                <div v-if="!hideXIcon">
                  <slot name="rightActions">
                    <v-btn
                      icon
                      rounded
                      text
                      no-ring
                      size="xs"
                      :class="[title ? '-m-2' : '']"
                      @click="closeModal"
                    >
                      <XIcon class="w-5 h-5" :class="textColorClass" />
                    </v-btn>
                  </slot>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
