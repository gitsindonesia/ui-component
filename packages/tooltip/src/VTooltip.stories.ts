import VTooltip from './VTooltip.vue';
import VBtn from '@gits-id/button';
import {Meta, Story} from '@storybook/vue3';

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
  argTypes: {
    placement: {
      control: 'select',
      options: placements,
    },
    color: {
      control: 'color',
    },
  },
  args: {
    placement: 'top',
    color: 'white',
    bgColor: 'black',
    maxWidth: '300px',
    options: {},
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VTooltip, VBtn},
  setup() {
    return {args, placements};
  },
  template: `<div class="grid grid-cols-6 items-center justify-center gap-4 h-screen">
  <div class="w-full flex justify-center" v-for="place in placements" :key="place">
  <VTooltip v-bind='args' :placement="place">
  <template #activator="{on}">
    <v-btn v-on="on">
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
