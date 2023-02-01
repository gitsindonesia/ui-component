<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  toRefs,
  ref,
  watch,
  PropType,
  onMounted,
  onBeforeUnmount,
  computed,
} from 'vue';
import type {DefaultColors, DefaultShadows} from '@gits-id/theme/defaultTheme';

export type AppBarColors = DefaultColors | 'transparent' | string;

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [Boolean, String] as PropType<DefaultShadows>,
    default: false,
  },
  color: {
    type: String as PropType<AppBarColors>,
    default: 'default',
  },
  transition: {
    type: String,
    default: 'fade',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  elevateOnScroll: {
    type: Boolean,
    default: false,
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

const isOpen = ref(modelValue.value);
const isElevated = ref(false);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  isOpen.value = val;
});

const toggle = () => (isOpen.value = !isOpen.value);

defineExpose(toggle);

// elevate on scroll
if (props.elevateOnScroll) {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      isElevated.value = true;
    } else {
      isElevated.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}

const getShadowClass = (shadow: DefaultShadows) => {
  return typeof shadow === 'string'
    ? `app-bar--shadow-${shadow}`
    : shadow
    ? 'app-bar--shadow'
    : '';
};

const shadowClass = computed(() => {
  if (props.elevateOnScroll && isElevated.value) {
    return getShadowClass(props.elevateOnScroll);
  }

  return getShadowClass(props.shadow);
});
</script>

<template>
  <transition :name="transition">
    <header
      v-if="isOpen"
      class="app-bar"
      :class="[
        `app-bar-${color}`,
        shadowClass,
        size ? `app-bar--${size}` : '',
        {
          'app-bar--fixed': fixed,
          'app-bar--sticky': sticky,
          'app-bar--bordered': bordered,
        },
      ]"
      v-bind="$attrs"
    >
      <slot :toggle="toggle" />
    </header>
  </transition>
</template>

<style lang="scss" src="./VAppBar.scss"></style>
