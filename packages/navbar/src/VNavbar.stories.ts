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
  components: {
    'v-navbar': VNavbar,
  },
  setup() {
    return {args};
  },
  template: `<v-navbar v-bind="args">{{ args.label }}</v-navbar>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-navbar />',
    },
  },
};

export const Small = Template.bind({});
Small.args = {small: true};
Small.parameters = {
  docs: {
    source: {
      code: '<v-navbar small />',
    },
  },
};

export const User = Template.bind({});
User.args = {user: {name: 'Admin'}};
User.parameters = {
  docs: {
    source: {
      code: '<v-navbar :user="user" />',
    },
  },
};

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
WithMenus.parameters = {
  docs: {
    source: {
      code: '<v-navbar :menus="menus" />',
    },
  },
};
