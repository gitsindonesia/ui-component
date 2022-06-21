import {Meta, Story} from '@storybook/vue3';
import ListGroup from './ListGroup.vue';
import ListItem from './ListItem.vue';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story = (args) => ({
  components: {
    ListItem,
  },
  setup() {
    return {args};
  },
  template: `
    <div class="space-y-2">
      <ListItem v-for="i in 5" :key="i">Item {{ i }}</ListItem>
    </div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<ListItem>Item text</ListItem>`,
    },
  },
};
