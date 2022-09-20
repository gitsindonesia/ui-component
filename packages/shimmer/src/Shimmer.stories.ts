import type {Meta, StoryFn} from '@storybook/vue3';
import Shimmer from './Shimmer.vue';

export default {
  title: 'Components/Shimmer',
  component: Shimmer,
  args: {},
} as Meta;

export const Default: StoryFn<typeof Shimmer> = (args) => ({
  components: {Shimmer},
  setup() {
    return {args};
  },
  template: `
    <Shimmer v-bind="args" />
  `,
});
Default.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<script setup lang="ts">
import { Shimmer } from '@gits-id/shimmer';
</script>

<template>
  <Shimmer />
</template>
      `,
    },
  },
};

export const Rounded = Default.bind({});
Rounded.args = {
  rounded: true,
  width: 200,
  height: 20,
};
Rounded.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<Shimmer rounded :width="200" :height="200" />
      `,
    },
  },
};

export const Circle = Default.bind({});
Circle.args = {
  rounded: true,
  width: 200,
  height: 200,
};
Circle.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<Shimmer circle :width="200" :height="200" />
      `,
    },
  },
};

export const MultipleLines = Default.bind({});
MultipleLines.args = {
  lines: 3,
  width: 300,
  height: 20,
  class: 'mb-2',
};
MultipleLines.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<Shimmer :lines="3" :width="300" :height="20" class="mb-2" />
      `,
    },
  },
};

export const CardShimmer: StoryFn<typeof Shimmer> = (args) => ({
  components: {Shimmer},
  setup() {
    return {args};
  },
  template: `
<div class="flex gap-4 shadow p-6 rounded-lg">
  <Shimmer :width="100" :height="100" rounded />
  <div class="flex-1 w-8/12">
    <Shimmer :lines="4" width="100%" :height="20" class="mb-2" rounded />
  </div>
</div>
  `,
});
CardShimmer.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<div class="flex gap-4 shadow p-6 rounded-lg">
  <Shimmer :width="100" :height="100" rounded />
  <div class="flex-1 w-8/12">
    <Shimmer :lines="4" width="100%" :height="20" class="mb-2" rounded />
  </div>
</div>
      `,
    },
  },
};
