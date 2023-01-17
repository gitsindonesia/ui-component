import {Story} from '@storybook/vue3';
import {ref} from 'vue';
import VCollapsible from './VCollapsible.vue';
import VCollapsibleGroup from './VCollapsibleGroup.vue';

export default {
  title: 'Components/Collapsible',
  component: VCollapsible,
  args: {
    modelValue: false,
    hideIcon: false,
    title: 'Title',
    headerClass: 'font-semibold',
    activeClass: '',
    inactiveClass: '',
    wrapperClass: 'mb-5',
    activatorClass: '',
    panelClass: 'px-4 pb-4',
  },
};

const Template: Story<{}> = (args) => ({
  components: {VCollapsible},
  setup() {
    const isOpen = ref(false);

    return {args, isOpen};
  },
  template: `<VCollapsible v-model="isOpen" v-bind='args'>
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapsible>
  `,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-collapsible :items="items" />`,
    },
  },
};

export const AutoOpen = Template.bind({});
AutoOpen.args = {
  modelValue: true,
};
AutoOpen.parameters = {
  docs: {
    source: {
      code: `<v-collapsible :model-value="true" :items="items" />`,
    },
  },
};

export const HideIcon = Template.bind({});
HideIcon.args = {
  hideIcon: true,
};
HideIcon.parameters = {
  docs: {
    source: {
      code: `<v-collapsible hide-icon :items="items" />`,
    },
  },
};

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  headerClass: '',
  activeClass: 'font-semibold text-red-500 bg-red-200 rounded-t-lg',
  inactiveClass: 'text-red-500 bg-red-50',
  wrapperClass: 'rounded-lg',
  activatorClass: 'hover:bg-red-200 hover:text-red-500',
  panelClass: 'border p-4 rounded-b-lg',
};
CustomClasses.parameters = {
  docs: {
    source: {
      code: `<v-collapsible
  :items="items"
  header-class="",
  active-class="font-semibold text-red-500 bg-red-200 rounded-t-lg",
  inactive-class="text-red-500 bg-red-50",
  wrapper-class="rounded-lg",
  activator-class="hover:bg-red-200 hover:text-red-500",
  panel-class="border p-4 rounded-b-lg",
/>`,
    },
  },
};

export const Accordion: Story = (args) => ({
  components: {VCollapsibleGroup, VCollapsible},
  setup() {
    const items = Array.from({length: 5}, (v, k) => ({
      title: `Item ${k + 1}`,
      content: `Content ${k + 1}`,
    }));
    return {args, items};
  },
  template: `
    <VCollapsibleGroup accordion :items="items">
      <!--
      <VCollapsible v-for="i in 5" :key="i" title="Item">
      Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
      </VCollapsible>
      -->
    </VCollapsibleGroup>
  `,
});
Accordion.parameters = {
  docs: {
    source: {
      code: `<v-collapsible accordion :items="items" />`,
    },
  },
};

export const DarkMode: Story<{}> = (args) => ({
  components: {VCollapsible},
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      args,
    };
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <VCollapsible v-model="isOpen" v-bind='args'>
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapsible>
</main>
`,
});
