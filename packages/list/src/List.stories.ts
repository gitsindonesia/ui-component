import {Meta, Story} from '@storybook/vue3';
import {Icon} from '@iconify/vue';
import List from './List.vue';
import ListItem from './ListItem.vue';
import ListItemDivider from './ListItemDivider.vue';
import ListItemHeader from './ListItemHeader.vue';
import ListCollapse from './ListCollapse.vue';
import vueRouter from 'storybook-vue3-router';
import {ref} from 'vue';
import VNavDrawer from '@gits-id/nav-drawer';
import VBtn from '@gits-id/button';
import {Dropdown} from '@gits-id/dropdown';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
  args: {},
} as Meta;

export const BasicList: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItemDivider />
      <ListItem>Item 3</ListItem>
      <ListItemDivider />
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  `,
});

export const Hover: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem hover>Default</ListItem>
      <ListItem hover hover-class="hover:bg-primary-200 hover:text-primary-700">
        Custom Class
      </ListItem>
      <ListItem hover hover-class="group-hover:bg-orange-200 group-hover:text-orange-700">
        Group Hover
      </ListItem>
    </List>
  `,
});

export const Shaped: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem hover shaped v-for="i in 5" :key="i">Item</ListItem>
      <ListItem hover shaped shaped-class="rounded-l-full">
        Custom Shaped Class
      </ListItem>
    </List>
  `,
});

export const Rounded: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem hover rounded v-for="i in 5" :key="i">Item</ListItem>
    </List>
  `,
});

export const Tile: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem hover tile v-for="i in 5" :key="i">Item</ListItem>
    </List>
  `,
});

export const HidePrependAppend: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem hide-prepend>Item 1</ListItem>
      <ListItem hide-prepend hide-append>Item 2</ListItem>
    </List>
    <List v-bind="args" hide-prepend hide-append v-slot="props">
      <ListItem v-bind="props">Item 3</ListItem>
      <ListItem v-bind="props">Item 4</ListItem>
    </List>
  `,
});

export const HideText: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    VBtn,
  },
  setup() {
    const hideText = ref(true);
    return {args, hideText};
  },
  template: `
    <VBtn @click="hideText = !hideText">{{ hideText ? 'Show' : 'Hide' }} Text</VBtn>
    <List class="mt-4">
      <ListItem :hide-text="hideText" prepend-icon="ri:home-2-line" hide-append>Item 1</ListItem>
      <ListItem :hide-text="hideText" prepend-icon="ri:user-line" hide-append>Item 2</ListItem>
    </List>
  `,
});

export const TwoLine: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem>
        <div>Item 1</div>
        <div class="text-sm text-gray-500">Sub Item 1</div>
      </ListItem>
      <ListItem>
        <div>Item 2</div>
        <div class="text-sm text-gray-500">Sub Item 2</div>
      </ListItem>
      <ListItemDivider />
      <ListItem>
        <div>Item 3</div>
        <div class="text-sm text-gray-500">Sub Item 3</div>
      </ListItem>
      <ListItem>
        <div>Item 4</div>
        <div class="text-sm text-gray-500">Sub Item 4</div>
      </ListItem>
    </List>
  `,
});

export const ThreeLine: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem>
        <div>Item 1</div>
        <div class="text-sm text-gray-500">Sub Item 1</div>
        <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
      </ListItem>
      <ListItem>
        <div>Item 2</div>
        <div class="text-sm text-gray-500">Sub Item 2</div>
        <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
      </ListItem>
      <ListItemDivider />
      <ListItem>
        <div>Item 3</div>
        <div class="text-sm text-gray-500">Sub Item 3</div>
        <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
      </ListItem>
      <ListItem>
        <div>Item 4</div>
        <div class="text-sm text-gray-500">Sub Item 4</div>
        <p class="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet</p>
      </ListItem>
    </List>
  `,
});

export const Link: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem to="/">Home</ListItem>
      <ListItem to="/profile">Profile</ListItem>
      <ListItem href="/settings">Settings</ListItem>
      <ListItem href="/logout">Logout</ListItem>
    </List>
  `,
});

Link.decorators = [vueRouter()];

export const Slots: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem>
        <template #prepend>
          <div class="text-cyan-500">
            prepend
          </div>
        </template>
        <template #append>
          <div class="text-orange-500">
            append
          </div>
        </template>

        default slot
      </ListItem>
    </List>
  `,
});

