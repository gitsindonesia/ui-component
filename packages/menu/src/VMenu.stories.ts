import {Meta, Story} from '@storybook/vue3';
import VMenu from './VMenu.vue';
import vueRouter from 'storybook-vue3-router';
import {Icon} from '@gits-id/icon';

export default {
  title: 'Components/Menu',
  component: VMenu,
  argTypes: {},
  args: {
    menu: {
      text: 'Text',
      to: '/',
      icon: 'ri:home-2-line',
      children: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'About',
          to: '/about',
        },
      ],
    },
    mini: false,
    expandHover: false,
    dark: false,
    color: '',
    bgColor: '',
    darkColor: '',
    darkBgColor: '',
    classMenuParent: '',
    small: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VMenu,
  },
  setup() {
    return {args};
  },
  template: `
  <div :class="args.mini ? 'w-12' : ''">
    <VMenu v-bind="args">{{ args.label }}</VMenu>

    <div class="rounded-lg border px-4 py-3 mt-4">
      Router View:
      <router-view />
    </div>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-menu :menu="menu" />',
    },
  },
};

Default.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter([
    {
      path: '/',
      component: {
        template: 'Home',
      },
    },
    {
      path: '/about',
      component: {
        template: 'About',
      },
    },
  ]),
];

export const Small = Template.bind({});
Small.args = {small: true};
Small.parameters = {
  docs: {
    source: {
      code: '<v-menu :menu="menu" small />',
    },
  },
};

export const Mini = Template.bind({});
Mini.args = {mini: true};
Mini.parameters = {
  docs: {
    source: {
      code: '<v-menu :menu="menu" mini />',
    },
  },
};

export const CustomActiveClass = Template.bind({});
CustomActiveClass.args = {
  activeClass: 'bg-blue-600 text-white',
};
CustomActiveClass.parameters = {
  docs: {
    source: {
      code: '<v-menu :menu="menu" mini />',
    },
  },
};

export const Icons = Template.bind({});
Icons.args = {
  menu: {
    text: 'Text',
    to: '/',
    icon: 'mdi-light:home',
  },
};
Icons.parameters = {
  docs: {
    source: {
      code: '<v-menu :menu="menu" />',
    },
  },
};

export const Single = Template.bind({});
Single.args = {
  menu: {
    text: 'Text',
    to: '/',
    icon: 'mdi-light:home',
  },
};
Single.parameters = {
  docs: {
    source: {
      code: `<v-menu :menu="{
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
}" />`,
    },
  },
};
