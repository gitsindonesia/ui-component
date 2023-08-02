import type {Story} from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownButton from './DropdownButton.vue';
import type {DropdownItemProps} from './types';
import Button from '@morpheme/button';
import DropdownBtn from './DropdownBtn.vue';

const genItems = (length = 5): DropdownItemProps[] =>
  Array.from({length}, (_, v) => ({
    text: `Item ${v + 1}`,
    icon: 'ri:home-line',
  }));

const items = [...genItems(2), {divider: true}, ...genItems(3)];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    label: 'Options',
    items,
  },
};

const Template: Story = (args, {argTypes}) => ({
  components: {Dropdown},
  setup() {
    return {args, argTypes};
  },
  template: `
    <div class="flex justify-center" :class="args.top ? 'mt-60' : ''">
      <Dropdown v-bind="args"/>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Right = Template.bind({});
Right.args = {
  right: true,
};

export const Top = Template.bind({});
Top.args = {
  top: true,
};

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
  prefixIcon: 'ic:round-person',
  label: 'Account',
};

export const RouterLink = Template.bind({});
RouterLink.args = {
  items: [
    {
      text: 'Home',
      to: '/home',
    },
    {
      text: 'Profile',
      to: '/profile',
    },
    {
      text: 'Settings',
      to: '/settings',
    },
    {
      divider: true,
    },
    {
      text: 'Go to Google',
      href: 'https://google.com',
      newTab: true,
    },
  ],
};

export const Href = Template.bind({});
Href.args = {
  items: [
    {
      text: 'Link 1',
      href: '/home',
    },
    {
      text: 'Link 2',
      href: '/setting',
      newTab: true,
    },
  ],
};

export const Slots: Story = (args, {argTypes}) => ({
  components: {Dropdown, DropdownItem},
  setup() {
    return {args, argTypes};
  },
  template: `
    <div class="flex justify-center">
      <Dropdown v-bind="args">
        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
  `,
});

export const CustomActivator: Story = (args, {argTypes}) => ({
  components: {Dropdown, DropdownItem, DropdownButton, DropdownBtn},
  setup() {
    return {args, argTypes, Button};
  },
  template: `
    <div class="flex justify-center mt-60">
      <Dropdown v-bind="args" top top-class="bottom-12">
        <template #activator>
          <DropdownButton :as="Button" color="error" outlined>
            My Button
          </DropdownButton>
        </template>

        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
    <div class="flex justify-center mt-20">
      <Dropdown v-bind="args" top top-class="bottom-12">
        <template #activator>
          <DropdownBtn color="success" outlined>
            Custom Button
          </DropdownBtn>
        </template>

        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
  `,
});

export const DarkMode: Story<{}> = (args) => ({
  components: {Dropdown},
  setup() {
    return {args};
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <Dropdown v-bind="args"/>
</main>
`,
});

const placements = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

export const FloatingUI: Story = (args, {argTypes}) => ({
  components: {Dropdown},
  setup() {
    return {args, argTypes, placements};
  },
  template: `
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
      <Dropdown
        v-bind="args"
        v-for="placement in placements"
        :key="placement"
        :placement="placement"
        :label="placement"
      />
    </div>
  `,
});
FloatingUI.parameters = {
  layout: 'centered',
};
