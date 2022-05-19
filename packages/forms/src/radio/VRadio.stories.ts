import VRadio from './VRadio.vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Form/Radio',
  component: VRadio,
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
    modelValue: '',
    label: 'Radio',
    color: '',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VRadio},
  setup() {
    return {args};
  },
  template: `<VRadio v-bind='args'>${args.label}</VRadio>`,
});

export const Radio = Template.bind({});
Radio.args = {};
Radio.parameters = {
  docs: {
    source: {
      code: '<v-radio />',
    },
  },
};
