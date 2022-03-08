import MyToast from './VToast.vue';
import VBtn from '@gits-id/button';
import {themeColors} from '@gits-id/utils/colors';
import {Story} from '@storybook/vue3';

export default {
  title: 'Components/Toast',
  component: MyToast,
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
    modelValue: true,
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
  // Components used in your story `template` are defined in the `components` object
  components: {
    'v-btn': VBtn,
    'my-component': MyToast,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <my-component v-bind="args">{{ args.message }}</my-component>
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
};
