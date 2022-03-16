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
  // Components used in your story `template` are defined in the `components` object
  components: {VTabs},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const tab = ref(0);
    return {args, tab};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-tabs v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomActiveClass = Template.bind({});
CustomActiveClass.args = {
  hideSlider: true,
  items: createItems(10, {
    defaultClass: '!rounded-lg',
    inactiveClass: 'hover:bg-success-50 hover:!text-success-600',
    activeClass: 'bg-success-50 rounded-t text-success-600 font-semibold',
  }),
};

export const ShowArrows = Template.bind({});
ShowArrows.args = {
  showArrows: true,
};

export const CenterActive = Template.bind({});
CenterActive.args = {
  centerActive: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
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
