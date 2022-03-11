import {Meta, Story} from '@storybook/vue3';
import VCard from './VCard.vue';

export default {
  title: 'Components/Card',
  component: VCard,
  argTypes: {},
  args: {
    title: 'Header',
    body: 'Body',
    footer: 'Footer',
    headerClass: '',
    footerClass: '',
    bodyClass: '',
    hideHeader: false,
    hideFooter: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VCard},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-card v-bind='args'>
  <template #header>
    {{args.title}}
  </template>
  <template #footer>
    {{args.footer}}
  </template>
  Body
  </v-card>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header">Body</v-card>',
    },
  },
};

export const CustomSlots = Template.bind({});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<v-card>
  <template #header>
    My Header
  </template>
  <template #footer>
    My Footer
  </template>
  Body
</v-card>`,
    },
  },
};
