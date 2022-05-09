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
    modelValue: false,
    title: '',
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
  // Components used in your story `template` are defined in the `components` object
  components: {
    VModal,
    VBtn,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
<v-modal v-model="isOpen" v-bind="args">
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
<v-modal v-model="isOpen">
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
<v-modal v-model="isOpen" confirm>
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
  HideHeader: true,
};
HideHeader.parameters = {
  docs: {
    source: {
      code: `
<v-modal v-model="isOpen" hide-header>
  <template #activator="{open}">
    <v-btn @click="open">Click Me</v-btn>
  </template>
  Hello World
</v-modal>
      `,
    },
  },
};
