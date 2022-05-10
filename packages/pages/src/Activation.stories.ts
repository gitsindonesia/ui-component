import {Story} from '@storybook/vue3';
import Activation from './Activation.vue';
import Auth from './Auth.vue';

export default {
  title: 'Pages/Activation',
  component: Activation,
  argTypes: {},
  args: {},
};

const Template: Story<{}> = (args) => ({
  components: {Activation, Auth},
  setup() {
    return {args};
  },
  template: `
    <Auth>
      <Activation v-bind='args'>Content</Activation>
    </Auth>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Activation';
