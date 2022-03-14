<script setup lang="ts">
import {computed, toRefs, ref, watch} from 'vue';
import {XIcon, ExclamationIcon, CheckCircleIcon} from '@heroicons/vue/solid';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
  },
  dismissable: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
  border: {
    type: String,
    default: '',
  },
});

const {color, modelValue} = toRefs(props);

const emit = defineEmits(['dismissed', 'update:modelValue']);

const isOpen = ref(modelValue.value);

watch(modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

const classes = computed(() => {
  let colors: Record<string, string> = {};
  if (props.outlined) {
    colors = {
      primary: 'border-primary-500 bg-transparent text-primary-500',
      secondary: 'border-secondary-500 bg-transparent text-secondary-500',
      error: 'border-error-500 bg-transparent text-error-500',
      info: 'border-info-500 bg-transparent text-info-500',
      warning: 'border-warning-500 bg-transparent text-warning-500',
      success: 'border-success-500 bg-transparent text-success-500',
      dark: 'border-gray-900 bg-transparent text-gray-900',
      default: 'border-gray-500',
    };
  } else if (props.solid) {
    if (props.border) {
      colors = {
        primary: 'border-primary-400 bg-primary-500 text-white',
        secondary: 'border-secondary-400 bg-secondary-500 text-white',
        error: 'border-error-400 bg-error-500 text-white',
        info: 'border-info-400 bg-info-500 text-white',
        warning: 'border-warning-400 bg-warning-500 text-white',
        success: 'border-success-400 bg-success-500 text-white',
        dark: 'border-gray-500 bg-gray-900 text-white',
        default: 'border-gray-500 bg-white',
      };
    } else {
      colors = {
        primary: 'border-primary-500 bg-primary-500 text-white',
        secondary: 'border-secondary-500 bg-secondary-500 text-white',
        error: 'border-error-500 bg-error-500 text-white',
        info: 'border-info-500 bg-info-500 text-white',
        warning: 'border-warning-500 bg-warning-500 text-white',
        success: 'border-success-500 bg-success-500 text-white',
        dark: 'border-gray-900 bg-gray-900 text-white',
        default: 'border-gray-500 bg-white',
      };
    }
  } else {
    colors = {
      primary: 'border-primary-500 bg-primary-100 text-primary-500',
      secondary: 'border-secondary-500 bg-secondary-100 text-secondary-500',
      error: 'border-error-500 bg-error-100 text-error-500',
      info: 'border-info-500 bg-info-100 text-info-500',
      warning: 'border-warning-500 bg-warning-100 text-warning-500',
      success: 'border-success-500 bg-success-100 text-success-500',
      dark: 'border-gray-900 bg-gray-900 text-white',
      default: 'border-gray-500',
    };
  }

  const borderClasses = {
    top: 'border-t-8',
    left: 'border-l-8',
    right: 'border-r-8',
    bottom: 'border-b-8',
  };

  return [colors[color.value], props.border ? borderClasses[props.border] : ''];
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
  isOpen.value = false;
  emit('dismissed');
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
      v-if="isOpen"
      class="px-4 py-3 border rounded-md flex w-full items-center"
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
