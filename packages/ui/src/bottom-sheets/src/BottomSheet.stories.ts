import type { StoryFn } from '@storybook/vue3';
import BottomSheet from './BottomSheet.vue';
import { onMounted, ref } from 'vue';
import Button from '../../button/src';
import BottomSheetHeader from './BottomSheetHeader.vue';
import BottomSheetMenus from './BottomSheetMenus.vue';
import BottomSheetBody from './BottomSheetBody.vue';
import BottomSheetFooter from './BottomSheetFooter.vue';
import BottomSheetHandle from './BottomSheetHandle.vue';

const menus = ref([
  {
    prependIcon: 'ic:baseline-mail-outline',
    text: 'Kirim via email',
    value: 'email',
    onClick() {
      console.log('Email sent!');
    },
  },
  {
    prependIcon: 'ic:round-copy-all',
    text: 'Copy link',
    value: 'copy',
    onClick() {
      navigator.clipboard
        .readText()
        .then((clipText) => 'Link telah disalin ke clipboard: ' + clipText);
    },
  },
  {
    prependIcon: 'ic:round-share',
    text: 'Share',
    value: 'share',
    onClick() {
      console.log('Share');
    },
  },
  {
    prependIcon: 'ic:round-download',
    text: 'Export',
    value: 'export',
    onClick() {
      console.log('Export!');
    },
  },
]);

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  subcomponents: { BottomSheetHeader, BottomSheetMenus },
  args: {},
};

export const Default: StoryFn = (args, { argTypes }) => ({
  components: { BottomSheet, BottomSheetBody, Button },
  setup() {
    const isOpen = ref(false);
    return { args, argTypes, isOpen };
  },
  template: `
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet v-model="isOpen" v-bind="args">
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
    </BottomSheet>
  `,
});

export const WithHeader: StoryFn = (args, { argTypes }) => ({
  components: { BottomSheet, BottomSheetHeader, BottomSheetBody, Button },
  setup() {
    const isOpen = ref(false);
    return { args, argTypes, isOpen };
  },
  template: `
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet v-model="isOpen" v-bind="args">
      <BottomSheetHeader>
        Sheet Title
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
    </BottomSheet>
  `,
});

export const WithHandle: StoryFn = (args, { argTypes }) => ({
  components: {
    BottomSheet,
    BottomSheetHandle,
    BottomSheetHeader,
    BottomSheetBody,
    Button,
  },
  setup() {
    const isOpen = ref(false);
    return { args, argTypes, isOpen };
  },
  template: `
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet v-model="isOpen" v-bind="args">
      <BottomSheetHandle />
      <BottomSheetHeader>
        Sheet Title
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
    </BottomSheet>
  `,
});

export const WithActions: StoryFn = (args, { argTypes }) => ({
  components: {
    BottomSheet,
    BottomSheetHeader,
    BottomSheetFooter,
    BottomSheetBody,
    Button,
  },
  setup() {
    const isOpen = ref(false);
    return { args, argTypes, isOpen };
  },
  template: `
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet v-model="isOpen" title="Sheet Title" v-bind="args" v-slot="{close}">
      <BottomSheetHeader>
        Sheet Title
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>  
      <BottomSheetFooter>
        <Button @click="close">Close</Button>
      </BottomSheetFooter>
    </BottomSheet>
  `,
});

export const Menus: StoryFn = (args, { argTypes }) => ({
  components: { BottomSheet, BottomSheetMenus, Button },
  setup() {
    const isOpen = ref(false);

    const selected = ref([]);

    return { args, argTypes, isOpen, menus, selected };
  },
  template: `
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet
      v-model="isOpen"
      title="Menu"
      v-bind="args.sheet"
    >
      <BottomSheetMenus
        v-model="selected"
        :items="menus" 
        v-bind="args.menus"
        hover
      />
      <template #footer="{close}">
        <template v-if="args.withActions">
          <Button @click="close">Done</Button>
          <Button @click="selected = []">Clear</Button>
        </template>
      </template>
    </BottomSheet>
    <pre v-if="args.selectable">Selected: {{ selected }}</pre>
  `,
});

