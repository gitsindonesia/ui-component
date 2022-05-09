import VBreadcrumbs from './VBreadcrumbs.vue';
import {Meta, Story} from '@storybook/vue3';
import {RiArrowRightSLine} from 'vue-remix-icons';
import vueRouter from 'storybook-vue3-router';

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

Template.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-breadcrumbs :items="items"/>`,
    },
  },
};

export const CustomDivider = Template.bind({});
CustomDivider.args = {
  divider: '-',
};
CustomDivider.parameters = {
  docs: {
    source: {
      code: `<v-breadcrumbs :items="items" divider="-"/>`,
    },
  },
};

export const CustomDividerSlots: Story = (args) => ({
  components: {VBreadcrumbs, RiArrowRightSLine},
  setup() {
    return {args};
  },
  template: `<div class="container mx-auto">
  <v-breadcrumbs v-bind="args">
    <template #divider>
      <RiArrowRightSLine class="fill-current w-5 h-5 text-gray-500" />
    </template>
  </v-breadcrumbs>
</div>`,
});
CustomDividerSlots.parameters = {
  docs: {
    source: {
      code: `
<v-breadcrumbs :items="items">
  <template #divider>
    <RiArrowRightSLine class="fill-current w-5 h-5 text-gray-500" />
  </template>
</v-breadcrumbs>
`,
    },
  },
};

CustomDividerSlots.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];
