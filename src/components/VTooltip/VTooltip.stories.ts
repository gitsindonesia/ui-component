import MyTooltip from './VTooltip.vue';
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
  component: MyTooltip,
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
  // Components used in your story `template` are defined in the `components` object
  components: {MyTooltip, VBtn},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, placements};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="grid grid-cols-6 items-center justify-center gap-4 h-screen">
  <div class="w-full flex justify-center" v-for="place in placements" :key="place">
  <MyTooltip  v-bind='args' :placement="place">
  <template #activator="{on}">
    <v-btn v-on="on">
      {{ place }}
    </v-btn>
  </template>
  <span>Hello :)</span>
</MyTooltip>
</div>
  </div>
  `,
});

export const Tooltip: Story = Template.bind({});
Tooltip.args = {};

// export const Switch = (args) => ({
//   components: {MyTooltip},
//   setup() {
//     return {args};
//   },
//   template: `<div class="container mx-auto"><MyTooltip v-bind="args" /></div>`,
// });
