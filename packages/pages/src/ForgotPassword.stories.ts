import {Story} from '@storybook/vue3';
import ForgotPassword from './ForgotPassword.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/ForgotPassword',
  component: ForgotPassword,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {ForgotPassword, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <ForgotPassword/>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ForgotPassword';
