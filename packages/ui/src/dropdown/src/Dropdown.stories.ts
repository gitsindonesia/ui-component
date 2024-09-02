import VIcon from '../../icon/src';
import type { StoryFn } from '@storybook/vue3';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownButton from './DropdownButton.vue';
import Button from '../../button/src';
import DropdownBtn from './DropdownBtn.vue';
import DropdownHeader from './DropdownHeader.vue';
import DropdownActivator from './DropdownActivator.vue';

const items = [
  {
    text: 'View',
    icon: 'ic:round-visibility',
  },
  {
    text: 'Edit',
    icon: 'ic:round-edit',
  },
  {
    divider: true,
  },
  {
    text: 'Delete',
    icon: 'ic:round-delete',
  },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    label: 'Options',
    items,
  },
};

const Template: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown },
  setup() {
    return { args, argTypes };
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

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    {
      text: 'Default',
    },
    {
      text: 'Disabled',
      disabled: true,
    },
    {
      text: 'RouterLink',
      to: '/home',
      disabled: true,
    },
    {
      text: 'NuxtLink',
      to: '/nuxt',
      nuxt: true,
      disabled: true,
    },
    {
      text: 'Go to Google',
      href: 'https://google.com',
      disabled: true,
    },
    {
      text: 'Go to Google (New Tab)',
      href: 'https://google.com',
      disabled: true,
      newTab: true,
    },
  ],
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

export const Header = Template.bind({});
Header.args = {
  items: [
    {
      text: 'Account',
      header: true,
    },
    {
      text: 'Profile',
      icon: 'ic:round-person',
    },
    {
      text: 'Preferences',
      icon: 'ic:round-settings',
    },

    {
      text: 'Settings',
      header: true,
    },
    {
      text: 'Dark Mode',
      icon: 'ic:round-dark-mode',
    },
    {
      text: 'Logout',
      icon: 'ic:round-logout',
    },
  ],
};

export const Slots: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown, DropdownItem, DropdownHeader },
  setup() {
    return { args, argTypes };
  },
  template: `
    <div class="flex justify-center">
      <Dropdown v-bind="args">
        <template #prepend>
          <div class="dropdown-item"><code>prepend</code> slot</div>
        </template>
        <template #append>
          <div class="dropdown-item"><code>append</code> slot</div>
        </template>
        <DropdownHeader>Action</DropdownHeader>
        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
  `,
});

export const CustomActivator: StoryFn = (args, { argTypes }) => ({
  components: {
    Dropdown,
    DropdownItem,
    DropdownButton,
    DropdownBtn,
    DropdownActivator,
    VIcon,
  },
  setup() {
    return { args, argTypes, Button };
  },
  template: `
    <div class="mt-4">
      <Dropdown v-bind="args" top top-class="bottom-12">
        <template #activator>
          <DropdownButton>
            Default <code>VDropdownButton</code>
          </DropdownButton>
        </template>

        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
    <div class="mt-4">
      <Dropdown v-bind="args" top top-class="bottom-12">
        <template #activator>
          <DropdownButton :as="Button" color="error" outlined>
          <code>DropdownButton</code> as <code>VBtn</code>
          </DropdownButton>
        </template>

        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
    <div class="mt-4">
      <Dropdown v-bind="args" top top-class="bottom-12">
        <template #activator>
          <DropdownBtn color="success" outlined>
            With <code>VDropdownBtn</code>
          </DropdownBtn>
        </template>

        <DropdownItem text="Calendar" icon="mdi:calendar"/>
        <DropdownItem text="Files" icon="mdi:document" />
        <DropdownItem divider/>
        <DropdownItem text="Timer" icon="mdi:clock"/>
      </Dropdown>
    </div>
    
    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'VBtn'" color="secondary" text flush>
            <code>DropdownButton</code> as <code>VBtn</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'VDropdownItem'">
            <code>DropdownButton</code> as <code>VDropdownItem</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'VDropdownHeader'">
            <code>DropdownButton</code> as <code>VDropdownHeader</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'btn'" color="secondary" text flush>
            <code>DropdownButton</code> as <code>btn</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'item'">
            <code>DropdownButton</code> as <code>item</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>

    <div class="mt-4">
      <Dropdown v-bind="args">
        <template #activator="{open}">
          <DropdownButton :as="'header'">
            <code>DropdownButton</code> as <code>header</code>
            <VIcon 
              name="heroicons:chevron-down"
              size="xs"
              :class="[
                'transform transition',
                {
                  'rotate-180': open,
                }
              ]" 
            />
          </DropdownButton>
        </template>
      </Dropdown>
    </div>
  `,
});

