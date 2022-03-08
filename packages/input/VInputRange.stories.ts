import {Meta, Story} from '@storybook/vue3';
import MyInputRange from './VInputRange.vue';

export default {
  title: 'Components/Form/InputRange',
  component: MyInputRange,
  argTypes: {},
  args: {
    modelValue: '',
    type: 'text',
    placeholder: 'Type...',
  },
} as Meta;

// const Template = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: {MyInputRange},
//   // The story's `args` need to be mapped into the template through the `setup()` method
//   setup() {
//     return {args};
//   },
//   // And then the `args` are bound to your component with `v-bind="args"`
//   template: `<my-input v-bind='args'/>`,
// });
//
// export const Default = Template.bind({});
// Default.args = {};

export const InputRange: Story = (args) => ({
  components: {MyInputRange},
  setup() {
    return {args};
  },
  template: '<MyInputRange v-bind="args" />',
});
