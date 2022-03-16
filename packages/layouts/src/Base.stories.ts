import {Story} from '@storybook/vue3';
import Base from './Base.vue';

export default {
  title: 'Layouts/Base',
  component: Base,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {Base},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Base v-bind='args'>Content</Base>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Base';
