import {Meta, Story} from '@storybook/vue3';
import {Icon} from '@iconify/vue';
import ListGroup from './ListGroup.vue';
import ListItem from './ListItem.vue';
import ListItemDivider from './ListItemDivider.vue';
import ListItemHeader from './ListItemHeader.vue';
import ListCollapse from './ListCollapse.vue';

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
            prepend
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
