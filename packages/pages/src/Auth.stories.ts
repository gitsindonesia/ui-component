import {Story} from '@storybook/vue3';
import Auth from './Auth.vue';

export default {
  title: 'Pages/Activation',
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
    <Auth />
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Auth';
