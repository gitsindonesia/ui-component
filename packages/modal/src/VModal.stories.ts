import {VCard} from '@morpheme/card';
import {Meta, Story} from '@storybook/vue3';
import VModal from './VModal.vue';
import {onUnmounted, ref} from 'vue';
import {VBtn} from '@morpheme/button';
import {VModalEvent} from './types';
import Modal from './Modal.vue';
import ModalHeader from './ModalHeader.vue';
import ModalTitle from './ModalTitle.vue';
import ModalBody from './ModalBody.vue';
import ModalFooter from './ModalFooter.vue';

export default {
  title: 'Components/Modal',
  component: VModal,
  argTypes: {},
  args: {
    modelValue: true,
    title: 'Modal Header',
    onConfirm: (e: VModalEvent) => {
      alert('Confirmed!');
      e.close();
    },
  },
  subcomponents: {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
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
<v-modal v-bind="args" v-model="isOpen">
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
  `,
});

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

export const CustomClass: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <v-modal
      v-bind="args"
      v-model="isOpen"
      modal-class="!max-w-2xl"  
    >
      <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </v-modal>  
  `,
});

export const CustomWidth: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <v-modal
      v-bind="args"
      v-model="isOpen"
      width="700px"
      max-width="100%"
    >
      <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </v-modal>  
  `,
});

export const Customization: Story = (args) => ({
  components: {
    VModal,
    VBtn,
  },
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <div class="bg-gray-800 text-white h-screen p-6 space-y-5">
      <p class="mb-5" v-for="i in 5" :key="i">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <v-modal
        v-bind="args"
        v-model="isOpen"
        :style="{
          '--v-modal-bg-color': 'rgb(255, 255, 255, 0.3)',
          '--v-modal-shadow': 'none',
        }"
        modal-class="backdrop-blur-sm"
        title-class="!text-white"
        body-class="!text-white"
      >
        <template #activator="{open}">
          <v-btn @click="open">Click Me</v-btn>
        </template>
        Hello World
      </v-modal>
    </div>  
  `,
});

export const Tailwind: Story = (args) => ({
  components: {VModal, VCard},
  setup() {
    return {args};
  },
  template: `
  <VModal
    model-value
    title="Modal Title"
    class="
      [--v-modal-bg-color:var(--color-primary-600)]
      [--v-modal-title-color:var(--color-yellow-300)]
      [--v-modal-text-color:var(--color-white)]
      [--btn-text-color:var(--color-white)]
    "
  >
    Hello Tailwind!
  </VModal>
  `,
});

export const DarkMode: Story = (args) => ({
  components: {VModal, VCard},
  setup() {
    document.documentElement.classList.add(
      'dark',
      'dark:bg-gray-true-900',
      'dark:text-gray-true-200',
    );
    onUnmounted(() => {
      document.documentElement.classList.remove(
        'dark',
        'dark:bg-gray-true-900',
        'dark:text-gray-true-200',
      );
    });
    return {args};
  },
  template: `
  <div class="h-screen p-6">
    <VModal v-bind='args'>
      <VCard title="Card Title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </VCard>
    </VModal>
  </div>
  `,
});

export const Declarative: Story<typeof Modal> = (args) => ({
  components: {
    Modal,
    VBtn,
    ModalHeader,
    ModalTitle,
    ModalFooter,
    ModalBody,
  },
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
  <VBtn @click="isOpen = true">Open Modal</VBtn>

  <Modal
    v-bind="args"
    v-model="isOpen"
  >
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <VBtn
        @click="isOpen = false"
        prefix-icon="ri:close-line"
        size="sm"
        text
        icon
        fab
      />
    </ModalHeader>
    <ModalBody>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </ModalBody>
    <ModalFooter>
      <VBtn @click="isOpen = false">Close</VBtn>
      <VBtn @click="isOpen = false" color="primary">Okay</VBtn>
    </ModalFooter>
  </Modal>
  `,
});
