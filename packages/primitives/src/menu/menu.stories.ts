import type {Story} from '@storybook/vue3';
import {Menu, MenuButton, MenuItems, MenuItem} from './menu';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';

export default {
  title: 'Primitives/Menu',
  component: Menu,
  subcomponents: {
    MenuButton,
    MenuItems,
    MenuItem,
  },
};

export const Default: Story = (args) => ({
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  },
  setup() {
    return {args};
  },
  template: `
    <Menu>
      <MenuButton
        v-slot="{open}"
        class="inline-flex gap-2 items-center relative text-sm"
      >
        <span>Account</span>
        <ChevronDownIcon
          class="w-5 h-5 transform transition-transform duration-200"
          :class="{
            'rotate-180': open,
          }"
        />
      </MenuButton>

      <MenuItems class="absolute w-56 bg-white p-2 border rounded-lg shadow-md">
        <MenuItem class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200" v-slot="{active}">
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Account settings
          </a>
        </MenuItem>
        <MenuItem class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200" v-slot="{ active }">
          <a :class='{ "bg-blue-500": active }' href="/account-settings">
            Documentation
          </a>
        </MenuItem>
        <MenuItem as="button" class="text-sm text-left w-full px-3 py-2 rounded-lg disabled:cursor-not-allowed disabled:text-gray-400 hover:not:disabled:bg-gray-200" disabled>
          <span class="opacity-75">Invite a friend (coming soon!)</span>
        </MenuItem>
      </MenuItems>
    </Menu>
  `,
});
