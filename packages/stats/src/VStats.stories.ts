import VStats from '../src/VStats.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Stats',
  component: VStats,
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
    icon: 'ri:user-line',
    color: 'primary',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VStats,
  },
  setup() {
    return {args};
  },
  template: `<v-stats v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" />',
    },
  },
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  icon: '',
};
NoIcon.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="" />',
    },
  },
};

export const ProgressUp = Template.bind({});
ProgressUp.args = {
  from: '10.5%',
  progress: '5.5%',
  up: true,
};
ProgressUp.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" from="10.5%" to="5.5.%" up />',
    },
  },
};

export const ProgressDown = Template.bind({});
ProgressDown.args = {
  from: '10.5%',
  progress: '5.5%',
  down: true,
};
ProgressUp.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" from="10.5%" to="5.5.%" down />',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: 'primary',
};
Success.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" color="success" />',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
Primary.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" color="primary" />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};
Error.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" color="error" />',
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};
Info.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" color="info" />',
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};
Warning.parameters = {
  docs: {
    source: {
      code: '<v-stats title="Avg. Click Rate" value="24.59%" icon="ri:user-line" color="warning" />',
    },
  },
};
