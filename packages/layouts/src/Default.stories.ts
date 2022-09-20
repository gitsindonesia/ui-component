import {Story} from '@storybook/vue3';
import DefaultLayout from './Default.vue';

export default {
  title: 'Layouts/Default',
  component: DefaultLayout,
  argTypes: {},
  args: {
    label: 'Label',
  },
};

const Template: Story<{}> = (args) => ({
  components: {DefaultLayout},
  setup() {
    return {args};
  },
  template: `<DefaultLayout v-bind='args'>Content</DefaultLayout>`,
});

export const Default = Template.bind({});
Default.args = {};
