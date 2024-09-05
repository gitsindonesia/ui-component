import type { Story } from '@storybook/vue3';
import { ref } from 'vue';
import VCollapse from './VCollapse.vue';
import VBtn from '../../button/src';
import {
  List as VList,
  ListItem as VListItem,
  ListItemHeader as VListItemHeader,
} from '../../list/src';

export default {
  title: 'Components/Collapse',
  component: VCollapse,
  args: {},
};

export const Default: Story<{}> = (args) => ({
  components: { VCollapse, VBtn },
  setup() {
    const isOpen = ref(false);

    return { args, isOpen };
  },
  template: `
  <VBtn @click="isOpen = !isOpen"> Toggle </VBtn>
  <VCollapse :show="isOpen">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui. Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapse>
  `,
});

export const ExpandedList: Story<{}> = (args) => ({
  components: { VCollapse, VList, VListItem, VListItemHeader },
  setup() {
    const items = ref([
      {
        question: 'What is Morpheme?',
        answer: 'Morpheme is a collection of UI components for Vue 3.',
        isOpen: true,
      },
      {
        question: 'What is Vue 3?',
        answer: 'Vue 3 is the latest version of the Vue framework.',
        isOpen: false,
      },
      {
        question: 'What is the difference between Vue 2 and Vue 3?',
        answer: 'Vue 3 is faster and smaller than Vue 2.',
        isOpen: false,
      },
    ]);

    return { args, items };
  },
  template: `
  <VList hover bordered>
    <template v-for="(item, index) in items">
      <VListItem @click="item.isOpen = !item.isOpen"
        prepend-icon="heroicons:chevron-down"
        :prepend-icon-class="{'transform rotate-180': item.isOpen}"
        class="!font-semibold"        
      >
        {{ item.question }}
      </VListItem>
      <VCollapse :show="item.isOpen">
        <VListItem class="!text-gray-500">{{ item.answer }}</VListItem>
      </VCollapse>
    </template>
  </VList>
  `,
});

export const Accordion: Story<{}> = (args) => ({
  components: { VCollapse, VList, VListItem, VListItemHeader },
  setup() {
    const opened = ref(0);
    const items = ref([
      {
        question: 'What is Morpheme?',
        answer: 'Morpheme is a collection of UI components for Vue 3.',
      },
      {
        question: 'What is Vue 3?',
        answer: 'Vue 3 is the latest version of the Vue framework.',
      },
      {
        question: 'What is the difference between Vue 2 and Vue 3?',
        answer: 'Vue 3 is faster and smaller than Vue 2.',
      },
    ]);

    return { args, opened, items };
  },
  template: `
  <VList hover bordered>
    <template v-for="(item, index) in items">
      <VListItem @click="opened = index"
        prepend-icon="heroicons:chevron-down"
        :prepend-icon-class="{'transform rotate-180': opened === index}"
        class="!font-semibold"        
      >
        {{ item.question }}
      </VListItem>
      <VCollapse :show="opened === index">
        <VListItem class="!text-gray-500">{{ item.answer }}</VListItem>
      </VCollapse>
    </template>
  </VList>
  `,
});
