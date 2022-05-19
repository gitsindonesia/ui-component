import {Story} from '@storybook/vue3';
import VFileUpload from './VFileUpload.vue';

export default {
  title: 'Forms/FileUpload',
  component: VFileUpload,
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
    VFileUpload,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-file-upload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-file-upload />',
    },
  },
};

export const Button = Template.bind({});
Button.args = {
  theme: 'button',
};
Button.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="button" />',
    },
  },
};

export const Image = Template.bind({});
Image.args = {
  theme: 'image',
};
Image.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="image" />',
    },
  },
};

export const ImageFull = Template.bind({});
ImageFull.args = {
  theme: 'image',
  full: true,
};
ImageFull.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="image" full />',
    },
  },
};

export const Dropzone = Template.bind({});
Dropzone.args = {
  theme: 'dropzone',
};
Dropzone.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="dropzone" />',
    },
  },
};
