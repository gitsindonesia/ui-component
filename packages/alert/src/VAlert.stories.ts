import VAlert from './VAlert.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';
import Icon from '@gits-id/icon';

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
    solid: false,
    outlined: false,
    icon: '',
    border: '',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': VAlert,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, themeColors};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
<div class="space-y-2">
  <my-component v-for="color in themeColors" :key="color" v-bind="args" :color="color">{{ args.label }}</my-component>
</div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-alert>Alert text</v-alert>
<v-alert color="primary">Alert text</v-alert>
<v-alert color="secondary">Alert text</v-alert>
<v-alert color="info">Alert text</v-alert>
<v-alert color="warning">Alert text</v-alert>
<v-alert color="success">Alert text</v-alert>
<v-alert color="error">Alert text</v-alert>
<v-alert color="dark">Alert text</v-alert>
      `,
    },
  },
};

export const Solid = Template.bind({});
Solid.args = {
  solid: true,
};
Solid.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
Outlined.parameters = {
  docs: {
    source: {
      code: `<v-alert solid>Alert text</v-alert>`,
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  border: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: `<v-alert border>Alert text</v-alert>`,
    },
  },
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
};
Dismissable.parameters = {
  docs: {
    source: {
      code: `<v-alert dismissable>Alert text</v-alert>`,
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  icon: 'success',
};
Icons.parameters = {
  docs: {
    source: {
      code: `<v-alert icon="success">Alert text</v-alert>`,
    },
  },
};

export const CustomSlots = () => ({
  components: {VAlert, Icon},
  template: `
<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>
  `,
});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<v-alert color="error" dismissable>
  <template #icon>
    <Icon name="ri:alarm-warning-fill" class="fill-current w-6 h-6 mr-2" />
  </template>
  <template #x-icon>
    <Icon name="ri:close-fill" class="fill-current w-6 h-6 text-error-500" />
  </template>

  Change a few things up and try submitting again.
</v-alert>`,
    },
  },
};
