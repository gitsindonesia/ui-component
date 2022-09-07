import VDataTablePagination from './VDataTablePagination.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/DataTablePagination',
  component: VDataTablePagination,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    large: false,
    small: false,
    showNumber: true,
    color: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VDataTablePagination,
  },
  setup() {
    return {args};
  },
  template: `<v-data-table-pagination v-bind="args" />`,
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
    return {args};
  },
  template: `
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
    return {args};
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
