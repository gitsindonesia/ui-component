import type {Story} from '@storybook/vue3';
import {Alert} from './alert';
import {ref} from 'vue';

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
      This alert is rendered as a paragraph

      <button @click="hide">
        Close
      </button>
    </Alert>

    <Alert
      v-bind="args"
      v-slot="{hide}"
      as="template"
    >
      <div role="alert">
        This alert is rendered as a template
      </div>

      <button @click="hide">
        Close
      </button>
    </Alert>
  `,
});

export const VModel: Story = (args) => ({
  components: {Alert},
  setup() {
    const isOpen = ref(true);
    return {args, isOpen};
  },
  template: `
    <Alert
      v-bind="args"
      v-slot="{hide}"
      v-model="isOpen"
    >
      This alert is rendered as a paragraph

      <button @click="hide">
        Close
      </button>
      <button @click="isOpen = false">
        Close via model
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