export const DarkMode: StoryFn<{}> = (args) => ({
  components: { Dropdown, DropdownItem, DropdownHeader },
  setup() {
    return { args };
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <Dropdown v-bind="args">
    <template #prepend>
      <DropdownHeader>Action</DropdownHeader>
    </template>
    <template #append>
      <DropdownItem disabled>Disabled</DropdownItem>
    </template>
  </Dropdown>
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

export const FloatingUI: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown },
  setup() {
    return { args, argTypes, placements };
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

export const MultiLevel: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown, DropdownItem, DropdownButton, DropdownHeader },
  setup() {
    return { args, argTypes, DropdownItem };
  },
  template: `
    <Dropdown v-bind="args">
      <DropdownHeader>Action</DropdownHeader>
      <DropdownItem text="Calendar" icon="mdi:calendar"/>
      <DropdownItem text="Files" icon="mdi:document" />
      <DropdownItem divider/>
      <Dropdown block placement="right-start" :offset="-4">
        <template #activator>
          <DropdownButton
            :as="DropdownItem"
            suffix-icon="heroicons:chevron-right"
            text="Theme"
          />
        </template>
        <DropdownItem text="System" />
        <DropdownItem text="Light" />
        <DropdownItem text="Dark" />
      </Dropdown>
      <Dropdown block placement="right-start" :offset="-4">
        <template #activator>
          <DropdownButton
            :as="DropdownItem"
            suffix-icon="heroicons:chevron-right"
            text="More"
          />
        </template>
        <DropdownItem text="Sub 1" />
        <DropdownItem text="Sub 2" />
        <Dropdown block placement="right-start" :offset="-4">
          <template #activator>
            <DropdownButton
              :as="DropdownItem"
              suffix-icon="heroicons:chevron-right"
              text="More"
            />
          </template>
          <DropdownItem text="Sub 1" />
          <DropdownItem text="Sub 2" />
        </Dropdown>
      </Dropdown>
    </Dropdown>
  `,
});

export const NavigationMenus: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown, DropdownItem, DropdownButton, DropdownHeader },
  setup() {
    return { args, argTypes, DropdownItem };
  },
  template: `
  <div class="bg-white shadow-md py-3 px-6 rounded-lg flex items-center gap-8">
    <a class="font-semibold">
      Acme Inc.
    </a>
    <a class="text-sm text-gray-800 font-semibold hover:text-gray-800">
      Home
    </a>
    <Dropdown class="[--dropdown-item-height:36px]">
      <template #activator="{open}">
        <DropdownButton
          as="btn"
          suffix-icon="heroicons:chevron-down"
          suffix-icon-size="xs"
          :suffix-icon-class="[
            'transform transition',
            {
              'rotate-180': open,
            }
          ]"
          text
          flush
        >
          Products
        </DropdownButton>
      </template>
      <DropdownItem text="Calendar" />
      <DropdownItem text="Files" />
      <DropdownItem divider/>
      <Dropdown block placement="right-start" :offset="-4">
        <template #activator>
          <DropdownButton
            :as="DropdownItem"
            suffix-icon="heroicons:chevron-right"
            text="More"
          />
        </template>
        <DropdownItem text="Sub 1" />
        <DropdownItem text="Sub 2" />
        <Dropdown block placement="right-start" :offset="-4">
          <template #activator>
            <DropdownButton
              :as="DropdownItem"
              suffix-icon="heroicons:chevron-right"
              text="More"
            />
          </template>
          <DropdownItem text="Sub 1" />
          <DropdownItem text="Sub 2" />
        </Dropdown>
      </Dropdown>
    </Dropdown>
    <Dropdown class="[--dropdown-item-height:36px]">
      <template #activator="{open}">
        <DropdownButton
          as="btn"
          suffix-icon="heroicons:chevron-down"
          suffix-icon-size="xs"
          :suffix-icon-class="[
            'transform transition',
            {
              'rotate-180': open,
            }
          ]"
          text
          flush
        >
          Settings
        </DropdownButton>
      </template>
      <DropdownItem text="Calendar" />
      <DropdownItem text="Files" />
      <DropdownItem divider/>
      <Dropdown block placement="right-start" :offset="-4">
        <template #activator>
          <DropdownButton
            :as="DropdownItem"
            suffix-icon="heroicons:chevron-right"
            text="Theme"
          />
        </template>
        <DropdownItem text="System" />
        <DropdownItem text="Light" />
        <DropdownItem text="Dark" />
      </Dropdown>
    </Dropdown>
    </div>
  `,
});

export const Sizes: StoryFn = (args, { argTypes }) => ({
  components: { Dropdown, DropdownItem, DropdownButton, DropdownHeader },
  setup() {
    return { args, argTypes, DropdownItem };
  },
  template: `
    <Dropdown v-bind="args" size="xs" label="Size: xs" />
    <Dropdown v-bind="args" size="sm" label="Size: sm" />
    <Dropdown v-bind="args" label="Size: md (default)" />
    <Dropdown v-bind="args" size="lg" label="Size: lg" />
  `,
});
