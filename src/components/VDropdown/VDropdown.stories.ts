import MyDropdown from './VDropdown.vue';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/Dropdown',
  component: MyDropdown,
  argTypes: {},
  args: {
    items: [
      {
        name: 'Item 1',
        description: 'Description',
      },
      {
        name: 'Item 2',
        description: 'Description',
      },
      {
        name: 'Item No Desc',
        // description: 'Description',
      },
    ],
    right: false,
    label: 'Menu',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MyDropdown},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="flex justify-center"><MyDropdown v-bind="args">${args.label}</MyDropdown></div>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Right = Template.bind({});
Right.args = {
  right: true,
};
