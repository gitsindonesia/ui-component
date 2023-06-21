import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@morpheme/utils';
import VSelect from './VDynamicSelect.vue';
import {ref} from 'vue';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Experimental/DynamicSelect',
  component: VSelect,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    items,
  },
} as Meta;

const Template: Story<typeof VSelect> = (args) => ({
  components: {
    VSelect,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <v-select v-bind="args" v-model="value" />
    <pre class="mt-2">Model Value: {{ value }}</pre>
  `,
});

export const Select = Template.bind({});
Select.args = {};
Select.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" />',
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};
Multiple.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" multiple />',
    },
  },
};