export const Icons: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    Icon,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem prepend-icon="ri:user-line">
        Item 1
      </ListItem>
      <ListItem prepend-icon="ri:search-line">
        Item 2
      </ListItem>
      <ListItemDivider />
      <ListItem append-icon="ri:search-line">
        Item 3
      </ListItem>
      <ListItem append-icon="ri:search-line">
        Item 4
      </ListItem>
      <ListItemDivider />
      <ListItem prepend-icon="ri:home-line" append-icon="ri:search-line">
        Item 5
      </ListItem>
      <ListItem prepend-icon="ri:user-line" append-icon="ri:arrow-downs-line">
        Item 6
      </ListItem>
    </List>
  `,
});

export const Header: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    Icon,
    ListItemHeader,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem prepend-icon="ri:user-line">
        Home
      </ListItem>
      <ListItem prepend-icon="ri:search-line">
        User Management
      </ListItem>
      <List class="mt-2">
        <ListItemHeader prepend-icon="ri:search-line">
          Blog
        </ListItemHeader>
        <ListItem prepend-icon="ri:user-line">
          Add New Post
        </ListItem>
        <ListItem prepend-icon="ri:user-line">
          View Comments
        </ListItem>
      </List>
      <List class="mt-2">
        <ListItemHeader prepend-icon="ri:user-line">
          Shop
        </ListItemHeader>
        <ListItem prepend-icon="ri:user-line">
          View Dashboard
        </ListItem>
        <ListItem prepend-icon="ri:user-line">
          Sales
        </ListItem>
      </List>
    </List>
  `,
});

export const Collapse: Story = (args) => ({
  components: {
    Icon,
    List,
    ListItem,
    ListItemDivider,
    ListItemHeader,
    ListCollapse,
  },
  setup() {
    return {args};
  },
  template: `
    <List v-bind="args">
      <ListItem prepend-icon="ri:home-2-line">
        Home
      </ListItem>
      <ListCollapse>
        <template #activator="{isOpen, toggle}">
          <ListItem
            prepend-icon="ri:book-line"
            append-icon="ri:arrow-down-s-line"
            :append-icon-class="isOpen ? 'rotate-180' : ''"
            @click="toggle"
          >
            Blog
          </ListItem>
        </template>
        <List>
          <ListItem>
            Add New Post
          </ListItem>
          <ListItem>
            View Comments
          </ListItem>
        </List>
      </ListCollapse>
      <ListCollapse>
        <template #activator="{isOpen, toggle}">
          <ListItem
            prepend-icon="ri:user-line"
            append-icon="ri:arrow-down-s-line"
            :append-icon-class="isOpen ? 'rotate-180' : ''"
            @click="toggle"
          >
            Shop
          </ListItem>
        </template>
        <List>
          <ListItem>
            View Dashboard
          </ListItem>
          <ListItem>
            Sales
          </ListItem>
        </List>
      </ListCollapse>
    </List>
  `,
});

export const Image: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    ListItemHeader,
  },
  setup() {
    const users = ref([
      {
        name: 'Alexander Hipp',
        email: 'alex@example.com',
        image:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        name: 'Julian Wann',
        email: 'julian@example.com',
        image:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
    ]);
    return {args, users};
  },
  template: `
    <List v-bind="args">
      <ListItemHeader class="font-semibold">Teams</ListItemHeader>
      <ListItem
        v-for="(user, idx) in users"
        :key="idx"
        append-icon="ri:phone-line"
        append-icon-class="text-orange-500"
        class="hover:bg-orange-100"
      >
        <template #prepend>
          <img
            :src="user.image"
            width="40"
            height="40"
            class="shrink-0 w-10 h-10 rounded object-cover"
          >
        </template>
        <div class="font-semibold">
          {{ user.name }}
        </div>
        <p class="text-sm text-gray-500">
          {{ user.email }}
        </p>
      </ListItem>
    </List>
  `,
});

export const NavDrawerList: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    VNavDrawer,
    ListCollapse,
    VBtn,
  },
  setup() {
    const isOpen = ref(false);
    const isMini = ref(false);
    const menus = ref([
      {
        title: 'Home',
        to: '/',
        prependIcon: 'ri:home-2-line',
      },
      {
        title: 'Blog',
        to: '/',
        prependIcon: 'ri:book-line',
        items: [
          {
            title: 'Posts',
            to: '/',
          },
          {
            title: 'Comments',
            to: '/',
          },
        ],
      },
      {
        title: 'Shop',
        to: '/',
        prependIcon: 'ri:user-line',
        items: [
          {
            title: 'Products',
            to: '/',
          },
          {
            title: 'Categories',
            to: '/',
          },
        ],
      },
      {
        title: 'Long Text Management Example',
        to: '/',
        prependIcon: 'ri:cart-line',
      },
    ]);
    return {args, isOpen, isMini, menus};
  },
  template: `
    <div class="sm:ml-[300px] space-x-2">
      <v-btn @click="isOpen = !isOpen">Toggle Open</v-btn>
      <v-btn @click="isMini = !isMini">Toggle Mini</v-btn>
      <pre class="mt-5">State: {{ {isOpen, isMini} }}</pre>
    </div>
    <v-nav-drawer
      v-model="isOpen"
      v-model:mini="isMini"
      hide-toggle
      class="absolute"
    >
      <template #logo.mini>
        <div class="text-center font-semibold">GITS</div>
      </template>
      <template #menus>
        <List>
          <template v-for="menu in menus" :key="menu.text">
            <ListCollapse v-if="menu.items">
              <template #activator="{isOpen, toggle}">
                <ListItem
                  v-bind="menu"
                  :class="isMini ? 'justify-center' : ''"
                  :hide-text="isMini"
                  :hide-append="isMini"
                  append-icon="ri:arrow-down-s-line"
                  :append-icon-class="isOpen ? 'rotate-180' : ''"
                  @click="toggle"
                >
                  {{ menu.title }}
                </ListItem>
              </template>
              <List>
                <ListItem
                  v-for="child in menu.items"
                  :key="child.text"
                  v-bind="child"
                  :class="isMini ? 'justify-center' : ''"
                  :hide-text="isMini"
                  :hide-append="isMini"
                >
                  {{ child.title }}
                </ListItem>
              </List>
            </ListCollapse>
            <ListItem
              v-else
              v-bind="menu"
              :class="isMini ? 'justify-center' : ''"
              :hide-text="isMini"
              :hide-append="isMini"
            >
              {{ menu.title }}
            </ListItem>
          </template>
        </List>
      </template>
    </v-nav-drawer>
  `,
});

