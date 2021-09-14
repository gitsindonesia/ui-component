import MyEditor from './VEditor.vue';

export default {
  title: 'Components/Editor',
  component: MyEditor,
  argTypes: {},
  args: {
    modelValue: '',
  },
};

// const Template = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: {MyEditor},
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

export const Editor = (args) => ({
  components: {MyEditor},
  setup() {
    return {args};
  },
  template: '<MyEditor v-bind="args" />',
});
