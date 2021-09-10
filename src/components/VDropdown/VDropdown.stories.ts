import MyDropdown from './VDropdown.vue';
import {Story, Meta} from '@storybook/vue3';

const items = Array.from({length: 5}).map((v, k) => ({
  text: `Item ${k + 1}`,
  value: k + 1,
  onClick: () => {
    alert('You clicked me!');
  },
}));

export default {
  title: 'Components/Dropdown',
  component: MyDropdown,
  argTypes: {},
  args: {
    items,
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

export const CustomButtonProps = Template.bind({});
CustomButtonProps.args = {
  right: true,
  btnProps: {
    text: true,
    color: 'primary',
  },
};
