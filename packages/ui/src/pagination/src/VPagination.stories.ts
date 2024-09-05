import type {Meta, StoryFn} from '@storybook/vue3';
import VPagination from './VPagination.vue';

const variants = ['default', 'text', 'text-rounded'];

export default {
  title: 'Components/Pagination',
  component: VPagination,
  argTypes: {
    btnLast: {
      control: {type: 'text'},
      defaultValue: '',
      table: {category: 'Slots'},
    },
    btnFirst: {
      control: {type: 'text'},
      defaultValue: '',
      table: {category: 'Slots'},
    },
    btnNext: {
      control: {type: 'text'},
      defaultValue: '',
      table: {category: 'Slots'},
    },
    btnPrev: {
      control: {type: 'text'},
      defaultValue: '',
      table: {category: 'Slots'},
    },
  },
  args: {
    totalItems: 100,
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
    btnLast: '',
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: {VPagination},
  setup() {
    return {args};
  },
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

export const Simple = Template.bind({});
Simple.args = {simple: true};
Simple.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" simple />',
    },
  },
};

export const Flat = Template.bind({});
Flat.args = {flat: true};
Flat.parameters = {
  docs: {
    source: {
      code: '<v-pagination :total-items="30" :items-per-page="10" flat />',
    },
  },
};

export const Sizes: StoryFn = (args) => ({
  components: {VPagination},
  setup() {
    return {args};
  },
  template: `
  <v-pagination v-bind="args" class="mb-2" data-test="fasdasd" size="sm" />
  <v-pagination v-bind="args" class="mb-2" data-test="fasdasd" />
  <v-pagination v-bind="args" class="mb-2" data-test="fasdasd" size="lg" />
  `,
});

export const CustomStyle: StoryFn = (args) => ({
  components: {VPagination},
  setup() {
    return {args};
  },
  template: `
  <v-pagination v-bind="args" data-test="fasdasd" :style="{
    '--v-pagination-item-active-bg-color': 'purple',
    '--v-pagination-item-active-border-color': 'purple',
  }" />
  `,
});

export const Slots: StoryFn = (args) => ({
  components: {VPagination},
  setup() {
    return {args};
  },
  template: `
  <v-pagination
    v-bind="args"
    data-test="fasdasd"
  >
    <template #btnPrev>Prev</template>
    <template #btnNext>Next</template>
    <template #btnFirst>First</template>
    <template #btnLast>Last</template>
  </v-pagination>
  `,
});

export const Variants: StoryFn = (args) => ({
  components: {VPagination},
  setup() {
    return {args, variants};
  },
  template: `
  <v-pagination
    v-bind="args"
    v-for="variant in variants"
    :key="variant"
    :variant="variant"
    class="mb-4"
   />
  `,
});

export const DarkMode: StoryFn = (args) => ({
  components: {
    VPagination,
  },
  setup() {
    return {args, variants};
  },
  template: `
<div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <v-pagination
  v-bind="args"
    v-for="variant in variants"
    :key="variant"
    :variant="variant"
    class="mb-4"
  />
</div>
  `,
});
