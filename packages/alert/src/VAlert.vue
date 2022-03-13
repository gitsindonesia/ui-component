<script setup lang="ts">
import {computed, toRefs} from 'vue';
import {XIcon, ExclamationIcon, CheckCircleIcon} from '@heroicons/vue/solid';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  dismissable: {
    type: Boolean,
    default: false,
  },
});

const {color} = toRefs(props);

const emit = defineEmits(['dismissed', 'update:modelValue']);

const classes = computed(() => {
  switch (color.value) {
    case 'primary':
      return 'border-primary-500 bg-primary-100 text-primary-500';
    case 'secondary':
      return 'border-secondary-500 bg-secondary-100 text-secondary-500';
    case 'error':
      return 'border-error-500 bg-error-100 text-error-500';
    case 'info':
      return 'border-info-500 bg-info-100 text-info-500';
    case 'warning':
      return 'border-warning-500 bg-warning-100 text-warning-500';
    case 'success':
      return 'border-success-500 bg-success-100 text-success-500';
    default:
      return '';
  }
});

const iconClasses = computed(() => {
  switch (color.value) {
    case 'primary':
      return 'text-primary-500';
    case 'secondary':
      return 'text-secondary-500';
    case 'error':
      return 'text-error-500';
    case 'info':
      return 'text-info-500';
    case 'warning':
      return 'text-warning-500';
    case 'success':
      return 'text-success-500';
    default:
      return '';
  }
});

const dismiss = () => {
  emit('dismissed');
  emit('update:modelValue', false);
};
</script>

<template>
  <transition
    enter-active-class="duration-150 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="props.modelValue"
      class="px-4 py-3 border rounded flex w-full items-center"
      :class="classes"
    >
      <div>
        <slot name="icon" :icon="props.icon">
          <ExclamationIcon
            v-if="props.icon === 'warning'"
            class="w-8 h-8 mr-3"
            :class="iconClasses"
          />
          <CheckCircleIcon
            v-if="props.icon === 'success'"
            class="w-8 h-8 mr-3"
            :class="iconClasses"
          />
        </slot>
      </div>
      <div>
        <slot />
      </div>
      <div class="flex-grow"></div>
      <div v-if="props.dismissable" class="pl-4 flex items-center">
        <slot name="x-button" :dismiss="dismiss">
          <button class="focus:outline-none" @click="dismiss">
            <slot name="x-icon">
              <XIcon class="w-5 h-5" />
            </slot>
          </button>
        </slot>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
