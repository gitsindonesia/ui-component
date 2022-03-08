import MyStats from './VStats.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Stats',
  component: MyStats,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    modelValue: true,
    title: 'Avg. Click Rate',
    value: '24.59%',
    icon: 'user',
    color: 'primary',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyStats,
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

export const NoIcon = Template.bind({});
NoIcon.args = {
  icon: '',
};

export const ProgressUp = Template.bind({});
ProgressUp.args = {
  from: '10.5%',
  progress: '5.5%',
  up: true,
};

export const ProgressDown = Template.bind({});
ProgressDown.args = {
  from: '10.5%',
  progress: '5.5%',
  down: true,
};

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
