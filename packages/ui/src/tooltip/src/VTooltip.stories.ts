import VTooltip from './VTooltip.vue';
import VBtn from '../../button/src';
import type { Meta, StoryFn } from '@storybook/vue3';

const placements = [
  'start',
  'center',
  'end'
];

const sides = ['top', 'right', 'bottom', 'left'];

export default {
  title: 'Components/Tooltip',
  component: VTooltip,
} as Meta;

const Template: StoryFn = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args, placements };
  },
  template: `
<div class="grid grid-cols-3 items-center justify-center gap-4 h-screen">
  <div class="w-full flex justify-center" v-for="place in placements" :key="place">
    <VTooltip v-bind='args' :align="place">
      <template #activator>
        <v-btn>
          {{ place }}
        </v-btn>
      </template>
      <span>Hello :)</span>
    </VTooltip>
  </div>
</div>
  `,
});

export const Tooltip: StoryFn = Template.bind({});
Tooltip.args = {};
Tooltip.parameters = {
  docs: {
    source: {
      code: `
<v-tooltip placement="top">
  <template #activator="{on}">
    <v-btn v-on="on">
      {{ place }}
    </v-btn>
  </template>
  <span>Hello :)</span>
</v-tooltip>
      `,
    },
  },
};

export const Sides: StoryFn = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args, sides };
  },
  template: `
<div class="grid grid-cols-4 items-center justify-center gap-4 h-screen">
  <div class="w-full flex justify-center" v-for="side in sides" :key="side">
    <VTooltip v-bind='args' :side="side">
      <template #activator>
        <v-btn>
          {{ side }}
        </v-btn>
      </template>
      <span>Hello :)</span>
    </VTooltip>
  </div>
</div>
  `,
});

export const Colors: StoryFn = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args };
  },
  template: `
    <VTooltip v-bind='args'>
      <template #activator>
        <v-btn>
          Default (black)
        </v-btn>
      </template>
      <span>Hello :)</span>
    </VTooltip>
    <VTooltip v-bind='args' color="white">
      <template #activator>
        <v-btn>
          White
        </v-btn>
      </template>
      <span>Hello :)</span>
    </VTooltip>
  `,
});

export const LongText: StoryFn = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args };
  },
  template: `
    <VTooltip v-bind='args'>
      <template #activator>
        <v-btn>
          Default (black)
        </v-btn>
      </template>
      <span>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </span>
    </VTooltip>
    <VTooltip v-bind='args' color="white">
      <template #activator>
        <v-btn>
          White
        </v-btn>
      </template>
      <span>
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </span>
    </VTooltip>
  `,
});

export const DarkMode: StoryFn = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args };
  },
  template: `
    <div class="dark p-6 dark:bg-neutral-900">
      <VTooltip v-bind='args'>
        <template #activator>
          <v-btn>
            Default (black)
          </v-btn>
        </template>
        <span>Hello :)</span>
      </VTooltip>
      <VTooltip v-bind='args' color="white" class="ml-2">
        <template #activator>
          <v-btn>
            White
          </v-btn>
        </template>
        <span>Hello :)</span>
      </VTooltip>
    </div>
  `,
});
