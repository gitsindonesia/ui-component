import MySwitch from '../src/VSwitch.vue';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Switch',
  component: MySwitch,
  args: {
    modelValue: true,
    label: 'Label',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MySwitch,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-component v-bind="args">{{ args.label }}</my-component>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  color: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};
