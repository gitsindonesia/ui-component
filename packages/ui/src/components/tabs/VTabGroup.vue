<script setup lang="ts">
import {TabGroup} from '@headlessui/vue';
import type {TabVariants} from './variants';
import type {DefaultColors} from '@morpheme/theme/defaultTheme';
import {useVModel} from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    modelValue?: number;
    variant?: TabVariants;
    vertical?: boolean;
    centerActive?: boolean;
    color?: DefaultColors;
    grow?: boolean;
  }>(),
  {
    variant: 'underline',
    color: 'primary',
  },
);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: number): void;
  }>();

const modelValue = useVModel(props, 'modelValue', emit);

function onTabChange(value: number) {
  modelValue.value = value;
}

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <TabGroup
    class="v-tabs v-tabs--group"
    :class="[
      `v-tabs-${color}`,
      `v-tabs--${variant}`,
      {
        'v-tabs--vertical': vertical,
        'v-tabs--center-active': centerActive,
        'v-tabs--grow': grow,
      },
    ]"
    as="div"
    :selectedIndex="modelValue"
    :vertical="vertical"
    @change="onTabChange"
  >
    <slot />
  </TabGroup>
</template>
