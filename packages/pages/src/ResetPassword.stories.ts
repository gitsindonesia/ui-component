import {Story} from '@storybook/vue3';
import ResetPassword from './ResetPassword.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/ResetPassword',
  component: ResetPassword,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {ResetPassword, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <ResetPassword/>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'ResetPassword';
