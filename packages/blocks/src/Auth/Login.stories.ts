import type {Meta, StoryFn} from '@storybook/vue3';
import LoginSnippet from './Login.vue';
import ForgotPasswordSnippet from './ForgotPassword.vue';

export default {
  title: 'Blocks/Auth',
} as Meta;

export const Login: StoryFn = () => ({
  components: {LoginSnippet},
  template: `<LoginSnippet />`,
});

export const ForgotPassword: StoryFn = () => ({
  components: {ForgotPasswordSnippet},
  template: `<ForgotPasswordSnippet />`,
});
