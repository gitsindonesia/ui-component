<script setup lang="ts">
import {computed, toRefs} from 'vue';
import VCard from '@gits-id/card';
import VBadge from '@gits-id/badge';
import VueFeather from 'vue-feather';
import {Icon} from '@iconify/vue';

type Props = {
  title?: string;
  icon?: string;
  value?: string | number;
  color?: string;
  from?: string;
  progressColor?: string;
  progress?: string;
  up?: boolean;
  down?: boolean;
  iconClass?: string;
};

const props = withDefaults(defineProps<Props>(), {
  title: '',
  icon: '',
  value: '',
  from: '',
  color: 'primary',
  progressColor: '',
  progress: '',
  up: false,
  down: false,
  iconClass: 'w-8 h-8',
});

const {title, icon, value, color, from, progressColor, progress, up, down} =
  toRefs(props);

const colorClass = computed(() => {
  switch (color.value) {
    case 'primary':
      return 'bg-primary-600';
    case 'secondary':
      return 'bg-secondary-600';
    case 'info':
      return 'bg-info-600';
    case 'warning':
      return 'bg-warning-600';
    case 'error':
      return 'bg-error-600';
    case 'success':
      return 'bg-success-600';
    default:
      return 'bg-gray-400';
  }
});

const badgeColor = computed(() => {
  if (up.value) return 'success';
  else if (down.value) return 'error';
  return progressColor.value;
});
</script>

<template>
  <v-card
    :title="title"
    wrapper-class="rounded-lg"
    body-class="!flex-row items-center !py-4 !gap-4"
    hide-header
    hide-footer
  >
    <slot name="header" />
    <div
      v-if="icon"
      class="
        h-full
        px-5
        py-4
        flex
        items-center
        justify-center
        rounded-lg
        text-white
      "
      :class="colorClass"
    >
      <slot name="icon" :icon="icon">
        <Icon :icon="icon" :class="iconClass" />
      </slot>
    </div>
    <div class="w-full">
      <div class="font-normal text-gray-600 mb-1 truncate">{{ title }}</div>
      <div class="flex flex-col sm:flex-row gap-2 items-baseline">
        <div class="font-semibold text-2xl text-gray-800">
          {{ value }}
        </div>
        <div class="flex-grow text-sm text-gray-600">
          <span v-if="from">from {{ from }}</span>
        </div>
        <div v-if="progress" class="w-auto text-xs">
          <v-badge :color="badgeColor" rounded class="flex gap-1 items-center">
            <vue-feather v-if="down" type="arrow-down" size="16" />
            <vue-feather v-else-if="up" type="arrow-up" size="16" />
            <span class="text-xs"> {{ progress }} </span>
          </v-badge>
        </div>
      </div>
    </div>
    <slot name="footer" />
  </v-card>
</template>
