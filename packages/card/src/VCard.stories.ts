import {Meta, Story} from '@storybook/vue3';
import VCard from './VCard.vue';
import VBtn from '@gits-id/button';

export default {
  title: 'Components/Card',
  component: VCard,
  argTypes: {},
  args: {
    title: 'Title',
    body: 'Body',
    footer: 'Footer',
    headerClass: '',
    footerClass: '',
    bodyClass: '',
    hideHeader: false,
    hideFooter: false,
    bordered: false,
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
  {{ args.body }}
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

export const HideFooter = Template.bind({});
HideFooter.args = {
  hideFooter: true,
};
HideFooter.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-footer>Body</v-card>',
    },
  },
};

export const HideHeader = Template.bind({});
HideHeader.args = {
  hideHeader: true,
};
HideHeader.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-header>Body</v-card>',
    },
  },
};

export const BodyOnly = Template.bind({});
BodyOnly.args = {
  hideHeader: true,
  hideFooter: true,
};
BodyOnly.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" hide-header hide-footer>Body</v-card>',
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" bordered>Body</v-card>',
    },
  },
};

export const CustomSlots: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VCard, VBtn},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
<v-card v-bind='args' header-class="items-center" footer-class="gap-2">
  <template #header>
    <div>My Header</div>
  </template>
  <template #footer>
    <v-btn color="primary">Agree</v-btn>
    <v-btn>Cancel</v-btn>
  </template>
  
  <p class="text-gray-600">lorem ipsum body</p>
</v-card>
`,
});
CustomSlots.parameters = {
  docs: {
    source: {
      code: `<v-card header-class="items-center" footer-class="gap-2">
  <template #header>
    <div>My Header</div>
  </template>
  <template #footer>
      <v-btn color="primary">Agree</v-btn>
      <v-btn>Cancel</v-btn>
  </template>
  
  <p class="text-gray-600">lorem ipsum body</p>
</v-card>`,
    },
  },
};

export const Flat = Template.bind({});
Flat.args = {
  flat: true,
};
Flat.parameters = {
  docs: {
    source: {
      code: '<v-card title="Header" flat>Body</v-card>',
    },
  },
};
