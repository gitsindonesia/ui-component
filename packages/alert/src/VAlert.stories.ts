import VAlert from './VAlert.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Alert',
  component: VAlert,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
    icon: {
      control: {type: 'select', options: ['success', 'warning']},
    },
  },
  args: {
    modelValue: '',
    label: 'Alert text',
    dismissable: false,
    icon: '',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': VAlert,
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

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
  color: 'primary',
};

export const Icon = Template.bind({});
Icon.args = {
  color: 'primary',
  icon: 'success',
};
