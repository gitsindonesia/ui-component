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
  // Components used in your story `template` are defined in the `components` object
  components: {VEditor},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VEditor v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
