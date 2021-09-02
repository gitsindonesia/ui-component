import AuthLayout from '../pages/auth/Auth.vue';
import NotFoundPage from '../pages/NotFound.vue';

export default {
  title: 'Pages/NotFound',
  component: NotFoundPage,
  argTypes: {},
  args: {
    fillHeight: true,
    noButton: false,
    noImage: false,
    title: '404 Page Not Found',
    description: 'Sorry, the page you are looking is not found',
  },
};

// const Template = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: {VCard},
//   // The story's `args` need to be mapped into the template through the `setup()` method
//   setup() {
//     return {args};
//   },
//   // And then the `args` are bound to your component with `v-bind="args"`
//   template: `<my-Card v-bind='args'/>`,
// });
//
// export const Default = Template.bind({});
// Default.args = {};

export const NotFound = (args) => ({
  components: {
    NotFoundPage,
    AuthLayout,
  },
  setup() {
    return {args};
  },
  template: `<NotFoundPage v-bind="args" />`,
});
NotFound.storyName = 'NotFound';
