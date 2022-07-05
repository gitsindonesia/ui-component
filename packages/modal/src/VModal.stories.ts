import {Meta, Story} from '@storybook/vue3';
import VModal from './VModal.vue';
import vueRouter from 'storybook-vue3-router';
import {ref} from 'vue';
import VBtn from '@gits-id/button';
import {VModalEvent} from './types';

export default {
  title: 'Components/Modal',
  component: VModal,
  argTypes: {},
  args: {
    modelValue: true,
    title: 'Modal Header',
    confirm: false,
    confirmColor: 'primary',
    confirmProps: {},
    confirmText: 'Confirm',
    closeText: 'Close',
    closeProps: {},
    headerClass: '',
    bodyClass: '',
    footerClass: '',
    modalClass: '',
    boolean: false,
    hideHeader: false,
    hideFooter: false,
    onConfirm: (e: VModalEvent) => {
      alert('Confirmed!');
      e.close();
    },
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
<v-modal v-bind="args" v-model="isOpen" v-bind="args">
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>  
  `,
});

Template.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-bind="args" v-model="isOpen">
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};

export const Confirm = Template.bind({});
Confirm.args = {
  confirm: true,
};
Confirm.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-bind="args" v-model="isOpen" confirm>
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};

export const HideHeader = Template.bind({});
HideHeader.args = {
  hideHeader: true,
};
HideHeader.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-bind="args" v-model="isOpen" hide-header>
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};

export const HideFooter = Template.bind({});
HideFooter.args = {
  hideFooter: true,
};
HideFooter.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-bind="args" v-model="isOpen" hide-footer>
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};

export const HideXButton = Template.bind({});
HideXButton.args = {
  hideXButton: true,
};
HideXButton.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-bind="args" v-model="isOpen" hide-x-button>
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};

export const Fullscreen: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
  <v-modal v-bind="args" v-model="isOpen" fullscreen>
  <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </v-modal>
  `,
});

export const Centered: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(false);
    const loading = ref(false);
    const onConfirm = async (e) => {
      loading.value = true;
      await deleteItem();
      loading.value = false;
      e.close();
    };
    const deleteItem = () => {
      return new Promise((resolve: (value?: any) => void) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    };
    return {args, isOpen, onConfirm, loading};
  },
  template: `
    <v-modal
      v-bind="args"
      v-model="isOpen"
      title="Delete Item"
      confirm
      confirm-text="Delete"
      confirm-color="error"
      :loading="loading"
      centered
      footer-class="flex-row-reverse"
      close-text="Cancel"
      @confirm="onConfirm"
    >
      <template #activator="{open}">
        <v-btn @click="open" color="error">Delete</v-btn>
      </template>
      <p>Are you sure want to delete this item?</p>
    </v-modal>
  `,
});

export const Loading: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(true);
    const loading = ref(true);
    return {args, isOpen, loading};
  },
  template: `
    <v-modal
      v-bind="args"
      v-model="isOpen"
      :loading="loading"
      confirm
    >
      <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </v-modal>  
  `,
});

export const Persistent: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <v-modal v-bind="args" v-model="isOpen" persistent>
      <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </v-modal>  
  `,
});
