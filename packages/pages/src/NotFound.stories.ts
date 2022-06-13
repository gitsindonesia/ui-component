import {Story} from '@storybook/vue3';
import NotFound from './NotFound.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/NotFound',
  component: NotFound,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {NotFound, Auth},
  setup() {
    return {args};
  },
  template: `
    <NotFound/>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'NotFound';
