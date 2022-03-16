import {Story} from '@storybook/vue3';
import MyFileUpload from './VFileUpload.vue';

export default {
  title: 'Components/Form/FileUpload',
  component: MyFileUpload,
  argTypes: {},
  args: {
    button: false,
    full: false,
    rounded: false,
    image: false,
    value: null,
    modelValue: null,
    accept: '',
    inputProps: {},
    name: '',
    error: false,
    errorMessages: [],
    placeholder: 'Browse file...',
    id: '',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyFileUpload,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-component v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};

export const Button = Template.bind({});
Button.args = {
  theme: 'button',
};

export const Full = Template.bind({});
Full.args = {
  full: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Image = Template.bind({});
Image.args = {
  theme: 'image',
};

export const Dropzone = Template.bind({});
Dropzone.args = {
  theme: 'dropzone',
};
