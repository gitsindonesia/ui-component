import {Story} from '@storybook/vue3';
import {ref} from 'vue';
import MyCollapse from './VCollapse.vue';
import MyCollapsible from './VCollapsible.vue';
import MyCollapsibleGroup from './VCollapsibleGroup.vue';

export default {
  title: 'Components/Collapsible',
  component: MyCollapsible,
  args: {
    modelValue: false,
    title: 'Title',
    headerClass: 'font-bold',
    activeClass: '',
    inactiveClass: '',
    wrapperClass: 'mb-5',
    activatorClass: '',
    panelClass: 'px-4 pb-4',
  },
};

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MyCollapsible},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const isOpen = ref(false);

    return {args, isOpen};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<MyCollapsible v-model="isOpen" v-bind='args'>
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </MyCollapsible>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const AutoOpen = Template.bind({});
AutoOpen.args = {
  modelValue: true,
};

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  headerClass: '',
  activeClass: 'font-bold text-red-500 bg-red-200 rounded-t-lg',
  inactiveClass: 'text-red-500 bg-red-50',
  wrapperClass: 'rounded-lg',
  activatorClass: 'hover:bg-red-200 hover:text-red-500',
  panelClass: 'border p-4 rounded-b-lg',
};

// export const Group: Story<{}> = (args) => ({
//   // Components used in your story `template` are defined in the `components` object
//   components: {MyCollapsible},
//   // The story's `args` need to be mapped into the template through the `setup()` method
//   setup() {
//     return {args};
//   },
//   // And then the `args` are bound to your component with `v-bind="args"`
//   template: `<MyCollapsible v-for="i in 5" :key="i" v-bind='args'>
//     Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
//   </MyCollapsible>`,
// });

export const Accordion = (args) => ({
  components: {MyCollapsibleGroup, MyCollapsible},
  setup() {
    const items = Array.from({length: 5}, (v, k) => ({
      title: `Item ${k + 1}`,
      content: `Content ${k + 1}`,
    }));
    return {args, items};
  },
  template: `
    <MyCollapsibleGroup accordion :items="items">
      <!--
      <MyCollapsible v-for="i in 5" :key="i" title="Item">
      Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
      </MyCollapsible>
      -->
    </MyCollapsibleGroup>
  `,
});
