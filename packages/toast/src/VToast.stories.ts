import VToast from './VToast.vue';
import VBtn from '@gits-id/button';
import {themeColors} from '@gits-id/utils/colors';
import {Story} from '@storybook/vue3';
import {ref} from 'vue';

export default {
  title: 'Components/Toast',
  component: VToast,
  argTypes: {
    color: {
      type: 'select',
      options: ['black', ...themeColors],
    },
    type: {
      type: 'select',
      options: ['success', 'error', 'warning', 'question'],
    },
    placement: {
      type: 'select',
      options: [
        'center',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
  args: {
    modelValue: false,
    title: '',
    color: '',
    confirm: false,
    confirmColor: 'primary',
    confirmProps: {},
    confirmText: 'Confirm',
    closeText: 'Close',
    closeProps: {},
    headerClass: '',
    bodyClass: '',
    actionsClass: '',
    placement: 'bottom',
    actions: false,
    timeout: 0,
    message: 'Lorem ipsum dolor',
    type: '',
    hideXIcon: false,
    overlay: false,
  },
};

const Template: Story<{}> = (args) => ({
  components: {
    VBtn,
    VToast,
  },
  setup() {
    const isOpen = ref(false);
    return {args, isOpen};
  },
  template: `
    <v-btn @click="isOpen = true">Open Toast</v-btn>
    <v-toast v-bind="args" v-model="isOpen">{{ args.message }}</v-toast>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Icon = Template.bind({});
Icon.args = {
  type: 'success',
};

export const Title = Template.bind({});
Title.args = {
  title: 'Notification',
};

export const Actions = Template.bind({});
Actions.args = {
  title: 'Confirmation',
  actions: true,
  confirm: true,
};

export const Custom = Template.bind({});
Custom.args = {
  title: 'Confirmation',
  type: 'question',
  actions: true,
  confirm: true,
  confirmColor: 'error',
  confirmText: 'Delete',
  closeText: 'Cancel',
  placement: 'center',
  hideXIcon: true,
  overlay: true,
  onConfirm: (e: any) => {
    alert('Confirmed!');
    e.close();
  },
};
