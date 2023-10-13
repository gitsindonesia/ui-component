import VTooltip from './VTooltip.vue';
import VBtn from '@morpheme/button';
import { Meta, Story } from '@storybook/vue3';

const placements = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

export default {
  title: 'Components/Tooltip',
  component: VTooltip,
} as Meta;

const Template: Story = (args) => ({
  components: { VTooltip, VBtn },
  setup() {
    return { args, placements };
  },
  template: `
<div class="grid grid-cols-6 items-center justify-center gap-4 h-screen">
  <div class="w-full flex justify-center" v-for="place in placements" :key="place">
    <VTooltip v-bind='args' :placement="place">
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

export const Tooltip: Story = Template.bind({});
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

export const Colors: Story = (args) => ({
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

export const LongText: Story = (args) => ({
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

export const DarkMode: Story = (args) => ({
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