export const SelectableMenus = Menus.bind({});
SelectableMenus.args = {
  menus: {
    selectable: true,
  },
};

export const MenusMultipleSelect = Menus.bind({});
MenusMultipleSelect.args = {
  menus: {
    selectable: true,
    multiple: true,
  },
};

export const MenusWithActions = Menus.bind({});
MenusWithActions.args = {
  menus: {
    selectable: true,
    multiple: true,
  },
  withActions: true,
};

export const MaxWidth = Menus.bind({});
MaxWidth.args = {
  sheet: {
    maxWidth: '500px',
  },
};

export const HideOverlay = Menus.bind({});
HideOverlay.args = {
  sheet: {
    overlay: false,
  },
};

export const Persistent = Menus.bind({});
Persistent.args = {
  sheet: {
    persistent: true,
  },
};

export const DisableHideOnOverlayClick = Menus.bind({});
DisableHideOnOverlayClick.args = {
  sheet: {
    hideOnOverlayClick: false,
  },
};

export const MultipleInstance: StoryFn = (args, { argTypes }) => ({
  components: { BottomSheet, BottomSheetHeader, BottomSheetBody, Button },
  setup() {
    const sheet1 = ref(false);
    const sheet2 = ref(false);
    return { args, argTypes, sheet1, sheet2 };
  },
  template: `
    <Button @click="sheet1 = !sheet1">Open BottomSheet 1</Button>
    <Button @click="sheet2 = !sheet2">Open BottomSheet 2</Button>
    
    <BottomSheet v-model="sheet1">
      <BottomSheetHeader>
        Sheet 1
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
    </BottomSheet>

    <BottomSheet v-model="sheet2">
      <BottomSheetHeader>
        Sheet 2
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
    </BottomSheet>
  `,
});

export const NestedSheet: StoryFn = (args, { argTypes }) => ({
  components: {
    BottomSheet,
    BottomSheetHeader,
    BottomSheetBody,
    BottomSheetFooter,
    Button,
  },
  setup() {
    const sheet1 = ref(false);
    const sheet2 = ref(false);
    return { args, argTypes, sheet1, sheet2 };
  },
  template: `
    <Button @click="sheet1 = !sheet1">Open BottomSheet 1</Button>
    
    <BottomSheet v-model="sheet1">
      <BottomSheetHeader>
        Sheet 1
      </BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
      <BottomSheetFooter>
        <Button @click="sheet2 = !sheet2">Open BottomSheet 2</Button>
      </BottomSheetFooter>

      <BottomSheet v-model="sheet2">
        <BottomSheetHeader>
          Sheet 2
        </BottomSheetHeader>
        <BottomSheetBody>
          A quick brown fox leaps over the lazy dog.
        </BottomSheetBody>
      </BottomSheet>
    </BottomSheet>
  `,
});

export const DarkMode: StoryFn = (args, { argTypes }) => ({
  components: {
    BottomSheet,
    BottomSheetHandle,
    BottomSheetBody,
    BottomSheetHeader,
    Button,
    BottomSheetMenus,
  },
  setup() {
    const isOpen = ref(false);
    onMounted(() => {
      document.documentElement.classList.add('dark');
    });
    const selected = ref();
    return { args, argTypes, isOpen, menus, selected };
  },
  template: `
  <div class="dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <Button @click="isOpen = !isOpen">Open BottomSheet</Button>
    <BottomSheet v-model="isOpen" v-bind="args">
      <BottomSheetHandle />
      <BottomSheetHeader>Sheet Title</BottomSheetHeader>
      <BottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </BottomSheetBody>
      <BottomSheetMenus
        v-model="selected"
        :items="menus"
        selectable
        hover
      />
    </BottomSheet>
  </div>
  `,
});
