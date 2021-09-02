import VInput from './VInput.vue';
// import {themeColors} from '../utils/colors';
import {sizes} from '../../utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import type {VInputProps} from './VInput';

export default {
  title: 'Components/Form/Input',
  component: VInput,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    value: '',
    modelValue: 'Text',
    placeholder: 'Type something...',
    type: 'text',
    name: '',
    error: false,
    errorMessages: [],
    readonly: false,
    disabled: false,
    size: '',
  },
} as Meta;

const Template: Story<VInputProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VInput},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VInput v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  value: 'example@domain.com',
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
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

// export const Input = (args) => ({
//   components: {VInput},
//   setup() {
//     return {args};
//   },
//   template: `<div class="container mx-auto"><VInput v-bind="args" /></div>`,
// });
