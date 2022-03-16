import {Story} from '@storybook/vue3';
import DefaultLayout from './Default.vue';

export default {
  title: 'Layouts/Default',
  component: DefaultLayout,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {DefaultLayout},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<DefaultLayout v-bind='args'>Content</DefaultLayout>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';
