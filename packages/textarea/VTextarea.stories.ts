import {Meta, Story} from '@storybook/vue3';
import {sizes} from '@gits-id/utils';
import VTextarea from './VTextarea.vue';

export default {
  title: 'Components/Form/Textarea',
  component: VTextarea,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    value: '',
    modelValue: '',
    name: '',
    error: false,
    errorMessages: [],
    readonly: false,
    disabled: false,
    size: '',
    rows: 10,
    cols: '',
    placeholder: 'Type something...',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VTextarea},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VTextarea v-bind='args'/>`,
});

// export const Textarea: Story = (args) => ({
//   components: { VTextarea },
//   setup() {
//     return { args };
//   },
//   template: '<VTextarea v-bind="args" />',
// });

export const Default = Template.bind({});
Default.args = {};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
  value: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessages: ['Field is required'],
};
