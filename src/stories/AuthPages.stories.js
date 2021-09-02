import AuthLayout from '../pages/auth/Auth.vue';
import LoginPage from '../pages/auth/Login.vue';
import ActivationPage from '../pages/auth/Activation.vue';
import ForgotPasswordPage from '../pages/auth/ForgotPassword.vue';
import ResetPasswordPage from '../pages/auth/ResetPassword.vue';

export default {
  title: 'Pages/Auth',
  component: LoginPage,
  argTypes: {},
  args: {
    sso: false,
    message: '',
    loading: false,
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

export const Login = (args) => ({
  components: {
    LoginPage,
    AuthLayout,
  },
  setup() {
    return {args};
  },
  template: `<AuthLayout image="login"><LoginPage v-bind="args" /></AuthLayout>`,
});

export const ForgotPassword = (args) => ({
  components: {
    ForgotPasswordPage,
    AuthLayout,
  },
  setup() {
    return {args};
  },
  template: `<AuthLayout image="forgot-password"><ForgotPasswordPage v-bind="args" /></AuthLayout>`,
});

export const ResetPassword = (args) => ({
  components: {
    ResetPasswordPage,
    AuthLayout,
  },
  setup() {
    return {args};
  },
  template: `<AuthLayout><ResetPasswordPage v-bind="args" /></AuthLayout>`,
});

export const Activation = (args) => ({
  components: {
    ActivationPage,
    AuthLayout,
  },
  setup() {
    return {args};
  },
  template: `<AuthLayout><ActivationPage v-bind="args" /></AuthLayout>`,
});
