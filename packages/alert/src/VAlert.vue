<script setup lang="ts">
import {computed, toRefs, ref, watch} from 'vue';
import Icon from '@gits-id/icon';

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
    type: [String, Boolean],
    default: false,
  },
  transition: {
    type: String,
    default: 'fade',
  },
  iconClass: {
    type: String,
    default: '',
  },
});

const {modelValue} = toRefs(props);

const emit =
  defineEmits<{
    (event: 'update:modelValue', value: boolean): void;
    (event: 'dismissed'): void;
  }>();

const isOpen = ref(modelValue.value);

watch(modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

const classes = computed(() => {
  return [
    `alert-${props.color}`,
    {
      'alert--outlined': props.outlined,
      'alert--solid': props.solid,
      'alert--bordered': props.border,
    },
  ];
});

const dismiss = () => {
  isOpen.value = false;
  emit('dismissed');
};

const mappedIcons: Record<string, string> = {
  info: 'heroicons:information-circle',
  success: 'heroicons:check-circle',
  warning: 'heroicons:exclamation-triangle',
  error: 'heroicons:x-circle',
};
</script>

<template>
  <transition :name="transition">
    <div v-if="isOpen" class="alert" :class="classes">
      <slot name="icon" :icon="icon">
        <Icon
          v-if="icon"
          :name="mappedIcons[icon] || icon"
          class="alert-icon"
          :class="iconClass"
        />
      </slot>
      <div class="alert-content">
        <slot />
      </div>
      <div v-if="dismissable" class="alert-dismissable">
        <slot name="x-button" :dismiss="dismiss">
          <button
            class="alert-dismissable-button"
            aria-label="Close"
            @click="dismiss"
          >
            <slot name="x-icon">
              <Icon name="heroicons:x-mark" class="alert-x-icon" />
            </slot>
          </button>
        </slot>
      </div>
    </div>
  </transition>
</template>
