import type {Story} from '@storybook/vue3';
import {AlertGroup, Alert} from './alert';

export default {
  title: 'Primitives/Alert',
  component: Alert,
};

export const Default: Story = (args) => ({
  components: {Alert},
  setup() {
    return {args};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
    >
      This is the title

      <button @click="hide">
        Close
      </button>
    </Alert>
  `,
});

export const Transition: Story = (args) => ({
  components: {Alert},
  setup() {
    return {args};
  },
  template: `
    <transition name="fade">
      <Alert v-bind="args" v-slot="{hide}">
        This is the title

        <button @click="hide">
          Close
        </button>
      </Alert>
    </transition>
  `,
});

export const CustomRender: Story = (args) => ({
  components: {Alert},
  setup() {
    return {args};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
      as="p"
    >
      This is the title

      <button @click="hide">
        Close
      </button>
    </Alert>
  `,
});

export const Styled: Story = (args) => ({
  components: {Alert},
  setup() {
    return {args};
  },
  template: `
    <transition name="fade">
      <Alert
        v-bind="args"
        v-slot="{hide}"
        class="bg-red-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
      >
        This is the title

        <button @click="hide">
          Close
        </button>
      </Alert>
    </transition>
  `,
});
