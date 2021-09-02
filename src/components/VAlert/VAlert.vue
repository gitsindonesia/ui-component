<script setup lang="ts">
import {ref, computed, toRefs} from 'vue';
import {XIcon, ExclamationIcon, CheckCircleIcon} from '@heroicons/vue/solid';
import VBtn from '../VBtn/VBtn.vue';

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
      return 'border-primary-600 bg-primary-100 text-primary-600';
    case 'secondary':
      return 'border-secondary-600 bg-secondary-100 text-secondary-600';
    case 'error':
      return 'border-error-600 bg-error-100 text-error-600';
    case 'info':
      return 'border-info-600 bg-info-100 text-info-600';
    case 'warning':
      return 'border-warning-600 bg-warning-100 text-warning-600';
    case 'success':
      return 'border-success-600 bg-success-100 text-success-600';
    default:
      return '';
  }
});

const iconClasses = computed(() => {
  switch (color.value) {
    case 'primary':
      return 'text-lime-600';
    case 'secondary':
      return 'text-secondary';
    case 'error':
      return 'text-error';
    case 'info':
      return 'text-info';
    case 'warning':
      return 'text-warning';
    case 'success':
      return 'text-success';
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
        <button class="focus:outline-none" @click="dismiss">
          <XIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
