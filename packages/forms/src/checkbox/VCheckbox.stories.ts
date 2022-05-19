import MyCheckbox from './VCheckbox.vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Forms/Checkbox',
  component: MyCheckbox,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    modelValue: false,
    label: 'Checkbox',
    color: '',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {MyCheckbox},
  setup() {
    return {args};
  },
  template: `<MyCheckbox v-bind='args'>${args.label}</MyCheckbox>`,
});

export const Checkbox = Template.bind({});
Checkbox.args = {};
Checkbox.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Checkbox" />`,
    },
  },
};
