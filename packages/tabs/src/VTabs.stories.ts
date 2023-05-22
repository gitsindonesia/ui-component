import VTabs from './VTabs.vue';
import VTab from './VTab.vue';
import VBtn from '@morpheme/button';
import VCard from '@morpheme/card';
import {ref} from 'vue';
import {Story} from '@storybook/vue3';
import VTabsSlider from './VTabsSlider.vue';

function createItems(len = 20, additionalItem = {}) {
  return [...Array(20)].map((v, k) => ({
    text: `Tab Item ${k + 1}`,
    ...additionalItem,
  }));
}

export default {
  components: {VTabsSlider},
  title: 'Components/Tabs',
  component: VTabs,
  argTypes: {},
  args: {
    modelValue: 0,
    items: createItems(),
  },
};

const Template: Story<{}> = (args) => ({
  components: {VTabs},
  setup() {
    const items = ref(args.items || []);

    return {args, items};
  },
  template: `
    <v-tabs v-bind="args" v-model:items="items" />`,
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

export const Colors: Story<{}> = (args) => ({
  components: {VTabs},
  setup() {
    return {args};
  },
  template: `
    <v-tabs v-bind="args" />
    <v-tabs v-bind="args" color="secondary" />
    <v-tabs v-bind="args" color="info" />
    <v-tabs v-bind="args" color="warning" />
    <v-tabs v-bind="args" color="success" />
    <v-tabs v-bind="args" color="error" />
  `,
});
Colors.parameters = {
  docs: {
    source: {
      code: `
<v-tabs :items="items" color="secondary" />
<v-tabs v-bind="args" color="secondary" />
<v-tabs v-bind="args" color="info" />
<v-tabs v-bind="args" color="warning" />
<v-tabs v-bind="args" color="success" />
<v-tabs v-bind="args" color="error" />
      `,
    },
  },
};

export const CustomActiveClass = Template.bind({});
CustomActiveClass.args = {
  hideSlider: true,
  items: createItems(10, {
    defaultClass: '!rounded-lg',
    inactiveClass: 'hover:!bg-success-50 hover:!text-success-600',
    activeClass: '!bg-success-50 rounded-t !text-success-600 !font-bold',
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
  template: `
    <VCard body-class="!p-0" hide-header hide-footer>
      <VTabs v-model="tab" v-bind="args" />
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

export const CustomStyle: Story<{}> = (args) => ({
  components: {VTabs},
  setup() {
    const tab = ref(0);
    return {args, tab};
  },
  template: `
    <VTabs
      v-model="tab"
      v-bind="args"
      :style="{
        '--v-tabs-item-padding-x': '1rem',
        '--v-tabs-item-padding-y': '0.25rem',
        '--v-tabs-item-active-bg-color': 'purple',
        '--v-tabs-item-active-text-color': 'white',
        '--v-tabs-item-hover-bg-color': 'purple',
        '--v-tabs-item-hover-text-color': 'white',
        '--v-tabs-slider-height': '5px',
        '--v-tabs-slider-bg-color': 'pink',
        '--v-tabs-slider-border-color': 'pink',
      }"
    />
  `,
});

export const Removeable: Story<{}> = (args) => ({
  components: {VTabs, VTab, VTabsSlider},
  setup() {
    const selectedTab = ref(2);
    const items = ref(
      new Array(10).fill({}).map((e, idx) => ({text: `Tab ${idx}`})),
    );
    return {args, selectedTab, items};
  },
  template: `
    <VTabs
      v-bind="args"
      v-model:model-value="selectedTab"
      v-model:items="items"
      removeable
    />
  `,
});

Removeable.parameters = {
  docs: {
    source: {
      code: `
<VTabs
  v-model:model-value="selectedTab"
  v-model:items="items"
  removeable
/>
      `,
    },
  },
};

export const CustomTabContent: Story<{}> = (args) => ({
  components: {VTabs, VBtn},
  setup() {
    const tab = ref(0);
    const simple = ref(false);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab, simple};
  },
  template: `
    <VBtn @click="simple = !simple;">
    Click me to toggle simplified tabs view
    </VBtn>

    <VTabs
      v-bind="args"
      v-model="tab"
      :items="items"
    >
    <template v-slot:item="{index, item, value, active}">
      <div class="inline-block">
        {{ !simple ? value : '' }} {{ item.icon }}

        <span v-if="active" class="text-red-700" style="font-size: 10px; vertical-align: middle;">
            {{ index }}
          </span>
      </div>
    </template>
    </VTabs>
  `,
});
CustomTabContent.parameters = {
  docs: {
    source: {
      code: `
<VTabs
v-model="tab"
:items="items"
>
  <template v-slot:item="{index, item, value, active}">
    <div class="inline-block">
      {{ value }} {{ item.icon }}
    
      <span v-if="active" class="text-red-700" style="font-size: 10px; vertical-align: middle;">
          {{ index }}
        </span>
    </div>
  </template>
</VTabs>
      `,
    },
  },
};

export const CustomTab: Story<{}> = (args) => ({
  components: {VTabs, VTab},
  setup() {
    const tab = ref(0);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab};
  },
  template: `
    <VTabs
      v-model="tab"
    >
    <template v-slot:default="{onClick, registerRef, }">
      <VTab
        v-bind="item"
        v-for="(item, index) in items"
        :key="index"
        :index="index"
        :get-ref="registerRef"
        class='TEST_CLASS'
        @click="onClick"
      >
        <div class="inline-block">
          {{ item.text }} {{ item.icon }}

          <span v-if="tab  === index" class="text-red-700" style="font-size: 10px; vertical-align: middle;">
            {{ index }}
          </span>
        </div>
      </VTab>
    </template>
    </VTabs>
  `,
});

export const Prepend: Story<{}> = (args) => ({
  components: {VTabs, VTab},
  setup() {
    const tab = ref(0);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab};
  },
  template: `
    <VTabs
      v-bind="args"
      v-model="tab"
      :items="items"
    >
    <template #prepend>
      <div class="bg-[yellow] whitespace-nowrap uppercase p-3 mr-2 rounded-full">
        🎒
      </div>
    </template>
    </VTabs>
  `,
});

export const Append: Story<{}> = (args) => ({
  components: {VTabs, VTab},
  setup() {
    const tab = ref(0);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab};
  },
  template: `
    <VTabs
      v-bind="args"
      v-model="tab"
      :items="items"
    >
    <template #append>
      <button title="See? I've been appended!">
        ❓
      </button>
    </template>
    </VTabs>
  `,
});

export const Previous: Story<{}> = (args) => ({
  components: {VTabs, VBtn},
  setup() {
    const tab = ref(0);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab};
  },
  template: `
    <VTabs
      v-bind="args"
      v-model="tab"
      :items="items"
      show-arrows
    >
    <template v-slot:previous="{onClick}">
      <VBtn prefix-icon="ri:arrow-left-s-line" class="mr-2" @click="onClick" />
    </template>
    </VTabs>
  `,
});

export const Next: Story<{}> = (args) => ({
  components: {VTabs, VBtn},
  setup() {
    const tab = ref(0);
    const items = ref([
      {
        text: 'Fruits',
        icon: '🥑',
      },
      {
        text: 'Meat',
        icon: '🥩',
      },
      {
        text: 'Veggies',
        icon: '🥦',
      },
      {
        text: 'Bread',
        icon: '🍞',
      },
      {
        text: 'Fish',
        icon: '🐟',
      },
    ]);

    return {args, items, tab};
  },
  template: `
    <VTabs
      v-bind="args"
      v-model="tab"
      :items="items"
      show-arrows
    >
    <template v-slot:next="{onClick}">
      <VBtn prefix-icon="ri:arrow-right-s-line" class="ml-2" @click="onClick" />
    </template>
    </VTabs>
  `,
});

export const DarkMode: Story = (args) => ({
  components: {VTabs},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VTabs v-bind='args'/>
  </div>
  `,
});
