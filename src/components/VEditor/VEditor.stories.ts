import { Story } from '@storybook/vue3';
import MyEditor from './VEditor.vue';

export default {
  title: 'Components/Editor',
  component: MyEditor,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    name: 'editor',
    theme: 'ckeditor',
    error: false,
    errorMessages: [],
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MyEditor},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-editor v-bind='args'/>`,
});

export const CKEditor = Template.bind({});
CKEditor.args = {
  theme: 'ckeditor',
};
CKEditor.storyName = 'CKEditor';

export const Quill = Template.bind({});
Quill.args = {
  theme: 'quill',
};

export const BasicTextarea = Template.bind({});
BasicTextarea.args = {
  theme: 'textarea',
};
