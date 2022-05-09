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
  components: {
    VStepper,
  },
  setup() {
    return {args};
  },
  template: `<VStepper v-bind="args">{{ args.label }}</VStepper>`,
});

Template.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" />`,
    },
  },
};

export const DisableRouteActive = Template.bind({});
DisableRouteActive.args = {
  disableRouteActive: true,
};
DisableRouteActive.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" disable-route-active />`,
    },
  },
};

export const Linkable = Template.bind({});
Linkable.args = {
  linkable: true,
};
Linkable.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" linkable />`,
    },
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};
Vertical.parameters = {
  docs: {
    source: {
      code: `<v-steppers :items="items" vertical />`,
    },
  },
};
