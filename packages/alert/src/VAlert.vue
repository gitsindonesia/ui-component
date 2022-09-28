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
    type: String,
    default: '',
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

<style>
.alert {
  @apply flex items-center w-full gap-4;

  background-color: var(--alert-bg-color);
  color: var(--alert-text-color);
  border-color: var(--alert-border-color);
  border-radius: var(--alert-border-radius);
  border-width: var(--alert-border-width);
  padding: var(--alert-padding-y) var(--alert-padding-x);
}

.alert-content {
  @apply flex-1;
}

.alert-dismissable {
  @apply pl-4 flex items-center;
}

.alert-icon {
  @apply w-6 h-6;
}

.alert-x-icon {
  @apply w-5 h-5;
}

/* default */
:root {
  --alert-bg-color: theme('colors.white');
  --alert-text-color: theme('colors.gray.800');
  --alert-border-radius: theme('borderRadius.md');
  --alert-border-color: theme('colors.gray.500');
  --alert-border-width: theme('borderWidth.DEFAULT');
  --alert-padding-x: theme('padding.4');
  --alert-padding-y: theme('padding.3');
}

/* colors */
.alert-primary {
  --alert-bg-color: theme('colors.primary.100');
  --alert-text-color: theme('colors.primary.500');
  --alert-border-color: theme('colors.primary.500');
}
.alert-secondary {
  --alert-bg-color: theme('colors.secondary.100');
  --alert-text-color: theme('colors.secondary.500');
  --alert-border-color: theme('colors.secondary.500');
}
.alert-info {
  --alert-bg-color: theme('colors.info.100');
  --alert-text-color: theme('colors.info.500');
  --alert-border-color: theme('colors.info.500');
}
.alert-warning {
  --alert-bg-color: theme('colors.warning.100');
  --alert-text-color: theme('colors.warning.500');
  --alert-border-color: theme('colors.warning.500');
}
.alert-success {
  --alert-bg-color: theme('colors.success.100');
  --alert-text-color: theme('colors.success.500');
  --alert-border-color: theme('colors.success.500');
}
.alert-error {
  --alert-bg-color: theme('colors.error.100');
  --alert-text-color: theme('colors.error.500');
  --alert-border-color: theme('colors.error.500');
}
.alert-dark {
  --alert-bg-color: theme('colors.gray.800');
  --alert-text-color: theme('colors.white');
  --alert-border-color: theme('colors.gray.800');
}

/* solid */
.alert--solid {
  --alert-text-color: theme('colors.white');
  --alert-bg-color: theme('colors.gray.500');
}
.alert--solid.alert-primary {
  --alert-bg-color: theme('colors.primary.500');
  --alert-border-color: theme('colors.primary.500');
}
.alert--solid.alert-secondary {
  --alert-bg-color: theme('colors.secondary.500');
  --alert-border-color: theme('colors.secondary.500');
}
.alert--solid.alert-info {
  --alert-bg-color: theme('colors.info.500');
  --alert-border-color: theme('colors.info.500');
}
.alert--solid.alert-warning {
  --alert-bg-color: theme('colors.warning.500');
  --alert-border-color: theme('colors.warning.500');
}
.alert--solid.alert-success {
  --alert-bg-color: theme('colors.success.500');
  --alert-border-color: theme('colors.success.500');
}
.alert--solid.alert-error {
  --alert-bg-color: theme('colors.error.500');
  --alert-border-color: theme('colors.error.500');
}
.alert--solid.alert-dark {
  --alert-bg-color: theme('colors.gray.800');
  --alert-border-color: theme('colors.gray.800');
}

/* outlined */
.alert--outlined {
  --alert-text-color: theme('colors.gray.500');
  --alert-bg-color: theme('colors.transparent');
  --alert-border-width: theme('borderWidth.2');
}
.alert--outlined.alert-primary {
  --alert-text-color: theme('colors.primary.500');
}
.alert--outlined.alert-secondary {
  --alert-text-color: theme('colors.secondary.500');
}
.alert--outlined.alert-info {
  --alert-text-color: theme('colors.info.500');
}
.alert--outlined.alert-warning {
  --alert-text-color: theme('colors.warning.500');
}
.alert--outlined.alert-success {
  --alert-text-color: theme('colors.success.500');
}
.alert--outlined.alert-error {
  --alert-text-color: theme('colors.error.500');
}
.alert--outlined.alert-dark {
  --alert-text-color: theme('colors.gray.800');
}

/* bordered */
.alert--bordered {
  --alert-border-width: theme('borderWidth.2');
}
.alert--bordered.alert-primary {
  --alert-text-color: theme('colors.primary.500');
}
.alert--bordered.alert-secondary {
  --alert-text-color: theme('colors.secondary.500');
}
.alert--bordered.alert-info {
  --alert-text-color: theme('colors.info.500');
}
.alert--bordered.alert-warning {
  --alert-text-color: theme('colors.warning.500');
}
.alert--bordered.alert-success {
  --alert-text-color: theme('colors.success.500');
}
.alert--bordered.alert-error {
  --alert-text-color: theme('colors.error.500');
}
.alert--bordered.alert-dark {
  --alert-text-color: theme('colors.white');
}
</style>
