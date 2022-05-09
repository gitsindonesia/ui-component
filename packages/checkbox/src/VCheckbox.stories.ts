import MyCheckbox from './VCheckbox.vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Form/Checkbox',
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
  // Components used in your story `template` are defined in the `components` object
  components: {MyCheckbox},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
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

// export const Checkbox = (args) => ({
//   components: {MyCheckbox},
//   setup() {
//     return {args};
//   },
//   template: `<div class="container mx-auto"><MyCheckbox v-bind="args" /></div>`,
// });
