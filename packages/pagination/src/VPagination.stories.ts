import {Meta, Story} from '@storybook/vue3';
import VPagination from './VPagination.vue';

export default {
  title: 'Components/Pagination',
  component: VPagination,
  argTypes: {
    btnLast: { control: { type: 'text' }, defaultValue: '', table: { category: 'Slots'} },
    btnFirst: { control: { type: 'text' }, defaultValue: '', table: { category: 'Slots'} },
    btnNext: { control: { type: 'text' }, defaultValue: '', table: { category: 'Slots'} },
    btnPrev: { control: { type: 'text' }, defaultValue: '', table: { category: 'Slots'} },
  },
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    large: false,
    small: false,
    showFirst: true,
    showPrevious: true,
    showNext: true,
    showLast: true,
    showNumber: true,
    siblingCount: 1,
    boundaryCount: 1,
    simple: false,
    btnLast: ''
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'v-pagination': VPagination,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-pagination v-bind="args" data-test="fasdasd">{{ args.label }}<template v-slot:btnLast><footer v-if="args.btnLast" v-html="args.btnLast" /></template></v-pagination>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" />',
    },
  },
};

export const Small = Template.bind({});
Small.args = {small: true};
Small.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" small />',
    },
  },
};

export const Large = Template.bind({});
Large.args = {large: true};
Large.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" large />',
    },
  },
};

export const Simple = Template.bind({});
Simple.args = {simple: true};
Simple.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" simple />',
    },
  },
};
