import {Meta, Story} from '@storybook/vue3';
import LoginSnippet from './Login.vue';
import ForgotPasswordSnippet from './ForgotPassword.vue';

export default {
  title: 'Snippets/Auth',
} as Meta;

export const Login: Story = () => ({
  components: {LoginSnippet},
  template: `<LoginSnippet />`,
});

export const ForgotPassword: Story = () => ({
  components: {ForgotPasswordSnippet},
  template: `<ForgotPasswordSnippet />`,
});
