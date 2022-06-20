import VSwitch from '../src/VSwitch.vue';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Switch',
  component: VSwitch,
  args: {
    modelValue: true,
    label: 'Label',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VSwitch,
  },
  setup() {
    return {args};
  },
  template: `<v-switch v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" />`,
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
      code: `<v-switch v-model="model" color="success" />`,
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
      code: `<v-switch v-model="model" color="primary" />`,
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
      code: `<v-switch v-model="model" color="error" />`,
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
      code: `<v-switch v-model="model" color="info" />`,
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
      code: `<v-switch v-model="model" color="warning" />`,
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  color: 'warning',
  label: '',
};
NoLabel.parameters = {
  docs: {
    source: {
      code: `<v-switch v-model="model" color="warning" />`,
    },
  },
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  color: '',
  label: 'Custom Switch',
  switchClass: 'border-cyan-200',
  activeClass: 'bg-white',
  inactiveClass: 'bg-white',
  buttonClass: 'bg-cyan-500',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-switch
  v-model="model"       
  color=""
  label="Custom Switch"
  switch-class="border-cyan-200"
  active-class="bg-white"
  inactive-class="bg-white"
  button-class="bg-cyan-500"
/>`,
    },
  },
};
