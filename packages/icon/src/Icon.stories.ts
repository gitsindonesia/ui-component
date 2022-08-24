import {Story} from '@storybook/vue3';
import Icon from './Icon.vue';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: 'ic:round-home',
  },
};

export const Default: Story<{}> = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `<Icon v-bind="args" />`,
});
Default.storyName = 'Icon';
Default.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" />',
    },
  },
};

export const CustomClass = Default.bind({});
CustomClass.args = {
  class: 'w-10 h-10',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: '<Icon name="ic:round-home" class="w-10 h-10" />',
    },
  },
};
