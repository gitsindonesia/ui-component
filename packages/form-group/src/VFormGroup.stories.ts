import {Story} from '@storybook/vue3';
import VFormGroup from './VFormGroup.vue';

export default {
  title: 'Components/Form/FormGroup',
  component: VFormGroup,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VFormGroup},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VFormGroup v-bind='args'>Content</VFormGroup>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-form-group label="Label"> Content </v-form-group>',
    },
  },
};
