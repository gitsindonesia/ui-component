import type {Meta, StoryFn} from '@storybook/vue3';
import {ref} from 'vue';
import Rating from './Rating.vue';
import RatingStar from './RatingStar.vue';

export default {
  title: 'Components/Rating',
  component: Rating,
  subcomponents: {RatingStar},
} as Meta;

export const Default: StoryFn<typeof Rating> = (args) => ({
  components: {Rating},
  setup() {
    const value = ref(0);
    return {args, value};
  },
  template: `
    <Rating v-model:rating="value" v-bind="args"/>
    <pre class="mt-4 text-sm">Model Value: {{ value }}</pre>
  `,
});
Default.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<script setup lang="ts">
import { ref } from 'vue';
import { Rating } from '@gits-id/ui';

const value = ref(0);
</script>

<template>
  <Rating v-model:rating="value" />
</template>
      `,
    },
  },
};

export const Hint = Default.bind({});
Hint.args = {
  hint: 'This is a hint',
};

export const Inline = Default.bind({});
Inline.args = {
  inline: true,
};

export const Rtl = Default.bind({});
Rtl.args = {
  rtl: true,
};

export const DefaultValue = Default.bind({});
DefaultValue.args = {
  rating: 4,
};

export const Disabled = Default.bind({});
Disabled.args = {
  rating: 3,
  disabled: true,
};

export const HalfStars = Default.bind({});
HalfStars.args = {
  increment: 0.5,
  rating: 2.5,
};
