import MyAppBar from './VAppBar.vue';
import {UserIcon, HomeIcon, FlagIcon} from '@heroicons/vue/solid';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/AppBar',
  component: MyAppBar,
  argTypes: {},
  args: {
    mini: false,
    menus: [],
    notifications: [
      {
        name: 'Lorem',
        description: 'ipsum',
      },
    ],
    notificationCount: 10,
    fixed: false,
    user: null,
  },
} as Meta;

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MyAppBar},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<MyAppBar v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Admin',
    role: 'Super Admin',
  },
};

export const Mini = Template.bind({});
Mini.args = {
  mini: true,
};
