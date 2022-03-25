import {Story} from '@storybook/vue3';
import VStepper from './Stepper.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'Components/Stepper',
  component: VStepper,
  argTypes: {},
  args: {
    modelValue: 0,
    items: Array.from({length: 5}, (v, k) => ({
      title: 'Title',
      subtitle: 'Subtitle',
      path: '/step/' + k,
    })),
    disableRouteActive: false,
    linkable: false,
    vertical: false,
  },
};

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VStepper,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VStepper v-bind="args">{{ args.label }}</VStepper>`,
});

Template.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

export const Default = Template.bind({});
Default.args = {};

export const DisableRouteActive = Template.bind({});
DisableRouteActive.args = {
  disableRouteActive: true,
};

export const Linkable = Template.bind({});
Linkable.args = {
  linkable: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};
