import {Story} from '@storybook/vue3';
import Login from './Login.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/Login',
  component: Login,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {Login, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <Login v-bind="args"/>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Login';

export const CustomButton = Template.bind({});
CustomButton.args = {
  btnProps: {
    color: 'secondary',
  },
};

export const Slots: Story<{}> = (args) => ({
  components: {Login, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <Login v-bind="args">
        <template #logo>
          <img class="bg-primary-500 p-2 mb-4 rounded-lg" src="https://mofin.id/wp-content/uploads/sites/6/2022/03/Logo-Mofin-Light-1.png" alt="Mofin" />
        </template>
      </Login>
    </Auth>
  `,
});
