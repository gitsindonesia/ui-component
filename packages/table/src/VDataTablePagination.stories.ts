import { themeColors } from '@morpheme/utils/colors';
import { Args, Meta, Story } from '@storybook/vue3';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import VDataTablePagination from './VDataTablePagination.vue';

export default {
  title: 'Components/DataTablePagination',
  component: VDataTablePagination,
  argTypes: {
    color: {
      control: { type: 'select', options: themeColors },
    },
    btnLast: {
      control: { type: 'text' },
      defaultValue: '',
      table: { category: 'Slots' },
    },
    btnFirst: {
      control: { type: 'text' },
      defaultValue: '',
      table: { category: 'Slots' },
    },
    btnNext: {
      control: { type: 'text' },
      defaultValue: '',
      table: { category: 'Slots' },
    },
    btnPrev: {
      control: { type: 'text' },
      defaultValue: '',
      table: { category: 'Slots' },
    },
  },
  args: {
    totalItems: 30,
    itemsPerPage: 10,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    const { btnLast, btnFirst, btnNext, btnPrev } = args;

    const argsWSlots: Args = {
      args: args,
      $slots: {},
    };

    // added `$slot` prop to `args` so we can easily access it in storybook template
    for (const [key, value] of Object.entries({
      btnPrev,
      btnNext,
      btnFirst,
      btnLast,
    })) {
      if (value !== undefined && value !== null && value !== '') {
        argsWSlots.$slots[key] = value;
      }
    }

    return { args: argsWSlots };
  },
  template: `<v-data-table-pagination v-bind="args.args">
  <template v-for="(content, name) in args.$slots" v-slot:[name]>{{content}}</template>
  </v-data-table-pagination>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-data-table-pagination :total-items="30" :items-per-page="10" />`,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: `<v-data-table-pagination :total-items="30" :items-per-page="10" small />`,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};
Large.parameters = {
  docs: {
    source: {
      code: `<v-data-table-pagination :total-items="30" :items-per-page="10" large />`,
    },
  },
};

export const HideFirstAndLast = Template.bind({});
HideFirstAndLast.args = {
  showFirst: false,
  showLast: false,
};
HideFirstAndLast.parameters = {
  docs: {
    source: {
      code: `<v-data-table-pagination :total-items="30" :items-per-page="10" :show-first="false" :show-last="false" />`,
    },
  },
};

export const RowsPerPageSlot: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    const page = ref(1);
    const itemsPerPage = ref(10);
    const { values } = useForm({});

    return { args, values, page, itemsPerPage };
  },
  template: `
    <div>
      <v-data-table-pagination
        v-bind="args"
        v-model="page"
        v-model:itemsPerPage="itemsPerPage"
      >
        <template #rowsPerPage="{value, items}">
          <select v-model="itemsPerPage">
            <option v-for="item in items" :value="item.value">
              {{ item.text }}
            </option>
          </select>
        </template>
      </v-data-table-pagination>
      <v-data-table-pagination v-bind='args' v-model="page" v-model:itemsPerPage="itemsPerPage" />
    </div>
  `,
});
RowsPerPageSlot.parameters = {
  docs: {
    source: {
      code: `
<v-data-table-pagination v-bind="args">
  <template #rowsPerPage="{value, items}">
    <select :value="value">
      <option v-for="item in items" :value="item.value">
        {{ item.text }}
      </option>
    </select>
  </template>
</v-data-table-pagination> 
      `,
    },
  },
};

export const MetaSlot: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    return { args };
  },
  template: `
    <v-data-table-pagination v-bind="args">
    <template #meta="{showingText, start, end, fromText, totalItems, dataText}">
      {{ showingText }} {{ start }} to {{ end }} of {{ totalItems }} {{ dataText }}
    </template>
    </v-data-table-pagination>
  `,
});
MetaSlot.parameters = {
  docs: {
    source: {
      code: `
<v-data-table-pagination v-bind="args">
  <template #meta="{showingText, start, end, fromText, totalItems, dataText}">
    {{ showingText }} {{ start }} to {{ end }} of {{ totalItems }} {{ dataText }}
  </template>
</v-data-table-pagination> 
      `,
    },
  },
};

export const CustomClass: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    return { args };
  },
  template: `
    <v-data-table-pagination v-bind="args" class="THIS__SHOULD__NOT__BLEED" />
  `,
});
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-data-table-pagination v-bind="args" class="THIS__SHOULD__NOT__BLEED" />
      `,
    },
  },
};

export const PassingPaginationProps: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    return { args };
  },
  template: `
    <v-data-table-pagination v-bind="args" :pagination="{showFirst: false, showLast: false}" />
  `,
});
PassingPaginationProps.parameters = {
  docs: {
    source: {
      code: `
<v-data-table-pagination v-bind="args" :pagination="{showFirst: false, showLast: false}" />
      `,
    },
  },
};

export const DarkMode: Story<{}> = (args) => ({
  components: { VDataTablePagination },
  setup() {
    return { args };
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <VDataTablePagination v-bind="args" />
</main>
`,
});
