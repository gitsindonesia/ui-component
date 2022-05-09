import {Story} from '@storybook/vue3';
import VEditor from './VEditor.vue';

export default {
  title: 'Components/Editor',
  component: VEditor,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    error: false,
    errorMessages: [],
  },
};

const Template: Story<{}> = (args) => ({
  components: {VEditor},
  setup() {
    return {args};
  },
  template: `<VEditor v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-editor />',
    },
  },
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  modelValue: '<p>Hello World</p>',
};
InitialValue.parameters = {
  docs: {
    source: {
      code: '<v-editor model-value="<p>Hello World</p>" />',
    },
  },
};
