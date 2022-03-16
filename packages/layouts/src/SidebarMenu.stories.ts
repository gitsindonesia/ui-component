import {Story} from '@storybook/vue3';
import SidebarMenu from './SidebarMenu.vue';

export default {
  title: 'Layouts/SidebarMenu',
  component: SidebarMenu,
  argTypes: {},
  args: {
    menus: [
      {
        text: 'Text',
        to: '/',
      },
    ],
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {SidebarMenu},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<SidebarMenu v-bind='args'>Content</SidebarMenu>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'SidebarMenu';
