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
  // Components used in your story `template` are defined in the `components` object
  components: {VRadio},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
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

// export const Radio = (args) => ({
//   components: {VRadio},
//   setup() {
//     return {args};
//   },
//   template: `<div class="container mx-auto"><VRadio v-bind="args" /></div>`,
// });
