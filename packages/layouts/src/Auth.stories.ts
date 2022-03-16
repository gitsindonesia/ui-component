import {Story} from '@storybook/vue3';
import Auth from './Auth.vue';

export default {
  title: 'Layouts/Auth',
  component: Auth,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {Auth},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<Auth v-bind='args'>Content</Auth>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Auth';
