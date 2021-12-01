import VBreadcrumbs from './VBreadcrumbs.vue';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/Breadcrumbs',
  component: VBreadcrumbs,
  argTypes: {},
  args: {
    items: [...Array(5)].map((v, k) => ({
      title: `Link ${k + 1}`,
      to: '/',
    })),
    divider: '/',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VBreadcrumbs},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VBreadcrumbs v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomDivider = Template.bind({});
CustomDivider.args = {
  divider: '-',
};

// export const Breadcrumbs = (args) => ({
//   components: {VBreadcrumbs},
//   setup() {
//     return {args};
//   },
//   template: `<div class="container mx-auto"><VBreadcrumbs v-bind="args" /></div>`,
// });