export const IosSettings: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    Icon,
  },
  setup() {
    return {args};
  },
  template: `
    <List
      class="border rounded-xl"
    >
      <ListItem
        hover
        tile
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        <template #prepend>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            width="40"
            height="40"
            class="shrink-0 w-10 h-10 rounded-full object-cover"
          >
        </template>
        <div>
          <div class="font-semibold">John Doe</div>
          <p class="text-sm text-gray-500 truncate">
            Apple ID, iCloud+, Media & Purchases
          </p>
        </div>
      </ListItem>
    </List>
    <List
      class="border rounded-xl mt-6 divide divide-y"
    >
      <ListItem
        hover
        tile
        prepend-icon="ion:ios-airplane"
        prepend-class="p-1 bg-orange-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Airplane Mode
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ic:outline-wifi"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="Coffee Wifi"
        append-text-class="text-sm text-gray-800"
      >
        Wifi
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ri:bluetooth-line"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="On"
        append-text-class="text-sm text-gray-800"
      >
        Bluetooth
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ic:sharp-cell-tower"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Cellular
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ri:hotspot-line"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Personal Hotspot
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="material-symbols:vpn-lock"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        VPN
      </ListItem>
    </List>
  `,
});

export const ListInDropdown: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
    Dropdown,
  },
  setup() {
    return {args};
  },
  template: `
  <Dropdown label="Dropdown" panel-class="p-0">
    <List>
      <ListItem
        hover
        tile
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        <template #prepend>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
            width="40"
            height="40"
            class="shrink-0 w-10 h-10 rounded-full object-cover"
          >
        </template>
        <div>
          <div class="font-semibold">John Doe</div>
          <p class="text-sm text-gray-500 truncate">
            Apple ID, iCloud+, Media & Purchases
          </p>
        </div>
      </ListItem>
    </List>
    <List
      class="mt-6 divide divide-y border-t"
    >
      <ListItem
        hover
        tile
        prepend-icon="ion:ios-airplane"
        prepend-class="p-1 bg-orange-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Airplane Mode
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ic:outline-wifi"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="Coffee Wifi"
        append-text-class="text-sm text-gray-800"
      >
        Wifi
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ri:bluetooth-line"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
        append-text="On"
        append-text-class="text-sm text-gray-800"
      >
        Bluetooth
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ic:sharp-cell-tower"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Cellular
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="ri:hotspot-line"
        prepend-class="p-1 bg-green-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        Personal Hotspot
      </ListItem>
      <ListItem
        hover
        tile
        prepend-icon="material-symbols:vpn-lock"
        prepend-class="p-1 bg-blue-500 text-white rounded"
        append-icon="ri:arrow-right-s-line"
        append-icon-class="text-gray-500"
      >
        VPN
      </ListItem>
    </List>
  </Dropdown>
  `,
});

export const Event: Story = (args) => ({
  components: {
    List,
    ListItem,
    ListItemDivider,
  },
  setup() {
    const showMessage = (message: string) => alert(`Clicked: ${message}`);
    return {args, showMessage};
  },
  template: `
    <List>
      <ListItem prepend-icon="ri:home-2-line" @click:prependIcon="showMessage('prependIcon')">
        Click on the icon
      </ListItem>
      <ListItem append-icon="ri:user-line" @click:appendIcon="showMessage('appendIcon')">
        Click on the icon
      </ListItem>
      <ListItem prepend-class="p-1 rounded bg-cyan-500" prepend-icon="ri:home-2-line" @click:prepend="showMessage('prepend')">
        Click on the icon wrapper area
      </ListItem>
      <ListItem append-class="p-1 rounded bg-sky-500" append-icon="ri:user-line" @click:append="showMessage('append')">
        Click on the icon wrapper area
      </ListItem>
      <ListItem
        append-icon="ri:arrow-right-s-line"
        append-text="Click me"
        append-text-class="hover:underline"
        @click:appendText="showMessage('appendText')"
      >
        Click on the append text
      </ListItem>
    </List> 
  `,
});
