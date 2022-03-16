import {Meta, Story} from '@storybook/vue3';
import VNavbar from './VNavbar.vue';

export default {
  title: 'Components/Navbar',
  component: VNavbar,
  argTypes: {},
  args: {
    modelValue: false,
    small: false,
    user: null,
    menus: [],
    loginPath: '',
    dense: false,
    imgClass: 'h-7',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'v-navbar': VNavbar,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-navbar v-bind="args">{{ args.label }}</v-navbar>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {small: true};

export const User = Template.bind({});
User.args = {user: {name: 'Admin'}};

export const WithMenus = Template.bind({});
WithMenus.args = {
  menus: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Settings',
      to: '/',
      children: [
        {
          text: 'Profile',
          to: '/profile',
        },
        {
          text: 'Account',
          to: '/account',
        },
      ],
    },
  ],
};
