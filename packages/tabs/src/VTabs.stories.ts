import VTabs from './VTabs.vue';
import VCard from '@gits-id/card';
import {ref} from 'vue';
import {Story} from '@storybook/vue3';

function createItems(len = 20, additionalItem = {}) {
  return [...Array(20)].map((v, k) => ({
    text: `Tab Item ${k + 1}`,
    ...additionalItem,
  }));
}

export default {
  title: 'Components/Tabs',
  component: VTabs,
  argTypes: {},
  args: {
    modelValue: 0,
    items: createItems(),
    itemText: 'text',
    itemValue: '',
    showArrows: false,
    vertical: false,
    hideSlider: false,
    // color: '',
  },
};

const Template: Story<{}> = (args) => ({
  components: {VTabs},
  setup() {
    return {args};
  },
  template: `<v-tabs v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-tabs :items="items" />`,
    },
  },
};

export const CustomActiveClass = Template.bind({});
CustomActiveClass.args = {
  hideSlider: true,
  items: createItems(10, {
    defaultClass: '!rounded-lg',
    inactiveClass: 'hover:bg-success-50 hover:!text-success-600',
    activeClass: 'bg-success-50 rounded-t text-success-600 font-semibold',
  }),
};
CustomActiveClass.parameters = {
  docs: {
    source: {
      code: `<v-tabs
  :items="createItems(10, {
    defaultClass: '!rounded-lg',
    inactiveClass: 'hover:bg-success-50 hover:!text-success-600',
    activeClass: 'bg-success-50 rounded-t text-success-600 font-semibold',
  })"
  hide-slider
/>`,
    },
  },
};

export const ShowArrows = Template.bind({});
ShowArrows.args = {
  showArrows: true,
};
ShowArrows.parameters = {
  docs: {
    source: {
      code: `<v-tabs :items="items" show-arrows />`,
    },
  },
};

export const CenterActive = Template.bind({});
CenterActive.args = {
  centerActive: true,
};
CenterActive.parameters = {
  docs: {
    source: {
      code: `<v-tabs :items="items" center-active />`,
    },
  },
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};
Vertical.parameters = {
  docs: {
    source: {
      code: `<v-tabs :items="items" vertical />`,
    },
  },
};

export const TabsWithCard: Story<{}> = (args) => ({
  components: {VTabs, VCard},
  setup() {
    const tab = ref(0);
    return {args, tab};
  },
  template: `<VCard body-class="!p-0" hide-header hide-footer>
    <VTabs v-model="tab" v-bind="args"/>
    <div class="px-4 py-2">Tab Content {{ tab }}</div>
  </VCard>`,
});
TabsWithCard.parameters = {
  docs: {
    source: {
      code: `
<VCard body-class="!p-0" hide-header hide-footer>
  <VTabs v-model="tab" v-bind="args"/>
  <div class="px-4 py-2">Tab Content {{ tab }}</div>
</VCard>
      `,
    },
  },
};
