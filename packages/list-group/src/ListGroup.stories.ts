import {Meta, Story} from '@storybook/vue3';
import {Icon} from '@iconify/vue';
import ListGroup from './ListGroup.vue';
import ListItem from './ListItem.vue';
import ListItemDivider from './ListItemDivider.vue';
import ListItemHeader from './ListItemHeader.vue';
import ListCollapse from './ListCollapse.vue';
import vueRouter from 'storybook-vue3-router';
import {ref} from 'vue';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {},
  args: {},
} as Meta;

export const BasicList: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItemDivider />
      <ListItem>Item 3</ListItem>
      <ListItemDivider />
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </ListGroup>
  `,
});

export const Hover: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem hover>Default</ListItem>
      <ListItem hover hover-class="hover:bg-primary-200 hover:text-primary-700">
        Custom Class
      </ListItem>
      <ListItem hover hover-class="group-hover:bg-orange-200 group-hover:text-orange-700">
        Group Hover
      </ListItem>
    </ListGroup>
  `,
});

export const Shaped: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem hover shaped v-for="i in 5" :key="i">Item</ListItem>
      <ListItem hover shaped shaped-class="rounded-l-full">
        Custom Shaped Class
      </ListItem>
    </ListGroup>
  `,
});

export const HidePrependAppend: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem hide-prepend>Item 1</ListItem>
      <ListItem hide-prepend hide-append>Item 2</ListItem>
    </ListGroup>
    <ListGroup v-bind="args" hide-prepend hide-append v-slot="props">
      <ListItem v-bind="props">Item 3</ListItem>
      <ListItem v-bind="props">Item 4</ListItem>
    </ListGroup>
  `,
});

export const TwoLine: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
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
    </ListGroup>
  `,
});

export const ThreeLine: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
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
    </ListGroup>
  `,
});

export const Link: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem to="/">Home</ListItem>
      <ListItem to="/profile">Profile</ListItem>
      <ListItem href="/settings">Settings</ListItem>
      <ListItem href="/logout">Logout</ListItem>
    </ListGroup>
  `,
});

Link.decorators = [vueRouter()];

export const Slots: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
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
    </ListGroup>
  `,
});

export const Icons: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
    Icon,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
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
    </ListGroup>
  `,
});

export const Header: Story = (args) => ({
  components: {
    ListGroup,
    ListItem,
    ListItemDivider,
    Icon,
    ListItemHeader,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
      <ListItem prepend-icon="ri:user-line">
        Home
      </ListItem>
      <ListItem prepend-icon="ri:search-line">
        User Management
      </ListItem>
      <ListGroup class="mt-2">
        <ListItemHeader prepend-icon="ri:search-line">
          Blog
        </ListItemHeader>
        <ListItem prepend-icon="ri:user-line">
          Add New Post
        </ListItem>
        <ListItem prepend-icon="ri:user-line">
          View Comments
        </ListItem>
      </ListGroup>
      <ListGroup class="mt-2">
        <ListItemHeader prepend-icon="ri:user-line">
          Shop
        </ListItemHeader>
        <ListItem prepend-icon="ri:user-line">
          View Dashboard
        </ListItem>
        <ListItem prepend-icon="ri:user-line">
          Sales
        </ListItem>
      </ListGroup>
    </ListGroup>
  `,
});

export const Collapse: Story = (args) => ({
  components: {
    Icon,
    ListGroup,
    ListItem,
    ListItemDivider,
    ListItemHeader,
    ListCollapse,
  },
  setup() {
    return {args};
  },
  template: `
    <ListGroup v-bind="args">
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
        <ListGroup>
          <ListItem>
            Add New Post
          </ListItem>
          <ListItem>
            View Comments
          </ListItem>
        </ListGroup>
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
        <ListGroup>
          <ListItem>
            View Dashboard
          </ListItem>
          <ListItem>
            Sales
          </ListItem>
        </ListGroup>
      </ListCollapse>
    </ListGroup>
  `,
});

export const Image: Story = (args) => ({
  components: {
    ListGroup,
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
    <ListGroup v-bind="args">
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
    </ListGroup>
  `,
});
