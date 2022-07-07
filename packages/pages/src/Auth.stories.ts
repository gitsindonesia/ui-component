import {Story} from '@storybook/vue3';
import Auth from './Auth.vue';

export default {
  title: 'Pages/Auth',
  component: Auth,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth form-wrapper-class="bg-gray-100">
      <p>Content here</p>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Auth';
